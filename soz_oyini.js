// soz_oyini.js — "🔤 Tarjima" va "🧩 So‘z tuzish" o‘yinlari
// bot.js bilan bir papkaga qo‘ying.

// [inglizcha, [qabul qilinadigan o‘zbekcha javoblar]]
const vocab = [
    ['book', ['kitob']],
    ['car', ['mashina', 'avtomobil']],
    ['student', ['talaba', "o'quvchi"]],
    ['teacher', ["o'qituvchi", 'ustoz']],
    ['doctor', ['shifokor', 'doktor', 'vrach']],
    ['friend', ["do'st"]],
    ['phone', ['telefon']],
    ['house', ['uy']],
    ['cat', ['mushuk']],
    ['dog', ['it']],
    ['bag', ['sumka', 'xalta']],
    ['table', ['stol']],
    ['chair', ['stul']],
    ['school', ['maktab']],
    ['apple', ['olma']],
    ['egg', ['tuxum']],
    ['orange', ['apelsin']],
    ['pen', ['ruchka']],
    ['mother', ['ona', 'onajon']],
    ['father', ['ota', 'dada']],
    ['sister', ['opa', 'singil']],
    ['brother', ['aka', 'uka']],
    ['boy', ['bola', "o'g'il bola"]],
    ['girl', ['qiz', 'qiz bola']],
    ['city', ['shahar']],
    ['country', ['davlat', 'mamlakat']],
    ['water', ['suv']],
    ['bread', ['non']],
    ['milk', ['sut']],
    ['door', ['eshik']],
    ['window', ['deraza']],
    ['room', ['xona']],
    ['kitchen', ['oshxona']],
    ['garden', ["bog'"]],
    ['tree', ['daraxt']],
    ['flower', ['gul']],
    ['red', ['qizil']],
    ['blue', ["ko'k"]],
    ['green', ['yashil']],
    ['black', ['qora']],
    ['white', ['oq']],
    ['big', ['katta']],
    ['small', ['kichik']],
    ['new', ['yangi']],
    ['old', ['eski', 'qari']],
    ['happy', ['xursand', 'baxtli']],
    ['sad', ['xafa', "g'amgin"]],
    ['good', ['yaxshi']],
    ['bad', ['yomon']],
    ['hot', ['issiq']],
    ['cold', ['sovuq']],
    ['day', ['kun']],
    ['night', ['tun']],
    ['morning', ['ertalab', 'tong']],
    ['name', ['ism']],
    ['hand', ["qo'l"]],
    ['eye', ["ko'z"]],
    ['head', ['bosh']],
    ['tall', ['baland']],
    ['hungry', ['och']],
    ['tired', ['charchagan']],
    ['late', ['kech', 'kechikkan']],
    ['open', ['ochiq']]
];

const MENU_TEXTS = [
    '📚 Mavzular', '📝 Test', '⚡ Tezkor test', '📊 Natijam',
    '❌ Xatolarim', '🏆 Reyting', '🔙 Orqaga', '🏠 Bosh menyu'
];

// Apostrof turlarini bir xil qilish, kichik harfga o‘tkazish
const norm = s => s.toLowerCase()
    .replace(/[’‘ʻʼ`´]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

// Ikki so‘z orasidagi farq (1 ta xato harfni kechirish uchun)
function lev(a, b) {
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
            );
        }
    }
    return dp[a.length][b.length];
}

module.exports = function register(bot, { Markup, shuffle, mainMenu, getTopics }) {

    const games = {};

    function scramble(word) {
        let s = word;
        for (let i = 0; i < 30 && s === word; i++) {
            s = shuffle(word.split('')).join('');
        }
        return s;
    }

    function startMenu(ctx, mode) {
        const title = mode === 'translate'
            ? '🔤 TARJIMA\n\nBot inglizcha so‘z yozadi, siz o‘zbekchaga tarjima qilib yozasiz.'
            : '🧩 SO‘Z TUZISH\n\nBot aralash harflarni beradi, siz ulardan inglizcha so‘z tuzib yozasiz.';
        ctx.reply(
            `${title}\n\nNechta so‘z?`,
            Markup.inlineKeyboard([
                [
                    Markup.button.callback('▶️ 10 ta', `g_start:${mode}:10`),
                    Markup.button.callback('▶️ 20 ta', `g_start:${mode}:20`)
                ],
                [Markup.button.callback('🏠 Menyu', 'menu')]
            ])
        );
    }

    async function startGame(ctx, mode, amount) {
        // So‘z tuzish uchun kamida 4 harfli so‘zlar olinadi
        const pool = mode === 'build' ? vocab.filter(v => v[0].length >= 4) : vocab;
        games[ctx.from.id] = {
            mode,
            amount,
            list: shuffle(pool).slice(0, amount),
            index: 0,
            correct: 0,
            wrong: [],
            prefix: '',
            msgId: null
        };
        await sendWord(ctx);
    }

    async function sendWord(ctx) {
        const g = games[ctx.from.id];
        if (!g) return;

        if (g.index >= g.list.length) {
            return finishGame(ctx);
        }

        const [en, uz] = g.list[g.index];
        const n = `${g.index + 1}/${g.list.length}`;

        const head = g.mode === 'translate'
            ? `🔤 TARJIMA ${n}\n\n🇬🇧 ${en.toUpperCase()}\n\n✍️ O‘zbekchaga tarjima qilib yozing:`
            : `🧩 SO‘Z TUZISH ${n}\n\n🔀 ${scramble(en).toUpperCase().split('').join(' ')}\n🇺🇿 ${uz[0]}\n\n✍️ Harflardan inglizcha so‘z tuzib yozing:`;

        const text = g.prefix ? `${g.prefix}\n\n➖➖➖➖➖\n\n${head}` : head;
        g.prefix = '';

        const m = await ctx.reply(
            text,
            Markup.inlineKeyboard([[
                Markup.button.callback('⏭ O‘tkazish', 'g_skip'),
                Markup.button.callback('🔙 Orqaga', 'g_exit')
            ]])
        );
        g.msgId = m.message_id;
    }

    function clearButtons(ctx, g) {
        if (!g || !g.msgId) return;
        ctx.telegram
            .editMessageReplyMarkup(ctx.chat.id, g.msgId, undefined, { inline_keyboard: [] })
            .catch(() => {});
    }

    function finishGame(ctx) {
        const g = games[ctx.from.id];
        const total = g.list.length;
        const percent = Math.round((g.correct / total) * 100);

        let text = `${g.prefix ? g.prefix + '\n\n➖➖➖➖➖\n\n' : ''}🏁 O‘YIN TUGADI!

✅ To‘g‘ri: ${g.correct}
❌ Xato: ${total - g.correct}
📈 Foiz: ${percent}%`;

        if (g.wrong.length) {
            text += '\n\n📌 Xatolar:\n';
            g.wrong.slice(0, 10).forEach(w => {
                text += `• ${w.en} — ${w.uz.join(' / ')}\n`;
            });
        }

        ctx.reply(
            text,
            Markup.inlineKeyboard([
                [Markup.button.callback('🔁 Yana o‘ynash', `g_start:${g.mode}:${g.amount}`)],
                [Markup.button.callback('🏠 Menyu', 'menu')]
            ])
        );

        delete games[ctx.from.id];
    }

    // ---------- Menyu tugmalari ----------

    bot.hears('🔤 Tarjima', ctx => startMenu(ctx, 'translate'));
    bot.hears('🧩 So‘z tuzish', ctx => startMenu(ctx, 'build'));

    // ---------- Inline tugmalar ----------

    bot.action(/^g_start:(translate|build):(\d+)$/, async ctx => {
        await ctx.answerCbQuery().catch(() => {});
        await startGame(ctx, ctx.match[1], parseInt(ctx.match[2], 10));
    });

    bot.action('g_skip', async ctx => {
        await ctx.answerCbQuery().catch(() => {});
        const g = games[ctx.from.id];
        if (!g) return;
        clearButtons(ctx, g);

        const [en, uz] = g.list[g.index];
        g.wrong.push({ en, uz });
        g.prefix = `⏭ O‘tkazildi\n✅ ${en} — ${uz.join(' / ')}`;
        g.index++;
        await sendWord(ctx);
    });

    bot.action('g_exit', async ctx => {
        await ctx.answerCbQuery().catch(() => {});
        const g = games[ctx.from.id];
        clearButtons(ctx, g);
        delete games[ctx.from.id];
        ctx.reply('⏹ O‘yin to‘xtatildi.\n\n🏠 Asosiy menyu', mainMenu());
    });

    // ---------- Foydalanuvchi yozgan javob ----------
    // O‘yin bo‘lmasa yoki menyu tugmasi bosilsa — keyingi handlerga o‘tkazadi.

    bot.on('text', async (ctx, next) => {
        const text = ctx.message.text;
        const topics = getTopics();

        if (text.startsWith('/') || MENU_TEXTS.includes(text) || topics[text]) {
            delete games[ctx.from.id];
            return next();
        }

        const g = games[ctx.from.id];
        if (!g) return next();

        clearButtons(ctx, g);

        const [en, uz] = g.list[g.index];
        const answer = norm(text);
        let ok;

        if (g.mode === 'translate') {
            ok = uz.some(u => {
                const v = norm(u);
                return answer === v || (v.length >= 5 && lev(answer, v) <= 1);
            });
        } else {
            ok = answer === en;
        }

        if (ok) {
            g.correct++;
            g.prefix = `✅ To‘g‘ri!  ${en} — ${uz.join(' / ')}`;
        } else {
            g.wrong.push({ en, uz });
            g.prefix = `❌ Xato: ${text}\n✅ To‘g‘ri: ${en} — ${uz.join(' / ')}`;
        }

        g.index++;
        await sendWord(ctx);
    });
};
