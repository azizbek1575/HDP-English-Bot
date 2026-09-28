const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8911434352:AAEYcOnr20dzGn6AfxOKxNpPgpCGDbqyJls');

// Savol yasash uchun yordamchi: matn, o'zbekcha tarjima, variantlar, to'g'ri javob
const Q = (text, uz, options, answer) => [
    uz ? `${text}\n🇺🇿 ${uz}` : text,
    options,
    answer
];

// ==================== MAVZULAR ====================

const topics = {

    'Alphabet': {
        info: `🔤 ALPHABET — INGLIZ ALIFBOSI

Ingliz alifbosida 26 ta harf bor.

A — ey
B — bi
C — si
D — di
E — i
F — ef
G — ji
H — eych
I — ay
J — jey
K — key
L — el
M — em
N — en
O — ou
P — pi
Q — kyu
R — ar
S — es
T — ti
U — yu
V — vi
W — dablyu
X — eks
Y — way
Z — zi

📌 Misollar:

A is a letter.
A — harf.

B is a letter.
B — harf.`,

        questions: [
            Q('Ingliz alifbosida nechta harf bor?', null, ['24','25','26','27'], '26'),
            Q('A harfi inglizcha qanday o‘qiladi?', null, ['bi','ey','si','di'], 'ey'),
            Q('B harfi inglizcha qanday o‘qiladi?', null, ['bi','ey','i','ef'], 'bi'),
            Q('C harfi inglizcha qanday o‘qiladi?', null, ['si','key','ji','ar'], 'si'),
            Q('D harfi inglizcha qanday o‘qiladi?', null, ['di','bi','i','ef'], 'di'),
            Q('E harfi inglizcha qanday o‘qiladi?', null, ['ey','i','ay','ou'], 'i'),
            Q('F harfi inglizcha qanday o‘qiladi?', null, ['ef','i','ey','ar'], 'ef'),
            Q('G harfi inglizcha qanday o‘qiladi?', null, ['ji','gi','jey','di'], 'ji'),
            Q('H harfi inglizcha qanday o‘qiladi?', null, ['eych','ey','ef','ay'], 'eych'),
            Q('I harfi inglizcha qanday o‘qiladi?', null, ['i','ay','ey','bi'], 'ay'),
            Q('J harfi inglizcha qanday o‘qiladi?', null, ['ji','jey','key','si'], 'jey'),
            Q('K harfi inglizcha qanday o‘qiladi?', null, ['key','ki','ka','ke'], 'key'),
            Q('L harfi inglizcha qanday o‘qiladi?', null, ['el','ey','i','ar'], 'el'),
            Q('M harfi inglizcha qanday o‘qiladi?', null, ['em','en','el','ef'], 'em'),
            Q('N harfi inglizcha qanday o‘qiladi?', null, ['en','em','el','i'], 'en'),
            Q('O harfi inglizcha qanday o‘qiladi?', null, ['ou','u','o','ay'], 'ou'),
            Q('P harfi inglizcha qanday o‘qiladi?', null, ['pi','bi','si','di'], 'pi'),
            Q('Q harfi inglizcha qanday o‘qiladi?', null, ['kyu','ku','ki','ke'], 'kyu'),
            Q('R harfi inglizcha qanday o‘qiladi?', null, ['ar','er','ir','or'], 'ar'),
            Q('S harfi inglizcha qanday o‘qiladi?', null, ['es','is','si','ef'], 'es'),
            Q('T harfi inglizcha qanday o‘qiladi?', null, ['ti','di','pi','si'], 'ti'),
            Q('U harfi inglizcha qanday o‘qiladi?', null, ['yu','u','ou','vi'], 'yu'),
            Q('V harfi inglizcha qanday o‘qiladi?', null, ['vi','bi','dablyu','vey'], 'vi'),
            Q('W harfi inglizcha qanday o‘qiladi?', null, ['dablyu','vi','yu','way'], 'dablyu'),
            Q('X harfi inglizcha qanday o‘qiladi?', null, ['eks','iks','ks','es'], 'eks'),
            Q('Y harfi inglizcha qanday o‘qiladi?', null, ['way','yu','ay','vi'], 'way'),
            Q('Z harfi inglizcha qanday o‘qiladi?', null, ['zi','zed','ji','es'], 'zi')
        ]
    },

    'Subject Pronouns': {
        info: `👤 SUBJECT PRONOUNS — KISHILIK OLMOSHLARI

I — men
You — sen / siz
He — u (erkak)
She — u (ayol)
It — u (narsa / hayvon)
We — biz
They — ular

📌 Misollar:

I am a student.
Men o‘quvchiman.

He is a boy.
U bola.

She is a teacher.
U o‘qituvchi.

We are friends.
Biz do‘stmiz.

They are students.
Ular o‘quvchilar.`,

        questions: [
            Q('“Men” so‘zining inglizcha olmoshi qaysi?', null, ['I','He','We','They'], 'I'),
            Q('“Sen / siz” so‘zining inglizcha olmoshi qaysi?', null, ['You','We','They','It'], 'You'),
            Q('Erkak kishi haqida “u” deyish uchun qaysi olmosh ishlatiladi?', null, ['She','He','It','They'], 'He'),
            Q('Ayol kishi haqida “u” deyish uchun qaysi olmosh ishlatiladi?', null, ['He','She','We','I'], 'She'),
            Q('Narsa yoki hayvon haqida “u” deyish uchun qaysi olmosh ishlatiladi?', null, ['It','He','They','You'], 'It'),
            Q('“Biz” so‘zining inglizcha olmoshi qaysi?', null, ['They','We','You','I'], 'We'),
            Q('“Ular” so‘zining inglizcha olmoshi qaysi?', null, ['We','They','He','It'], 'They'),
            Q('I olmoshi o‘zbekchada nima degani?', null, ['men','biz','ular','u'], 'men'),
            Q('We olmoshi o‘zbekchada nima degani?', null, ['men','biz','ular','siz'], 'biz'),
            Q('They olmoshi o‘zbekchada nima degani?', null, ['ular','biz','u','men'], 'ular'),
            Q('___ am a student.', 'Men o‘quvchiman.', ['I','He','She','They'], 'I'),
            Q('___ is a teacher.', 'U (ayol) o‘qituvchi.', ['She','He','We','I'], 'She'),
            Q('___ are friends.', 'Biz do‘stmiz.', ['We','He','She','It'], 'We')
        ]
    },

    'To Be': {
        info: `🔵 TO BE — AM / IS / ARE

To Be hozirgi zamonda uch xil ko‘rinishda ishlatiladi:

I → AM
He / She / It → IS
You / We / They → ARE

📌 Misollar:

I am a student.
Men o‘quvchiman.

He is a doctor.
U shifokor.

She is a teacher.
U o‘qituvchi.

We are friends.
Biz do‘stmiz.

They are students.
Ular o‘quvchilar.

⚠️ Esda tuting:

I → AM
He / She / It → IS
You / We / They → ARE`,

        questions: [
            Q('I ___ a student.', 'Men o‘quvchiman.', ['am','is','are','be'], 'am'),
            Q('He ___ a doctor.', 'U (erkak) shifokor.', ['am','is','are','be'], 'is'),
            Q('She ___ a teacher.', 'U (ayol) o‘qituvchi.', ['am','is','are','be'], 'is'),
            Q('It ___ a cat.', 'Bu mushuk.', ['am','is','are','be'], 'is'),
            Q('We ___ friends.', 'Biz do‘stmiz.', ['am','is','are','be'], 'are'),
            Q('They ___ students.', 'Ular o‘quvchilar.', ['am','is','are','be'], 'are'),
            Q('You ___ my friend.', 'Sen mening do‘stimsan.', ['am','is','are','be'], 'are'),
            Q('I ___ from Uzbekistan.', 'Men O‘zbekistonlikman.', ['am','is','are','be'], 'am'),
            Q('He ___ a boy.', 'U bola.', ['am','is','are','be'], 'is'),
            Q('We ___ happy.', 'Biz xursandmiz.', ['am','is','are','be'], 'are')
        ]
    },

    'Positive': {
        info: `✅ POSITIVE — DARAK GAP

Darak gap tasdiq ma’nosidagi gap.

Tuzilishi:

Subject + am/is/are + ...

📌 Misollar:

I am a student.
Men o‘quvchiman.

She is a teacher.
U o‘qituvchi.

They are friends.
Ular do‘stlar.

Darak gapda odatda NOT ishlatilmaydi.`,

        questions: [
            Q('I ___ a student.', 'Men o‘quvchiman.', ['am','is','are','not'], 'am'),
            Q('She ___ a teacher.', 'U (ayol) o‘qituvchi.', ['am','is','are','not'], 'is'),
            Q('They ___ friends.', 'Ular do‘stlar.', ['am','is','are','not'], 'are'),
            Q('He ___ a doctor.', 'U (erkak) shifokor.', ['am','is','are','not'], 'is'),
            Q('We ___ students.', 'Biz o‘quvchilarmiz.', ['am','is','are','not'], 'are'),
            Q('You ___ my friend.', 'Sen mening do‘stimsan.', ['am','is','are','not'], 'are'),
            Q('It ___ a cat.', 'Bu mushuk.', ['am','is','are','not'], 'is'),
            Q('I ___ from London.', 'Men Londondanman.', ['am','is','are','not'], 'am')
        ]
    },

    'Negative': {
        info: `❌ NEGATIVE — INKOR GAP

Inkor gapda NOT ishlatiladi.

I am not
He is not
She is not
It is not
You are not
We are not
They are not

📌 Misollar:

I am not a teacher.
Men o‘qituvchi emasman.

He is not a doctor.
U shifokor emas.

They are not students.
Ular o‘quvchi emas.`,

        questions: [
            Q('I am ___ a student.', 'Men o‘quvchi emasman.', ['not','no','is','are'], 'not'),
            Q('He is ___ a doctor.', 'U (erkak) shifokor emas.', ['not','no','am','are'], 'not'),
            Q('They are ___ friends.', 'Ular do‘st emas.', ['not','no','is','am'], 'not'),
            Q('She is ___ a teacher.', 'U (ayol) o‘qituvchi emas.', ['not','no','are','am'], 'not'),
            Q('We are ___ students.', 'Biz o‘quvchi emasmiz.', ['not','no','is','am'], 'not'),
            Q('It is ___ a cat.', 'Bu mushuk emas.', ['not','no','are','am'], 'not'),
            Q('You are ___ a doctor.', 'Sen shifokor emassan.', ['not','no','is','am'], 'not'),
            Q('I am ___ American.', 'Men amerikalik emasman.', ['not','no','is','are'], 'not')
        ]
    },

    'Question': {
        info: `❓ QUESTION — SO‘ROQ GAP

So‘roq gapda AM / IS / ARE gap boshiga chiqadi.

Am + I ...?
Is + he/she/it ...?
Are + you/we/they ...?

📌 Misollar:

Are you a student?
Sen o‘quvchimisan?

Is he a doctor?
U shifokormi?

Am I late?
Men kechikdimmi?`,

        questions: [
            Q('___ you a student?', 'Sen o‘quvchimisan?', ['Am','Is','Are','Be'], 'Are'),
            Q('___ he a doctor?', 'U (erkak) shifokormi?', ['Am','Is','Are','Be'], 'Is'),
            Q('___ I a student?', 'Men o‘quvchimanmi?', ['Am','Is','Are','Be'], 'Am'),
            Q('___ she a teacher?', 'U (ayol) o‘qituvchimi?', ['Am','Is','Are','Be'], 'Is'),
            Q('___ they students?', 'Ular o‘quvchilarmi?', ['Am','Is','Are','Be'], 'Are'),
            Q('___ we friends?', 'Biz do‘stmizmi?', ['Am','Is','Are','Be'], 'Are'),
            Q('___ it a cat?', 'Bu mushukmi?', ['Am','Is','Are','Be'], 'Is'),
            Q('___ you from Uzbekistan?', 'Sen O‘zbekistonlikmisan?', ['Am','Is','Are','Be'], 'Are')
        ]
    },

    'A / An': {
        info: `🅰️ A / AN

A — undosh tovush oldidan ishlatiladi.

An — unli tovush oldidan ishlatiladi.

📌 Misollar:

a book
a car
a student

an apple
an egg
an orange
an hour

⚠️ Eng muhimi — harf emas, TOVUSHGA qaraymiz.

a university
an hour`,

        questions: [
            Q('I have ___ book.', 'Menda bitta kitob bor.', ['a','an','am','is'], 'a'),
            Q('I have ___ apple.', 'Menda bitta olma bor.', ['a','an','the','is'], 'an'),
            Q('He is ___ student.', 'U bitta o‘quvchi.', ['a','an','are','am'], 'a'),
            Q('It is ___ orange.', 'Bu bitta apelsin.', ['a','an','is','are'], 'an'),
            Q('She has ___ car.', 'Uning bitta mashinasi bor.', ['a','an','is','are'], 'a'),
            Q('He has ___ egg.', 'Unda bitta tuxum bor.', ['a','an','is','are'], 'an'),
            Q('It is ___ hour.', 'Bu bir soat. (h harfi o‘qilmaydi)', ['a','an','the','is'], 'an'),
            Q('I am ___ student.', 'Men bitta o‘quvchiman.', ['a','an','the','is'], 'a')
        ]
    },

    'This / That / These / Those': {
        info: `👉 THIS / THAT / THESE / THOSE

This — bu, yaqin, birlik
That — u, uzoq, birlik
These — bular, yaqin, ko‘plik
Those — ular, uzoq, ko‘plik

This / That → IS
These / Those → ARE

📌 Misollar:

This is a book.
Bu kitob.

These are books.
Bular kitoblar.

That is a car.
U mashina.

Those are cars.
Ular mashinalar.`,

        questions: [
            Q('___ is a book.', 'Bu (yaqinda turgan bitta) kitob.', ['This','These','Those','They'], 'This'),
            Q('___ is a car.', 'U (uzoqdagi bitta) mashina.', ['This','That','These','They'], 'That'),
            Q('___ are books.', 'Bular (yaqindagi ko‘p) kitoblar.', ['This','That','These','It'], 'These'),
            Q('___ are cars.', 'Anavilar (uzoqdagi ko‘p) mashinalar.', ['This','That','Those','It'], 'Those'),
            Q('This ___ a pen.', 'Bu ruchka.', ['is','are','am','be'], 'is'),
            Q('These ___ books.', 'Bular kitoblar.', ['is','are','am','be'], 'are'),
            Q('That ___ a phone.', 'U telefon.', ['is','are','am','be'], 'is'),
            Q('Those ___ students.', 'Anavilar o‘quvchilar.', ['is','are','am','be'], 'are')
        ]
    },

    'Question Words': {
        info: `❓ QUESTION WORDS

What — nima?
Where — qayerda?
Who — kim?
Why — nega?
When — qachon?
How — qanday / qalay?

📌 Misollar:

What is your name?
Isming nima?

Where are you?
Qayerdasan?

Who is he?
U kim?

Why are you sad?
Nega xafasan?

When is your birthday?
Tug‘ilgan kuning qachon?

How are you?
Qalaysan?`,

        questions: [
            Q('___ is your name?', 'Isming nima?', ['What','Where','Who','Why'], 'What'),
            Q('___ are you?', 'Qalaysan?', ['How','What','Who','When'], 'How'),
            Q('___ is he?', 'U (erkak) kim?', ['What','Where','Who','Why'], 'Who'),
            Q('___ are you sad?', 'Nega xafasan?', ['Why','What','Who','When'], 'Why'),
            Q('___ do you live?', 'Qayerda yashaysan?', ['Where','What','Who','Why'], 'Where'),
            Q('___ is your birthday?', 'Tug‘ilgan kuning qachon?', ['When','Where','Who','Why'], 'When'),
            Q('___ is this?', 'Bu nima?', ['What','Where','Who','When'], 'What'),
            Q('___ is your teacher?', 'O‘qituvchingiz kim?', ['Who','What','Why','When'], 'Who')
        ]
    },

    'Prepositions of Place': {
        info: `📍 PREPOSITIONS OF PLACE — JOY PREDLOGLARI

IN — ichida
ON — ustida
UNDER — tagida
NEXT TO — yonida
NEAR — yaqinida
BEHIND — orqasida
IN FRONT OF — oldida
BETWEEN — orasida
OPPOSITE — ro‘parasida
AT — da / yonida

📌 Misollar:

The cat is under the table.
Mushuk stol tagida.

The book is in the bag.
Kitob sumka ichida.

The phone is on the table.
Telefon stol ustida.

The school is near my home.
Maktab uyim yaqinida.`,

        questions: [
            Q('The cat is ___ the table.', 'Mushuk stol tagida.', ['under','on','next to','between'], 'under'),
            Q('The book is ___ the bag.', 'Kitob sumka ichida.', ['in','on','under','behind'], 'in'),
            Q('The phone is ___ the table.', 'Telefon stol ustida.', ['on','in','under','at'], 'on'),
            Q('The school is ___ my home.', 'Maktab uyimning yaqinida.', ['near','in','under','on'], 'near'),
            Q('The chair is ___ the table.', 'Stul stolning orqasida.', ['behind','in','on','at'], 'behind'),
            Q('The shop is ___ the bank.', 'Do‘kon bankning yonida.', ['next to','under','in','between'], 'next to'),
            Q('The car is ___ the house.', 'Mashina uyning oldida.', ['in front of','behind','under','in'], 'in front of'),
            Q('The park is ___ the school and the shop.', 'Park maktab va do‘kon orasida.', ['between','under','on','at'], 'between'),
            Q('The bank is ___ the supermarket.', 'Bank supermarketning ro‘parasida.', ['opposite','under','in','behind'], 'opposite'),
            Q('I am ___ school.', 'Men maktabdaman.', ['at','under','between','behind'], 'at')
        ]
    },

    'Time': {
        info: `🕐 TIME — SOAT

O’clock — aniq soat.

2:00 → two o’clock
4:00 → four o’clock

PAST — o‘tgan daqiqalar.

TO — keyingi soatgacha qolgan daqiqalar.

15 daqiqa → quarter
30 daqiqa → half

📌 Misollar:

2:00 → two o’clock
2:15 → quarter past two
2:30 → half past two
2:45 → quarter to three

⚠️ 30 daqiqagacha PAST.
30 daqiqadan keyin TO ishlatiladi.`,

        questions: [
            Q('Soat 2:00 inglizcha qanday aytiladi?', null, ['two o’clock','two past','two to','half two'], 'two o’clock'),
            Q('Soat 2:15 inglizcha qanday aytiladi?', null, ['quarter past two','quarter to two','half past two','two o’clock'], 'quarter past two'),
            Q('Soat 2:30 inglizcha qanday aytiladi?', null, ['half past two','half to two','two o’clock','quarter two'], 'half past two'),
            Q('Soat 2:45 inglizcha qanday aytiladi?', null, ['quarter to three','quarter past two','half three','three o’clock'], 'quarter to three'),
            Q('Soat 4:00 inglizcha qanday aytiladi?', null, ['four o’clock','four past','four to','half four'], 'four o’clock'),
            Q('Soat 7:30 inglizcha qanday aytiladi?', null, ['half past seven','quarter past seven','half to seven','seven o’clock'], 'half past seven'),
            Q('Soat 5:15 inglizcha qanday aytiladi?', null, ['quarter past five','quarter to five','half past five','five o’clock'], 'quarter past five'),
            Q('Soat 6:45 inglizcha qanday aytiladi?', null, ['quarter to seven','quarter past six','half past six','seven o’clock'], 'quarter to seven')
        ]
    },

    'Past To Be': {
        info: `⏪ PAST TO BE — WAS / WERE

O‘tgan zamonda:

I / He / She / It → WAS

You / We / They → WERE

📌 Misollar:

I was a student.
Men o‘quvchi edim.

He was a doctor.
U shifokor edi.

They were friends.
Ular do‘st edilar.

We were happy.
Biz xursand edik.`,

        questions: [
            Q('I ___ a student.', 'Men o‘quvchi edim.', ['was','were','am','are'], 'was'),
            Q('He ___ a doctor.', 'U (erkak) shifokor edi.', ['was','were','is','am'], 'was'),
            Q('She ___ a teacher.', 'U (ayol) o‘qituvchi edi.', ['was','were','is','are'], 'was'),
            Q('It ___ a cat.', 'Bu mushuk edi.', ['was','were','is','am'], 'was'),
            Q('They ___ friends.', 'Ular do‘st edilar.', ['was','were','is','am'], 'were'),
            Q('We ___ students.', 'Biz o‘quvchi edik.', ['was','were','are','am'], 'were'),
            Q('You ___ happy.', 'Sen xursand eding.', ['was','were','is','am'], 'were')
        ]
    },

    'Possessive Adjectives': {
        info: `👤 POSSESSIVE ADJECTIVES — EGALIK SIFATLARI

I → my
You → your
He → his
She → her
It → its
We → our
They → their

Bu so‘zlardan keyin odatda OT keladi.

my book
your phone
his car
her bag
our house
their school

📌 Misollar:

This is my book.
Bu mening kitobim.

This is his car.
Bu uning mashinasi.

This is their house.
Bu ularning uyi.`,

        questions: [
            Q('This is ___ book.', 'Bu mening kitobim.', ['my','mine','me','I'], 'my'),
            Q('This is ___ phone.', 'Bu sening telefoning.', ['your','yours','you','me'], 'your'),
            Q('This is ___ car.', 'Bu uning (erkak) mashinasi.', ['his','her','he','him'], 'his'),
            Q('This is ___ bag.', 'Bu uning (ayol) sumkasi.', ['her','hers','she','he'], 'her'),
            Q('This is ___ house.', 'Bu bizning uyimiz.', ['our','ours','we','us'], 'our'),
            Q('This is ___ car.', 'Bu ularning mashinasi.', ['their','theirs','they','them'], 'their'),
            Q('The dog is eating ___ food.', 'It o‘z ovqatini yemoqda.', ['its','it','his','her'], 'its')
        ]
    },

    'Possessive Pronouns': {
        info: `🔑 POSSESSIVE PRONOUNS — EGALIK OLMOSHLARI

I → mine
You → yours
He → his
She → hers
We → ours
They → theirs

⚠️ Possessive pronoundan keyin odatda OT kelmaydi.

This book is mine.
Bu kitob meniki.

This bag is hers.
Bu sumka uniki.

This car is theirs.
Bu mashina ularniki.

⚠️ its — possessive adjective sifatida ishlatiladi.`,

        questions: [
            Q('This book is ___.', 'Bu kitob meniki.', ['my','mine','me','I'], 'mine'),
            Q('This phone is ___.', 'Bu telefon seniki.', ['your','yours','you','me'], 'yours'),
            Q('This car is ___.', 'Bu mashina uniki (erkak).', ['his','her','hers','he'], 'his'),
            Q('This bag is ___.', 'Bu sumka uniki (ayol).', ['her','hers','she','my'], 'hers'),
            Q('This house is ___.', 'Bu uy bizniki.', ['our','ours','we','us'], 'ours'),
            Q('This car is ___.', 'Bu mashina ularniki.', ['their','theirs','they','them'], 'theirs')
        ]
    },

    'Have Got / Has Got': {
        info: `🎒 HAVE GOT / HAS GOT

Biror narsaga egalikni bildiradi.

I / You / We / They → HAVE GOT

He / She / It → HAS GOT

📌 Misollar:

I have got a phone.
Menda telefon bor.

You have got a car.
Senda mashina bor.

We have got a house.
Bizda uy bor.

They have got a dog.
Ularda it bor.

He has got a car.
Unda mashina bor.

She has got a sister.
Uning singlisi bor.

⚠️ Esda tuting:

He / She / It → HAS
I / You / We / They → HAVE`,

        questions: [
            Q('I ___ got a phone.', 'Menda telefon bor.', ['have','has','am','is'], 'have'),
            Q('You ___ got a car.', 'Senda mashina bor.', ['have','has','am','is'], 'have'),
            Q('We ___ got a house.', 'Bizda uy bor.', ['have','has','is','am'], 'have'),
            Q('They ___ got a dog.', 'Ularda it bor.', ['have','has','is','am'], 'have'),
            Q('He ___ got a car.', 'Unda (erkak) mashina bor.', ['have','has','am','are'], 'has'),
            Q('She ___ got a sister.', 'Uning (ayol) singlisi bor.', ['have','has','are','am'], 'has'),
            Q('It ___ got four legs.', 'Uning to‘rtta oyog‘i bor.', ['have','has','are','am'], 'has'),
            Q('He ___ got a phone.', 'Unda (erkak) telefon bor.', ['have','has','is','are'], 'has'),
            Q('We ___ got a teacher.', 'Bizda o‘qituvchi bor.', ['have','has','is','am'], 'have'),
            Q('They ___ got a house.', 'Ularda uy bor.', ['have','has','is','am'], 'have')
        ]
    }
};


// ==================== FOYDALANUVCHILAR ====================

const users = {};
const ranking = {};
const lastTest = {};


// ==================== YORDAMCHI FUNKSIYALAR ====================

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function backRow(callbackData = 'menu', text = '🔙 Orqaga') {
    return [Markup.button.callback(text, callbackData)];
}


// ==================== MENYULAR ====================

function mainMenu() {
    return Markup.keyboard([
        ['📚 Mavzular', '📝 Test'],
        ['⚡ Tezkor test', '📊 Natijam'],
        ['❌ Xatolarim', '🏆 Reyting']
    ]).resize();
}

function topicsMenu() {
    const buttons = Object.keys(topics).map(topic => [topic]);
    buttons.push(['🔙 Orqaga']);
    return Markup.keyboard(buttons).resize();
}


// ==================== START ====================

bot.start((ctx) => {
    ctx.reply(
        `🇬🇧 HDP ENGLISH

Testga tayyorlanish uchun bo‘limni tanlang:`,
        mainMenu()
    );
});

bot.hears(['🏠 Bosh menyu', '🔙 Orqaga'], (ctx) => {
    ctx.reply('🏠 Asosiy menyu', mainMenu());
});

bot.hears('📚 Mavzular', (ctx) => {
    ctx.reply('📚 Mavzuni tanlang:', topicsMenu());
});


// ==================== MAVZU TANLASH ====================

bot.hears(Object.keys(topics), (ctx) => {

    const topicName = ctx.message.text;
    const topic = topics[topicName];

    ctx.reply(
        `📖 ${topicName}\n\n${topic.info}`,
        Markup.inlineKeyboard([
            [
                Markup.button.callback('📝 15 ta test', `start15:${topicName}`),
                Markup.button.callback('📝 20 ta test', `start20:${topicName}`)
            ],
            [
                Markup.button.callback('🔙 Orqaga', 'topics'),
                Markup.button.callback('🏠 Menyu', 'menu')
            ]
        ])
    );

});


// ==================== TESTNI BOSHLASH ====================

function buildQuestions(pool, amount) {
    let questions = [];
    while (questions.length < amount) {
        questions.push(...shuffle(pool));
    }
    return questions.slice(0, amount);
}

function startTest(ctx, topicName, amount) {

    const topic = topics[topicName];
    if (!topic) return;

    users[ctx.from.id] = {
        topic: topicName,
        general: false,
        questions: buildQuestions(topic.questions, amount),
        index: 0,
        correct: 0,
        wrongAnswers: [],
        current: [],
        locked: false
    };

    lastTest[ctx.from.id] = { topic: topicName, general: false, amount };

    ctx.reply(
        `📝 ${topicName}

Test boshlandi!

📚 Savollar: ${amount} ta`
    );

    sendQuestion(ctx);

}

function startGeneralTest(ctx, amount) {

    let allQuestions = [];

    Object.keys(topics).forEach(topicName => {
        allQuestions.push(...topics[topicName].questions);
    });

    users[ctx.from.id] = {
        topic: 'Umumiy test',
        general: true,
        questions: buildQuestions(allQuestions, amount),
        index: 0,
        correct: 0,
        wrongAnswers: [],
        current: [],
        locked: false
    };

    lastTest[ctx.from.id] = { topic: 'Umumiy test', general: true, amount };

    ctx.reply(
        `📝 UMUMIY TEST

📚 ${amount} ta savol`
    );

    sendQuestion(ctx);

}


// ==================== SAVOL ====================

function sendQuestion(ctx) {

    const user = users[ctx.from.id];

    if (!user) return;

    if (user.index >= user.questions.length) {
        finishTest(ctx);
        return;
    }

    const q = user.questions[user.index];

    user.current = shuffle(q[1]);
    user.locked = false;

    const hint = q[0].includes('___')
        ? '✍️ Bo‘sh joyga to‘g‘ri so‘zni tanlang:\n\n'
        : '';

    const rows = user.current.map((option, index) => [
        Markup.button.callback(
            `${String.fromCharCode(65 + index)}) ${option}`,
            `answer:${index}`
        )
    ]);

    rows.push(backRow('exit'));

    ctx.reply(
        `📝 Savol ${user.index + 1}/${user.questions.length}

${hint}${q[0]}`,
        Markup.inlineKeyboard(rows)
    );

}


// ==================== CALLBACK ====================

bot.on('callback_query', async (ctx) => {

    const data = ctx.callbackQuery.data;

    await ctx.answerCbQuery().catch(() => {});

    if (data.startsWith('start15:')) {
        startTest(ctx, data.substring(8), 15);
        return;
    }

    if (data.startsWith('start20:')) {
        startTest(ctx, data.substring(8), 20);
        return;
    }

    if (data === 'topics') {
        ctx.reply('📚 Mavzuni tanlang:', topicsMenu());
        return;
    }

    if (data === 'menu') {
        ctx.reply('🏠 Asosiy menyu', mainMenu());
        return;
    }

    if (data === 'general15') {
        startGeneralTest(ctx, 15);
        return;
    }

    if (data === 'general20') {
        startGeneralTest(ctx, 20);
        return;
    }

    if (data === 'retry') {
        const last = lastTest[ctx.from.id];
        if (!last) {
            ctx.reply('🏠 Asosiy menyu', mainMenu());
            return;
        }
        if (last.general) startGeneralTest(ctx, last.amount);
        else startTest(ctx, last.topic, last.amount);
        return;
    }

    // TESTDAN CHIQISH (orqaga)

    if (data === 'exit') {
        const user = users[ctx.from.id];
        const wasGeneral = !user || user.general;
        delete users[ctx.from.id];

        await ctx.editMessageReplyMarkup({ inline_keyboard: [] }).catch(() => {});

        if (wasGeneral) {
            ctx.reply('⏹ Test to‘xtatildi.\n\n🏠 Asosiy menyu', mainMenu());
        } else {
            ctx.reply('⏹ Test to‘xtatildi.\n\n📚 Mavzuni tanlang:', topicsMenu());
        }
        return;
    }

    // JAVOB

    if (data.startsWith('answer:')) {

        const user = users[ctx.from.id];

        if (!user) {
            ctx.reply('Avval testni boshlang.', mainMenu());
            return;
        }

        if (user.locked) return;
        user.locked = true;

        await ctx.editMessageReplyMarkup({ inline_keyboard: [] }).catch(() => {});

        const q = user.questions[user.index];
        if (!q) return;

        const selected = user.current[parseInt(data.substring(7), 10)];

        if (selected === q[2]) {

            user.correct++;
            ctx.reply('✅ To‘g‘ri!');

        } else {

            user.wrongAnswers.push({
                question: q[0].split('\n')[0],
                selected: selected,
                correct: q[2]
            });

            const firstLine = q[0].split('\n')[0];
            const fullSentence = firstLine.includes('___')
                ? `\n\n📖 To‘g‘ri gap: ${firstLine.replace('___', q[2])}`
                : '';

            ctx.reply(
                `❌ Xato!

Sizning javobingiz: ${selected}

To‘g‘ri javob: ${q[2]}${fullSentence}`
            );

        }

        user.index++;
        sendQuestion(ctx);

        return;

    }

});


// ==================== UMUMIY TEST ====================

bot.hears('📝 Test', (ctx) => {

    ctx.reply(
        `📝 UMUMIY TEST

Barcha mavzulardan aralash savollar.`,
        Markup.inlineKeyboard([
            [
                Markup.button.callback('▶️ 15 ta', 'general15'),
                Markup.button.callback('▶️ 20 ta', 'general20')
            ],
            backRow('menu')
        ])
    );

});

bot.hears('⚡ Tezkor test', (ctx) => {
    startGeneralTest(ctx, 10);
});


// ==================== NATIJAM ====================

bot.hears('📊 Natijam', (ctx) => {

    const result = ranking[ctx.from.id];

    if (!result) {
        ctx.reply(
            '📊 Hali test topshirmagansiz.',
            Markup.inlineKeyboard([backRow('menu')])
        );
        return;
    }

    const percent = result.total === 0
        ? 0
        : Math.round((result.correct / result.total) * 100);

    ctx.reply(
        `📊 SIZNING NATIJANGIZ

👤 ${result.name}

📝 Testlar: ${result.tests}

✅ To‘g‘ri: ${result.correct}

❌ Xato: ${result.wrong}

📚 Jami savollar: ${result.total}

📈 Umumiy foiz: ${percent}%`,
        Markup.inlineKeyboard([backRow('menu')])
    );

});


// ==================== XATOLARIM ====================

bot.hears('❌ Xatolarim', (ctx) => {

    const result = ranking[ctx.from.id];

    if (!result || result.errors.length === 0) {
        ctx.reply(
            '❌ Hozircha saqlangan xatolaringiz yo‘q.',
            Markup.inlineKeyboard([backRow('menu')])
        );
        return;
    }

    let text = '❌ SIZNING XATOLARINGIZ\n\n';

    result.errors
        .slice(-10)
        .forEach((error, index) => {
            text +=
                `${index + 1}. ${error.question}\n` +
                `❌ Siz: ${error.selected}\n` +
                `✅ To‘g‘ri: ${error.correct}\n\n`;
        });

    ctx.reply(text, Markup.inlineKeyboard([backRow('menu')]));

});


// ==================== REYTING ====================

bot.hears('🏆 Reyting', (ctx) => {

    const list = Object.values(ranking)
        .sort((a, b) => b.correct - a.correct)
        .slice(0, 10);

    if (list.length === 0) {
        ctx.reply(
            '🏆 Hali reytingda hech kim yo‘q.',
            Markup.inlineKeyboard([backRow('menu')])
        );
        return;
    }

    let text = '🏆 KURSDOSHLAR REYTINGI\n\n';

    list.forEach((user, index) => {
        text += `${index + 1}. ${user.name} — ${user.correct} ta ✅\n`;
    });

    ctx.reply(text, Markup.inlineKeyboard([backRow('menu')]));

});


// ==================== TEST TUGASHI ====================

function finishTest(ctx) {

    const user = users[ctx.from.id];

    const total = user.questions.length;
    const correct = user.correct;
    const wrong = total - correct;
    const percent = Math.round((correct / total) * 100);

    if (!ranking[ctx.from.id]) {
        ranking[ctx.from.id] = {
            name: ctx.from.first_name || 'Foydalanuvchi',
            tests: 0,
            correct: 0,
            wrong: 0,
            total: 0,
            errors: []
        };
    }

    const result = ranking[ctx.from.id];

    result.name = ctx.from.first_name || result.name;
    result.tests++;
    result.correct += correct;
    result.wrong += wrong;
    result.total += total;
    result.errors.push(...user.wrongAnswers);

    const backTarget = user.general ? 'menu' : 'topics';

    ctx.reply(
        `🏁 TEST TUGADI!

📚 Mavzu: ${user.topic}

✅ To‘g‘ri: ${correct}

❌ Xato: ${wrong}

📊 NATIJA: ${correct}/${total}

📈 FOIZ: ${percent}%

👏 Barakalla!`,
        Markup.inlineKeyboard([
            [Markup.button.callback('🔁 Qayta topshirish', 'retry')],
            [
                Markup.button.callback('🔙 Orqaga', backTarget),
                Markup.button.callback('🏠 Menyu', 'menu')
            ]
        ])
    );

    delete users[ctx.from.id];

}


// ==================== XATOLARNI USHLASH ====================

bot.catch((err) => {
    console.error('Bot xatosi:', err);
});


// ==================== BOTNI ISHGA TUSHIRISH ====================

bot.launch();

console.log('🇬🇧 HDP English bot ishga tushdi!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));