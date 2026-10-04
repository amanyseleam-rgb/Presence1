const DB_KEY = "attendanceDB";

function getSeedDatabase() {
    return {
        directorates: [
            { id: 1, name: "الدقهلية" }
        ],
        administrations: [
            { id: 1, name: "ميت غمر", directorateId: 1 }
        ],
        schools: [
            { id: 1, name: "السادات الابتدائية بميت غمر", administrationId: 1 }
        ],
        grades: [
            { id: 1, name: "الصف الأول", level: 1 },
            { id: 2, name: "الصف الثاني", level: 2 },
            { id: 3, name: "الصف الثالث", level: 3 },
            { id: 4, name: "الصف الرابع", level: 4 },
            { id: 5, name: "الصف الخامس", level: 5 },
            { id: 6, name: "الصف السادس", level: 6 }
        ],
        classes: [
            { id: 1, name: "1/2", gradeId: 2, schoolId: 1, year: "2025-2026" },
            { id: 2, name: "1/3", gradeId: 3, schoolId: 1, year: "2025-2026" },
            { id: 3, name: "2/3", gradeId: 3, schoolId: 1, year: "2025-2026" },
            { id: 4, name: "1/4", gradeId: 4, schoolId: 1, year: "2025-2026" },
            { id: 5, name: "2/4", gradeId: 4, schoolId: 1, year: "2025-2026" },
            { id: 6, name: "2/5", gradeId: 5, schoolId: 1, year: "2025-2026" },
            { id: 7, name: "3/5", gradeId: 5, schoolId: 1, year: "2025-2026" },
            { id: 8, name: "1/6", gradeId: 6, schoolId: 1, year: "2025-2026" },
            { id: 9, name: "2/6", gradeId: 6, schoolId: 1, year: "2025-2026" },
            { id: 10, name: "3/6", gradeId: 6, schoolId: 1, year: "2025-2026" },
            { id: 11, name: "1/1", gradeId: 1, schoolId: 1, year: "2025-2026" },
            { id: 12, name: "22/1", gradeId: 1, schoolId: 1, year: "2025-2026" },
            { id: 13, name: "2/2", gradeId: 2, schoolId: 1, year: "2025-2026" },
            { id: 14, name: "3/3", gradeId: 3, schoolId: 1, year: "2025-2026" },
            { id: 15, name: "1/5", gradeId: 5, schoolId: 1, year: "2025-2026" },
            { id: 16, name: "3/4", gradeId: 4, schoolId: 1, year: "2025-2026" }
        ],
        students: [
            // ===== 1. الصف الثاني - فصل 1/2 (47 طالب) =====
            { id: 1, nationalId: "507951259", name: "احمد ابراهيم رأفت ابراهیم احمد ابراهیم", classId: 1, gender: "ذكر" },
            { id: 2, nationalId: "507768071", name: "احمد محمد صلاح عبد الله عبد الدايم احمد", classId: 1, gender: "ذكر" },
            { id: 3, nationalId: "501800359", name: "احمد محمد فتحى غريب حسن العليمي", classId: 1, gender: "ذكر" },
            { id: 4, nationalId: "508125586", name: "احمد محمود عبد الباسط احمد عبد الرحمن", classId: 1, gender: "ذكر" },
            { id: 5, nationalId: "507779203", name: "احمد وائل السعيد محمد حسن رجب", classId: 1, gender: "ذكر" },
            { id: 6, nationalId: "502384322", name: "آدم محمد محمد محمد حلمی صرموح", classId: 1, gender: "ذكر" },
            { id: 7, nationalId: "506468237", name: "اسر احمد ادهم احمد", classId: 1, gender: "ذكر" },
            { id: 8, nationalId: "507099614", name: "أمير محمد مطيع شعبان السيد سليم", classId: 1, gender: "ذكر" },
            { id: 9, nationalId: "507393741", name: "أنص أحمد حسنين أحمد محمد أبو العلا مراد", classId: 1, gender: "ذكر" },
            { id: 10, nationalId: "507952140", name: "أنص محمد فتحي الجوهري إبراهيم الجيزاوي", classId: 1, gender: "ذكر" },
            { id: 11, nationalId: "507768040", name: "اياد خالد ناصر سيد احمد الشهابي", classId: 1, gender: "ذكر" },
            { id: 12, nationalId: "507768014", name: "بدر رضا السيد السعيد السيد شحاته", classId: 1, gender: "ذكر" },
            { id: 13, nationalId: "507768004", name: "حسام الدين احمد سامی محمد علي الرشيدي", classId: 1, gender: "ذكر" },
            { id: 14, nationalId: "507768036", name: "حمزة شادى عبد اللطيف أمين عبد الفتاح", classId: 1, gender: "ذكر" },
            { id: 15, nationalId: "507768045", name: "حمزة محمد عزت زكى حسن الطواب", classId: 1, gender: "ذكر" },
            { id: 16, nationalId: "507768002", name: "رحيم كريم عبد العزيز محمد السايح", classId: 1, gender: "ذكر" },
            { id: 17, nationalId: "507921895", name: "رحيم محمد رضا محمد محمود شحاته مطر", classId: 1, gender: "ذكر" },
            { id: 18, nationalId: "507768119", name: "زين ابراهيم احمد محمد محمد حسين", classId: 1, gender: "ذكر" },
            { id: 19, nationalId: "506103673", name: "ساجد احمد سمير احمد", classId: 1, gender: "ذكر" },
            { id: 20, nationalId: "506568077", name: "سعد احمد سعد احمد عبد الباقي", classId: 1, gender: "ذكر" },
            { id: 21, nationalId: "506467531", name: "سليم محمد احمد محمد جاد", classId: 1, gender: "ذكر" },
            { id: 22, nationalId: "507921944", name: "عادل السيد عادل عبد العزيز السيد", classId: 1, gender: "ذكر" },
            { id: 23, nationalId: "506295737", name: "عدي محمد محسن ابراهيم", classId: 1, gender: "ذكر" },
            { id: 24, nationalId: "507779178", name: "كريم حسام ابراهيم مصطفى سليم شلضم", classId: 1, gender: "ذكر" },
            { id: 25, nationalId: "504429681", name: "محمد ابراهيم زكريا ابراهيم حسانين ابراهيم", classId: 1, gender: "ذكر" },
            { id: 26, nationalId: "507966490", name: "أروى شعبان جابر محمد السيد", classId: 1, gender: "أنثى" },
            { id: 27, nationalId: "508163812", name: "اسماء مصطفى عبد الشافي ابراهيم عبد", classId: 1, gender: "أنثى" },
            { id: 28, nationalId: "507966792", name: "آيات احمد احمد احمد على", classId: 1, gender: "أنثى" },
            { id: 29, nationalId: "507767975", name: "تالا مصطفى السيد محمد مصطفى الشناوي", classId: 1, gender: "أنثى" },
            { id: 30, nationalId: "507767623", name: "تاليا اسلام أحمد السيد محمد عليوة", classId: 1, gender: "أنثى" },
            { id: 31, nationalId: "507767643", name: "تبارك محمد عبد الفتاح أنور محمد عبد", classId: 1, gender: "أنثى" },
            { id: 32, nationalId: "507034413", name: "تلا محمد مجدي فتحي الشحات الشهابي", classId: 1, gender: "أنثى" },
            { id: 33, nationalId: "507767973", name: "تمارا مصطفى السيد محمد مصطفى", classId: 1, gender: "أنثى" },
            { id: 34, nationalId: "506568579", name: "جنة محمود محمد محمود يوسف", classId: 1, gender: "أنثى" },
            { id: 35, nationalId: "506773326", name: "حبيبة احمد ابوبكر سيد احمد", classId: 1, gender: "أنثى" },
            { id: 36, nationalId: "504255016", name: "حور ابراهيم زكريا ابراهيم", classId: 1, gender: "أنثى" },
            { id: 37, nationalId: "507767986", name: "حياة حسام نبيل عطيه رمضان", classId: 1, gender: "أنثى" },
            { id: 38, nationalId: "507779195", name: "دعاء جلال حمدي محمد على عاشور", classId: 1, gender: "أنثى" },
            { id: 39, nationalId: "507767978", name: "روفان شريف طارق متولي زعبل", classId: 1, gender: "أنثى" },
            { id: 40, nationalId: "507779184", name: "ريتاج وائل جوده عوض عبد الرحمن", classId: 1, gender: "أنثى" },
            { id: 41, nationalId: "507767665", name: "ساندى رضا حسن عبد العظيم عمر الملاح", classId: 1, gender: "أنثى" },
            { id: 42, nationalId: "504330977", name: "سجده السيد محمود عماره يوسف جعفر", classId: 1, gender: "أنثى" },
            { id: 43, nationalId: "506725840", name: "سجده خالد محمد السيد", classId: 1, gender: "أنثى" },
            { id: 44, nationalId: "507767985", name: "سجده محمد عبد الرؤوف حسنين حمودة", classId: 1, gender: "أنثى" },
            { id: 45, nationalId: "502160731", name: "سجده يحيى محمد محمد حسن المغربل", classId: 1, gender: "أنثى" },
            { id: 46, nationalId: "504334589", name: "فلومينا فادي نادر معوض غطاس", classId: 1, gender: "أنثى" },
            { id: 47, nationalId: "510525711", name: "مسك محمد عبد الرحمن احمد مصطفى", classId: 1, gender: "أنثى" },

            // ===== 2. الصف الثالث - فصل 1/3 (37 طالب) =====
            { id: 48, nationalId: "503477796", name: "ابراهيم خالد ابراهيم محمود", classId: 2, gender: "ذكر" },
            { id: 49, nationalId: "493523755", name: "أحمد تامر محمد حسن سليمان محمد على", classId: 2, gender: "ذكر" },
            { id: 50, nationalId: "495896625", name: "احمد كمال احمد كمال محمد مصطفي النمر", classId: 2, gender: "ذكر" },
            { id: 51, nationalId: "504487640", name: "احمد محمد فتحى عبد الرحمن", classId: 2, gender: "ذكر" },
            { id: 52, nationalId: "503103085", name: "آدم احمد ابراهیم محمد", classId: 2, gender: "ذكر" },
            { id: 53, nationalId: "504317667", name: "ادم محمود عصام محمد", classId: 2, gender: "ذكر" },
            { id: 54, nationalId: "502669333", name: "اسامة طة اسامة مصطفي", classId: 2, gender: "ذكر" },
            { id: 55, nationalId: "502206045", name: "آسر أحمد رفعت محمد حسانين حطبه", classId: 2, gender: "ذكر" },
            { id: 56, nationalId: "502527761", name: "اشرف احمد عبد المنعم عبد العال احمد", classId: 2, gender: "ذكر" },
            { id: 57, nationalId: "503296837", name: "السيد محمود السيد منصور السيد البلاصي", classId: 2, gender: "ذكر" },
            { id: 58, nationalId: "504531249", name: "الفايد تامر السيد محمد", classId: 2, gender: "ذكر" },
            { id: 59, nationalId: "497111812", name: "جهاد ابراهيم محمد محمد عبدالعزيز فتح", classId: 2, gender: "ذكر" },
            { id: 60, nationalId: "504330691", name: "حسام اسامه السعيد فرحات", classId: 2, gender: "ذكر" },
            { id: 61, nationalId: "497300409", name: "حمزة محمد سمير احمد خليل", classId: 2, gender: "ذكر" },
            { id: 62, nationalId: "503073972", name: "حمزة مصطفي عادل فهمي الباز عبد الباقي", classId: 2, gender: "ذكر" },
            { id: 63, nationalId: "502724185", name: "رابح مصطفى محمد عبد اللطيف محمد عبد", classId: 2, gender: "ذكر" },
            { id: 64, nationalId: "503722584", name: "رأفت ابراهیم رافت ابراهیم", classId: 2, gender: "ذكر" },
            { id: 65, nationalId: "504572753", name: "رحيم محمد صبحی محمود", classId: 2, gender: "ذكر" },
            { id: 66, nationalId: "505907263", name: "رضا ابراهيم رضا حامد أبو زيد شحاته", classId: 2, gender: "ذكر" },
            { id: 67, nationalId: "504440530", name: "فيلوباتير ميلاد صبرى حلمى صليب", classId: 2, gender: "ذكر" },
            { id: 68, nationalId: "503897185", name: "محمد محمد الشحات عطيه", classId: 2, gender: "ذكر" },
            { id: 69, nationalId: "502179935", name: "أمل ابراهيم فؤاد سليمان السيد عبدالغني", classId: 2, gender: "أنثى" },
            { id: 70, nationalId: "504547180", name: "أمل احمد يسري محمود سيد احمد رزق", classId: 2, gender: "أنثى" },
            { id: 71, nationalId: "504620625", name: "تبارك حسن مصطفى حسن رمضان", classId: 2, gender: "أنثى" },
            { id: 72, nationalId: "503814395", name: "جنة صلاح عبد الموجود ابو مسلم", classId: 2, gender: "أنثى" },
            { id: 73, nationalId: "503129252", name: "جنه محمود محمد فتحي معوض أبو العلا", classId: 2, gender: "أنثى" },
            { id: 74, nationalId: "504064844", name: "حبيبه على حسن على", classId: 2, gender: "أنثى" },
            { id: 75, nationalId: "504360048", name: "رودينا مجدي محمود محمد", classId: 2, gender: "أنثى" },
            { id: 76, nationalId: "504561687", name: "رودينا محمد عبد الحميد عبد الحميد", classId: 2, gender: "أنثى" },
            { id: 77, nationalId: "504440403", name: "ريماس محمد السعيد مصطفي", classId: 2, gender: "أنثى" },
            { id: 78, nationalId: "504617076", name: "ريماس ناجى سمير الدسوقي على", classId: 2, gender: "أنثى" },
            { id: 79, nationalId: "504589298", name: "زينب محمد فتحى فتوح محمد", classId: 2, gender: "أنثى" },
            { id: 80, nationalId: "503772760", name: "ساميه هانی محمد متولی", classId: 2, gender: "أنثى" },
            { id: 81, nationalId: "504068560", name: "سجده رامي السيد ابراهيم", classId: 2, gender: "أنثى" },
            { id: 82, nationalId: "505259781", name: "سجي محمود زين العابدين محمود", classId: 2, gender: "أنثى" },
            { id: 83, nationalId: "497368690", name: "فيلومينا شوقي شكري شوقي ميخائيل", classId: 2, gender: "أنثى" },
            { id: 84, nationalId: "503685006", name: "مليكه طارق الطنطاوي عبد الفتاح", classId: 2, gender: "أنثى" },

            // ===== 3. الصف الثالث - فصل 2/3 (37 طالب) =====
            { id: 85, nationalId: "504572706", name: "زين محمود مختار رياض", classId: 3, gender: "ذكر" },
            { id: 86, nationalId: "504556374", name: "سمير محمد زكريا السيد", classId: 3, gender: "ذكر" },
            { id: 87, nationalId: "503216218", name: "شريف سامح عادل فتحى محمود ابو ورده", classId: 3, gender: "ذكر" },
            { id: 88, nationalId: "503814126", name: "عبد الرحمن محمود عبد الرحمن ذهب", classId: 3, gender: "ذكر" },
            { id: 89, nationalId: "503092961", name: "عبد الرؤف محمد عبدالرؤف حسنين", classId: 3, gender: "ذكر" },
            { id: 90, nationalId: "504554167", name: "على ايمن السيد عز الدين", classId: 3, gender: "ذكر" },
            { id: 91, nationalId: "503721134", name: "علي محمد علي العرباوي", classId: 3, gender: "ذكر" },
            { id: 92, nationalId: "503620343", name: "عمر عزالدین احمد عزالدین", classId: 3, gender: "ذكر" },
            { id: 93, nationalId: "497619918", name: "عمر محمد اسماعيل ذكي السيد السعيد", classId: 3, gender: "ذكر" },
            { id: 94, nationalId: "503611480", name: "عمر محمد السيد الدسوقي", classId: 3, gender: "ذكر" },
            { id: 95, nationalId: "503093924", name: "عمرو احمد عمرو ابراهيم محمد السيد", classId: 3, gender: "ذكر" },
            { id: 96, nationalId: "504502400", name: "عمرو محمد عبد العظيم على", classId: 3, gender: "ذكر" },
            { id: 97, nationalId: "504071610", name: "فارس السيد عبد الستار السيد", classId: 3, gender: "ذكر" },
            { id: 98, nationalId: "503814957", name: "كريم عبد العظيم احمد عبد المجيد", classId: 3, gender: "ذكر" },
            { id: 99, nationalId: "505907257", name: "ماجد مهاب شريف محمد عباس حسام الدين", classId: 3, gender: "ذكر" },
            { id: 100, nationalId: "503371271", name: "مازن بلال سمير سعد", classId: 3, gender: "ذكر" },
            { id: 101, nationalId: "504064025", name: "مازن عبد العظيم محمد سعد الدين", classId: 3, gender: "ذكر" },
            { id: 102, nationalId: "503813559", name: "مازن محمد على السيد", classId: 3, gender: "ذكر" },
            { id: 103, nationalId: "503147771", name: "مازن يوسف ايمن اسماعيل", classId: 3, gender: "ذكر" },
            { id: 104, nationalId: "502172457", name: "مالك محمود عادل محمد احمد عامر", classId: 3, gender: "ذكر" },
            { id: 105, nationalId: "504248140", name: "مجدى محمد وجدى توفيق عوض متولى", classId: 3, gender: "ذكر" },
            { id: 106, nationalId: "503609708", name: "محمد احمد السعيد عمر", classId: 3, gender: "ذكر" },
            { id: 107, nationalId: "503294690", name: "محمد احمد عبدالهادي السيد السيد", classId: 3, gender: "ذكر" },
            { id: 108, nationalId: "501480158", name: "محمد كريم عزب توفيق", classId: 3, gender: "ذكر" },
            { id: 109, nationalId: "504567469", name: "سماح ابراهيم محمد ابراهيم", classId: 3, gender: "أنثى" },
            { id: 110, nationalId: "504577194", name: "فاطمه احمد ابراهيم ابراهيم", classId: 3, gender: "أنثى" },
            { id: 111, nationalId: "505907204", name: "فرحه احمد ابراهيم شعبان ابراهيم", classId: 3, gender: "أنثى" },
            { id: 112, nationalId: "503316007", name: "فريدة محمد التونسي مصطفى السيد حمزة", classId: 3, gender: "أنثى" },
            { id: 113, nationalId: "503614294", name: "كنده احمد محمد محمد", classId: 3, gender: "أنثى" },
            { id: 114, nationalId: "504632090", name: "كنده نور محمد نور الدين محمد", classId: 3, gender: "أنثى" },
            { id: 115, nationalId: "504599781", name: "كنزى امين رجب امين رجب النشار", classId: 3, gender: "أنثى" },
            { id: 116, nationalId: "503813843", name: "مرام محمد حسن عبد المقصود ابراهيم", classId: 3, gender: "أنثى" },
            { id: 117, nationalId: "497373094", name: "مريم شريف عبد الفتاح محمود الدسوقى", classId: 3, gender: "أنثى" },
            { id: 118, nationalId: "504266358", name: "مريم عمرو عبد المطلب علي علي حلاوه", classId: 3, gender: "أنثى" },
            { id: 119, nationalId: "503621022", name: "مكة السيد عمر السيد", classId: 3, gender: "أنثى" },
            { id: 120, nationalId: "502179980", name: "مكه احمد احمد مصطفى عبدالله محمد", classId: 3, gender: "أنثى" },
            { id: 121, nationalId: "504494092", name: "هناهم محمد شحتو محمد أسعد شحاته عبد", classId: 3, gender: "أنثى" },

            // ===== 4. الصف الرابع - فصل 1/4 (44 طالب) =====
            { id: 122, nationalId: "495118100", name: "ابراهيم مصطفي إبراهيم مصطفي عطيه", classId: 4, gender: "ذكر" },
            { id: 123, nationalId: "498744581", name: "احمد خالد حسن ابراهیم", classId: 4, gender: "ذكر" },
            { id: 124, nationalId: "502092035", name: "احمد رمضان محمود محمد حسن", classId: 4, gender: "ذكر" },
            { id: 125, nationalId: "494089896", name: "أحمد علاء عبد النبي السيد المرسى الزنفلى", classId: 4, gender: "ذكر" },
            { id: 126, nationalId: "502094064", name: "ادم احمد سعيد مصطفى محمد النمر", classId: 4, gender: "ذكر" },
            { id: 127, nationalId: "498793006", name: "آدم ايمن رفعت عامر السيد عامر", classId: 4, gender: "ذكر" },
            { id: 128, nationalId: "501975924", name: "ادم حسن مصطفى حسيني حسن طراد", classId: 4, gender: "ذكر" },
            { id: 129, nationalId: "501975983", name: "ادم عبد الحميد حسن عبد الحميد عثمان حسن", classId: 4, gender: "ذكر" },
            { id: 130, nationalId: "502142946", name: "ادهام احمد صبحى محمد اسماعيل عبد الله", classId: 4, gender: "ذكر" },
            { id: 131, nationalId: "499059974", name: "آسر احمد محمد طارق رفاعی محمد ابراهیم", classId: 4, gender: "ذكر" },
            { id: 132, nationalId: "497655024", name: "آسر الجوهرى ابراهيم الجوهري بشير", classId: 4, gender: "ذكر" },
            { id: 133, nationalId: "502276683", name: "آسر حسن محمد محمد", classId: 4, gender: "ذكر" },
            { id: 134, nationalId: "502143534", name: "اكرامي تامر حسانين عبد الله الكيلاني حسانين", classId: 4, gender: "ذكر" },
            { id: 135, nationalId: "502093705", name: "السعيد اسامه السعيد فرحات احمد", classId: 4, gender: "ذكر" },
            { id: 136, nationalId: "502092418", name: "اندرو ايهاب عطيه موسي عبد الباقى موسى", classId: 4, gender: "ذكر" },
            { id: 137, nationalId: "501976250", name: "جهاد احمد احمد محمد محمد رضوان", classId: 4, gender: "ذكر" },
            { id: 138, nationalId: "505617769", name: "خالد ابراهيم عبد الله زكى عثمان", classId: 4, gender: "ذكر" },
            { id: 139, nationalId: "501717871", name: "رفعت محمد رفعت محمد السيد حجازي", classId: 4, gender: "ذكر" },
            { id: 140, nationalId: "496015497", name: "زياد احمد ابوطلاس سعد", classId: 4, gender: "ذكر" },
            { id: 141, nationalId: "502091422", name: "زياد سامح سيد احمد عبد الهادي عباده", classId: 4, gender: "ذكر" },
            { id: 142, nationalId: "502102199", name: "ساجد اسلام عبد الفتاح ابراهيم خالد", classId: 4, gender: "ذكر" },
            { id: 143, nationalId: "502142196", name: "سيف الله محمد عبد المنعم سعد حافظ", classId: 4, gender: "ذكر" },
            { id: 144, nationalId: "500670655", name: "كيرلس علاء عوني اسعد", classId: 4, gender: "ذكر" },
            { id: 145, nationalId: "500933199", name: "اسماء علي ايمن علي السيد مرزوق", classId: 4, gender: "أنثى" },
            { id: 146, nationalId: "502188069", name: "اسيل طلعت محمود محمد حسين", classId: 4, gender: "أنثى" },
            { id: 147, nationalId: "502177634", name: "الاء محمود عبد اللطيف عبد الله محمد جابر", classId: 4, gender: "أنثى" },
            { id: 148, nationalId: "493711276", name: "بسمله متولى على محمد احمد شرف الدين", classId: 4, gender: "أنثى" },
            { id: 149, nationalId: "502033149", name: "جنا باسم رجب حسين حافظ محمد", classId: 4, gender: "أنثى" },
            { id: 150, nationalId: "501329561", name: "جنة محمود عبد الحي معوض سلامة", classId: 4, gender: "أنثى" },
            { id: 151, nationalId: "498100617", name: "جودى احمد سامح مصطفى مصطفى الملا", classId: 4, gender: "أنثى" },
            { id: 152, nationalId: "502869379", name: "جودى عصام ابراهيم عبد الفتاح عبد العزيز", classId: 4, gender: "أنثى" },
            { id: 153, nationalId: "502188503", name: "جورى هيثم عصام كمال محمد محمود", classId: 4, gender: "أنثى" },
            { id: 154, nationalId: "501925719", name: "جيوتی محمد رضا احمد محمد ابوحشيش", classId: 4, gender: "أنثى" },
            { id: 155, nationalId: "501976444", name: "حنين رامي محمد محمد محمد ندا", classId: 4, gender: "أنثى" },
            { id: 156, nationalId: "498652167", name: "حنين محمد احمد محمد", classId: 4, gender: "أنثى" },
            { id: 157, nationalId: "502188729", name: "دعاء محمد سعد على السيد سريل", classId: 4, gender: "أنثى" },
            { id: 158, nationalId: "502188820", name: "دعاء محمود رياض ابراهيم السيد", classId: 4, gender: "أنثى" },
            { id: 159, nationalId: "500953458", name: "دهب محمد محمود ابراهيم محمود الالفى", classId: 4, gender: "أنثى" },
            { id: 160, nationalId: "502177747", name: "دينا محمد زكريا السيد عوض طاحون", classId: 4, gender: "أنثى" },
            { id: 161, nationalId: "502188615", name: "راويه محمد السيد عيد السيد الدرولي", classId: 4, gender: "أنثى" },
            { id: 162, nationalId: "502177860", name: "رحمه احمد ابراهیم احمد قاسم ابو نشوق", classId: 4, gender: "أنثى" },
            { id: 163, nationalId: "501976106", name: "رقية صابر رضا محمد معوض يونس", classId: 4, gender: "أنثى" },
            { id: 164, nationalId: "496591830", name: "رقيه عصام فتحى عبد الحميد احمد البعلوطي", classId: 4, gender: "أنثى" },
            { id: 165, nationalId: "500956385", name: "مريم ابانوب باسليى ابراهيم صادق", classId: 4, gender: "أنثى" },

            // ===== 5. الصف الرابع - فصل 2/4 (42 طالب) =====
            { id: 166, nationalId: "502091711", name: "صلاح محمد صلاح فتحى على الديب", classId: 5, gender: "ذكر" },
            { id: 167, nationalId: "502148181", name: "صلاح محمد محمود عثمان حسانين", classId: 5, gender: "ذكر" },
            { id: 168, nationalId: "498904681", name: "عادل ايهاب احمد محمد محمد الدقادوس", classId: 5, gender: "ذكر" },
            { id: 169, nationalId: "496575481", name: "عدي محمد السيد شفيق الدقادوس", classId: 5, gender: "ذكر" },
            { id: 170, nationalId: "494089830", name: "علاء احمد عبد النبى السيد المرسى الزنفلى", classId: 5, gender: "ذكر" },
            { id: 171, nationalId: "501009105", name: "على محمد عبد العظيم على محمد ابو ال", classId: 5, gender: "ذكر" },
            { id: 172, nationalId: "500687973", name: "علي وليد علي ذكي إبراهيم عيد", classId: 5, gender: "ذكر" },
            { id: 173, nationalId: "502102614", name: "عماد مسعد عماد سعد مصطفى السنطاوى", classId: 5, gender: "ذكر" },
            { id: 174, nationalId: "501972985", name: "عمر طه رفعت محمود محمد ابو سقيرة", classId: 5, gender: "ذكر" },
            { id: 175, nationalId: "502145692", name: "عونى خالد عوني محمد بركات", classId: 5, gender: "ذكر" },
            { id: 176, nationalId: "500744807", name: "فارس طارق محسن زغلول سعد الدين", classId: 5, gender: "ذكر" },
            { id: 177, nationalId: "501976183", name: "فتحي محمد فتحي كمال السيد مرزوق", classId: 5, gender: "ذكر" },
            { id: 178, nationalId: "501976352", name: "مازن احمد محمد عاطف احمد سليم سعدون", classId: 5, gender: "ذكر" },
            { id: 179, nationalId: "501973607", name: "مالك حسام رضا عز الرجال الحسيني السيد", classId: 5, gender: "ذكر" },
            { id: 180, nationalId: "494127838", name: "مالك محمد حامد صديق شاهين", classId: 5, gender: "ذكر" },
            { id: 181, nationalId: "502034366", name: "مجدى احمد مجدى الشحات محمد محمد", classId: 5, gender: "ذكر" },
            { id: 182, nationalId: "502100783", name: "محمد ابراهيم حسنى ابراهيم على", classId: 5, gender: "ذكر" },
            { id: 183, nationalId: "501973167", name: "محمد احمد عادل محمد معتمد ابراهيم احمد", classId: 5, gender: "ذكر" },
            { id: 184, nationalId: "499280217", name: "محمد احمد عنتر معروف محمد", classId: 5, gender: "ذكر" },
            { id: 185, nationalId: "500814298", name: "محمد اشرف صلاح محمود السيد احمد", classId: 5, gender: "ذكر" },
            { id: 186, nationalId: "502690277", name: "محمد حمدى لطفي احمد اسماعيل ابوالنجا", classId: 5, gender: "ذكر" },
            { id: 187, nationalId: "500943361", name: "محمد عبد الحميد محمد العوضي عبد الحميد", classId: 5, gender: "ذكر" },
            { id: 188, nationalId: "496576641", name: "يوسف عبد الحميد عبدالعظيم محمد", classId: 5, gender: "ذكر" },
            { id: 189, nationalId: "500977813", name: "رفيف مصطفي زكريا عبد الستار عبد الحميد", classId: 5, gender: "أنثى" },
            { id: 190, nationalId: "502189573", name: "رهف محمد ابراهيم جلال عوض احمد", classId: 5, gender: "أنثى" },
            { id: 191, nationalId: "501974231", name: "رودينا احمد محمد علی محمد حسن", classId: 5, gender: "أنثى" },
            { id: 192, nationalId: "502187934", name: "روفان السعيد محمد السعيد محمد شبكه", classId: 5, gender: "أنثى" },
            { id: 193, nationalId: "502031704", name: "روفان محمود مختار رياض عبد الرحمن بشر", classId: 5, gender: "أنثى" },
            { id: 194, nationalId: "502034066", name: "رويدا محمود السيد محمد متولى زعير", classId: 5, gender: "أنثى" },
            { id: 195, nationalId: "502187741", name: "ريتاج عرفات على السعيد على العشماوى", classId: 5, gender: "أنثى" },
            { id: 196, nationalId: "502032318", name: "ريتال السيد سمير السيد يوسف الحلاواني", classId: 5, gender: "أنثى" },
            { id: 197, nationalId: "501249868", name: "سجدة السيد متولي عبد النبي", classId: 5, gender: "أنثى" },
            { id: 198, nationalId: "501976488", name: "سجده محمد نبيل عطيه محمد رمضان", classId: 5, gender: "أنثى" },
            { id: 199, nationalId: "502188401", name: "سدرة محمد محمد السعيد محمد عبد الرحمن", classId: 5, gender: "أنثى" },
            { id: 200, nationalId: "502189420", name: "سدره كمال عبد العزيز الدسوقى الشاذلي", classId: 5, gender: "أنثى" },
            { id: 201, nationalId: "494087157", name: "سولاف حماده طارق حسن على خليفة", classId: 5, gender: "أنثى" },
            { id: 202, nationalId: "502177989", name: "سيدرا بسام عادل عبد الحميد عبوده على", classId: 5, gender: "أنثى" },
            { id: 203, nationalId: "501976401", name: "سيلا حسام ابو سيف علي ابراهيم على البوز", classId: 5, gender: "أنثى" },
            { id: 204, nationalId: "502177917", name: "شاديه محمد حسن محمد حسن البنا", classId: 5, gender: "أنثى" },
            { id: 205, nationalId: "498679563", name: "شهد اسماعيل احمد ابراهيم", classId: 5, gender: "أنثى" },
            { id: 206, nationalId: "502034010", name: "فاطمه محمود عصام محمد محمود شومان", classId: 5, gender: "أنثى" },
            { id: 207, nationalId: "502033045", name: "فريدة وليد ممتاز محمد نصر سليمان", classId: 5, gender: "أنثى" },

            // ===== 6. الصف الخامس - فصل 2/5 (48 طالب) =====
            { id: 208, nationalId: "490629797", name: "اسر محمد مطيع شعبان السيد سليم", classId: 6, gender: "ذكر" },
            { id: 209, nationalId: "495521898", name: "جلال انور حمدي محمد علي عاشور", classId: 6, gender: "ذكر" },
            { id: 210, nationalId: "497687885", name: "حمدي انور حمدي محمد علي عاشور", classId: 6, gender: "ذكر" },
            { id: 211, nationalId: "495974912", name: "عزت محمد عزت زكي حسن الطواب", classId: 6, gender: "ذكر" },
            { id: 212, nationalId: "493795217", name: "على ايهاب عبد الله سعيد ابو العلا عاشور", classId: 6, gender: "ذكر" },
            { id: 213, nationalId: "495823178", name: "على سعيد فوزى السعيد شعبان بدير", classId: 6, gender: "ذكر" },
            { id: 214, nationalId: "495608359", name: "على صلاح على العشماوى", classId: 6, gender: "ذكر" },
            { id: 215, nationalId: "497443329", name: "عمر عبد العظيم رأفت السيد رجب عنيبه", classId: 6, gender: "ذكر" },
            { id: 216, nationalId: "494403366", name: "عمرو محمد محمد علي", classId: 6, gender: "ذكر" },
            { id: 217, nationalId: "496987941", name: "فارس احمد مصطفى عبد العزيز محمد", classId: 6, gender: "ذكر" },
            { id: 218, nationalId: "497441348", name: "فارس محمد سعد عبد الرازق احمد فرج", classId: 6, gender: "ذكر" },
            { id: 219, nationalId: "495767940", name: "مازن ابراهيم مجدي محمد", classId: 6, gender: "ذكر" },
            { id: 220, nationalId: "497354333", name: "مازن محمود رافت عبد المجيد محمد محمود", classId: 6, gender: "ذكر" },
            { id: 221, nationalId: "497690815", name: "مالك طه سعيد حامد عبد الله الرادعي", classId: 6, gender: "ذكر" },
            { id: 222, nationalId: "497441656", name: "مالك محمد احمد عطا طنطاوى عطا", classId: 6, gender: "ذكر" },
            { id: 223, nationalId: "495576815", name: "مالك نادر فؤاد شريف", classId: 6, gender: "ذكر" },
            { id: 224, nationalId: "505907161", name: "متولي احمد متولى العليمي", classId: 6, gender: "ذكر" },
            { id: 225, nationalId: "497434854", name: "متولى محمد متولى حسانين السيد جواد", classId: 6, gender: "ذكر" },
            { id: 226, nationalId: "495122855", name: "محمد احمد محمد السيد محمد موافي", classId: 6, gender: "ذكر" },
            { id: 227, nationalId: "497439284", name: "محمد احمد مسعد احمد العزب ابوالخير", classId: 6, gender: "ذكر" },
            { id: 228, nationalId: "497200508", name: "محمد احمد يسرى محمود سيد احمد رزق", classId: 6, gender: "ذكر" },
            { id: 229, nationalId: "497440708", name: "محمد السيد حافظ على حافظ الشعار", classId: 6, gender: "ذكر" },
            { id: 230, nationalId: "497440787", name: "محمد ايمن جمال عبد الرحمن السباعي", classId: 6, gender: "ذكر" },
            { id: 231, nationalId: "497998624", name: "ريتاج عصام احمد محمد ابراهيم الشنف", classId: 6, gender: "أنثى" },
            { id: 232, nationalId: "497440011", name: "ريتاج عمرو فارس محمد السعيد سلام", classId: 6, gender: "أنثى" },
            { id: 233, nationalId: "495399617", name: "ريتاج كريم محمد محمد عيسى السيد", classId: 6, gender: "أنثى" },
            { id: 234, nationalId: "497442608", name: "ريفال محمد جمال احمد احمد", classId: 6, gender: "أنثى" },
            { id: 235, nationalId: "497757082", name: "ريماس اسامه سمير الباز السعيد فلفل", classId: 6, gender: "أنثى" },
            { id: 236, nationalId: "497200504", name: "ريماس هاني على محمد عوض على", classId: 6, gender: "أنثى" },
            { id: 237, nationalId: "497443520", name: "ريناد اسامه محمد عبد اللطيف احمد", classId: 6, gender: "أنثى" },
            { id: 238, nationalId: "496368979", name: "سالي أحمد محمد السوداني", classId: 6, gender: "أنثى" },
            { id: 239, nationalId: "495778147", name: "ساندي أحمد مصطفي محمد عطية مطر", classId: 6, gender: "أنثى" },
            { id: 240, nationalId: "497998600", name: "سجده عصام احمد محمد ابراهيم الشنف", classId: 6, gender: "أنثى" },
            { id: 241, nationalId: "497439968", name: "سجده وائل عادل متولى عوض حجر", classId: 6, gender: "أنثى" },
            { id: 242, nationalId: "495070933", name: "سجي وائل أحمد محمد حسانين", classId: 6, gender: "أنثى" },
            { id: 243, nationalId: "497237551", name: "سلفانا على حسن على خليفه", classId: 6, gender: "أنثى" },
            { id: 244, nationalId: "496015615", name: "سما احمد ابوطلاس سعد", classId: 6, gender: "أنثى" },
            { id: 245, nationalId: "496118381", name: "سيلا محمد ابراهيم جمعه عبد النبي محمد", classId: 6, gender: "أنثى" },
            { id: 246, nationalId: "495974307", name: "عائشة السيد سعد ابراهيم", classId: 6, gender: "أنثى" },
            { id: 247, nationalId: "495920899", name: "فاطمه عمرو ابراهيم فتحى", classId: 6, gender: "أنثى" },
            { id: 248, nationalId: "497438881", name: "كنزى مصطفى حنيدق سليمان السيد", classId: 6, gender: "أنثى" },
            { id: 249, nationalId: "494905045", name: "لارا اكرم ممدوح عبد العزيز عبد الله سمك", classId: 6, gender: "أنثى" },
            { id: 250, nationalId: "495062921", name: "لمار مصطفي علي محمود فهمي", classId: 6, gender: "أنثى" },
            { id: 251, nationalId: "497157844", name: "ماجده احمد نبيل احمد على الجوهري", classId: 6, gender: "أنثى" },
            { id: 252, nationalId: "497087056", name: "ماجده حسام رمضان عبد الحليم", classId: 6, gender: "أنثى" },
            { id: 253, nationalId: "497440745", name: "ماسه محمد احمد عطا طنطاوى عطا", classId: 6, gender: "أنثى" },
            { id: 254, nationalId: "505617886", name: "ماليكه اسامه فيصل محمد سليم", classId: 6, gender: "أنثى" },
 { id: 255, nationalId: "495307091", name: "مايا احمد فوزي اسماعيل", classId: 6, gender: "أنثى" },

            // ===== 7. الصف الخامس - فصل 3/5 (46 طالب) =====
            { id: 256, nationalId: "496913754", name: "ادم وائل محمد طاهر كمال الديب", classId: 7, gender: "ذكر" },
            { id: 257, nationalId: "495376794", name: "أسر عبد المنعم حسين يوسف", classId: 7, gender: "ذكر" },
            { id: 258, nationalId: "496144673", name: "محمد أشرف حلمي السعيد الطويل", classId: 7, gender: "ذكر" },
            { id: 259, nationalId: "497637975", name: "محمد بلال حسن محمد حسن البنا", classId: 7, gender: "ذكر" },
            { id: 260, nationalId: "497442485", name: "محمد رضا عبدالستار عبد الرحمن العزب", classId: 7, gender: "ذكر" },
            { id: 261, nationalId: "497438762", name: "محمد رضا كمال محمد على الكحكى", classId: 7, gender: "ذكر" },
            { id: 262, nationalId: "496885632", name: "محمد عاطف محمد عدلي", classId: 7, gender: "ذكر" },
            { id: 263, nationalId: "497637732", name: "محمد محمود محمد محمود محمد دياب", classId: 7, gender: "ذكر" },
            { id: 264, nationalId: "497413198", name: "محمد مصطفي محمد على الجوهرى", classId: 7, gender: "ذكر" },
            { id: 265, nationalId: "497212502", name: "محمد هانی مرتضی محمود مصطفی", classId: 7, gender: "ذكر" },
            { id: 266, nationalId: "497441272", name: "محمود خالد سمير مصطفى السيد المصرى", classId: 7, gender: "ذكر" },
            { id: 267, nationalId: "496012261", name: "محمود ياسر محمد السيد محمد وهبه", classId: 7, gender: "ذكر" },
            { id: 268, nationalId: "496722705", name: "مروان عبد العظيم محمد سعد الدين سيد", classId: 7, gender: "ذكر" },
            { id: 269, nationalId: "496991342", name: "مسعد جودة مسعد علي", classId: 7, gender: "ذكر" },
            { id: 270, nationalId: "495841970", name: "مصطفي رضا محمود محمد علي دغيم", classId: 7, gender: "ذكر" },
            { id: 271, nationalId: "490625409", name: "نور الدين السيد احمد على بحوت", classId: 7, gender: "ذكر" },
            { id: 272, nationalId: "497441206", name: "هلال احمد هلال عطيه احمد احمد جالوس", classId: 7, gender: "ذكر" },
            { id: 273, nationalId: "495766955", name: "ياسين ابراهيم احمد محمد", classId: 7, gender: "ذكر" },
            { id: 274, nationalId: "495125502", name: "ياسين احمد عبد المجيد محمد محمد جابر", classId: 7, gender: "ذكر" },
            { id: 275, nationalId: "495053142", name: "يحيى شريف فاروق عبده عبد الجواد العايدي", classId: 7, gender: "ذكر" },
            { id: 276, nationalId: "497442013", name: "يوسف عبدالهادی ابراهیم حسن عبدالهادی", classId: 7, gender: "ذكر" },
            { id: 277, nationalId: "497439685", name: "يوسف محمد عبد العزيز على يوسف البربري", classId: 7, gender: "ذكر" },
            { id: 278, nationalId: "496731949", name: "مرام احمد السيد العزب", classId: 7, gender: "أنثى" },
            { id: 279, nationalId: "495081276", name: "مريم معاذ محمد محمد عبد الحي العوضي", classId: 7, gender: "أنثى" },
            { id: 280, nationalId: "495483650", name: "ملك احمد سعيد النمر", classId: 7, gender: "أنثى" },
            { id: 281, nationalId: "497443227", name: "ملك حسن عبد المنعم سعد حافظ الكلاوي", classId: 7, gender: "أنثى" },
            { id: 282, nationalId: "495284138", name: "ملك سمير جمال الكلاوي", classId: 7, gender: "أنثى" },
            { id: 283, nationalId: "495200792", name: "ملك عماد احمد احمد شلبي", classId: 7, gender: "أنثى" },
            { id: 284, nationalId: "497702529", name: "ملك محمد حافظ احمد سليمان ابراهيم", classId: 7, gender: "أنثى" },
            { id: 285, nationalId: "496868282", name: "ملك محمد رضا محمود", classId: 7, gender: "أنثى" },
            { id: 286, nationalId: "495303999", name: "منة احمد مصطفى مختار عبد الرحمن الليثي", classId: 7, gender: "أنثى" },
            { id: 287, nationalId: "495306729", name: "منة الله طارق احمد مصطفى", classId: 7, gender: "أنثى" },
            { id: 288, nationalId: "497157851", name: "ناديه عبد الرحمن عادل محمد السيد حنفی", classId: 7, gender: "أنثى" },
            { id: 289, nationalId: "497860794", name: "ندي سليمان فتحي السعيد عبد الغني عبد", classId: 7, gender: "أنثى" },
            { id: 290, nationalId: "497157864", name: "نشوى محمد كامل حسينى محمد سليمان", classId: 7, gender: "أنثى" },
            { id: 291, nationalId: "495085509", name: "هانم محمود متولى احمد متولي الحبشي", classId: 7, gender: "أنثى" },
            { id: 292, nationalId: "496312538", name: "هايدى حسن محمد ابودنيا", classId: 7, gender: "أنثى" },
            { id: 293, nationalId: "497440570", name: "هدى علاء السيد لطفى ابوغازي", classId: 7, gender: "أنثى" },
            { id: 294, nationalId: "497426664", name: "هنا تامر عصام احمد متولى", classId: 7, gender: "أنثى" },
            { id: 295, nationalId: "497460532", name: "هنا حماده محمد عبد الرازق السيد", classId: 7, gender: "أنثى" },
            { id: 296, nationalId: "495232671", name: "هنا علاء سيد احمد ابو العلا", classId: 7, gender: "أنثى" },
            { id: 297, nationalId: "495691841", name: "هنا محسن اشرف انور عبد العال على حسن", classId: 7, gender: "أنثى" },
            { id: 298, nationalId: "495088413", name: "ياسمين محمد وجدي توفيق عوض متولي", classId: 7, gender: "أنثى" },
            { id: 299, nationalId: "495570495", name: "ياسمينا مصطفى اسامه محمد", classId: 7, gender: "أنثى" },
            { id: 300, nationalId: "495778241", name: "يسر أحمد محمد محمود السيد سليمان", classId: 7, gender: "أنثى" },
            { id: 301, nationalId: "494090981", name: "يمنى صلاح ابراهيم عطا احمد عبد الرحمن", classId: 7, gender: "أنثى" },

            // ===== 8. الصف السادس - فصل 1/6 (48 طالب) =====
            { id: 302, nationalId: "485870486", name: "ابراهيم احمد ابراهيم ابراهيم العزب مرموش", classId: 8, gender: "ذكر" },
            { id: 303, nationalId: "493065659", name: "ابراهيم سمير حلمى الدسوقي على ابراهيم", classId: 8, gender: "ذكر" },
            { id: 304, nationalId: "493459302", name: "ابراهيم محمد ابراهيم جلال عوض احمد", classId: 8, gender: "ذكر" },
            { id: 305, nationalId: "493380492", name: "احمد سامح محمود على عطيه محمد البياسي", classId: 8, gender: "ذكر" },
            { id: 306, nationalId: "493513008", name: "احمد عز الدين احمد عز الدين ابراهيم", classId: 8, gender: "ذكر" },
            { id: 307, nationalId: "493101063", name: "احمد محمد احمد محمد زكى", classId: 8, gender: "ذكر" },
            { id: 308, nationalId: "493066530", name: "احمد محمد عبد المنعم على ابراهيم بركات", classId: 8, gender: "ذكر" },
            { id: 309, nationalId: "493122044", name: "احمد محمد قدری حسين محمود نصار", classId: 8, gender: "ذكر" },
            { id: 310, nationalId: "493083616", name: "احمد محمود عمر حامد الشربيني حماد", classId: 8, gender: "ذكر" },
            { id: 311, nationalId: "493085963", name: "احمد وائل كامل على جاد الله", classId: 8, gender: "ذكر" },
            { id: 312, nationalId: "492992572", name: "أدهم حسنين مصطفى حسنين", classId: 8, gender: "ذكر" },
            { id: 313, nationalId: "493091957", name: "اسر صلاح عز الدين صلاح الدين ابراهيم سعيد", classId: 8, gender: "ذكر" },
            { id: 314, nationalId: "493086549", name: "اسر صلاح مصطفى محمد مصطفی احمد", classId: 8, gender: "ذكر" },
            { id: 315, nationalId: "492969561", name: "السيد محمد السيد عيد السيد الدرولي", classId: 8, gender: "ذكر" },
            { id: 316, nationalId: "493094199", name: "اياد وليد عبد الله عبده ابراهيم عبد الله", classId: 8, gender: "ذكر" },
            { id: 317, nationalId: "493092167", name: "جمال محمد جمال جمعه متولى يوسف", classId: 8, gender: "ذكر" },
            { id: 318, nationalId: "493091723", name: "حسن اسامه محمد محمد المرغني", classId: 8, gender: "ذكر" },
            { id: 319, nationalId: "493483149", name: "حمزه ابراهيم علاء الدين ابراهيم ابو السعود", classId: 8, gender: "ذكر" },
            { id: 320, nationalId: "486548626", name: "زياد حسام ابراهيم مصطفى سليم شلضم", classId: 8, gender: "ذكر" },
            { id: 321, nationalId: "493107186", name: "صابر شادی صابر توفيق عوض حجر", classId: 8, gender: "ذكر" },
            { id: 322, nationalId: "493588904", name: "صلاح الدين توفيق نبيل عبد الحي سليم ابو", classId: 8, gender: "ذكر" },
            { id: 323, nationalId: "493120689", name: "عبد الله اسامه صلاح الدين السعيد فياض", classId: 8, gender: "ذكر" },
            { id: 324, nationalId: "493641656", name: "عبد الله محمود عبد العزيز محمد سابق", classId: 8, gender: "ذكر" },
            { id: 325, nationalId: "493119691", name: "عزت مصطفى عزت محمد الشهيد الحريري", classId: 8, gender: "ذكر" },
            { id: 326, nationalId: "493403595", name: "عمر ايهاب عبد الله سعيد ابو العلا عاشور", classId: 8, gender: "ذكر" },
            { id: 327, nationalId: "493083813", name: "فارس ايمن السيد عز الدين عبد الحميد", classId: 8, gender: "ذكر" },
            { id: 328, nationalId: "493083864", name: "فارس محمد فارس محمد يوسف کشکه", classId: 8, gender: "ذكر" },
            { id: 329, nationalId: "481394925", name: "كاراس علاء عوني اسعد", classId: 8, gender: "ذكر" },
            { id: 330, nationalId: "493151098", name: "ارزاق احمد زينهم محمود السندبسطى", classId: 8, gender: "أنثى" },
            { id: 331, nationalId: "493459346", name: "اسيل نور محمد نور الدين محمد عبد المنعم", classId: 8, gender: "أنثى" },
            { id: 332, nationalId: "485470978", name: "تاليا محمود محمد الغرباوي", classId: 8, gender: "أنثى" },
            { id: 333, nationalId: "493187212", name: "ترتيل طارق طه السيد البياسي", classId: 8, gender: "أنثى" },
            { id: 334, nationalId: "493546888", name: "جنى تامر رضا عبد المعطى محمد سليمان", classId: 8, gender: "أنثى" },
            { id: 335, nationalId: "493186514", name: "جويريه احمد عبد اللطيف احمد محمد يونس", classId: 8, gender: "أنثى" },
            { id: 336, nationalId: "493151379", name: "حنان السباعى اشرف السباعي ابراهيم", classId: 8, gender: "أنثى" },
            { id: 337, nationalId: "493189052", name: "خديجه شريف عادل عطيه متولى", classId: 8, gender: "أنثى" },
            { id: 338, nationalId: "493266898", name: "دينا حمدى احمد السيد يوسف الحلواني", classId: 8, gender: "أنثى" },
            { id: 339, nationalId: "493137946", name: "رحمه اسلام ممتاز محمد نصر سليمان", classId: 8, gender: "أنثى" },
            { id: 340, nationalId: "493139622", name: "رحمه محمد مسعد احمد العزب ابو الخير", classId: 8, gender: "أنثى" },
            { id: 341, nationalId: "492110141", name: "روجينا ايهاب عبد القادر عبد الحميد الصيرفي", classId: 8, gender: "أنثى" },
            { id: 342, nationalId: "493460329", name: "روجينا حسين مصطفي عطيه محمد", classId: 8, gender: "أنثى" },
            { id: 343, nationalId: "493155027", name: "رودينا احمد ابراهيم احمد قاسم ابو نشوق", classId: 8, gender: "أنثى" },
            { id: 344, nationalId: "493137349", name: "رودينا ايمن حلمى السعيد الطويل", classId: 8, gender: "أنثى" },
            { id: 345, nationalId: "493346149", name: "رودينا فؤاد فتحى فؤاد عبد الحميد زهره", classId: 8, gender: "أنثى" },
            { id: 346, nationalId: "485474509", name: "رودينا محمد اسماعيل ذكي السيد السعيد", classId: 8, gender: "أنثى" },
            { id: 347, nationalId: "493150795", name: "رودينا مصطفى عبد الحكيم زكريا احمد", classId: 8, gender: "أنثى" },
            { id: 348, nationalId: "505679711", name: "رودينة طارق محمد عبد الرحيم احمد حسن", classId: 8, gender: "أنثى" },
            { id: 349, nationalId: "490287961", name: "روسلين علي أحمد على بدر عطالله", classId: 8, gender: "أنثى" },

            // ===== 9. الصف السادس - فصل 2/6 (44 طالب) =====
            { id: 350, nationalId: "493091177", name: "فاروق عادل فاروق محمد محمد الدهتورى", classId: 9, gender: "ذكر" },
            { id: 351, nationalId: "493121294", name: "فتحى محمد السيد فتحى على الليموني", classId: 9, gender: "ذكر" },
            { id: 352, nationalId: "493086131", name: "فتحى محمد فتحى عبد الرحمن محمد محمد", classId: 9, gender: "ذكر" },
            { id: 353, nationalId: "493086352", name: "فهد عبد الله محمد عبد الله السعيد سليمان", classId: 9, gender: "ذكر" },
            { id: 354, nationalId: "493083140", name: "كريم ايهاب احمد السيد عليوه", classId: 9, gender: "ذكر" },
            { id: 355, nationalId: "492257244", name: "كريم محمد حامد صديق شاهين", classId: 9, gender: "ذكر" },
            { id: 356, nationalId: "493530901", name: "محمد احمد السيد امين ابراهيم", classId: 9, gender: "ذكر" },
            { id: 357, nationalId: "493358933", name: "محمد احمد عزت السيد الخزامي المشد", classId: 9, gender: "ذكر" },
            { id: 358, nationalId: "494035422", name: "محمد السعيد سيد احمد السعيد", classId: 9, gender: "ذكر" },
            { id: 359, nationalId: "493506912", name: "محمد السيد غريب السيد غريب عبد الله", classId: 9, gender: "ذكر" },
            { id: 360, nationalId: "493083703", name: "محمد السيد وهبه على سليمان سعيد", classId: 9, gender: "ذكر" },
            { id: 361, nationalId: "493083933", name: "محمد بلال عبد النبي عطيه احمد مطر", classId: 9, gender: "ذكر" },
            { id: 362, nationalId: "493580394", name: "محمد حسن علی حسن عطيه عوض", classId: 9, gender: "ذكر" },
            { id: 363, nationalId: "493086458", name: "محمد حسين محمد عبد الله السعيد سليمان", classId: 9, gender: "ذكر" },
            { id: 364, nationalId: "490919832", name: "محمد رامی محمد محمد ندا", classId: 9, gender: "ذكر" },
            { id: 365, nationalId: "490556682", name: "محمد عبد الحميد عبد العظيم محمد", classId: 9, gender: "ذكر" },
            { id: 366, nationalId: "493083242", name: "محمد علی محمد علی محمد حسن", classId: 9, gender: "ذكر" },
            { id: 367, nationalId: "493093774", name: "محمد مصطفى صبحي على سليمان", classId: 9, gender: "ذكر" },
            { id: 368, nationalId: "493494321", name: "مروان مهاب شريف محمد عباس حسام الدين", classId: 9, gender: "ذكر" },
            { id: 369, nationalId: "493091012", name: "مصطفى احمد ابراهيم الجوهري على", classId: 9, gender: "ذكر" },
            { id: 370, nationalId: "493084029", name: "مصطفى احمد عبد المنعم ابراهيم ابراهيم", classId: 9, gender: "ذكر" },
            { id: 371, nationalId: "493083768", name: "معاذ محمد رشاد حافظ احمد", classId: 9, gender: "ذكر" },
            { id: 372, nationalId: "493118641", name: "معاذ محمد عطا على محمد ابو حشيش", classId: 9, gender: "ذكر" },
            { id: 373, nationalId: "493150412", name: "نبيل محمد نبيل عطيه محمد رمضان", classId: 9, gender: "ذكر" },
            { id: 374, nationalId: "493121570", name: "ياسين ايمن همام السيد محمد همام", classId: 9, gender: "ذكر" },
            { id: 375, nationalId: "494136874", name: "ياسين حامد كمال حامد محمد الخواص", classId: 9, gender: "ذكر" },
            { id: 376, nationalId: "493437243", name: "ريم احمد حسنين احمد محمد ابو العلا مراد", classId: 9, gender: "أنثى" },
            { id: 377, nationalId: "493154741", name: "ريماس محمد فتحى نصار على اباظه", classId: 9, gender: "أنثى" },
            { id: 378, nationalId: "493188755", name: "ريناد هلال طارق هلال مکاوی حسن", classId: 9, gender: "أنثى" },
            { id: 379, nationalId: "493187763", name: "زينب ربيع رجب امين رجب النشار", classId: 9, gender: "أنثى" },
            { id: 380, nationalId: "493163854", name: "ساندى احمد احمد راشد راشد السحار", classId: 9, gender: "أنثى" },
            { id: 381, nationalId: "493188030", name: "سجده ابراهيم رضا حامد ابو زيد شحاته", classId: 9, gender: "أنثى" },
            { id: 382, nationalId: "491326457", name: "سجده بسام عادل عبد الحميد عبوده على", classId: 9, gender: "أنثى" },
            { id: 383, nationalId: "493188227", name: "سلمى اسلام فتحى احمد خربوش", classId: 9, gender: "أنثى" },
            { id: 384, nationalId: "493358998", name: "سلمى صلاح كمال محمد مصطفى عيسى", classId: 9, gender: "أنثى" },
            { id: 385, nationalId: "493164261", name: "سلمى محمد فاروق لطفى على ابو غازي", classId: 9, gender: "أنثى" },
            { id: 386, nationalId: "493164515", name: "سما مصطفى عطا على محمد ابو حشيش", classId: 9, gender: "أنثى" },
            { id: 387, nationalId: "493732771", name: "شروق صلاح حسن صلاح محمد حسن", classId: 9, gender: "أنثى" },
            { id: 388, nationalId: "493988836", name: "شمس اسماعيل احمد ابراهيم احمد", classId: 9, gender: "أنثى" },
            { id: 389, nationalId: "486623871", name: "شمس محمد محمود احمد محمود سالم", classId: 9, gender: "أنثى" },
            { id: 390, nationalId: "493364766", name: "شيماء السيد حسانين السيد", classId: 9, gender: "أنثى" },
            { id: 391, nationalId: "493380472", name: "صفاء تامر مجدى مصطفى حسن الزفتاوى", classId: 9, gender: "أنثى" },
            { id: 392, nationalId: "493641536", name: "كنده صلاح الدين عثمان فرحات الامير", classId: 9, gender: "أنثى" },
            { id: 393, nationalId: "493189268", name: "لين محمود سعد محمد سعد مصطفى سعد", classId: 9, gender: "أنثى" },

            // ===== 10. الصف السادس - فصل 3/6 (48 طالب) =====
            { id: 394, nationalId: "493380711", name: "ابراهيم عمرو محمد احمد على المنسى", classId: 10, gender: "ذكر" },
            { id: 395, nationalId: "493380921", name: "احمد فاروق محمد ابوبكر مرسى عبدالله", classId: 10, gender: "ذكر" },
            { id: 396, nationalId: "493382378", name: "أدهم احمد صبرى محمد الشحات بدوى", classId: 10, gender: "ذكر" },
            { id: 397, nationalId: "493380914", name: "على محمد حسنين محمود درويش", classId: 10, gender: "ذكر" },
            { id: 398, nationalId: "493382340", name: "فهد عبد العزيز محمد عبد العزيز محمد السيد", classId: 10, gender: "ذكر" },
            { id: 399, nationalId: "493381100", name: "كامل حسينى كامل حسينى محمد سليمان", classId: 10, gender: "ذكر" },
            { id: 400, nationalId: "494078906", name: "كريم حماده محمد فتحى السيد الجوهري", classId: 10, gender: "ذكر" },
            { id: 401, nationalId: "493380842", name: "مالك احمد محمد طارق رفاعى محمد ابراهيم", classId: 10, gender: "ذكر" },
            { id: 402, nationalId: "493306798", name: "مالك عبد الله رفعت عبد العال", classId: 10, gender: "ذكر" },
            { id: 403, nationalId: "489952533", name: "محمد احمد محمد عادل عبد اللطيف", classId: 10, gender: "ذكر" },
            { id: 404, nationalId: "494079060", name: "محمد رضا المتولى عبدالحميد ابودومه", classId: 10, gender: "ذكر" },
            { id: 405, nationalId: "493382356", name: "محمد على محمد على جردوح", classId: 10, gender: "ذكر" },
            { id: 406, nationalId: "493382398", name: "محمد يوسف فتحى السيد عطيه", classId: 10, gender: "ذكر" },
            { id: 407, nationalId: "493380947", name: "محمود مصطفى حلمى محمد احمد الزهار", classId: 10, gender: "ذكر" },
            { id: 408, nationalId: "485474363", name: "مصطفى محمد محمود محمد توفيق", classId: 10, gender: "ذكر" },
            { id: 409, nationalId: "493380936", name: "معاذ احمد محمد محمود محمد على", classId: 10, gender: "ذكر" },
            { id: 410, nationalId: "494178067", name: "ياسين احمد ضيف الله جاد الرب احمد", classId: 10, gender: "ذكر" },
            { id: 411, nationalId: "494178077", name: "ياسين تامر شحته محفوظ ابو العلا عاشور", classId: 10, gender: "ذكر" },
            { id: 412, nationalId: "490556578", name: "ياسين سامح مراد راغب السباعي خليل", classId: 10, gender: "ذكر" },
            { id: 413, nationalId: "490562005", name: "ياسين عبد المنعم حسين عبد المنعم حامد", classId: 10, gender: "ذكر" },
            { id: 414, nationalId: "493083566", name: "ياسين محمد سليمان متولى ابو سيف حسين", classId: 10, gender: "ذكر" },
            { id: 415, nationalId: "493761077", name: "ياسين مصطفى السيد محمد مصطفى", classId: 10, gender: "ذكر" },
            { id: 416, nationalId: "493097108", name: "يحيى عماد محمدى محمد فرج احمد", classId: 10, gender: "ذكر" },
            { id: 417, nationalId: "493093982", name: "يسن احمد احمد محمد محمد رضوان", classId: 10, gender: "ذكر" },
            { id: 418, nationalId: "493083053", name: "يوسف احمد فرج مصطفى على البوز", classId: 10, gender: "ذكر" },
            { id: 419, nationalId: "493857263", name: "يوسف ايمن على على مصطفى طه", classId: 10, gender: "ذكر" },
            { id: 420, nationalId: "493382389", name: "يوسف خالد محمد الزنفلي محمد السعدني", classId: 10, gender: "ذكر" },
            { id: 421, nationalId: "493119950", name: "يوسف عبد الحميد حسن عبد الحميد عثمان", classId: 10, gender: "ذكر" },
            { id: 422, nationalId: "493382330", name: "يوسف محمد زكى السعيد شحاته الشامي", classId: 10, gender: "ذكر" },
            { id: 423, nationalId: "493382454", name: "جومانا هشام عبدالعزيز الحسيني محمد", classId: 10, gender: "أنثى" },
            { id: 424, nationalId: "493388556", name: "رودينا وحيد محمد الدمرداش حسنين الفار", classId: 10, gender: "أنثى" },
            { id: 425, nationalId: "493382509", name: "سناء احمد رمضان محمد حسنين كشكه", classId: 10, gender: "أنثى" },
            { id: 426, nationalId: "493388561", name: "فرح هانى محمود امام محمد", classId: 10, gender: "أنثى" },
            { id: 427, nationalId: "493382472", name: "فرحه علاء عياد عبد المحسن سيد", classId: 10, gender: "أنثى" },
            { id: 428, nationalId: "493388537", name: "لمار مصطفى محمد رجب عطيه منصور", classId: 10, gender: "أنثى" },
            { id: 429, nationalId: "493139333", name: "مروه هشام ناصر الدسوقي محمد الغرباوي", classId: 10, gender: "أنثى" },
            { id: 430, nationalId: "493164084", name: "مريم عادل احمد عبد الله عبد اللطيف سلام", classId: 10, gender: "أنثى" },
            { id: 431, nationalId: "493388506", name: "مريم عبد الحميد احمد عبدالحميد هاشم", classId: 10, gender: "أنثى" },
            { id: 432, nationalId: "492800216", name: "مريم محمد احمد حافظ", classId: 10, gender: "أنثى" },
            { id: 433, nationalId: "484963852", name: "ملك احمد على محمد عطيه عثمان", classId: 10, gender: "أنثى" },
            { id: 434, nationalId: "493388573", name: "ملك ايمن متولى حسانين السيد جواد", classId: 10, gender: "أنثى" },
            { id: 435, nationalId: "493189592", name: "مليكه على محمد على حامد على", classId: 10, gender: "أنثى" },
            { id: 436, nationalId: "493187532", name: "منه الله جوده مصطفى جوده محمود على", classId: 10, gender: "أنثى" },
            { id: 437, nationalId: "490657394", name: "مياده شعبان جابر محمد", classId: 10, gender: "أنثى" },
            { id: 438, nationalId: "493194291", name: "ميرنا مصطفى محمد عطيه سالم العو", classId: 10, gender: "أنثى" },
            { id: 439, nationalId: "493388585", name: "نجلاء فوزى احمد ابو العنين احمد الكاشف", classId: 10, gender: "أنثى" },
            { id: 440, nationalId: "493348876", name: "هايا اسامه عبد الحميد ابراهيم سيد الاهل", classId: 10, gender: "أنثى" },
            { id: 441, nationalId: "493193938", name: "هدير محمد فتحى عبد العظيم السيد", classId: 10, gender: "أنثى" },

            // ===== 11. الصف الأول - فصل 1/1 (45 طالب) =====
            { id: 442, nationalId: "510003966", name: "ابراهيم السيد ابراهيم السيد ابراهيم قنديل", classId: 11, gender: "ذكر" },
            { id: 443, nationalId: "511072348", name: "احمد سعد مصطفى عطيه احمد", classId: 11, gender: "ذكر" },
            { id: 444, nationalId: "506532407", name: "احمد اشرف احمد زكى", classId: 11, gender: "ذكر" },
            { id: 445, nationalId: "505861949", name: "احمد رفعت علاء محمد بركات", classId: 11, gender: "ذكر" },
            { id: 446, nationalId: "510301923", name: "ادم احمد مصطفي عبد العزيز محمد شعراوي", classId: 11, gender: "ذكر" },
            { id: 447, nationalId: "511202228", name: "ادم محمد صبحى محمود محمد إبراهيم ابو", classId: 11, gender: "ذكر" },
            { id: 448, nationalId: "509999076", name: "آسر وائل محمد طاهر كمال الديب", classId: 11, gender: "ذكر" },
            { id: 449, nationalId: "509981898", name: "أشرف أحمد أشرف محمود محمد حموده", classId: 11, gender: "ذكر" },
            { id: 450, nationalId: "511108796", name: "السيد متولى السيد محمد متولى", classId: 11, gender: "ذكر" },
            { id: 451, nationalId: "510075902", name: "انس احمد سامي الحسيني", classId: 11, gender: "ذكر" },
            { id: 452, nationalId: "509402450", name: "أنس حسن محمد محمد محمد أنور", classId: 11, gender: "ذكر" },
            { id: 453, nationalId: "511072254", name: "اياد محمد محمد سالم يوسف ناضرين", classId: 11, gender: "ذكر" },
            { id: 454, nationalId: "511072111", name: "حازم صلاح الدين عثمان فرحات الامير", classId: 11, gender: "ذكر" },
            { id: 455, nationalId: "509979352", name: "حمزة محمد قدرى حسين محمود نصار", classId: 11, gender: "ذكر" },
            { id: 456, nationalId: "507315066", name: "حمزة مصطفى طلعت السكرى", classId: 11, gender: "ذكر" },
            { id: 457, nationalId: "505690319", name: "حمزه عادل جابر حافظ", classId: 11, gender: "ذكر" },
            { id: 458, nationalId: "509999994", name: "خالد محمد حلمى دسوقى عيسى أبو العلا", classId: 11, gender: "ذكر" },
            { id: 459, nationalId: "510246436", name: "خالد محمد خالد محمد على عبد الجواد", classId: 11, gender: "ذكر" },
            { id: 460, nationalId: "505876405", name: "روفانيو مارك ملاك صادق سلامه", classId: 11, gender: "ذكر" },
            { id: 461, nationalId: "510248570", name: "زين إيهاب احمد السيد عليوه", classId: 11, gender: "ذكر" },
            { id: 462, nationalId: "511071622", name: "زين طه اسامه مصطفى بدران محمد", classId: 11, gender: "ذكر" },
            { id: 463, nationalId: "510244749", name: "ساجد محمد مسعد محمد محمد الحديدي", classId: 11, gender: "ذكر" },
            { id: 464, nationalId: "511068913", name: "سامح على محمود على عطيه محمد", classId: 11, gender: "ذكر" },
            { id: 465, nationalId: "508870510", name: "عبد الرحمن محمد عبد الله السيد", classId: 11, gender: "ذكر" },
            { id: 466, nationalId: "510001151", name: "عبد الله معاذ محمد محمد عبد الحي العوضى", classId: 11, gender: "ذكر" },
            { id: 467, nationalId: "508957249", name: "عزالدين شريف أمين صالح", classId: 11, gender: "ذكر" },
            { id: 468, nationalId: "509356994", name: "علي محمد احمد حافظ", classId: 11, gender: "ذكر" },
            { id: 469, nationalId: "509751893", name: "عمر شريف عبد الفتاح محمود الدسوقي", classId: 11, gender: "ذكر" },
            { id: 470, nationalId: "508913581", name: "محمد علاء سيد احمد ابراهيم", classId: 11, gender: "ذكر" },
            { id: 471, nationalId: "510239080", name: "أميرة محمود عبداللطيف عبدالله محمد", classId: 11, gender: "أنثى" },
            { id: 472, nationalId: "504806661", name: "آيتن محمد مجدى محمد عوض مطاوع", classId: 11, gender: "أنثى" },
            { id: 473, nationalId: "508841436", name: "أيلن احمد خالد فاروق حسن الحنفي", classId: 11, gender: "أنثى" },
            { id: 474, nationalId: "510001931", name: "بسملة جمال ابو المجد يونس ابو المجد الديب", classId: 11, gender: "أنثى" },
            { id: 475, nationalId: "511072670", name: "تاليه على مجدى على قاسم", classId: 11, gender: "أنثى" },
            { id: 476, nationalId: "510253477", name: "جوار هيثم عصام كمال محمد محمود", classId: 11, gender: "أنثى" },
            { id: 477, nationalId: "511072765", name: "جودى احمد سعد عبدالله عبد الفتاح", classId: 11, gender: "أنثى" },
            { id: 478, nationalId: "509853356", name: "جوري عبد المنعم خالد عبد المنعم", classId: 11, gender: "أنثى" },
            { id: 479, nationalId: "510247065", name: "حنان طه سعيد حامد عبد الله الرداعي", classId: 11, gender: "أنثى" },
            { id: 480, nationalId: "509470563", name: "حنين علاء عياد عبد المحسن سيد", classId: 11, gender: "أنثى" },
            { id: 481, nationalId: "509546560", name: "حور أنور حمدي محمد علي عاشور", classId: 11, gender: "أنثى" },
            { id: 482, nationalId: "508919753", name: "روفان محمد عبد المنعم على", classId: 11, gender: "أنثى" },
            { id: 483, nationalId: "510247676", name: "ساندى باسم رجب حسين حافظ محمد", classId: 11, gender: "أنثى" },
            { id: 484, nationalId: "510252080", name: "سلمى محمد مصطفى على عطيه مرشدى", classId: 11, gender: "أنثى" },
            { id: 485, nationalId: "511073063", name: "فاطمه محمد بكر الباز على شقيطه", classId: 11, gender: "أنثى" },
            { id: 486, nationalId: "510366480", name: "يوليانا مايكل ناجي نجيب", classId: 11, gender: "أنثى" },
            { id: 487, nationalId: "510271048", name: "عادل بسام عادل عبد الحميد", classId: 12, gender: "ذكر" },
            { id: 488, nationalId: "511068878", name: "عبد الفتاح محمود إبراهيم محمد السيد", classId: 12, gender: "ذكر" },
            { id: 489, nationalId: "506294421", name: "علي سامح محمود علي", classId: 12, gender: "ذكر" },
            { id: 490, nationalId: "511068814", name: "مالك ياسر عبد التواب احمد محمد", classId: 12, gender: "ذكر" },
            { id: 491, nationalId: "510005337", name: "مالك محمد سمير احمد خليل", classId: 12, gender: "ذكر" },
            { id: 492, nationalId: "511068788", name: "محمد احمد ابو بكر سيد احمد حسن", classId: 12, gender: "ذكر" },
            { id: 493, nationalId: "511068758", name: "محمد احمد رضا زكريا محمد", classId: 12, gender: "ذكر" },
            { id: 494, nationalId: "511068710", name: "محمد عمر محمد عمر حامد الشربيني", classId: 12, gender: "ذكر" },
            { id: 495, nationalId: "509967253", name: "محمد احمد محمد السيد", classId: 12, gender: "ذكر" },
            { id: 496, nationalId: "511075192", name: "مصطفى إبراهيم مصطفى عوض سليم", classId: 12, gender: "ذكر" },
            { id: 497, nationalId: "509978525", name: "مصطفى احمد مصطفى كامل شرف الدين", classId: 12, gender: "ذكر" },
            { id: 498, nationalId: "510021478", name: "مصطفى عبد العظيم محمد سعد الدين سيد", classId: 12, gender: "ذكر" },
            { id: 499, nationalId: "510249553", name: "مصطفى مسعد عماد سعد مصطفى", classId: 12, gender: "ذكر" },
            { id: 500, nationalId: "509752399", name: "مصطفي عبد الله محمد عبدالله محمد", classId: 12, gender: "ذكر" },
            { id: 501, nationalId: "505902511", name: "مصطفي محمد ابراهيم محمود", classId: 12, gender: "ذكر" },
            { id: 502, nationalId: "511071477", name: "معاذ محمود محمد عبد القادر عرفه", classId: 12, gender: "ذكر" },
            { id: 503, nationalId: "509805719", name: "نور السعيد عبد العزيز السعيد عبد العزيز", classId: 12, gender: "أنثى" },
            { id: 504, nationalId: "510254503", name: "ياسين احمد بركات محمد احمد بركات", classId: 12, gender: "ذكر" },
            { id: 505, nationalId: "510492517", name: "ياسين أحمد مسعد احمد العزب ابو الخير", classId: 12, gender: "ذكر" },
            { id: 506, nationalId: "507768060", name: "ياسين رفعت رفعت صبحي محمد عماره", classId: 12, gender: "ذكر" },
            { id: 507, nationalId: "509685979", name: "ياسين محمد سعد على", classId: 12, gender: "ذكر" },
            { id: 508, nationalId: "510002922", name: "يامن اسلام عبد الفتاح ابراهيم خالد", classId: 12, gender: "ذكر" },
            { id: 509, nationalId: "506864521", name: "يحيي محمود طلعت البياسي", classId: 12, gender: "ذكر" },
            { id: 510, nationalId: "511070831", name: "يوسف حمدى عبدالله محمد ابراهيم برق", classId: 12, gender: "ذكر" },
            { id: 511, nationalId: "511109576", name: "يوسف محمد خالد عبد الله الاسمر عبد", classId: 12, gender: "ذكر" },
            { id: 512, nationalId: "508776670", name: "يوسف محمد إبراهيم فتوح", classId: 12, gender: "ذكر" },
            { id: 513, nationalId: "510021616", name: "فريده محمود رياض ابراهيم السيد", classId: 12, gender: "أنثى" },
            { id: 514, nationalId: "511073337", name: "كارما مصطفى جمال الشحات محمد", classId: 12, gender: "أنثى" },
            { id: 515, nationalId: "509267309", name: "كارما حسن حسانين حسن عطا ابراهيم عيسى", classId: 12, gender: "أنثى" },
            { id: 516, nationalId: "510077837", name: "كارما محمد محمود سيد احمد عطيه عشوش", classId: 12, gender: "أنثى" },
            { id: 517, nationalId: "511073472", name: "ماسه محمد السيد محمد حسانين الشاعر", classId: 12, gender: "أنثى" },
            { id: 518, nationalId: "509764800", name: "مكه احمد لطفى احمد", classId: 12, gender: "أنثى" },
            { id: 519, nationalId: "511073784", name: "مكه اسلام فتحى احمد خربوش", classId: 12, gender: "أنثى" },
            { id: 520, nationalId: "508912260", name: "مكه علاء سيد احمد ابراهيم", classId: 12, gender: "أنثى" },
            { id: 521, nationalId: "511073686", name: "مكه محمد صابر محمد عبده الحبشي", classId: 12, gender: "أنثى" },
         { id: 522, nationalId: "511074113", name: "ملك مصطفى مدحت عبد الله عبد العاطي", classId: 12, gender: "أنثى" },
            { id: 523, nationalId: "510252645", name: "مليكة محمد إبراهيم جلال عوض احمد", classId: 12, gender: "أنثى" },
            { id: 524, nationalId: "511074236", name: "مليكه محمد زكريا السيد عوض طاحون", classId: 12, gender: "أنثى" },
            { id: 525, nationalId: "511108310", name: "ميران سامح محمد ذهب حسن", classId: 12, gender: "أنثى" },
            { id: 526, nationalId: "508881339", name: "هدى محمود متولى احمد متولى", classId: 12, gender: "أنثى" },
            { id: 527, nationalId: "509983717", name: "وعد محمود حسين احمد بيومى", classId: 12, gender: "أنثى" },
            { id: 528, nationalId: "510253101", name: "يسر احمد مصطفى محمد رمضان", classId: 12, gender: "أنثى" },
            { id: 529, nationalId: "506631639", name: "يمنى محمود حسنين محمود", classId: 12, gender: "أنثى" },
            { id: 530, nationalId: "507953789", name: "مازن مصطفى بكر بكر محمد", classId: 13, gender: "ذكر" },
            { id: 531, nationalId: "507768098", name: "مالك احمد السيد عطوه سليمان", classId: 13, gender: "ذكر" },
            { id: 532, nationalId: "508163843", name: "مالك على محمود على عطيه محمد البياسي", classId: 13, gender: "ذكر" },
            { id: 533, nationalId: "507768091", name: "مجدى جمال مجدى جمال السنوسي زكى ابو", classId: 13, gender: "ذكر" },
            { id: 534, nationalId: "507768021", name: "محمد احمد متولي احمد متولي الحبشى", classId: 13, gender: "ذكر" },
            { id: 535, nationalId: "506137465", name: "محمد اسلام محمد محمود", classId: 13, gender: "ذكر" },
            { id: 536, nationalId: "502065055", name: "محمد السيد يوسف محمد ابراهيم شومان", classId: 13, gender: "ذكر" },
            { id: 537, nationalId: "507768031", name: "محمد أيمن ممدوح محمد سيد احمد عويعة", classId: 13, gender: "ذكر" },
            { id: 538, nationalId: "507768017", name: "محمد خالد عوني محمد بركات", classId: 13, gender: "ذكر" },
            { id: 539, nationalId: "507768028", name: "محمد سالم جودة سالم ابراهيم يونس", classId: 13, gender: "ذكر" },
            { id: 540, nationalId: "506395160", name: "محمد سليمان احمد محمد", classId: 13, gender: "ذكر" },
            { id: 541, nationalId: "503962498", name: "محمد صلاح كمال محمد مصطفى عيسى", classId: 13, gender: "ذكر" },
            { id: 542, nationalId: "507779207", name: "محمد عطيه مصطفى عطيه حسين", classId: 13, gender: "ذكر" },
            { id: 543, nationalId: "507768010", name: "محمد كريم محمد محمد عيسى السيد", classId: 13, gender: "ذكر" },
            { id: 544, nationalId: "506888046", name: "محمد معروف محمد معروف", classId: 13, gender: "ذكر" },
            { id: 545, nationalId: "507768077", name: "محمود ابراهيم السيد البدوى ابراهيم علي", classId: 13, gender: "ذكر" },
            { id: 546, nationalId: "508163774", name: "مصطفى محمد مصطفى محمود موسى", classId: 13, gender: "ذكر" },
            { id: 547, nationalId: "507768053", name: "مصطفى هانى محمود محمد محمد", classId: 13, gender: "ذكر" },
            { id: 548, nationalId: "501478131", name: "مصطفي كريم عرب توفيق", classId: 13, gender: "ذكر" },
            { id: 549, nationalId: "504208886", name: "ممدوح ابراهيم مصطفى ابراهيم", classId: 13, gender: "ذكر" },
            { id: 550, nationalId: "507451196", name: "ياسين كريم اسماعيل محمد", classId: 13, gender: "ذكر" },
            { id: 551, nationalId: "507951753", name: "ياسين السيد حسين السيد ابراهيم الدنديطي", classId: 13, gender: "ذكر" },
            { id: 552, nationalId: "507768064", name: "ياسين محمد السيد محمد ابراهيم", classId: 13, gender: "ذكر" },
            { id: 553, nationalId: "507951378", name: "يوسف محمد يوسف صلاح الدين احمد", classId: 13, gender: "ذكر" },
            { id: 554, nationalId: "507174415", name: "يوسف ياسر محمود احمد مراد", classId: 13, gender: "ذكر" },
            { id: 555, nationalId: "508671340", name: "ريم كريم حسن الرفاعي حسن فرج", classId: 13, gender: "أنثى" },
            { id: 556, nationalId: "507767981", name: "عايدة علاء محمد نجيب حسانين محمد احمد", classId: 13, gender: "أنثى" },
            { id: 557, nationalId: "507767969", name: "فاطمه جوده مسعد جودة على", classId: 13, gender: "أنثى" },
            { id: 558, nationalId: "507967282", name: "فرحه محمد عنان محمود عنان", classId: 13, gender: "أنثى" },
            { id: 559, nationalId: "507779182", name: "فريده محمد سمير احمد احمد السفرى", classId: 13, gender: "أنثى" },
            { id: 560, nationalId: "507767977", name: "كارما احمد مجدي الشحات محمد محمد سلام", classId: 13, gender: "أنثى" },
            { id: 561, nationalId: "506888773", name: "كارما محمد عباس فتحي", classId: 13, gender: "أنثى" },
            { id: 562, nationalId: "506962308", name: "كارما محمد محمد مصطفي", classId: 13, gender: "أنثى" },
            { id: 563, nationalId: "507922107", name: "كارما محمود محمد محمود محمد دياب", classId: 13, gender: "أنثى" },
            { id: 564, nationalId: "507966902", name: "كارما مصطفى محمد النبوي محى الدين", classId: 13, gender: "أنثى" },
            { id: 565, nationalId: "507767614", name: "كنزى احمد مجدى الشحات محمد محمد سلام", classId: 13, gender: "أنثى" },
            { id: 566, nationalId: "507767953", name: "لوسيندا حسام أبو سيف على ابراهيم على", classId: 13, gender: "أنثى" },
            { id: 567, nationalId: "504137768", name: "ليان سامح السيد هاشم الجيار", classId: 13, gender: "أنثى" },
            { id: 568, nationalId: "507767968", name: "مريم محمد ابراهيم جمعة عبد النبي محمد", classId: 13, gender: "أنثى" },
            { id: 569, nationalId: "507767971", name: "مكة محمد جوده محمد قاسم ابراهيم حمزة", classId: 13, gender: "أنثى" },
            { id: 570, nationalId: "507767687", name: "مكة محمد محمود عثمان حسانين", classId: 13, gender: "أنثى" },
            { id: 571, nationalId: "507966613", name: "مكه تامر احمد ابراهيم على فرج", classId: 13, gender: "أنثى" },
            { id: 572, nationalId: "505588981", name: "مكه محمد فتحى عبد الرحمن محمد محمد", classId: 13, gender: "أنثى" },
            { id: 573, nationalId: "506090372", name: "مكه محمد يوسف صلاح الدين", classId: 13, gender: "أنثى" },
            { id: 574, nationalId: "507966543", name: "ملك مصطفى اسامه مصطفى بدران محمد", classId: 13, gender: "أنثى" },
            { id: 575, nationalId: "507767673", name: "منى احمد محمد احمد حيرم", classId: 13, gender: "أنثى" },
            { id: 576, nationalId: "502145120", name: "مى السيد محمد السيد يوسف ضيف", classId: 13, gender: "أنثى" },
            { id: 577, nationalId: "504249505", name: "مسه رضا نجاح المغاوري مرزوق", classId: 13, gender: "أنثى" },
            { id: 578, nationalId: "507767984", name: "هنا محمد فتحي عبد العظيم السيد", classId: 13, gender: "أنثى" },
            { id: 579, nationalId: "506888446", name: "وسيله محمود معروف قاسم", classId: 13, gender: "أنثى" },
            { id: 580, nationalId: "497214123", name: "بدر السيد محمد حسن ابراهيم العليمي", classId: 14, gender: "ذكر" },
            { id: 581, nationalId: "504326979", name: "مالك السيد عطيه محمود", classId: 14, gender: "ذكر" },
            { id: 582, nationalId: "504335988", name: "محمد احمد محمد السيد عطيه قمح", classId: 14, gender: "ذكر" },
            { id: 583, nationalId: "503060630", name: "محمد احمد محمد السيد محمد ابو حسن", classId: 14, gender: "ذكر" },
            { id: 584, nationalId: "497214084", name: "محمد ادهم زين العابدين عطيه محمود احمد", classId: 14, gender: "ذكر" },
            { id: 585, nationalId: "502630928", name: "محمد عبد الله اسامه مصطفى بدران محمد", classId: 14, gender: "ذكر" },
            { id: 586, nationalId: "503830273", name: "محمد علاء محمد نجيب", classId: 14, gender: "ذكر" },
            { id: 587, nationalId: "503034540", name: "محمد علي محمد عطا حافظ بدر", classId: 14, gender: "ذكر" },
            { id: 588, nationalId: "503420568", name: "محمد فاروق محمد ابو بكر مرسي عبدالله", classId: 14, gender: "ذكر" },
            { id: 589, nationalId: "503601796", name: "محمد محمد السيد زكى حربيه", classId: 14, gender: "ذكر" },
            { id: 590, nationalId: "505907252", name: "محمد محمود بكر نور الجوهري ابراهيم", classId: 14, gender: "ذكر" },
            { id: 591, nationalId: "502205412", name: "محمد محمود سمير محمد محمود", classId: 14, gender: "ذكر" },
            { id: 592, nationalId: "504334713", name: "محمود على محمد على", classId: 14, gender: "ذكر" },
            { id: 593, nationalId: "504550177", name: "محمود محمد محمود حسين", classId: 14, gender: "ذكر" },
            { id: 594, nationalId: "504379917", name: "مروان محمد عبدالرحمن احمد", classId: 14, gender: "ذكر" },
            { id: 595, nationalId: "504328119", name: "مصطفى بلال حسن محمد", classId: 14, gender: "ذكر" },
            { id: 596, nationalId: "504330010", name: "معاذ ابراهيم مجدى محمد", classId: 14, gender: "ذكر" },
            { id: 597, nationalId: "504555709", name: "ياسين احمد احمد راشد", classId: 14, gender: "ذكر" },
            { id: 598, nationalId: "506027075", name: "ياسين احمد صبرى حامد عزب قاسم", classId: 14, gender: "ذكر" },
            { id: 599, nationalId: "503768133", name: "ياسين طارق جوده وهبه", classId: 14, gender: "ذكر" },
            { id: 600, nationalId: "503723332", name: "يحيي اكرم ممدوح عبد العزيز", classId: 14, gender: "ذكر" },
            { id: 601, nationalId: "504488236", name: "يوسف عمر خالد جمال", classId: 14, gender: "ذكر" },
            { id: 602, nationalId: "503952086", name: "جودى عطيه قرني علي ميزار", classId: 14, gender: "أنثى" },
            { id: 603, nationalId: "504572609", name: "رودين عبد الوهاب فتحى احمد", classId: 14, gender: "أنثى" },
            { id: 604, nationalId: "503053517", name: "ليلى رضا عبد الستار عبد الرحمن العزب", classId: 14, gender: "أنثى" },
            { id: 605, nationalId: "504572561", name: "مكه احمد السيد احمد", classId: 14, gender: "أنثى" },
            { id: 606, nationalId: "504583195", name: "مكه احمد رضا زكريا", classId: 14, gender: "أنثى" },
            { id: 607, nationalId: "504374989", name: "مكه جلال سمير جلال احمد", classId: 14, gender: "أنثى" },
            { id: 608, nationalId: "504264494", name: "مكه رفعت رفعت صبحي محمد", classId: 14, gender: "أنثى" },
            { id: 609, nationalId: "503710645", name: "مكه عادل احمد ابراهيم الدسوقي الغمري", classId: 14, gender: "أنثى" },
            { id: 610, nationalId: "503579085", name: "مكه محمد خالد محمد", classId: 14, gender: "أنثى" },
            { id: 611, nationalId: "504258008", name: "مكه محمد عصام علي محمد علي", classId: 14, gender: "أنثى" },
            { id: 612, nationalId: "503577926", name: "ملك اسامه محمد عبد الحميد", classId: 14, gender: "أنثى" },
            { id: 613, nationalId: "504597846", name: "نادين على احمد حمدى على", classId: 14, gender: "أنثى" },
            { id: 614, nationalId: "504572806", name: "نغم محمد عصام محمد شومان", classId: 14, gender: "أنثى" },
            { id: 615, nationalId: "504073681", name: "هاجر عبد العظيم محمد عمر", classId: 14, gender: "أنثى" },
            { id: 616, nationalId: "505907220", name: "هانم طارق محمد الطنطاوي سيد احمد", classId: 14, gender: "أنثى" },
            { id: 617, nationalId: "503386444", name: "هنا هشام محمد مرتضى ابراهيم بركات", classId: 14, gender: "أنثى" },
            { id: 618, nationalId: "503055661", name: "وعد ابراهيم مصطفى عوض", classId: 14, gender: "أنثى" },
            { id: 619, nationalId: "496282509", name: "إبراهيم احمد إبراهيم بلوغ المراد", classId: 15, gender: "ذكر" },
            { id: 620, nationalId: "495603909", name: "ابراهيم جمال ابراهيم محمود", classId: 15, gender: "ذكر" },
            { id: 621, nationalId: "495971626", name: "إبراهيم مصطفي عبد الوهاب حلمي عبد", classId: 15, gender: "ذكر" },
            { id: 622, nationalId: "495371224", name: "احمد ابراهيم السيد البدوى ابراهيم على", classId: 15, gender: "ذكر" },
            { id: 623, nationalId: "497443707", name: "احمد ابراهيم محمد متولى على متولى", classId: 15, gender: "ذكر" },
            { id: 624, nationalId: "495683919", name: "احمد احمد متولى سليمان عبد الحليم", classId: 15, gender: "ذكر" },
            { id: 625, nationalId: "495146675", name: "احمد عبد الله بكري عبد الله كساب", classId: 15, gender: "ذكر" },
            { id: 626, nationalId: "495144069", name: "احمد محمد احمد جاد ابراهيم", classId: 15, gender: "ذكر" },
            { id: 627, nationalId: "505617646", name: "اسر اسلام عونى ابراهيم عبد العزيز رجب", classId: 15, gender: "أنثى" },
            { id: 628, nationalId: "495318155", name: "آسر عمرو صلاح الصياد", classId: 15, gender: "ذكر" },
            { id: 629, nationalId: "497441456", name: "السيد ابراهيم صبرى ابراهيم عبد الفتاح خنفس", classId: 15, gender: "ذكر" },
            { id: 630, nationalId: "495759963", name: "اياد محمد صبري عبد الحليم", classId: 15, gender: "ذكر" },
            { id: 631, nationalId: "495777216", name: "أيمن إسلام فتحي أحمد التهامي علي", classId: 15, gender: "ذكر" },
            { id: 632, nationalId: "496357472", name: "باسل احمد مرتضي احمد الكمار", classId: 15, gender: "ذكر" },
            { id: 633, nationalId: "496611835", name: "بدر محمد محمود غراب", classId: 15, gender: "ذكر" },
            { id: 634, nationalId: "497439823", name: "جلال احمد جلال عامر على بدر", classId: 15, gender: "ذكر" },
            { id: 635, nationalId: "495755656", name: "خالد عمر خالد جمال محمد يوسف", classId: 15, gender: "ذكر" },
            { id: 636, nationalId: "496415585", name: "خالد نادر صلاح الدين الغندور", classId: 15, gender: "ذكر" },
            { id: 637, nationalId: "495362081", name: "رحيم السيد عبد الستار السيد عبد الله", classId: 15, gender: "ذكر" },
            { id: 638, nationalId: "496341177", name: "رضا السيد محمود دغيم", classId: 15, gender: "ذكر" },
            { id: 639, nationalId: "495470874", name: "سليمان محمد رجب سليمان أمين الغندور", classId: 15, gender: "ذكر" },
            { id: 640, nationalId: "496099261", name: "عادل محمد عادل على محمد محمود الحناوى", classId: 15, gender: "ذكر" },
            { id: 641, nationalId: "496104646", name: "عدي عرفات علي السعيد علي العشماوي", classId: 15, gender: "ذكر" },
            { id: 642, nationalId: "497157896", name: "احلام ياسر حلمى محمود تمراز", classId: 15, gender: "أنثى" },
            { id: 643, nationalId: "494044183", name: "أروي طلعت محمود محمد حسين", classId: 15, gender: "أنثى" },
            { id: 644, nationalId: "496510058", name: "أسماء هاني محمد عبد الحميد ابراهيم شاهين", classId: 15, gender: "أنثى" },
            { id: 645, nationalId: "495930929", name: "امنيه عبد الرحمن مصطفى عبد الرحمن", classId: 15, gender: "أنثى" },
            { id: 646, nationalId: "496256827", name: "إيمان وائل جوده عوض عبد الرحمن", classId: 15, gender: "أنثى" },
            { id: 647, nationalId: "497440519", name: "بثينه عمرو محمد عبد الوهاب محمد سيد احمد", classId: 15, gender: "أنثى" },
            { id: 648, nationalId: "495598014", name: "تسابيح ناصر فوزي عثمان", classId: 15, gender: "أنثى" },
            { id: 649, nationalId: "496039373", name: "تسبيح احمد جلال مهران تهامي", classId: 15, gender: "أنثى" },
            { id: 650, nationalId: "496323961", name: "جنا شعبان جابر محمد السيد", classId: 15, gender: "أنثى" },
            { id: 651, nationalId: "497848182", name: "جنى إبراهيم موسى إبراهيم موسى مصطفى", classId: 15, gender: "أنثى" },
            { id: 652, nationalId: "497412294", name: "دودى اشرف عوض هلال ابو يوسف", classId: 15, gender: "أنثى" },
            { id: 653, nationalId: "495131583", name: "جودي محمود عزيز محمود محمد الجوهري", classId: 15, gender: "أنثى" },
            { id: 654, nationalId: "496029670", name: "جورى احمد محمد احمد احمد حيرم", classId: 15, gender: "أنثى" },
            { id: 655, nationalId: "491177283", name: "جورى محمود عادل محمد أحمد عامر", classId: 15, gender: "أنثى" },
            { id: 656, nationalId: "497643140", name: "جومانة عاطف أمين محمود على سيد الأهل", classId: 15, gender: "أنثى" },
            { id: 657, nationalId: "496069940", name: "جيندا عطيه مصطفى عطيه حسن", classId: 15, gender: "أنثى" },
            { id: 658, nationalId: "495365536", name: "حياه محمد زكريا السيد عوض طاحون", classId: 15, gender: "أنثى" },
            { id: 659, nationalId: "497157884", name: "دارين على احمد على بدر عطا الله", classId: 15, gender: "أنثى" },
            { id: 660, nationalId: "494626103", name: "رودى احمد رفعت محمد حسانين حطبه", classId: 15, gender: "أنثى" },
            { id: 661, nationalId: "496731615", name: "رودينا ابراهيم عبد النبي ابراهيم", classId: 15, gender: "أنثى" },
            { id: 662, nationalId: "497440363", name: "رودينا ايمن متولى حسانين السيد جواد", classId: 15, gender: "أنثى" },
            { id: 663, nationalId: "497860646", name: "رودينا محمد صابر عبده الحبشي", classId: 15, gender: "أنثى" },
            { id: 664, nationalId: "496607883", name: "روزانا كريم اسماعيل محمد", classId: 15, gender: "أنثى" },
            { id: 665, nationalId: "490602092", name: "روشان شريف امين صالح", classId: 15, gender: "أنثى" },
            { id: 666, nationalId: "490599619", name: "رؤى محمد عبدالله الشامي", classId: 15, gender: "أنثى" },

            // ===== 16. الصف الرابع - فصل 3/4 (44 طالب) =====
            { id: 667, nationalId: "495841776", name: "محمد شريف السيد محمد السيد فرج", classId: 16, gender: "ذكر" },
            { id: 668, nationalId: "498714779", name: "محمد فؤاد يوسف عبدالمهدى مرسى", classId: 16, gender: "ذكر" },
            { id: 669, nationalId: "502101852", name: "محمد محمد محسن محمود السيد", classId: 16, gender: "ذكر" },
            { id: 670, nationalId: "502032836", name: "محمد محمد محمد محمد محمد جابر", classId: 16, gender: "ذكر" },
            { id: 671, nationalId: "502094741", name: "محمد محمود متولى احمد محمد مراد", classId: 16, gender: "ذكر" },
            { id: 672, nationalId: "499327157", name: "محمد مصطفى السيد محمد يوسف", classId: 16, gender: "ذكر" },
            { id: 673, nationalId: "493536741", name: "أحمد ياسر محمد الديردى ابراهيم", classId: 16, gender: "ذكر" },
            { id: 674, nationalId: "496538220", name: "محمود على محمود على عطيه محمد", classId: 16, gender: "ذكر" },
            { id: 675, nationalId: "502146086", name: "مروان وليد محسن عبد الحميد عامر محمد", classId: 16, gender: "ذكر" },
            { id: 676, nationalId: "498718372", name: "مصطفى ابراهيم يوسف عبدالمهدى مرسى", classId: 16, gender: "ذكر" },
            { id: 677, nationalId: "502100406", name: "معاذ مصطفى بكر بكر محمد", classId: 16, gender: "ذكر" },
            { id: 678, nationalId: "502148481", name: "ممتاز احمد ممتاز محمد نصر سليمان", classId: 16, gender: "ذكر" },
            { id: 679, nationalId: "501816127", name: "مهند بلال السيد محمد حسن عبدالهادى", classId: 16, gender: "ذكر" },
            { id: 680, nationalId: "497213825", name: "نادر عبد المنعم يوسف عبد المنعم حامد", classId: 16, gender: "ذكر" },
            { id: 681, nationalId: "494073929", name: "وائل وليد احمد راشد راشد السحار", classId: 16, gender: "ذكر" },
            { id: 682, nationalId: "501430707", name: "ياسين عماد احمد احمد شلبي", classId: 16, gender: "ذكر" },
            { id: 683, nationalId: "501925708", name: "ياسين عمرو محمد احمد المنسي محمد", classId: 16, gender: "ذكر" },
            { id: 684, nationalId: "502094407", name: "ياسين محمد عصام الدين على السيد جلهوم", classId: 16, gender: "ذكر" },
            { id: 685, nationalId: "494116114", name: "يحيى عبدالله رفعت محمد بدر عبد العال", classId: 16, gender: "ذكر" },
            { id: 686, nationalId: "501976305", name: "يوسف اسلام رفعت احمدمحمد البيومى", classId: 16, gender: "ذكر" },
            { id: 687, nationalId: "495424347", name: "يوسف محمد السيد السيد مصطفى", classId: 16, gender: "ذكر" },
            { id: 688, nationalId: "502142499", name: "يوسف محمد السيد محمد السيد فرج", classId: 16, gender: "ذكر" },
            { id: 689, nationalId: "502963043", name: "يونس على متولى على متولى المرشدي", classId: 16, gender: "ذكر" },
            { id: 690, nationalId: "500999265", name: "فريحه محمد فاروق السعيد حسنين موسى", classId: 16, gender: "أنثى" },
            { id: 691, nationalId: "502177681", name: "كارما احمد محمد عباس حسن الرمصى", classId: 16, gender: "أنثى" },
            { id: 692, nationalId: "502033352", name: "كارما احمد محمد محمود السعيد الشناوى", classId: 16, gender: "أنثى" },
            { id: 693, nationalId: "501973396", name: "كنده حسام رضا عز الرجال الحسينى السيد", classId: 16, gender: "أنثى" },
            { id: 694, nationalId: "501972588", name: "كنزى مصطفى محمد النبوى محى الدين", classId: 16, gender: "أنثى" },
            { id: 695, nationalId: "502177803", name: "لوجى احمد سعيد مصطفى محمد النمر", classId: 16, gender: "أنثى" },
            { id: 696, nationalId: "502033853", name: "ليليان احمد سامى محمد على الرشيدى", classId: 16, gender: "أنثى" },
            { id: 697, nationalId: "498863360", name: "مكه ماهر هاشم مصلحي عبدالعال", classId: 16, gender: "أنثى" },
            { id: 698, nationalId: "502189491", name: "ملك جلال السعيد محمد السيد أبوزيد", classId: 16, gender: "أنثى" },
            { id: 699, nationalId: "502178028", name: "ملك رفعت علاء محمد بركات", classId: 16, gender: "أنثى" },
            { id: 700, nationalId: "498829914", name: "ملك محمد السيد السعيد احمد محمد طه", classId: 16, gender: "أنثى" },
            { id: 701, nationalId: "502160738", name: "منسه تامر شحته محفوظ ابو العلا عاشور", classId: 16, gender: "أنثى" },
            { id: 702, nationalId: "502177561", name: "منى ابو العلا ابراهيم ابو العلا شاهين", classId: 16, gender: "أنثى" },
            { id: 703, nationalId: "496030316", name: "نور عبد المنعم كامل عبد المنعم احمد حجازى", classId: 16, gender: "أنثى" },
            { id: 704, nationalId: "498658672", name: "نورسين مصطفى حلمى محمد احمد الزهار", classId: 16, gender: "أنثى" },
            { id: 705, nationalId: "497886272", name: "نورهان ابراهيم زكريا ابراهيم حسانين ابراهيم", classId: 16, gender: "أنثى" },
            { id: 706, nationalId: "501973899", name: "هنا على محمد على محمد حسن", classId: 16, gender: "أنثى" },
            { id: 707, nationalId: "498529545", name: "وعد احمد جمال السيد هلال عاشور", classId: 16, gender: "أنثى" },
            { id: 708, nationalId: "502177327", name: "وعد سامى سيد احمد عبد الهادى عباده", classId: 16, gender: "أنثى" },
            { id: 709, nationalId: "502189323", name: "وعد محمد ابو بكر عبد العزيز فرج", classId: 16, gender: "أنثى" },
            { id: 710, nationalId: "502031560", name: "ياسمين محمد عبد الحميد زاهر السيد زهره", classId: 16, gender: "أنثى" }
        ]
    };
}

function initDatabase() {
    const existing = localStorage.getItem(DB_KEY);
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch (e) {
            console.error("Corrupt DB, re-seeding", e);
        }
    }
    const db = getSeedDatabase();
    localStorage.setItem(DB_KEY, JSON.stringify(db));
    return db;
}

function getDatabase() {
    return initDatabase();
}

function saveDatabase(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function getStudentsByClass(classId) {
    const db = getDatabase();
    return db.students.filter(s => s.classId === parseInt(classId));
}

function getClassName(classId) {
    const db = getDatabase();
    const cls = db.classes.find(c => c.id === parseInt(classId));
    if (!cls) return "";
    const grade = db.grades.find(g => g.id === cls.gradeId);
    return (grade ? grade.name + " - " : "") + "فصل " + cls.name;
}

function getGradeIdByClass(classId) {
    const db = getDatabase();
    const cls = db.classes.find(c => c.id === parseInt(classId));
    return cls ? cls.gradeId : null;
}

function getClassesByGrade(gradeId) {
    const db = getDatabase();
    return db.classes.filter(c => c.gradeId === parseInt(gradeId));
}

function findStudentByNationalId(nationalId) {
    const db = getDatabase();
    const nid = String(nationalId).trim();
    return db.students.find(s => s.nationalId === nid) || null;
}

function findStudentByName(name) {
    const db = getDatabase();
    const target = String(name).trim();
    return db.students.find(s => s.name.trim() === target) || null;
}

function addClass(classInfo) {
    const db = getDatabase();
    const newId = db.classes.length > 0 ? Math.max(...db.classes.map(c => c.id)) + 1 : 1;
    const newClass = {
        id: newId,
        name: classInfo.name,
        gradeId: classInfo.gradeId,
        schoolId: classInfo.schoolId || 1,
        year: classInfo.year || "2025-2026"
    };
    db.classes.push(newClass);
    saveDatabase(db);
    return newClass;
}

function addStudent(studentInfo) {
    const db = getDatabase();
    if (studentInfo.nationalId && findStudentByNationalId(studentInfo.nationalId)) {
        throw new Error("id مسجل بالفعل لطالب آخر");
    }
    const newId = db.students.length > 0 ? Math.max(...db.students.map(s => s.id)) + 1 : 1;
    const newStudent = {
        id: newId,
        nationalId: String(studentInfo.nationalId),
        name: studentInfo.name,
        classId: parseInt(studentInfo.classId),
        gender: studentInfo.gender || "ذكر"
    };
    db.students.push(newStudent);
    saveDatabase(db);
    return newStudent;
}

function getAllStudentsWithClassInfo() {
    const db = getDatabase();
    return db.students.map(s => {
        const cls = db.classes.find(c => c.id === s.classId) || {};
        const grade = db.grades.find(g => g.id === cls.gradeId) || {};
        return {
            ...s,
            classId: s.classId,
            className: cls.name || "",
            gradeId: cls.gradeId || null,
            gradeName: grade.name || "",
            gradeLevel: grade.level || 0
        };
    });
}

// ==================== المواد الدراسية ====================
function getAllSubjects() {
    return [
        { id: 1, name: "اللغة العربية", maxScore: 100, grades: [1, 2, 3, 4, 5, 6] },
        { id: 2, name: "اللغة الإنجليزية", maxScore: 100, grades: [1, 2, 3, 4, 5, 6] },
        { id: 3, name: "الرياضيات", maxScore: 100, grades: [1, 2, 3, 4, 5, 6] },
        { id: 4, name: "العلوم", maxScore: 100, grades: [1, 2, 3, 4, 5, 6] },
        { id: 5, name: "الدراسات الاجتماعية", maxScore: 100, grades: [1, 2, 3, 4, 5, 6] },
        { id: 6, name: "التربية الدينية", maxScore: 50, grades: [1, 2, 3, 4, 5, 6] },
        { id: 7, name: "التربية الفنية", maxScore: 50, grades: [1, 2, 3, 4, 5, 6] },
        { id: 8, name: "التربية الرياضية", maxScore: 50, grades: [1, 2, 3, 4, 5, 6] },
        { id: 9, name: "التكنولوجيا", maxScore: 50, grades: [4, 5, 6] }
    ];
}

function getSubjects(gradeId) {
    const all = getAllSubjects();
    if (!gradeId) {
        return all.map(s => ({ id: s.id, name: s.name, maxScore: s.maxScore }));
    }
    const gid = parseInt(gradeId);
    return all
        .filter(s => s.grades.includes(gid))
        .map(s => ({ id: s.id, name: s.name, maxScore: s.maxScore }));
}

function getMaxSubjectScore(subjectId) {
    const all = getAllSubjects();
    const subj = all.find(s => s.id === parseInt(subjectId));
    return subj ? subj.maxScore : 100;
}

const RESULTS_KEY = "resultsDB";

function getSeedResults() {
    return { results: [] };
}

function initResultsDB() {
    const existing = localStorage.getItem(RESULTS_KEY);
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch (e) {
            console.error("Corrupt results DB, re-seeding", e);
        }
    }
    const db = getSeedResults();
    localStorage.setItem(RESULTS_KEY, JSON.stringify(db));
    return db;
}

function saveResultsDB(rdb) {
    localStorage.setItem(RESULTS_KEY, JSON.stringify(rdb));
}

function addResult(resultInfo) {
    const rdb = initResultsDB();
    const existing = rdb.results.find(r =>
        r.studentId === resultInfo.studentId &&
        r.subjectId === resultInfo.subjectId &&
        r.term === resultInfo.term &&
        r.year === resultInfo.year
    );
    if (existing) {
        existing.score = resultInfo.score;
        existing.comments = resultInfo.comments || "";
    } else {
        const newId = rdb.results.length > 0 ? Math.max(...rdb.results.map(r => r.id)) + 1 : 1;
        rdb.results.push({
            id: newId,
            studentId: parseInt(resultInfo.studentId),
            subjectId: parseInt(resultInfo.subjectId),
            classId: parseInt(resultInfo.classId),
            term: resultInfo.term || "الفصل الأول",
            year: resultInfo.year || "2025-2026",
            score: parseFloat(resultInfo.score),
            comments: resultInfo.comments || "",
            date: new Date().toISOString().split('T')[0]
        });
    }
    saveResultsDB(rdb);
}

function getResultsByStudent(studentId) {
    const rdb = initResultsDB();
    return rdb.results.filter(r => r.studentId === parseInt(studentId));
}

function getResultsByClass(classId, term, year) {
    const rdb = initResultsDB();
    return rdb.results.filter(r =>
        r.classId === parseInt(classId) &&
        (!term || r.term === term) &&
        (!year || r.year === year)
    );
}

function getResultsByClassAndSubject(classId, subjectId, term, year) {
    const rdb = initResultsDB();
    return rdb.results.filter(r =>
        r.classId === parseInt(classId) &&
        r.subjectId === parseInt(subjectId) &&
        (!term || r.term === term) &&
        (!year || r.year === year)
    );
}

// ==================== المستخدمين (تسجيل الدخول) ====================
const USERS_KEY = "usersDB";

function getSeedUsers() {
    return {
        users: [
            { id: 1, username: "admin", password: "123456", role: "admin", name: "مدير النظام" },
            { id: 2, username: "teacher", password: "123456", role: "teacher", name: "المدرس أحمد" },
            { id: 3, username: "teacher2", password: "123456", role: "teacher", name: "المدرسة سارة" }
        ]
    };
}

function initUsersDB() {
    const existing = localStorage.getItem(USERS_KEY);
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch (e) {
            console.error("Corrupt users DB, re-seeding", e);
        }
    }
    const db = getSeedUsers();
    localStorage.setItem(USERS_KEY, JSON.stringify(db));
    return db;
}

function loginUser(username, password) {
    const udb = initUsersDB();
    const user = udb.users.find(u => u.username === username && u.password === password);
    if (user) {
        const session = {
            userId: user.id,
            username: user.username,
            role: user.role,
            name: user.name,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem("currentSession", JSON.stringify(session));
        return session;
    }
    const db = initDatabase();
    const student = db.students.find(s => s.nationalId === username && s.nationalId === password);
    if (student) {
        const session = {
            userId: student.id,
            username: student.nationalId,
            role: "student",
            name: student.name,
            studentId: student.id,
            nationalId: student.nationalId,
            classId: student.classId,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem("currentSession", JSON.stringify(session));
        return session;
    }
    return null;
}

function getCurrentSession() {
    const session = localStorage.getItem("currentSession");
    return session ? JSON.parse(session) : null;
}

function logoutUser() {
    localStorage.removeItem("currentSession");
}

function requireLogin(role) {
    const session = getCurrentSession();
    if (!session) {
        window.location.href = "login.html";
        return false;
    }
    if (role && session.role !== role && session.role !== "admin") {
        window.location.href = "login.html";
        return false;
    }
    return true;
}

function deleteStudent(studentId) {
    const db = getDatabase();
    const idx = db.students.findIndex(s => s.id === parseInt(studentId));
    if (idx !== -1) {
        db.students.splice(idx, 1);
        saveDatabase(db);
        return true;
    }
    return false;
}

function updateStudent(studentId, updates) {
    const db = getDatabase();
    const student = db.students.find(s => s.id === parseInt(studentId));
    if (student) {
        Object.assign(student, updates);
        saveDatabase(db);
        return student;
    }
    return null;
}

// ==================== المستخدمون: تسجيل حسابات جديدة ====================
function registerUser(userInfo) {
    const udb = initUsersDB();
    const username = String(userInfo.username || "").trim();
    const password = String(userInfo.password || "").trim();
    const name = String(userInfo.name || "").trim();
    const role = ["teacher", "admin"].includes(userInfo.role) ? userInfo.role : "teacher";

    if (!username || !password || !name) {
        return { success: false, message: "الاسم والاسم المستخدم وكلمة المرور مطلوبة" };
    }
    if (password.length < 4) {
        return { success: false, message: "كلمة المرور يجب أن تكون 4 أحرف على الأقل" };
    }
    if (udb.users.find(u => u.username === username)) {
        return { success: false, message: "اسم المستخدم مسجل بالفعل" };
    }
    const newId = udb.users.length > 0 ? Math.max(...udb.users.map(u => u.id)) + 1 : 1;
    const newUser = {
        id: newId,
        username: username,
        password: password,
        role: role,
        name: name
    };
    udb.users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(udb));
    return { success: true, user: newUser, message: "✅ تم إنشاء الحساب بنجاح" };
}

function getAllUsers() {
    const udb = initUsersDB();
    return udb.users;
}

function deleteUser(userId) {
    const udb = initUsersDB();
    const idx = udb.users.findIndex(u => u.id === parseInt(userId));
    if (idx !== -1) {
        if (udb.users[idx].username === "admin") {
            return { success: false, message: "لا يمكن حذف حساب المدير الافتراضي" };
        }
        udb.users.splice(idx, 1);
        localStorage.setItem(USERS_KEY, JSON.stringify(udb));
        return { success: true };
    }
    return { success: false };
}

// ==================== التقييمات الشهرية ====================
const MONTHLY_EVALS_KEY = "monthlyEvalsDB";

function getMonthsList() {
    return [
        { id: 9, name: "سبتمبر" },
        { id: 10, name: "أكتوبر" },
        { id: 11, name: "نوفمبر" },
        { id: 12, name: "ديسمبر" },
        { id: 1, name: "يناير" },
        { id: 2, name: "فبراير" },
        { id: 3, name: "مارس" },
        { id: 4, name: "أبريل" },
        { id: 5, name: "مايو" }
    ];
}

function initMonthlyEvalsDB() {
    const existing = localStorage.getItem(MONTHLY_EVALS_KEY);
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch (e) {
            console.error("Corrupt monthly evals DB, re-seeding", e);
        }
    }
    const db = { evals: [] };
    localStorage.setItem(MONTHLY_EVALS_KEY, JSON.stringify(db));
    return db;
}

function saveMonthlyEvalsDB(mdb) {
    localStorage.setItem(MONTHLY_EVALS_KEY, JSON.stringify(mdb));
}

function addMonthlyEval(evalInfo) {
    const mdb = initMonthlyEvalsDB();
    const existing = mdb.evals.find(r =>
        r.studentId === parseInt(evalInfo.studentId) &&
        r.subjectId === parseInt(evalInfo.subjectId) &&
        r.monthId === parseInt(evalInfo.monthId) &&
        r.year === (evalInfo.year || "2025-2026")
    );
    if (existing) {
        existing.score = parseFloat(evalInfo.score);
        existing.comments = evalInfo.comments || "";
    } else {
        const newId = mdb.evals.length > 0 ? Math.max(...mdb.evals.map(r => r.id)) + 1 : 1;
        mdb.evals.push({
            id: newId,
            studentId: parseInt(evalInfo.studentId),
            subjectId: parseInt(evalInfo.subjectId),
            classId: parseInt(evalInfo.classId),
            monthId: parseInt(evalInfo.monthId),
            year: evalInfo.year || "2025-2026",
            score: parseFloat(evalInfo.score),
            comments: evalInfo.comments || "",
            date: new Date().toISOString().split('T')[0]
        });
    }
    saveMonthlyEvalsDB(mdb);
}

function getMonthlyEvalsByStudent(studentId) {
    const mdb = initMonthlyEvalsDB();
    return mdb.evals.filter(r => r.studentId === parseInt(studentId));
}

function getMonthlyEvalsByClass(classId, monthId, year) {
    const mdb = initMonthlyEvalsDB();
    return mdb.evals.filter(r =>
        r.classId === parseInt(classId) &&
        (!monthId || r.monthId === parseInt(monthId)) &&
        (!year || r.year === year)
    );
}

function getMonthlyEvalsByClassAndSubject(classId, subjectId, monthId, year) {
    const mdb = initMonthlyEvalsDB();
    return mdb.evals.filter(r =>
        r.classId === parseInt(classId) &&
        r.subjectId === parseInt(subjectId) &&
        (!monthId || r.monthId === parseInt(monthId)) &&
        (!year || r.year === year)
    );
}

function getUsersDB() { return initUsersDB(); }
function getMonthlyEvalsDB() { return initMonthlyEvalsDB(); }