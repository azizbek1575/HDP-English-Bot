// qiyin.js — har mavzu uchun QIYIN savollar (xato topish, ikki bo'shliq, tovushga qarash)

const Q = (text, uz, options, answer) => [
    uz ? `${text}\n🇺🇿 ${uz}` : text,
    options,
    answer
];

module.exports = {

    'Alphabet': [
        Q('“bi-ey-ji” deb harflab o‘qilgan so‘z qaysi?', null, ['bag','big','beg','bug'], 'bag'),
        Q('“pi-i-en” deb harflab o‘qilgan so‘z qaysi?', null, ['pen','pan','pin','pet'], 'pen'),
        Q('“es-ti-yu-di-i-en-ti” deb harflab o‘qilgan so‘z qaysi?', null, ['student','studint','stadent','studant'], 'student'),
        Q('“ti-i-ey-si-eych-i-ar” deb harflab o‘qilgan so‘z qaysi?', null, ['teacher','tacher','teecher','teachar'], 'teacher'),
        Q('BOOK so‘zi harflab qanday o‘qiladi?', null, ['bi-ou-ou-key','bi-yu-ou-key','bi-ou-ou-si','pi-ou-ou-key'], 'bi-ou-ou-key'),
        Q('CAR so‘zining oxirgi harfi qanday o‘qiladi?', null, ['ar','er','or','ey'], 'ar'),
        Q('Qaysi so‘zda “ey” deb o‘qiladigan harf bor?', null, ['cat','dog','pen','sit'], 'cat'),
        Q('Qaysi so‘zda “ay” deb o‘qiladigan harf bor?', null, ['sit','bag','pen','dog'], 'sit'),
        Q('Qaysi so‘zda “ou” deb o‘qiladigan harf bor?', null, ['dog','cat','pen','sit'], 'dog'),
        Q('Qaysi so‘zda “i” deb o‘qiladigan harf bor?', null, ['pen','cat','dog','sit'], 'pen'),
        Q('Qaysi so‘z “dablyu” deb o‘qiladigan harf bilan boshlanadi?', null, ['water','very','yes','zoo'], 'water'),
        Q('Qaysi so‘z “way” deb o‘qiladigan harf bilan boshlanadi?', null, ['yes','water','very','zoo'], 'yes')
    ],

    'Subject Pronouns': [
        Q('My sister and I are students. ___ study English.', 'Singlim va men talabamiz. Biz ingliz tilini o‘rganamiz.', ['We','They','You','She'], 'We'),
        Q('Malika is a doctor. ___ works in a hospital.', 'Malika shifokor. U kasalxonada ishlaydi.', ['She','He','It','They'], 'She'),
        Q('Look at the dog! ___ is very big.', 'Itga qara! U juda katta.', ['It','He','She','They'], 'It'),
        Q('Tom and Ben are brothers. Tom is tall, but ___ is short. (Ben)', 'Tom baland, lekin (Ben) past.', ['he','they','we','it'], 'he'),
        Q('You and your friend are late. ___ are late.', 'Sen va do‘sting kechikdingiz.', ['You','We','They','He'], 'You'),
        Q('The children are in the garden. ___ are playing.', 'Bolalar bog‘da. Ular o‘ynayapti.', ['They','We','He','It'], 'They'),
        Q('Qaysi gapda olmosh xato ishlatilgan?', null, ['Me am a student.','I am a student.','He is a boy.','We are friends.'], 'Me am a student.'),
        Q('Qaysi gap to‘g‘ri?', null, ['Him is my brother.','He is my brother.','It is my brother.','They is my brother.'], 'He is my brother.'),
        Q('“Dilnoza va men” ni bitta olmosh bilan aytish uchun qaysi olmosh kerak?', null, ['We','They','You','She'], 'We'),
        Q('“Sen va Anvar” ni bitta olmosh bilan aytish uchun qaysi olmosh kerak?', null, ['You','We','They','He'], 'You'),
        Q('The table is old. ___ is brown.', 'Stol eski. U jigarrang.', ['It','He','She','They'], 'It'),
        Q('My mother is in the kitchen. ___ is cooking.', 'Onam oshxonada. U ovqat pishiryapti.', ['She','He','It','We'], 'She')
    ],

    'To Be': [
        Q('My brother and my sister ___ at school.', 'Akam va singlim maktabda.', ['are','is','am','be'], 'are'),
        Q('The teacher ___ in the classroom, and the students ___ in the yard.', null, ['is / are','are / is','is / is','are / are'], 'is / are'),
        Q('Qaysi gapda xato bor?', null, ['They are my friends.','She are a nurse.','I am tired.','We are ready.'], 'She are a nurse.'),
        Q('Qaysi gapda xato bor?', null, ['It is a big house.','My parents is at home.','You are welcome.','I am hungry.'], 'My parents is at home.'),
        Q('How ___ you? — I ___ fine.', null, ['are / am','is / am','are / is','am / are'], 'are / am'),
        Q('Where ___ your books? They ___ on the desk.', null, ['are / are','is / are','are / is','is / is'], 'are / are'),
        Q('What ___ your name? My name ___ Aziz.', null, ['is / is','are / is','is / are','am / is'], 'is / is'),
        Q('“He’s a doctor and they’re students” gapida qisqartmalar nimani anglatadi?', null, ['He is, they are','He has, they are','He is, they is','He was, they were'], 'He is, they are'),
        Q('The cat and the dog ___ in the garden.', 'Mushuk va it bog‘da.', ['are','is','am','be'], 'are'),
        Q('My phone ___ new, but my headphones ___ old.', null, ['is / are','are / is','is / is','are / are'], 'is / are'),
        Q('Aziz and his friends ___ football fans.', 'Aziz va uning do‘stlari futbol muxlislari.', ['are','is','am','be'], 'are'),
        Q('Dilya and I ___ classmates.', 'Dilya va men sinfdoshmiz.', ['are','is','am','be'], 'are')
    ],

    'Positive': [
        Q('Uzbekistan ___ in Central Asia.', 'O‘zbekiston Markaziy Osiyoda.', ['is','are','am','not'], 'is'),
        Q('The students ___ in the classroom.', 'O‘quvchilar sinfda.', ['are','is','am','not'], 'are'),
        Q('Qaysi gap darak gap va to‘g‘ri?', null, ['She is a nurse.','Is she a nurse?','She not is a nurse.','She a nurse is.'], 'She is a nurse.'),
        Q('“Ular bizning do‘stlarimiz” inglizcha qanday?', null, ['They are our friends.','They is our friends.','They are we friends.','Their are our friends.'], 'They are our friends.'),
        Q('“Mening akam shifokor” inglizcha qanday?', null, ['My brother is a doctor.','My brother are a doctor.','I brother is a doctor.','My brother am a doctor.'], 'My brother is a doctor.'),
        Q('“Men 20 yoshdaman” inglizcha qanday?', null, ['I am 20 years old.','I have 20 years old.','I is 20 years old.','I am 20 year old.'], 'I am 20 years old.'),
        Q('My parents and my grandmother ___ at home.', 'Ota-onam va buvim uydalar.', ['are','is','am','not'], 'are'),
        Q('The weather in Tashkent ___ hot in summer.', 'Toshkentda yozda ob-havo issiq.', ['is','are','am','not'], 'is'),
        Q('Qaysi gapda ega va fe’l mos kelmaydi?', null, ['You is late.','We are ready.','I am here.','He is tall.'], 'You is late.'),
        Q('Anvar ___ from Bukhara, but his parents ___ from Tashkent.', null, ['is / are','are / is','is / is','am / are'], 'is / are'),
        Q('This city ___ very old, and its streets ___ narrow.', null, ['is / are','are / is','is / is','are / are'], 'is / are'),
        Q('Ali and Vali ___ brothers, and their sister ___ a doctor.', null, ['are / is','is / are','are / are','is / is'], 'are / is')
    ],

    'Negative': [
        Q('My parents ___ at home now. They are at work.', 'Ota-onam hozir uyda emas.', ['aren’t','isn’t','am not','not are'], 'aren’t'),
        Q('Aziz ___ a teacher, he ___ a student.', null, ['isn’t / is','aren’t / is','isn’t / are','is / isn’t'], 'isn’t / is'),
        Q('Qaysi gap to‘g‘ri?', null, ['They aren’t not happy.','They aren’t happy.','They isn’t happy.','They not are happy.'], 'They aren’t happy.'),
        Q('Qaysi gap to‘g‘ri?', null, ['I’m not a doctor.','I amn’t a doctor.','I isn’t a doctor.','I aren’t a doctor.'], 'I’m not a doctor.'),
        Q('“Bu mening kitobim emas” inglizcha qanday?', null, ['This isn’t my book.','This aren’t my book.','This not my book.','This isn’t not my book.'], 'This isn’t my book.'),
        Q('These ___ my shoes.', 'Bular mening poyabzallarim emas.', ['aren’t','isn’t','am not','not'], 'aren’t'),
        Q('She ___ from Russia. She is from Kazakhstan.', 'U Rossiyalik emas.', ['isn’t','aren’t','am not','not'], 'isn’t'),
        Q('We ___ hungry because we ate a lot.', 'Biz och emasmiz.', ['aren’t','isn’t','am not','not are'], 'aren’t'),
        Q('The shops ___ open on Sunday. They are closed.', 'Do‘konlar yakshanba kuni ochiq emas.', ['aren’t','isn’t','am not','not'], 'aren’t'),
        Q('It ___ a cat. It is a dog.', 'Bu mushuk emas.', ['isn’t','aren’t','am not','not'], 'isn’t'),
        Q('You ___ my teacher. You are my classmate.', 'Sen mening o‘qituvchim emassan.', ['aren’t','isn’t','am not','not is'], 'aren’t'),
        Q('Anvar and Ali ___ brothers. They are cousins.', 'Ular aka-uka emas.', ['aren’t','isn’t','am not','not'], 'aren’t')
    ],

    'Question': [
        Q('___ your parents at home? — No, they ___.', null, ['Are / aren’t','Is / isn’t','Are / isn’t','Am / aren’t'], 'Are / aren’t'),
        Q('___ Aziz and Dilya classmates?', 'Aziz va Dilya sinfdoshlarmi?', ['Are','Is','Am','Be'], 'Are'),
        Q('Qaysi so‘roq gap to‘g‘ri?', null, ['Where is my bag?','Where my bag is?','Where are my bag?','Where am my bag?'], 'Where is my bag?'),
        Q('Qaysi so‘roq gap to‘g‘ri?', null, ['Who are they?','Who they are?','Who is they?','Who am they?'], 'Who are they?'),
        Q('What ___ your favourite subjects?', 'Sevimli fanlaring qaysilar?', ['are','is','am','be'], 'are'),
        Q('Why ___ she sad?', 'U nega xafa?', ['is','are','am','be'], 'is'),
        Q('Is she your sister? — Yes, she ___.', null, ['is','are','am','isn’t'], 'is'),
        Q('Are you and Ali friends? — Yes, we ___.', null, ['are','is','am','aren’t'], 'are'),
        Q('Is this your pen? — No, it ___.', null, ['isn’t','aren’t','am not','not'], 'isn’t'),
        Q('Am I late? — Yes, you ___.', null, ['are','is','am','be'], 'are'),
        Q('“U (ayol) qayerda?” inglizcha qanday?', null, ['Where is she?','Where are she?','Where she is?','Where am she?'], 'Where is she?'),
        Q('How ___ your grandparents?', 'Buvi-bobolaring qalay?', ['are','is','am','be'], 'are')
    ],

    'A / An': [
        Q('He is ___ university professor.', 'U universitet professori.', ['a','an','the','is'], 'a'),
        Q('It is ___ hour drive from here.', 'Bu yerdan bir soatlik yo‘l.', ['a','an','the','is'], 'an'),
        Q('I have ___ umbrella and ___ book.', null, ['an / a','a / an','an / an','a / a'], 'an / a'),
        Q('She wants ___ orange and ___ banana.', null, ['an / a','a / an','an / an','a / a'], 'an / a'),
        Q('He is ___ honest and ___ intelligent student.', null, ['an / an','a / a','an / a','a / an'], 'an / an'),
        Q('It is ___ useful tool.', 'Bu foydali asbob. (“yu” tovushi)', ['a','an','the','is'], 'a'),
        Q('He is ___ 18-year-old boy.', 'U 18 yoshli bola. (eighteen — unli tovush)', ['an','a','the','is'], 'an'),
        Q('This is ___ unique idea.', 'Bu noyob fikr. (“yu” tovushi)', ['a','an','the','is'], 'a'),
        Q('We saw ___ elephant and ___ zebra.', null, ['an / a','a / an','an / an','a / a'], 'an / a'),
        Q('I saw ___ owl in the tree.', 'Daraxtda boyqushni ko‘rdim.', ['an','a','the','is'], 'an'),
        Q('It is ___ one-way street.', 'Bu bir tomonlama ko‘cha. (“wan” tovushi)', ['a','an','the','is'], 'a'),
        Q('Ali is ___ only child.', 'Ali yolg‘iz farzand. (“ou” tovushi)', ['an','a','the','is'], 'an')
    ],

    'This / That / These / Those': [
        Q('___ book in my hand is new, but ___ books on the shelf are old.', null, ['This / those','That / these','This / these','These / those'], 'This / those'),
        Q('___ are my friends over there.', 'Anavilar mening do‘stlarim.', ['Those','These','This','That'], 'Those'),
        Q('Is ___ your car in front of the shop? (uzoqda)', null, ['that','this','these','those'], 'that'),
        Q('Are ___ your keys here on the table? (yaqinda)', null, ['these','those','that','this'], 'these'),
        Q('Qaysi gapda xato bor?', null, ['These is my book.','Those are my shoes.','This is my pen.','That is her bag.'], 'These is my book.'),
        Q('Qaysi gapda xato bor?', null, ['That is my teachers.','Those are my teachers.','That is my teacher.','This is my teacher.'], 'That is my teachers.'),
        Q('Yaqindagi bitta narsa haqida so‘rash uchun qaysi savol to‘g‘ri?', null, ['What is this?','What are this?','What is these?','What are that?'], 'What is this?'),
        Q('Uzoqdagi bir nechta narsa haqida so‘rash uchun qaysi savol to‘g‘ri?', null, ['What are those?','What is those?','What are that?','What is these?'], 'What are those?'),
        Q('I like ___ shoes (yaqinda), but I don’t like ___ shoes (uzoqda).', null, ['these / those','those / these','this / that','these / that'], 'these / those'),
        Q('“Bu mening do‘stim” (yaqinda turibdi) inglizcha qanday?', null, ['This is my friend.','These is my friend.','That is my friends.','This are my friend.'], 'This is my friend.'),
        Q('“Anavilar mening kitoblarim” (uzoqda) inglizcha qanday?', null, ['Those are my books.','Those is my books.','That are my books.','These are my book.'], 'Those are my books.'),
        Q('___ is my house (uzoqda), and ___ is my school (yaqinda).', null, ['That / this','This / that','Those / these','These / those'], 'That / this')
    ],

    'Question Words': [
        Q('___ is the man over there? — He is my uncle.', 'Anavi odam kim?', ['Who','What','Where','When'], 'Who'),
        Q('___ is your exam? — On Monday.', 'Imtihoning qachon?', ['When','Where','Who','Why'], 'When'),
        Q('___ are you crying? — Because I am sad.', 'Nega yig‘layapsan?', ['Why','What','Who','Where'], 'Why'),
        Q('___ is he from? — He is from Japan.', 'U qayerdan?', ['Where','What','Who','Why'], 'Where'),
        Q('___ is your phone number?', 'Telefon raqaming nima?', ['What','Where','Who','When'], 'What'),
        Q('___ are the shops? — They are near the bank.', 'Do‘konlar qayerda?', ['Where','What','Who','Why'], 'Where'),
        Q('Qaysi savolga “Because I am tired” deb javob beriladi?', null, ['Why are you sleepy?','Where are you?','Who are you?','When are you free?'], 'Why are you sleepy?'),
        Q('Qaysi savolga “In July” deb javob beriladi?', null, ['When is your birthday?','Where is your birthday?','Who is your birthday?','Why is your birthday?'], 'When is your birthday?'),
        Q('Qaysi savolga “She is my mother” deb javob beriladi?', null, ['Who is she?','Where is she?','When is she?','Why is she?'], 'Who is she?'),
        Q('Qaysi savolga “At the bus stop” deb javob beriladi?', null, ['Where are you?','Who are you?','Why are you?','When are you?'], 'Where are you?'),
        Q('“Nega kechikding?” inglizcha qanday?', null, ['Why are you late?','What are you late?','Who are you late?','Where are you late?'], 'Why are you late?'),
        Q('___ old is your brother? — He is 15.', 'Akang necha yoshda?', ['How','What','Who','When'], 'How')
    ],

    'Prepositions of Place': [
        Q('The bank is ___ the cinema and the pharmacy.', 'Bank kinoteatr va dorixona orasida.', ['between','under','on','at'], 'between'),
        Q('The cat is hiding ___ the sofa.', 'Mushuk divan tagida yashiringan.', ['under','on','opposite','at'], 'under'),
        Q('The library is ___ the park, on the other side of the street.', 'Kutubxona parkning ro‘parasida, ko‘chaning narigi tomonida.', ['opposite','under','in','on'], 'opposite'),
        Q('There is a picture ___ the wall.', 'Devorda rasm bor.', ['on','in','under','between'], 'on'),
        Q('The keys are ___ my pocket.', 'Kalitlar cho‘ntagimda.', ['in','on','between','opposite'], 'in'),
        Q('The teacher is standing ___ the class, facing the students.', 'O‘qituvchi sinf oldida, o‘quvchilarga qarab turibdi.', ['in front of','behind','under','between'], 'in front of'),
        Q('Aziz sits ___ Ali. They are side by side.', 'Aziz Alining yonida o‘tiradi.', ['next to','under','opposite','between'], 'next to'),
        Q('The garden is ___ the house. You can’t see it from the street.', 'Bog‘ uyning orqasida.', ['behind','in front of','on','between'], 'behind'),
        Q('My house is ___ the school. It takes two minutes to walk.', 'Uyim maktabga yaqin.', ['near','under','between','on'], 'near'),
        Q('The students are ___ school now.', 'O‘quvchilar hozir maktabda.', ['at','under','between','behind'], 'at'),
        Q('She lives ___ Tashkent.', 'U Toshkentda yashaydi.', ['in','on','under','between'], 'in')
    ],

    'Time': [
        Q('“It’s twenty to seven” — soat nechchi?', null, ['6:40','7:20','6:20','7:40'], '6:40'),
        Q('“It’s twenty past nine” — soat nechchi?', null, ['9:20','8:40','9:40','10:20'], '9:20'),
        Q('Soat 8:40 inglizcha qanday aytiladi?', null, ['twenty to nine','twenty past eight','forty to eight','eight twenty'], 'twenty to nine'),
        Q('Soat 10:25 inglizcha qanday aytiladi?', null, ['twenty-five past ten','twenty-five to ten','twenty-five to eleven','ten twenty-five o’clock'], 'twenty-five past ten'),
        Q('Soat 11:35 inglizcha qanday aytiladi?', null, ['twenty-five to twelve','twenty-five past eleven','thirty-five to eleven','half past eleven'], 'twenty-five to twelve'),
        Q('“Five to six” — soat nechchi?', null, ['5:55','6:05','5:05','6:55'], '5:55'),
        Q('“Five past six” — soat nechchi?', null, ['6:05','5:55','5:05','6:55'], '6:05'),
        Q('“Half past twelve” — soat nechchi?', null, ['12:30','11:30','1:30','12:15'], '12:30'),
        Q('Soat 9:50 inglizcha qanday aytiladi?', null, ['ten to ten','ten past nine','fifty past nine','ten to nine'], 'ten to ten'),
        Q('Soat 1:05 inglizcha qanday aytiladi?', null, ['five past one','five to one','one past five','five to two'], 'five past one'),
        Q('Dars 8:15 da boshlanadi. Qaysi variant to‘g‘ri?', null, ['at quarter past eight','at quarter to eight','at half past eight','at eight to fifteen'], 'at quarter past eight'),
        Q('Qaysi ifoda noto‘g‘ri?', null, ['half to five','half past five','quarter past five','quarter to five'], 'half to five')
    ],

    'Past To Be': [
        Q('Last summer we ___ in Samarkand, and it ___ very hot.', null, ['were / was','was / were','were / were','was / was'], 'were / was'),
        Q('Yesterday my brother ___ ill, so my parents ___ at home.', null, ['was / were','were / was','was / was','were / were'], 'was / were'),
        Q('Where ___ you and Ali last night?', 'Kecha kechqurun sen va Ali qayerda edingiz?', ['were','was','are','is'], 'were'),
        Q('Who ___ your first teacher?', 'Birinchi o‘qituvching kim edi?', ['was','were','is','are'], 'was'),
        Q('The exam ___ not difficult, but the questions ___ long.', null, ['was / were','were / was','was / was','were / were'], 'was / were'),
        Q('Qaysi gapda xato bor?', null, ['I were at home.','You were late.','She was ill.','They were tired.'], 'I were at home.'),
        Q('Qaysi gapda xato bor?', null, ['We was in Tashkent.','It was cold.','He was a student.','You were right.'], 'We was in Tashkent.'),
        Q('“Sen kecha qayerda eding?” inglizcha qanday?', null, ['Where were you yesterday?','Where was you yesterday?','Where are you yesterday?','Where you were yesterday?'], 'Where were you yesterday?'),
        Q('Was she at school? — No, she ___.', null, ['wasn’t','weren’t','isn’t','aren’t'], 'wasn’t'),
        Q('Were they happy? — Yes, they ___.', null, ['were','was','are','is'], 'were'),
        Q('“Men kecha band emas edim” inglizcha qanday?', null, ['I wasn’t busy yesterday.','I weren’t busy yesterday.','I am not busy yesterday.','I not was busy yesterday.'], 'I wasn’t busy yesterday.'),
        Q('My grandparents ___ teachers when they ___ young.', null, ['were / were','was / were','were / was','was / was'], 'were / were')
    ],

    'Possessive Adjectives': [
        Q('Ali and ___ sister are in the garden. (Alining)', null, ['his','her','their','its'], 'his'),
        Q('Aziz and Dilya are talking to ___ teacher. (ularning)', null, ['their','them','they','theirs'], 'their'),
        Q('The bird is in ___ nest.', 'Qush o‘z uyasida.', ['its','it’s','his','their'], 'its'),
        Q('My brother has a dog. ___ name is Rex.', 'Akamning iti bor. Uning ismi Reks.', ['His','Her','Its','Their'], 'His'),
        Q('We are proud of ___ country.', 'Biz o‘z mamlakatimiz bilan faxrlanamiz.', ['our','ours','we','us'], 'our'),
        Q('Do you like ___ new school? (sening)', null, ['your','yours','you','my'], 'your'),
        Q('Qaysi gap to‘g‘ri?', null, ['This is their house.','This is there house.','This is they house.','This is theirs house.'], 'This is their house.'),
        Q('Qaysi gap to‘g‘ri?', null, ['The dog wags its tail.','The dog wags it’s tail.','The dog wags his’ tail.','The dog wags its’ tail.'], 'The dog wags its tail.'),
        Q('“It’s a nice day.” gapida “It’s” nimani anglatadi?', null, ['it is','uning (egalik)','ularning','bizning'], 'it is'),
        Q('Tom and I love ___ parents. (bizning)', null, ['our','their','my','ours'], 'our'),
        Q('You and your brother must clean ___ room. (sizlarning)', null, ['your','yours','you','our'], 'your'),
        Q('She forgot ___ keys, so he gave her ___ keys. (uning / uning-erkak)', null, ['her / his','his / her','her / her','his / his'], 'her / his')
    ],

    'Possessive Pronouns': [
        Q('This is my pen. That pen is ___. (seniki)', null, ['yours','your','you','mine'], 'yours'),
        Q('Is this Dilya’s bag? — Yes, it is ___.', null, ['hers','her','she','his'], 'hers'),
        Q('These aren’t our books. They are ___. (ularniki)', null, ['theirs','their','them','they'], 'theirs'),
        Q('My car is red. ___ is blue. (Alining mashinasi)', null, ['His','He','Him','Her'], 'His'),
        Q('Your phone is better than ___. (meniki)', null, ['mine','my','me','I'], 'mine'),
        Q('Qaysi gap to‘g‘ri?', null, ['This bag is hers.','This bag is her.','This bag is hers bag.','This bag is she.'], 'This bag is hers.'),
        Q('Qaysi gap to‘g‘ri?', null, ['That house is ours.','That house is our.','That ours house is big.','That is ours house.'], 'That house is ours.'),
        Q('Whose pen is this? — It’s ___. (menga tegishli)', null, ['mine','my','me','I'], 'mine'),
        Q('Whose books are these? — They’re ___. (bizga tegishli)', null, ['ours','our','we','us'], 'ours'),
        Q('Whose bag is that? — It’s ___. (Dilyaga tegishli)', null, ['hers','her','his','she'], 'hers'),
        Q('Our team is strong, but ___ is stronger. (ularniki)', null, ['theirs','their','them','they'], 'theirs'),
        Q('Is this coat ___? (sening) — No, it isn’t mine.', null, ['yours','your','you','mine'], 'yours')
    ],

    'Have Got / Has Got': [
        Q('My brother ___ got two cars.', 'Akamning ikkita mashinasi bor.', ['has','have','is','are'], 'has'),
        Q('My parents ___ got a big garden.', 'Ota-onamning katta bog‘i bor.', ['have','has','is','are'], 'have'),
        Q('Aziz and his sister ___ got a dog.', 'Aziz va singlisining iti bor.', ['have','has','is','are'], 'have'),
        Q('The house ___ got five rooms.', 'Uyning beshta xonasi bor.', ['has','have','is','are'], 'has'),
        Q('___ your teacher got a car?', 'O‘qituvchingning mashinasi bormi?', ['Has','Have','Is','Are'], 'Has'),
        Q('___ Ali and Vali got a computer?', 'Ali va Valida kompyuter bormi?', ['Have','Has','Are','Is'], 'Have'),
        Q('I ___ got a brother. I am the only child.', 'Mening akam yo‘q.', ['haven’t','hasn’t','am not','don’t'], 'haven’t'),
        Q('She ___ got a car. She goes by bus.', 'Uning mashinasi yo‘q.', ['hasn’t','haven’t','isn’t','doesn’t'], 'hasn’t'),
        Q('Qaysi gap to‘g‘ri?', null, ['She hasn’t got a phone.','She haven’t got a phone.','She hasn’t have a phone.','She doesn’t got a phone.'], 'She hasn’t got a phone.'),
        Q('Qaysi gap to‘g‘ri?', null, ['They have got a big family.','They has got a big family.','They have get a big family.','They got have a big family.'], 'They have got a big family.'),
        Q('Has he got a sister? — No, he ___.', null, ['hasn’t','haven’t','isn’t','doesn’t'], 'hasn’t'),
        Q('Have they got a car? — Yes, they ___.', null, ['have','has','are','do'], 'have')
    ]
};
