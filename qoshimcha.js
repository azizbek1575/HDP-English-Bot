// qoshimcha.js — har bir mavzu uchun QIYINROQ qo'shimcha savollar
// bot.js bilan bir papkaga qo'ying.

const Q = (text, uz, options, answer) => [
    uz ? `${text}\n🇺🇿 ${uz}` : text,
    options,
    answer
];

module.exports = {

    'Alphabet': [
        Q('Qaysi harf “ey” deb o‘qiladi?', null, ['A','E','I','Y'], 'A'),
        Q('Qaysi harf “way” deb o‘qiladi?', null, ['W','Y','V','U'], 'Y'),
        Q('Qaysi harf “dablyu” deb o‘qiladi?', null, ['V','U','W','Y'], 'W'),
        Q('Qaysi harf “kyu” deb o‘qiladi?', null, ['K','Q','C','G'], 'Q'),
        Q('Qaysi harf “jey” deb o‘qiladi?', null, ['G','J','K','Y'], 'J'),
        Q('Qaysi harf “i” deb o‘qiladi?', null, ['I','E','Y','A'], 'E'),
        Q('Qaysi harf “ay” deb o‘qiladi?', null, ['I','E','Y','A'], 'I'),
        Q('Qaysi harf “eks” deb o‘qiladi?', null, ['X','S','Z','C'], 'X'),
        Q('Qaysi qatorda faqat unli harflar bor?', null, ['A, E, I, O, U','A, B, C, D, E','E, F, G, H, I','O, P, Q, R, U'], 'A, E, I, O, U'),
        Q('Ingliz alifbosida nechta unli harf bor?', null, ['5','6','7','21'], '5'),
        Q('Ingliz alifbosida nechta undosh harf bor?', null, ['19','20','21','26'], '21'),
        Q('CAT so‘zi harflar bilan qanday o‘qiladi?', null, ['si-ey-ti','ki-ey-ti','si-ay-ti','es-ey-ti'], 'si-ey-ti'),
        Q('DOG so‘zi harflar bilan qanday o‘qiladi?', null, ['di-ou-ji','di-ou-jey','bi-ou-ji','di-u-ji'], 'di-ou-ji'),
        Q('Alifboda “M” dan keyin qaysi harf keladi?', null, ['N','L','O','K'], 'N'),
        Q('Alifboda “S” dan oldin qaysi harf keladi?', null, ['R','T','Q','P'], 'R')
    ],

    'Subject Pronouns': [
        Q('Mary is my sister. ___ is a doctor.', 'Meri mening singlim. U shifokor.', ['She','He','It','They'], 'She'),
        Q('Tom and I are friends. ___ are happy.', 'Tom va men do‘stmiz. Biz xursandmiz.', ['We','They','You','I'], 'We'),
        Q('My cat is small. ___ is black.', 'Mening mushugim kichik. U qora.', ['It','He','She','They'], 'It'),
        Q('Ali and Vali are students. ___ are in class.', 'Ali va Vali o‘quvchi. Ular sinfda.', ['They','We','He','You'], 'They'),
        Q('Ali is my brother. ___ is tall.', 'Ali mening akam. U baland.', ['He','She','It','They'], 'He'),
        Q('“Sen va Ali” (ikki kishiga) deyish uchun qaysi olmosh ishlatiladi?', null, ['You','We','They','He'], 'You'),
        Q('The book is red. ___ is new.', 'Kitob qizil. U yangi.', ['It','He','She','They'], 'It'),
        Q('My mother and I are at home. ___ are cooking.', 'Onam va men uydamiz. Biz ovqat pishiryapmiz.', ['We','They','She','You'], 'We'),
        Q('My parents are teachers. ___ are kind.', 'Ota-onam o‘qituvchi. Ular mehribon.', ['They','We','He','It'], 'They'),
        Q('Dilnoza is a student. ___ is 18.', 'Dilnoza o‘quvchi. U 18 yoshda.', ['She','He','It','We'], 'She'),
        Q('Qaysi holatda “They” ishlatilmaydi?', null, ['Bitta ayol haqida','Ikki erkak haqida','Uchta qiz haqida','Ikkita kitob haqida'], 'Bitta ayol haqida')
    ],

    'To Be': [
        Q('My mother ___ a nurse.', 'Onam hamshira.', ['am','is','are','be'], 'is'),
        Q('The books ___ on the table.', 'Kitoblar stol ustida.', ['am','is','are','be'], 'are'),
        Q('Ali and Vali ___ brothers.', 'Ali va Vali aka-uka.', ['am','is','are','be'], 'are'),
        Q('My father and I ___ at home.', 'Dadam va men uydamiz.', ['am','is','are','be'], 'are'),
        Q('The dog ___ in the garden.', 'It bog‘da.', ['am','is','are','be'], 'is'),
        Q('The children ___ happy.', 'Bolalar xursand.', ['am','is','are','be'], 'are'),
        Q('Tashkent ___ a big city.', 'Toshkent katta shahar.', ['am','is','are','be'], 'is'),
        Q('You and Ali ___ friends.', 'Sen va Ali do‘stsizlar.', ['am','is','are','be'], 'are'),
        Q('Qaysi gap to‘g‘ri?', null, ['I is a student.','I am a student.','I are a student.','I be a student.'], 'I am a student.'),
        Q('Qaysi gap to‘g‘ri?', null, ['She are a teacher.','She is a teacher.','She am a teacher.','She be a teacher.'], 'She is a teacher.'),
        Q('Qaysi gap to‘g‘ri?', null, ['We is friends.','We am friends.','We are friends.','We be friends.'], 'We are friends.'),
        Q('“I’m” qisqartmasi nimaning qisqartmasi?', null, ['I am','I is','I are','I was'], 'I am'),
        Q('“He’s” (a doctor) qisqartmasi nimani anglatadi?', null, ['He is','He am','He are','He has'], 'He is'),
        Q('“They’re” qisqartmasi nimani anglatadi?', null, ['They are','They is','They am','They was'], 'They are')
    ],

    'Positive': [
        Q('My sister ___ very beautiful.', 'Singlim juda chiroyli.', ['am','is','are','not'], 'is'),
        Q('My friends ___ from Samarkand.', 'Do‘stlarim Samarqanddan.', ['am','is','are','not'], 'are'),
        Q('Qaysi gap darak gap?', null, ['Are you a student?','I am a student.','I am not a student.','Is she a doctor?'], 'I am a student.'),
        Q('Qaysi gap grammatik jihatdan to‘g‘ri?', null, ['They is happy.','They are happy.','They am happy.','They be happy.'], 'They are happy.'),
        Q('“Men shifokorman” inglizcha qanday?', null, ['I am a doctor.','I is a doctor.','I are a doctor.','Am I a doctor.'], 'I am a doctor.'),
        Q('“Biz do‘stmiz” inglizcha qanday?', null, ['We are friends.','We is friends.','We am friends.','Are we friends.'], 'We are friends.'),
        Q('The apples ___ red.', 'Olmalar qizil.', ['am','is','are','not'], 'are'),
        Q('Anvar and I ___ classmates.', 'Anvar va men sinfdoshmiz.', ['am','is','are','not'], 'are'),
        Q('The weather ___ nice today.', 'Bugun ob-havo yaxshi.', ['am','is','are','not'], 'is'),
        Q('Uzbekistan ___ a beautiful country.', 'O‘zbekiston go‘zal davlat.', ['am','is','are','not'], 'is')
    ],

    'Negative': [
        Q('He ___ at home.', 'U uyda emas.', ['isn’t','aren’t','am not','don’t'], 'isn’t'),
        Q('They ___ students.', 'Ular o‘quvchi emas.', ['isn’t','aren’t','am not','not are'], 'aren’t'),
        Q('I ___ hungry.', 'Men och emasman.', ['am not','is not','are not','not am'], 'am not'),
        Q('We ___ late.', 'Biz kechikmadik.', ['aren’t','isn’t','am not','not are'], 'aren’t'),
        Q('It ___ cold today.', 'Bugun sovuq emas.', ['isn’t','aren’t','am not','not is'], 'isn’t'),
        Q('Qaysi gap to‘g‘ri?', null, ['She not is a doctor.','She is not a doctor.','She no is a doctor.','She isn’t not a doctor.'], 'She is not a doctor.'),
        Q('Qaysi gap to‘g‘ri?', null, ['I amn’t tired.','I’m not tired.','I isn’t tired.','I not tired.'], 'I’m not tired.'),
        Q('“Biz uyda emasmiz” inglizcha qanday?', null, ['We are not at home.','We not are at home.','We is not at home.','We no at home.'], 'We are not at home.'),
        Q('My parents ___ at work today.', 'Ota-onam bugun ishda emas.', ['aren’t','isn’t','am not','not are'], 'aren’t'),
        Q('The shop ___ open.', 'Do‘kon ochiq emas.', ['isn’t','aren’t','am not','not are'], 'isn’t'),
        Q('You ___ late.', 'Sen kechikmading.', ['aren’t','isn’t','am not','not are'], 'aren’t')
    ],

    'Question': [
        Q('___ your parents at home?', 'Ota-onang uydami?', ['Am','Is','Are','Be'], 'Are'),
        Q('___ Ali a student?', 'Ali o‘quvchimi?', ['Am','Is','Are','Be'], 'Is'),
        Q('___ the books on the table?', 'Kitoblar stol ustidami?', ['Am','Is','Are','Be'], 'Are'),
        Q('___ I right?', 'Men haqmanmi?', ['Am','Is','Are','Be'], 'Am'),
        Q('___ your sister a teacher?', 'Singling o‘qituvchimi?', ['Am','Is','Are','Be'], 'Is'),
        Q('___ Anvar and Ali brothers?', 'Anvar va Ali aka-ukami?', ['Am','Is','Are','Be'], 'Are'),
        Q('Qaysi so‘roq gap to‘g‘ri?', null, ['Is she a doctor?','She is a doctor?','Are she a doctor?','Does she a doctor?'], 'Is she a doctor?'),
        Q('Qaysi so‘roq gap to‘g‘ri?', null, ['Are they students?','Is they students?','They are students?','Am they students?'], 'Are they students?'),
        Q('“Sen uydamisan?” inglizcha qanday?', null, ['Are you at home?','Is you at home?','Am you at home?','You are at home?'], 'Are you at home?'),
        Q('Are you a student? — Yes, I ___.', null, ['am','is','are','be'], 'am'),
        Q('Is he a doctor? — No, he ___.', null, ['isn’t','aren’t','am not','not'], 'isn’t'),
        Q('Are they friends? — Yes, they ___.', null, ['am','is','are','be'], 'are')
    ],

    'A / An': [
        Q('She is ___ university student.', 'U universitet talabasi. (yu-ni…)', ['a','an','the','is'], 'a'),
        Q('I need ___ umbrella.', 'Menga soyabon kerak.', ['a','an','the','is'], 'an'),
        Q('He is ___ honest man.', 'U halol odam. (h o‘qilmaydi)', ['a','an','the','is'], 'an'),
        Q('It is ___ European country.', 'Bu Yevropa davlati. (yu-…)', ['a','an','the','is'], 'a'),
        Q('I need ___ eraser.', 'Menga o‘chirg‘ich kerak.', ['a','an','the','is'], 'an'),
        Q('She has ___ new phone.', 'Uning yangi telefoni bor.', ['a','an','the','is'], 'a'),
        Q('This is ___ interesting book.', 'Bu qiziqarli kitob.', ['a','an','the','is'], 'an'),
        Q('He is ___ engineer.', 'U muhandis.', ['a','an','the','is'], 'an'),
        Q('It is ___ ugly dog.', 'Bu xunuk it.', ['a','an','the','is'], 'an'),
        Q('He has ___ one-year-old son.', 'Uning bir yoshli o‘g‘li bor. (“wan” tovushi)', ['a','an','the','is'], 'a'),
        Q('That is ___ unusual idea.', 'Bu g‘ayrioddiy fikr.', ['a','an','the','is'], 'an'),
        Q('She is ___ actress.', 'U aktrisa.', ['a','an','the','is'], 'an'),
        Q('Ali has ___ old car.', 'Alining eski mashinasi bor.', ['a','an','the','is'], 'an')
    ],

    'This / That / These / Those': [
        Q('___ are my shoes. (yonimda turibdi)', 'Bular mening poyabzallarim.', ['This','That','These','Those'], 'These'),
        Q('___ is my house over there. (uzoqda)', 'Anavi mening uyim.', ['This','That','These','Those'], 'That'),
        Q('Look at ___ birds over there!', 'Anavi qushlarga qara!', ['this','that','these','those'], 'those'),
        Q('Is ___ your pen? (qo‘lingdagi)', 'Bu sening ruchkangmi?', ['this','that','these','those'], 'this'),
        Q('___ apples here are sweet.', 'Mana bu olmalar shirin.', ['This','That','These','Those'], 'These'),
        Q('___ mountains are very high. (uzoqda)', 'Anavi tog‘lar juda baland.', ['This','That','These','Those'], 'Those'),
        Q('What are ___? (yaqindagi ko‘p narsa)', 'Bular nima?', ['this','that','these','those'], 'these'),
        Q('Who is ___ man over there?', 'Anavi odam kim?', ['this','that','these','those'], 'that'),
        Q('Qaysi gap to‘g‘ri?', null, ['These is a book.','This is a book.','This are books.','Those is a book.'], 'This is a book.'),
        Q('Qaysi gap to‘g‘ri?', null, ['Those are cars.','Those is cars.','That are cars.','This are cars.'], 'Those are cars.'),
        Q('Qaysi so‘z ko‘plikni bildiradi?', null, ['those','this','that','it'], 'those')
    ],

    'Question Words': [
        Q('___ old are you?', 'Necha yoshdasan?', ['How','What','Who','When'], 'How'),
        Q('___ is your birthday? — In May.', 'Tug‘ilgan kuning qachon?', ['When','Where','Who','Why'], 'When'),
        Q('___ is she? — She is my sister.', 'U kim?', ['What','Where','Who','Why'], 'Who'),
        Q('___ is the station? — Near the park.', 'Bekat qayerda?', ['What','Where','Who','When'], 'Where'),
        Q('___ are you late? — The bus is late.', 'Nega kechikding?', ['Why','How','Who','Where'], 'Why'),
        Q('___ is this? — It is a pen.', 'Bu nima?', ['What','Where','Who','When'], 'What'),
        Q('___ colour is your bag?', 'Sumkang qanday rangda?', ['What','Who','Where','Why'], 'What'),
        Q('___ is your favourite teacher?', 'Sevimli o‘qituvchingiz kim?', ['Who','What','When','Why'], 'Who'),
        Q('___ are you from? — I am from Uzbekistan.', 'Sen qayerdansan?', ['Where','What','Who','When'], 'Where'),
        Q('___ is your lesson? — At 9 o’clock.', 'Darsing qachon?', ['When','Where','Who','Why'], 'When'),
        Q('___ are you? — I am fine.', 'Ahvolingiz qanday?', ['How','What','Who','Why'], 'How')
    ],

    'Prepositions of Place': [
        Q('The picture is ___ the wall.', 'Rasm devorda (osilgan).', ['on','in','under','between'], 'on'),
        Q('The cat is sleeping ___ the sofa.', 'Mushuk divan ustida uxlayapti.', ['on','under','between','opposite'], 'on'),
        Q('She is ___ the kitchen.', 'U oshxonada.', ['in','on','between','opposite'], 'in'),
        Q('The bank is ___ the post office and the school.', 'Bank pochta va maktab orasida.', ['between','behind','under','on'], 'between'),
        Q('The garden is ___ the house.', 'Bog‘ uyning orqasida.', ['behind','in front of','on','between'], 'behind'),
        Q('The ball is ___ the box.', 'To‘p qutining ichida.', ['in','on','next to','opposite'], 'in'),
        Q('Your bag is ___ the chair.', 'Sumkang stul tagida.', ['under','on','opposite','between'], 'under'),
        Q('The hotel is ___ the cinema.', 'Mehmonxona kinoteatrning ro‘parasida.', ['opposite','under','in','on'], 'opposite'),
        Q('My mother is ___ work.', 'Onam ishda.', ['at','under','between','behind'], 'at'),
        Q('The lamp is ___ the table.', 'Chiroq stol ustida.', ['on','under','in','behind'], 'on'),
        Q('The supermarket is ___ the bus stop.', 'Supermarket avtobus bekatining yonida.', ['next to','under','in','on'], 'next to'),
        Q('The children are ___ the teacher. (o‘qituvchining oldida turibdi)', null, ['in front of','behind','under','between'], 'in front of')
    ],

    'Time': [
        Q('Soat 3:15 inglizcha qanday aytiladi?', null, ['quarter past three','quarter to three','half past three','three o’clock'], 'quarter past three'),
        Q('Soat 9:30 inglizcha qanday aytiladi?', null, ['half past nine','half to nine','nine o’clock','quarter past nine'], 'half past nine'),
        Q('Soat 11:45 inglizcha qanday aytiladi?', null, ['quarter to twelve','quarter past eleven','half past eleven','twelve o’clock'], 'quarter to twelve'),
        Q('Soat 1:45 inglizcha qanday aytiladi?', null, ['quarter to two','quarter past one','half past one','one o’clock'], 'quarter to two'),
        Q('Soat 12:30 inglizcha qanday aytiladi?', null, ['half past twelve','half to twelve','quarter past twelve','twelve o’clock'], 'half past twelve'),
        Q('“Quarter to five” — bu soat nechchi?', null, ['4:45','5:15','5:45','4:15'], '4:45'),
        Q('“Half past six” — bu soat nechchi?', null, ['6:30','5:30','6:15','7:30'], '6:30'),
        Q('“Quarter past eight” — bu soat nechchi?', null, ['8:15','7:45','8:45','8:30'], '8:15'),
        Q('“Quarter to ten” — bu soat nechchi?', null, ['9:45','10:15','10:45','9:15'], '9:45'),
        Q('Soat 3:10 inglizcha qanday aytiladi?', null, ['ten past three','ten to three','ten past ten','three ten o’clock'], 'ten past three'),
        Q('Soat 6:50 inglizcha qanday aytiladi?', null, ['ten to seven','ten past six','fifty past six','ten to six'], 'ten to seven'),
        Q('Soat 4:20 inglizcha qanday aytiladi?', null, ['twenty past four','twenty to four','twenty to five','four to twenty'], 'twenty past four')
    ],

    'Past To Be': [
        Q('Yesterday I ___ at home.', 'Kecha men uyda edim.', ['was','were','am','is'], 'was'),
        Q('Last year we ___ in London.', 'O‘tgan yili biz Londonda edik.', ['was','were','are','am'], 'were'),
        Q('My father ___ a driver.', 'Dadam haydovchi edi.', ['was','were','is','are'], 'was'),
        Q('The children ___ at school yesterday.', 'Bolalar kecha maktabda edi.', ['was','were','is','are'], 'were'),
        Q('It ___ cold last night.', 'Kecha tunda sovuq edi.', ['was','were','is','are'], 'was'),
        Q('You ___ late yesterday.', 'Sen kecha kechikding.', ['was','were','is','are'], 'were'),
        Q('Ali and Vali ___ at the party.', 'Ali va Vali ziyofatda edi.', ['was','were','is','are'], 'were'),
        Q('She ___ not at home.', 'U uyda emas edi.', ['was','were','is','are'], 'was'),
        Q('They ___ not happy.', 'Ular xursand emas edi.', ['was','were','is','are'], 'were'),
        Q('Qaysi gap to‘g‘ri?', null, ['He were a boy.','He was a boy.','He are a boy.','He am a boy.'], 'He was a boy.'),
        Q('“Biz kecha uyda edik” inglizcha qanday?', null, ['We were at home yesterday.','We was at home yesterday.','We are at home yesterday.','We be at home yesterday.'], 'We were at home yesterday.'),
        Q('Where ___ you yesterday?', 'Kecha qayerda eding?', ['was','were','is','are'], 'were'),
        Q('___ he at school? (edi mi)', null, ['Was','Were','Is','Are'], 'Was')
    ],

    'Possessive Adjectives': [
        Q('This is Mary. ___ brother is a doctor.', 'Bu Meri. Uning akasi shifokor.', ['His','Her','Its','Their'], 'Her'),
        Q('Tom has a car. ___ car is red.', 'Tomning mashinasi bor. Uning mashinasi qizil.', ['His','Her','Its','Their'], 'His'),
        Q('We love ___ teacher.', 'Biz o‘qituvchimizni yaxshi ko‘ramiz.', ['our','ours','we','us'], 'our'),
        Q('They are washing ___ hands.', 'Ular qo‘llarini yuvishyapti.', ['their','theirs','they','them'], 'their'),
        Q('I like ___ job.', 'Men ishimni yaxshi ko‘raman.', ['my','mine','me','I'], 'my'),
        Q('The cat drinks ___ milk.', 'Mushuk o‘z sutini ichyapti.', ['its','it’s','his','her'], 'its'),
        Q('Anvar and I are brothers. ___ mother is a nurse.', 'Bizning onamiz hamshira.', ['Our','Their','My','Your'], 'Our'),
        Q('Dilya and Malika are sisters. ___ house is big.', 'Ularning uyi katta.', ['Their','Our','Her','His'], 'Their'),
        Q('She loves ___ mother.', 'U onasini yaxshi ko‘radi.', ['her','hers','she','his'], 'her'),
        Q('Is this ___ pen? (sening)', 'Bu sening ruchkangmi?', ['your','yours','you','my'], 'your'),
        Q('Qaysi gap to‘g‘ri?', null, ['This is she book.','This is her book.','This is hers book.','This is herself book.'], 'This is her book.')
    ],

    'Possessive Pronouns': [
        Q('Is this pen yours? — Yes, it is ___.', 'Ha, u meniki.', ['my','mine','me','I'], 'mine'),
        Q('This isn’t my bag. ___ is black.', 'Meniki qora.', ['My','Mine','Me','I'], 'Mine'),
        Q('These books are ___.', 'Bu kitoblar bizniki.', ['our','ours','we','us'], 'ours'),
        Q('Whose is this car? — It is ___.', 'U ularniki.', ['their','theirs','they','them'], 'theirs'),
        Q('Your phone is new, but ___ is old.', 'Seniki yangi, meniki eski.', ['my','mine','me','I'], 'mine'),
        Q('My house is big, but ___ is small.', 'Seniki kichik.', ['your','yours','you','my'], 'yours'),
        Q('That bag is not his. It is ___.', 'U uniki (ayolniki).', ['her','hers','she','his'], 'hers'),
        Q('Qaysi gap to‘g‘ri?', null, ['This is mine book.','This book is mine.','This book is my.','This is my book mine.'], 'This book is mine.'),
        Q('Our house is big, but ___ is small.', 'Ularniki kichik.', ['their','theirs','they','them'], 'theirs'),
        Q('Qaysi so‘zdan keyin ot kelmaydi?', null, ['mine','my','your','her'], 'mine'),
        Q('This is not your pen. It is ___.', 'U meniki.', ['my','mine','me','I'], 'mine')
    ],

    'Have Got / Has Got': [
        Q('She ___ got two brothers.', 'Uning ikkita akasi bor.', ['have','has','am','is'], 'has'),
        Q('My parents ___ got a big house.', 'Ota-onamning katta uyi bor.', ['have','has','are','is'], 'have'),
        Q('Ali and Vali ___ got a car.', 'Ali va Valining mashinasi bor.', ['have','has','are','is'], 'have'),
        Q('The dog ___ got a long tail.', 'Itning uzun dumi bor.', ['have','has','are','is'], 'has'),
        Q('Qaysi gap to‘g‘ri?', null, ['He have got a car.','He has got a car.','He haves got a car.','He has have a car.'], 'He has got a car.'),
        Q('___ you got a pen?', 'Senda ruchka bormi?', ['Have','Has','Are','Is'], 'Have'),
        Q('___ she got a sister?', 'Uning singlisi bormi?', ['Have','Has','Are','Is'], 'Has'),
        Q('We ___ got any money.', 'Bizda pul yo‘q.', ['haven’t','hasn’t','aren’t','isn’t'], 'haven’t'),
        Q('It ___ got any windows.', 'Unda deraza yo‘q.', ['haven’t','hasn’t','aren’t','isn’t'], 'hasn’t'),
        Q('Have you got a car? — No, I ___.', null, ['haven’t','hasn’t','am not','don’t'], 'haven’t'),
        Q('Has he got a brother? — Yes, he ___.', null, ['have','has','is','does'], 'has'),
        Q('My sister ___ got a phone.', 'Singlimning telefoni bor.', ['have','has','are','is'], 'has')
    ]
};
