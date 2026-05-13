export const lessons = [
  // ============================================
  // 1-DARS: HTML ASOSLARI
  // ============================================
  {
    id: 1,
    title: "HTML",
    subtitle: "HTML teglar bilan tanishuv",
    icon: "FaHtml5",
    color: "from-orange-400 to-orange-600",
    pdfFile: "lesson-1-html.pdf",
    duration: "45 daqiqa",
    difficulty: "Oson",
    content: {
      intro: "HTML (HyperText Markup Language) - bu veb-sahifalarni yaratish uchun asosiy til. U veb-sahifaning strukturasi va kontentini belgilaydi.",
      topics: [
        "HTML nima?",
        "Asosiy HTML strukturasi (html, head, body)",
        "Heading teglari (h1-h6)",
        "Paragraph (p) tegi",
        "Line break (br) tegi",
        "Horizontal rule (hr) tegi",
        "Formatlash teglari (b, i, u, strong, em)",
        "Izohlar (comments)",
        "HTML atributlari",
        "DOCTYPE deklaratsiyasi"
      ],
      questions: [
        {
          id: 1,
          question: "HTML to'liq nomi nima?",
          options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
          correct: 0,
          explanation: "HTML - Hyper Text Markup Language"
        },
        {
          id: 2,
          question: "Eng katta heading tegi qaysi?",
          options: ["h6", "h1", "header", "head"],
          correct: 1,
          explanation: "h1 eng katta, h6 eng kichik heading"
        },
        {
          id: 3,
          question: "Yangi qatorga o'tish uchun qaysi teg ishlatiladi?",
          options: ["<p>", "<nl>", "<br>", "<lb>"],
          correct: 2,
          explanation: "<br> (break) tegi yangi qator uchun"
        },
        {
          id: 4,
          question: "Qalin text yozish uchun qaysi teg ishlatiladi?",
          options: ["<i>", "<bold>", "<strong>", "<big>"],
          correct: 2,
          explanation: "<strong> yoki <b> teglari qalin text uchun"
        },
        {
          id: 5,
          question: "HTML fayl qanday kengaytma bilan saqlanadi?",
          options: [".css", ".js", ".html", ".ht"],
          correct: 2,
          explanation: "HTML fayllar .html yoki .htm kengaytmasi bilan"
        },
        {
          id: 6,
          question: "HTML izoh qanday yoziladi?",
          options: ["// izoh", "/* izoh */", "<!-- izoh -->", "# izoh"],
          correct: 2,
          explanation: "<!-- izoh --> HTML izoh sintaksisi"
        },
        {
          id: 7,
          question: "<hr> tegi nima vazifani bajaradi?",
          options: ["Yangi qator", "Gorizontal chiziq", "Sarlavha", "Rasm"],
          correct: 1,
          explanation: "<hr> (horizontal rule) gorizontal chiziq chizadi"
        },
        {
          id: 8,
          question: "Qaysi teg kursiv (yotiq) text yaratadi?",
          options: ["<b>", "<u>", "<i>", "<p>"],
          correct: 2,
          explanation: "<i> yoki <em> teglari kursiv text uchun"
        },
        {
          id: 9,
          question: "HTML da <!DOCTYPE html> nima uchun kerak?",
          options: ["Sarlavha uchun", "Brauzerga HTML5 ekanligini bildiradi", "Rasm qo'shish uchun", "Jadval yaratish uchun"],
          correct: 1,
          explanation: "DOCTYPE brauzerga HTML5 versiyasini bildiradi"
        },
        {
          id: 10,
          question: "<title> tegi qaysi bo'limda joylashadi?",
          options: ["<body>", "<footer>", "<head>", "<div>"],
          correct: 2,
          explanation: "<title> tegi <head> bo'limida joylashadi"
        }
      ],
      practice: {
        title: "HTML asoslari amaliyoti",
        description: "HTML fayl yarating va unda sarlavha, paragraf, va formatlash teglaridan foydalaning.",
        tasks: [
          "h1 tegi yordamida sarlavha yozing",
          "p tegi yordamida 3 ta paragraf yozing",
          "br tegi yordamida qatorlarni ajrating",
          "strong tegi yordamida muhim so'zlarni ajratib ko'rsating"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <!-- Kodingizni shu yerga yozing -->
    
</body>
</html>`
      }
    }
  },

  // ============================================
  // 2-DARS: FONT LIST
  // ============================================
  {
    id: 2,
    title: "FONT LIST",
    subtitle: "Shriftlar va ro'yxatlar bilan ishlash",
    icon: "FaFont",
    color: "from-blue-400 to-blue-600",
    pdfFile: "lesson-2-font-list.pdf",
    duration: "50 daqiqa",
    difficulty: "Oson",
    content: {
      intro: "Ushbu darsda shriftlar bilan ishlash va HTML da ro'yxatlar yaratishni o'rganamiz. Shriftlar matn ko'rinishini, ro'yxatlar esa ma'lumotlarni tartibli ko'rsatishni ta'minlaydi.",
      topics: [
        "Shrift turlari va ularning ahamiyati",
        "Tartiblangan ro'yxatlar (ol)",
        "Tartibsiz ro'yxatlar (ul)",
        "Ta'rif ro'yxatlari (dl, dt, dd)",
        "Ichma-ich ro'yxatlar",
        "Shrift stillari (color, font-family, font-size)",
        "Google Fonts ulash",
        "Ro'yxat markerlarini o'zgartirish",
        "Font-weight va font-style",
        "Line-height va letter-spacing"
      ],
      questions: [
        {
          id: 1,
          question: "Tartiblangan ro'yxat qaysi teg bilan yaratiladi?",
          options: ["<ul>", "<dl>", "<ol>", "<list>"],
          correct: 2,
          explanation: "<ol> (ordered list) tartiblangan ro'yxat uchun"
        },
        {
          id: 2,
          question: "Ro'yxat elementi qaysi teg bilan belgilanadi?",
          options: ["<item>", "<li>", "<le>", "<el>"],
          correct: 1,
          explanation: "<li> (list item) ro'yxat elementlari uchun"
        },
        {
          id: 3,
          question: "CSS da shrift turini o'zgartirish uchun qaysi xususiyat?",
          options: ["text-style", "font-family", "font-style", "text-family"],
          correct: 1,
          explanation: "font-family shrift turini belgilaydi"
        },
        {
          id: 4,
          question: "Tartibsiz ro'yxat qaysi teg?",
          options: ["<ol>", "<list>", "<unordered>", "<ul>"],
          correct: 3,
          explanation: "<ul> (unordered list) tartibsiz ro'yxat"
        },
        {
          id: 5,
          question: "Shrift o'lchamini o'zgartirish uchun CSS xususiyati?",
          options: ["font-weight", "text-size", "font-size", "size"],
          correct: 2,
          explanation: "font-size shrift o'lchamini belgilaydi"
        },
        {
          id: 6,
          question: "Qaysi qiymat shriftni qalin qiladi?",
          options: ["font-weight: normal", "font-weight: bold", "font-weight: light", "font-weight: thin"],
          correct: 1,
          explanation: "font-weight: bold shriftni qalin qiladi"
        },
        {
          id: 7,
          question: "Ta'rif ro'yxati qaysi teg bilan boshlanadi?",
          options: ["<ul>", "<ol>", "<dl>", "<tl>"],
          correct: 2,
          explanation: "<dl> (definition list) ta'rif ro'yxati uchun"
        },
        {
          id: 8,
          question: "Google Fonts qanday ulanadi?",
          options: ["<script>", "<link>", "<import>", "<font>"],
          correct: 1,
          explanation: "Google Fonts <link> tegi orqali ulanadi"
        },
        {
          id: 9,
          question: "Qatorlar orasidagi masofa uchun CSS xususiyati?",
          options: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
          correct: 2,
          explanation: "line-height qatorlar orasidagi masofani belgilaydi"
        },
        {
          id: 10,
          question: "<ol> tegi uchun default marker nima?",
          options: ["Nuqta", "Raqam", "Kvadrat", "Doira"],
          correct: 1,
          explanation: "<ol> default holatda raqamlar bilan belgilanadi"
        }
      ],
      practice: {
        title: "Ro'yxatlar va shriftlar amaliyoti",
        description: "Turli xil ro'yxatlarni yarating va ularga shrift stillarini qo'llang.",
        tasks: [
          "Tartiblangan ro'yxat yarating (1-5)",
          "Tartibsiz ro'yxat yarating",
          "Ichma-ich ro'yxat yarating",
          "Google Fonts dan shrift ulang"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Ro'yxatlar</title>
    <style>
        /* CSS kodlaringiz */
    </style>
</head>
<body>
    <h2>Mening ro'yxatlarim</h2>
    
</body>
</html>`
      }
    }
  },

  // ============================================
  // 3-DARS: IMG VA TABLE
  // ============================================
  {
    id: 3,
    title: "IMG TABLE teglari",
    subtitle: "Rasmlar va jadvallar bilan ishlash",
    icon: "FaImage",
    color: "from-green-400 to-green-600",
    pdfFile: "lesson-3-img-table.pdf",
    duration: "55 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "Bu darsda HTML da rasmlar qo'shish va jadvallar yaratishni o'rganamiz. Rasmlar va jadvallar veb-sahifalarning muhim elementlari hisoblanadi.",
      topics: [
        "img tegi va uning atributlari",
        "src, alt, width, height atributlari",
        "Rasm formatlari (jpg, png, gif, svg, webp)",
        "table tegi asoslari",
        "tr, td, th teglari",
        "thead, tbody, tfoot bo'limlari",
        "colspan va rowspan atributlari",
        "Jadval chegaralari (border)",
        "Rasmga havola qo'shish",
        "Responsive rasmlar (picture, srcset)"
      ],
      questions: [
        {
          id: 1,
          question: "Rasm qo'shish uchun qaysi teg ishlatiladi?",
          options: ["<picture>", "<img>", "<image>", "<src>"],
          correct: 1,
          explanation: "<img> tegi rasm qo'shish uchun"
        },
        {
          id: 2,
          question: "img tegida rasm manzilini ko'rsatuvchi atribut?",
          options: ["alt", "href", "src", "link"],
          correct: 2,
          explanation: "src (source) atributi rasm manzili uchun"
        },
        {
          id: 3,
          question: "Jadval yaratish uchun asosiy teg?",
          options: ["<tab>", "<table>", "<grid>", "<sheet>"],
          correct: 1,
          explanation: "<table> tegi jadval uchun asosiy teg"
        },
        {
          id: 4,
          question: "Jadval qatori qaysi teg bilan yaratiladi?",
          options: ["<td>", "<th>", "<row>", "<tr>"],
          correct: 3,
          explanation: "<tr> (table row) jadval qatori uchun"
        },
        {
          id: 5,
          question: "colspan atributi nima vazifani bajaradi?",
          options: ["Qatorlarni birlashtiradi", "Ustunlarni birlashtiradi", "Jadvalni o'chiradi", "Chegara qo'shadi"],
          correct: 1,
          explanation: "colspan ustunlarni birlashtirish uchun"
        },
        {
          id: 6,
          question: "Rasm ko'rsatilmaganda qanday matn chiqadi?",
          options: ["title", "alt", "description", "caption"],
          correct: 1,
          explanation: "alt atributi rasm ko'rsatilmaganda chiqadigan matn"
        },
        {
          id: 7,
          question: "Jadval sarlavhasi qaysi teg bilan yaratiladi?",
          options: ["<td>", "<th>", "<caption>", "<header>"],
          correct: 1,
          explanation: "<th> (table header) jadval sarlavhasi uchun"
        },
        {
          id: 8,
          question: "Qaysi rasm formati shaffof fonni qo'llab-quvvatlaydi?",
          options: ["JPEG", "PNG", "BMP", "TIFF"],
          correct: 1,
          explanation: "PNG formati shaffof fonni qo'llab-quvvatlaydi"
        },
        {
          id: 9,
          question: "rowspan nima qiladi?",
          options: ["Ustunlarni birlashtiradi", "Qatorlarni birlashtiradi", "Jadvalni kengaytiradi", "Chegara qo'shadi"],
          correct: 1,
          explanation: "rowspan qatorlarni birlashtirish uchun"
        },
        {
          id: 10,
          question: "Rasmga havola qanday qo'shiladi?",
          options: ["<a href='...'><img></a>", "<img href='...'>", "<link img='...'>", "<a img='...'>"],
          correct: 0,
          explanation: "Rasm <a> tegi ichiga olinadi"
        }
      ],
      practice: {
        title: "Rasm va jadval amaliyoti",
        description: "Rasm qo'shing va jadval yarating.",
        tasks: [
          "Internetdan rasm manzilini qo'shing",
          "3x3 jadval yarating",
          "Jadval sarlavhalarini qo'shing",
          "colspan yordamida ustunlarni birlashtiring"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Rasm va Jadval</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        td, th { border: 1px solid #333; padding: 8px; }
    </style>
</head>
<body>
    <h1>Mening rasmim</h1>
    
    <h2>Jadval</h2>
    
</body>
</html>`
      }
    }
  },

  // ============================================
  // 4-DARS: DIV VA SPAN
  // ============================================
  {
    id: 4,
    title: "DIV va SPAN teglari",
    subtitle: "Blok va ichki elementlar",
    icon: "FaCode",
    color: "from-purple-400 to-purple-600",
    pdfFile: "lesson-4-div-span.pdf",
    duration: "50 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "DIV va SPAN - HTML ning eng ko'p ishlatiladigan konteyner elementlari. DIV blok element, SPAN esa ichki (inline) element hisoblanadi.",
      topics: [
        "Blok va inline elementlar farqi",
        "DIV tegi va uning vazifalari",
        "SPAN tegi va ishlatilishi",
        "Konteyner elementlar",
        "Class va ID atributlari",
        "Elementlarni guruhlash",
        "Semantik elementlar bilan taqqoslash",
        "DIV nesting (ichma-ich DIV)",
        "CSS bilan DIV va SPAN stillash",
        "Layout yaratishda DIV rol"
      ],
      questions: [
        {
          id: 1,
          question: "DIV qanday element turi?",
          options: ["Inline", "Block", "Inline-block", "None"],
          correct: 1,
          explanation: "DIV blok element hisoblanadi"
        },
        {
          id: 2,
          question: "SPAN qanday element?",
          options: ["Block", "Inline", "Table", "Flex"],
          correct: 1,
          explanation: "SPAN inline element hisoblanadi"
        },
        {
          id: 3,
          question: "Class atributi qanday belgilanadi?",
          options: [".class", "#class", "class=''", "class#"],
          correct: 2,
          explanation: "HTML da class='nomi' ko'rinishida yoziladi"
        },
        {
          id: 4,
          question: "ID atributi qanday belgilanadi?",
          options: [".id", "#id", "id=''", "id#"],
          correct: 2,
          explanation: "HTML da id='nomi' ko'rinishida yoziladi"
        },
        {
          id: 5,
          question: "Blok elementning xususiyati?",
          options: ["To'liq kenglikni egallaydi", "Faqat kontent kengligicha", "Yonma-yon joylashadi", "Ko'rinmaydi"],
          correct: 0,
          explanation: "Blok element to'liq kenglikni egallaydi"
        },
        {
          id: 6,
          question: "CSS da class qanday chaqiriladi?",
          options: ["#class", ".class", "@class", "class"],
          correct: 1,
          explanation: "CSS da class . (nuqta) bilan chaqiriladi"
        },
        {
          id: 7,
          question: "CSS da ID qanday chaqiriladi?",
          options: [".id", "@id", "#id", "id"],
          correct: 2,
          explanation: "CSS da ID # (panjara) bilan chaqiriladi"
        },
        {
          id: 8,
          question: "Qaysi element inline hisoblanadi?",
          options: ["<div>", "<p>", "<span>", "<section>"],
          correct: 2,
          explanation: "<span> inline element hisoblanadi"
        },
        {
          id: 9,
          question: "ID takrorlanishi mumkinmi?",
          options: ["Ha", "Yo'q", "Ba'zan", "CSS ga bog'liq"],
          correct: 1,
          explanation: "ID bir sahifada faqat bir marta ishlatiladi"
        },
        {
          id: 10,
          question: "DIV asosan nima uchun ishlatiladi?",
          options: ["Text formatlash", "Konteyner/guruhlash", "Rasm qo'shish", "Havola yaratish"],
          correct: 1,
          explanation: "DIV elementlarni guruhlash va konteyner sifatida ishlatiladi"
        }
      ],
      practice: {
        title: "DIV va SPAN amaliyoti",
        description: "DIV va SPAN elementlaridan foydalanib layout yarating.",
        tasks: [
          "3 ta DIV yarating va ularni class bilan nomlang",
          "SPAN yordamida matn qismini ajrating",
          "DIV larga CSS orqali fon rangi bering",
          "Class va ID lardan foydalaning"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>DIV va SPAN</title>
    <style>
        /* CSS kodlaringiz */
    </style>
</head>
<body>
    
</body>
</html>`
      }
    }
  },

  // ============================================
  // 5-DARS: CSS ASOSLARI
  // ============================================
  {
    id: 5,
    title: "CSS",
    subtitle: "Cascading Style Sheets asoslari",
    icon: "FaCss3Alt",
    color: "from-blue-500 to-blue-700",
    pdfFile: "lesson-5-css.pdf",
    duration: "60 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "CSS (Cascading Style Sheets) - veb-sahifalarni bezash va stillash uchun ishlatiladigan til. CSS yordamida ranglar, o'lchamlar, joylashuv va boshqa ko'rinish xususiyatlarini belgilaymiz.",
      topics: [
        "CSS nima va nima uchun kerak?",
        "CSS ulash usullari (inline, internal, external)",
        "CSS selektorlari (element, class, id)",
        "Ranglar bilan ishlash (color, background-color)",
        "Matn xususiyatlari (text-align, text-decoration)",
        "O'lcham birliklari (px, %, em, rem, vh, vw)",
        "Margin va Padding",
        "Border xususiyatlari",
        "CSS ustunlik qoidalari (specificity)",
        "CSS da izohlar"
      ],
      questions: [
        {
          id: 1,
          question: "CSS to'liq nomi nima?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Color Style Sheets"],
          correct: 1,
          explanation: "CSS - Cascading Style Sheets"
        },
        {
          id: 2,
          question: "Inline CSS qanday yoziladi?",
          options: ["<style>", "style=''", "<css>", "css=''"],
          correct: 1,
          explanation: "style='' atributi inline CSS uchun"
        },
        {
          id: 3,
          question: "Tashqi CSS fayl qanday ulanadi?",
          options: ["<script src=''>", "<link rel='stylesheet' href=''>", "<css src=''>", "<style src=''>"],
          correct: 1,
          explanation: "<link rel='stylesheet' href='style.css'>"
        },
        {
          id: 4,
          question: "CSS da fon rangi qaysi xususiyat bilan beriladi?",
          options: ["color", "bgcolor", "background-color", "fill"],
          correct: 2,
          explanation: "background-color fon rangini belgilaydi"
        },
        {
          id: 5,
          question: "Textni markazga joylashtirish uchun?",
          options: ["text-align: left", "text-align: center", "text-align: right", "text-align: justify"],
          correct: 1,
          explanation: "text-align: center matnni markazga joylashtiradi"
        },
        {
          id: 6,
          question: "1 rem necha pikselga teng (default)?",
          options: ["10px", "14px", "16px", "20px"],
          correct: 2,
          explanation: "Default holatda 1rem = 16px"
        },
        {
          id: 7,
          question: "Margin nima?",
          options: ["Ichki chekinish", "Tashqi chekinish", "Chegara", "Shrift o'lchami"],
          correct: 1,
          explanation: "Margin - elementning tashqi chekinishi"
        },
        {
          id: 8,
          question: "Padding nima?",
          options: ["Tashqi chekinish", "Ichki chekinish", "Chegara qalinligi", "Element kengligi"],
          correct: 1,
          explanation: "Padding - elementning ichki chekinishi"
        },
        {
          id: 9,
          question: "CSS da izoh qanday yoziladi?",
          options: ["// izoh", "<!-- izoh -->", "/* izoh */", "# izoh"],
          correct: 2,
          explanation: "CSS da /* izoh */ ko'rinishida yoziladi"
        },
        {
          id: 10,
          question: "Qaysi selektor eng yuqori ustunlikka ega?",
          options: ["Element selektor", "Class selektor", "ID selektor", "Inline style"],
          correct: 3,
          explanation: "Inline style eng yuqori ustunlikka ega"
        }
      ],
      practice: {
        title: "CSS asoslari amaliyoti",
        description: "CSS yordamida elementlarni stillang.",
        tasks: [
          "Inline, internal va external CSS usullarini qo'llang",
          "Element, class va ID selektorlaridan foydalaning",
          "Margin va padding bilan ishlang",
          "Turli ranglar va border bering"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>CSS Asoslari</title>
    <style>
        /* Internal CSS */
    </style>
</head>
<body>
    <h1 style="">Inline CSS</h1>
    <p class="">Class selektor</p>
    <div id="">ID selektor</div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 6-DARS: CSS2 (DAVOMI)
  // ============================================
  {
    id: 6,
    title: "CSS2",
    subtitle: "CSS rivojlangan xususiyatlari",
    icon: "FaCss3Alt",
    color: "from-cyan-400 to-cyan-600",
    pdfFile: "lesson-6-css2.pdf",
    duration: "55 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "CSS ning rivojlangan xususiyatlari: background, gradient, shadow, overflow, opacity va boshqa vizual effektlar.",
      topics: [
        "Background xususiyatlari (image, size, position)",
        "Gradient (linear, radial)",
        "Box-shadow va text-shadow",
        "Opacity va visibility",
        "Overflow xususiyati",
        "Cursor xususiyati",
        "Z-index va qatlamlar",
        "CSS filter effektlari",
        "Transform asoslari",
        "Transition asoslari"
      ],
      questions: [
        {
          id: 1,
          question: "Linear gradient qanday yoziladi?",
          options: ["gradient()", "linear-gradient()", "bg-gradient()", "color-gradient()"],
          correct: 1,
          explanation: "linear-gradient() funksiyasi orqali"
        },
        {
          id: 2,
          question: "Box shadow uchun xususiyat?",
          options: ["shadow", "box-shadow", "element-shadow", "drop-shadow"],
          correct: 1,
          explanation: "box-shadow xususiyati soyani qo'shadi"
        },
        {
          id: 3,
          question: "Element shaffofligi qanday xususiyat bilan?",
          options: ["transparency", "visibility", "opacity", "alpha"],
          correct: 2,
          explanation: "opacity 0 dan 1 gacha shaffoflikni belgilaydi"
        },
        {
          id: 4,
          question: "Overflow:hidden nima qiladi?",
          options: ["Elementni yashiradi", "Ortiqcha kontentni kesadi", "Skroll qo'shadi", "Elementni o'chiradi"],
          correct: 1,
          explanation: "overflow:hidden ortiqcha kontentni yashiradi"
        },
        {
          id: 5,
          question: "Z-index nima uchun ishlatiladi?",
          options: ["O'lcham uchun", "Qatlam tartibi uchun", "Rang uchun", "Shrift uchun"],
          correct: 1,
          explanation: "z-index elementlarning qatlamdagi tartibini belgilaydi"
        },
        {
          id: 6,
          question: "visibility: hidden nima qiladi?",
          options: ["Elementni o'chiradi", "Elementni yashiradi (joyi saqlanadi)", "Elementni ko'rsatadi", "Elementni kichraytiradi"],
          correct: 1,
          explanation: "visibility:hidden elementni yashiradi lekin joyi saqlanadi"
        },
        {
          id: 7,
          question: "display: none va visibility: hidden farqi?",
          options: ["Farqi yo'q", "display joyni ham olib tashlaydi", "visibility joyni olib tashlaydi", "Ikkalasi ham bir xil"],
          correct: 1,
          explanation: "display:none joyni ham olib tashlaydi"
        },
        {
          id: 8,
          question: "CSS transform qanday ishlatiladi?",
          options: ["Faqat aylantirish", "Elementni o'zgartirish (siljitish, aylantirish, kattalashtirish)", "Faqat kattalashtirish", "Rang o'zgartirish"],
          correct: 1,
          explanation: "transform elementni o'zgartirish uchun"
        },
        {
          id: 9,
          question: "Transition qanday vazifani bajaradi?",
          options: ["Elementni o'chiradi", "Silliq o'tish effekti", "Rang beradi", "O'lcham beradi"],
          correct: 1,
          explanation: "transition silliq o'tish animatsiyasi yaratadi"
        },
        {
          id: 10,
          question: "CSS filter bilan nima qilish mumkin?",
          options: ["Faqat blur", "Vizual effektlar (blur, brightness, contrast)", "Faqat kontrast", "Hech nima"],
          correct: 1,
          explanation: "filter vizual effektlar qo'shadi"
        }
      ],
      practice: {
        title: "CSS effektlar amaliyoti",
        description: "CSS orqali vizual effektlar yarating.",
        tasks: [
          "Gradient fon yarating",
          "Box-shadow qo'shing",
          "Opacity bilan ishlang",
          "Hover transition effekti qo'shing"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>CSS Effektlar</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            /* Stillingizni qo'shing */
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 7-DARS: BOX MODEL
  // ============================================
  {
    id: 7,
    title: "BOX MODEL",
    subtitle: "CSS Box Model tushunchasi",
    icon: "FaBox",
    color: "from-yellow-400 to-yellow-600",
    pdfFile: "lesson-7-box-model.pdf",
    duration: "50 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "CSS Box Model - har bir HTML elementi to'rtburchak quti ko'rinishida bo'lib, content, padding, border, va margin qismlaridan iborat.",
      topics: [
        "Box Model tuzilishi",
        "Content (kontent) qismi",
        "Padding (ichki chekinish)",
        "Border (chegara)",
        "Margin (tashqi chekinish)",
        "box-sizing xususiyati",
        "Width va height xususiyatlari",
        "min-width, max-width, min-height, max-height",
        "Box Model debug qilish",
        "Box Model bilan layout yaratish"
      ],
      questions: [
        {
          id: 1,
          question: "Box Model necha qismdan iborat?",
          options: ["2", "3", "4", "5"],
          correct: 2,
          explanation: "Content, padding, border, margin - 4 qism"
        },
        {
          id: 2,
          question: "Padding nima?",
          options: ["Tashqi chekinish", "Ichki chekinish", "Chegara", "Kontent"],
          correct: 1,
          explanation: "Padding - content va border orasidagi masofa"
        },
        {
          id: 3,
          question: "box-sizing: border-box nima qiladi?",
          options: ["Faqat kontentni hisoblaydi", "Padding va border width ga qo'shiladi", "Marginni hisoblaydi", "Hech nima qilmaydi"],
          correct: 1,
          explanation: "border-box padding va border ni width ga qo'shadi"
        },
        {
          id: 4,
          question: "Margin tashqi chekinishmi?",
          options: ["Ha", "Yo'q", "Ba'zan", "Elementga bog'liq"],
          correct: 0,
          explanation: "Margin - elementning tashqi chekinishi"
        },
        {
          id: 5,
          question: "Border nima?",
          options: ["Ichki chekinish", "Tashqi chekinish", "Chegara chizig'i", "Kontent"],
          correct: 2,
          explanation: "Border - element atrofidagi chegara"
        },
        {
          id: 6,
          question: "Default box-sizing qiymati?",
          options: ["border-box", "content-box", "padding-box", "margin-box"],
          correct: 1,
          explanation: "Default box-sizing: content-box"
        },
        {
          id: 7,
          question: "max-width nima vazifani bajaradi?",
          options: ["Minimal kenglik", "Maksimal kenglik", "Avtomatik kenglik", "To'liq kenglik"],
          correct: 1,
          explanation: "max-width maksimal kenglikni belgilaydi"
        },
        {
          id: 8,
          question: "Margin: 0 auto nima qiladi?",
          options: ["Elementni chapga suradi", "Elementni markazga joylashtiradi", "Elementni o'ngga suradi", "Hech nima qilmaydi"],
          correct: 1,
          explanation: "margin: 0 auto blok elementni gorizontal markazga joylashtiradi"
        },
        {
          id: 9,
          question: "Padding qaysi tartibda qisqartiriladi?",
          options: ["chap, o'ng, yuqori, past", "yuqori, o'ng, past, chap", "past, chap, yuqori, o'ng", "o'ng, yuqori, chap, past"],
          correct: 1,
          explanation: "padding: yuqori o'ng past chap (soat yo'nalishi)"
        },
        {
          id: 10,
          question: "Elementning umumiy kengligi qanday hisoblanadi (content-box)?",
          options: ["width + padding + border + margin", "width", "width + margin", "width + padding"],
          correct: 0,
          explanation: "Umumiy kenglik = width + padding + border + margin"
        }
      ],
      practice: {
        title: "Box Model amaliyoti",
        description: "Box Model elementlarini yarating va o'lchamlari bilan ishlang.",
        tasks: [
          "Turli padding va margin li elementlar yarating",
          "Border qo'shing",
          "box-sizing ni sinab ko'ring",
          "Elementni markazga joylashtiring"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Box Model</title>
    <style>
        .box {
            width: 200px;
            /* Box Model xususiyatlari */
        }
    </style>
</head>
<body>
    <div class="box">Box Model</div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 8-DARS: DISPLAY
  // ============================================
  {
    id: 8,
    title: "DISPLAY",
    subtitle: "Display xususiyati bilan ishlash",
    icon: "FaDesktop",
    color: "from-red-400 to-red-600",
    pdfFile: "lesson-8-display.pdf",
    duration: "50 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "Display xususiyati elementning qanday ko'rinishda bo'lishini belgilaydi: block, inline, inline-block, flex, grid, none va boshqalar.",
      topics: [
        "Display nima?",
        "display: block",
        "display: inline",
        "display: inline-block",
        "display: none",
        "display: flex (kirish)",
        "display: grid (kirish)",
        "visibility vs display",
        "Elementlarni yashirish usullari",
        "Display bilan amaliy ishlash"
      ],
      questions: [
        {
          id: 1,
          question: "display: block elementi qanday joylashadi?",
          options: ["Yonma-yon", "To'liq qatorni egallaydi", "Yashirin", "Faqat kontent kengligida"],
          correct: 1,
          explanation: "Block element to'liq qator kengligini egallaydi"
        },
        {
          id: 2,
          question: "display: inline elementlarga width berish mumkinmi?",
          options: ["Ha", "Yo'q", "Ba'zan", "Faqat px da"],
          correct: 1,
          explanation: "Inline elementlarga width va height berib bo'lmaydi"
        },
        {
          id: 3,
          question: "display: inline-block qanday ishlaydi?",
          options: ["Block kabi", "Inline kabi", "Inline kabi joylashadi, block kabi o'lcham oladi", "Hech qanday"],
          correct: 2,
          explanation: "Inline-block: inline joylashuv + block o'lcham xususiyatlari"
        },
        {
          id: 4,
          question: "display: none nima qiladi?",
          options: ["Elementni yashiradi (joyi qoladi)", "Elementni butunlay olib tashlaydi", "Elementni kichraytiradi", "Elementni ko'rsatadi"],
          correct: 1,
          explanation: "display:none elementni va uning joyini butunlay olib tashlaydi"
        },
        {
          id: 5,
          question: "Qaysi element default block hisoblanadi?",
          options: ["<span>", "<a>", "<div>", "<img>"],
          correct: 2,
          explanation: "<div> default block element"
        },
        {
          id: 6,
          question: "Qaysi element default inline?",
          options: ["<div>", "<p>", "<span>", "<section>"],
          correct: 2,
          explanation: "<span> default inline element"
        },
        {
          id: 7,
          question: "display: flex nima uchun ishlatiladi?",
          options: ["Text stillash", "Rang berish", "Elementlarni moslashuvchan joylashtirish", "Yashirish"],
          correct: 2,
          explanation: "Flex elementlarni moslashuvchan joylashtirish uchun"
        },
        {
          id: 8,
          question: "display: grid nima?",
          options: ["Jadval", "To'r tizimi", "Ro'yxat", "Flex"],
          correct: 1,
          explanation: "Grid ikki o'lchamli to'r tizimi"
        },
        {
          id: 9,
          question: "visibility: hidden va display: none farqi?",
          options: ["Farqi yo'q", "Visibility joyni saqlaydi, display saqlamaydi", "Display joyni saqlaydi", "Ikkalasi ham o'chiradi"],
          correct: 1,
          explanation: "visibility joyni saqlaydi, display esa yo'q"
        },
        {
          id: 10,
          question: "Elementni yashirishning necha usuli bor?",
          options: ["1", "2", "3+", "5+"],
          correct: 2,
          explanation: "display:none, visibility:hidden, opacity:0 va boshqalar"
        }
      ],
      practice: {
        title: "Display amaliyoti",
        description: "Turli display xususiyatlari bilan ishlang.",
        tasks: [
          "Block, inline, inline-block elementlar yarating",
          "display: none bilan yashiring",
          "Elementlarni yonma-yon joylashtiring",
          "Flex bilan elementlarni joylashtiring"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Display</title>
    <style>
        .container { }
        .item { }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 9-DARS: FLEXBOX
  // ============================================
  {
    id: 9,
    title: "FLEX BOX",
    subtitle: "Flexbox bilan moslashuvchan layout",
    icon: "FaArrowsAlt",
    color: "from-indigo-400 to-indigo-600",
    pdfFile: "lesson-9-flexbox.pdf",
    duration: "60 daqiqa",
    difficulty: "Murakkab",
    content: {
      intro: "Flexbox - elementlarni bir o'lchamda (qator yoki ustun) moslashuvchan tarzda joylashtirish uchun kuchli CSS tizimi.",
      topics: [
        "Flexbox nima?",
        "display: flex",
        "flex-direction (row, column)",
        "justify-content (asosiy o'q)",
        "align-items (ko'ndalang o'q)",
        "flex-wrap",
        "align-content",
        "gap xususiyati",
        "flex-grow, flex-shrink, flex-basis",
        "order xususiyati"
      ],
      questions: [
        {
          id: 1,
          question: "Flexbox qaysi CSS xususiyati bilan yoqiladi?",
          options: ["display: block", "display: flex", "display: grid", "display: inline"],
          correct: 1,
          explanation: "display: flex flexbox ni yoqadi"
        },
        {
          id: 2,
          question: "Flex yo'nalishini qaysi xususiyat belgilaydi?",
          options: ["flex-wrap", "flex-direction", "flex-flow", "flex-align"],
          correct: 1,
          explanation: "flex-direction yo'nalishni belgilaydi"
        },
        {
          id: 3,
          question: "Elementlarni asosiy o'q bo'yicha markazga joylashtirish?",
          options: ["align-items: center", "justify-content: center", "align-content: center", "justify-items: center"],
          correct: 1,
          explanation: "justify-content asosiy o'q bo'yicha joylashtiradi"
        },
        {
          id: 4,
          question: "Elementlarni ko'ndalang o'q bo'yicha markazga?",
          options: ["justify-content: center", "align-content: center", "align-items: center", "justify-items: center"],
          correct: 2,
          explanation: "align-items ko'ndalang o'q bo'yicha joylashtiradi"
        },
        {
          id: 5,
          question: "flex-wrap nima qiladi?",
          options: ["Elementlarni o'chiradi", "Elementlarni keyingi qatorga o'tkazadi", "Elementlarni kattalashtiradi", "Yo'nalishni o'zgartiradi"],
          correct: 1,
          explanation: "flex-wrap elementlar sig'masa keyingi qatorga o'tkazadi"
        },
        {
          id: 6,
          question: "Elementlar orasidagi masofa uchun?",
          options: ["margin", "padding", "gap", "space"],
          correct: 2,
          explanation: "gap flex elementlar orasidagi masofa"
        },
        {
          id: 7,
          question: "flex-grow nima qiladi?",
          options: ["Elementni kichraytiradi", "Elementni o'sish nisbatini belgilaydi", "Elementni yashiradi", "Rang beradi"],
          correct: 1,
          explanation: "flex-grow elementning o'sish qobiliyatini belgilaydi"
        },
        {
          id: 8,
          question: "order xususiyati nima qiladi?",
          options: ["Elementni o'chiradi", "Element tartibini o'zgartiradi", "Elementni kattalashtiradi", "Hech nima"],
          correct: 1,
          explanation: "order elementlarning ko'rinish tartibini o'zgartiradi"
        },
        {
          id: 9,
          question: "justify-content: space-between nima qiladi?",
          options: ["Elementlarni markazga", "Elementlarni teng oraliqda, chekkalardan boshlab", "Elementlarni chapga", "Elementlarni o'ngga"],
          correct: 1,
          explanation: "space-between elementlarni teng oraliqda joylashtiradi"
        },
        {
          id: 10,
          question: "Default flex-direction qiymati?",
          options: ["column", "row", "row-reverse", "column-reverse"],
          correct: 1,
          explanation: "Default flex-direction: row"
        }
      ],
      practice: {
        title: "Flexbox amaliyoti",
        description: "Flexbox yordamida layout yarating.",
        tasks: [
          "Flex konteyner yarating",
          "Elementlarni markazga joylashtiring",
          "Elementlar orasida teng masofa qoldiring",
          "Elementlarni ustun ko'rinishida joylashtiring"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Flexbox</title>
    <style>
        .flex-container {
            display: flex;
            /* Flex xususiyatlari */
        }
        .flex-item {
            width: 100px;
            height: 100px;
            background: #3b82f6;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
    </div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 10-DARS: CSS GRID
  // ============================================
  {
    id: 10,
    title: "CSS GRID",
    subtitle: "CSS Grid tizimi bilan ishlash",
    icon: "FaTh",
    color: "from-teal-400 to-teal-600",
    pdfFile: "lesson-10-css-grid.pdf",
    duration: "65 daqiqa",
    difficulty: "Murakkab",
    content: {
      intro: "CSS Grid - ikki o'lchamli to'r tizimi bo'lib, murakkab layoutlarni yaratish uchun eng kuchli vosita hisoblanadi.",
      topics: [
        "CSS Grid nima?",
        "display: grid",
        "grid-template-columns",
        "grid-template-rows",
        "grid-gap / gap",
        "grid-column va grid-row",
        "grid-area",
        "grid-template-areas",
        "fr birligi",
        "repeat() va minmax()"
      ],
      questions: [
        {
          id: 1,
          question: "CSS Grid qanday yoqiladi?",
          options: ["display: flex", "display: grid", "display: block", "display: table"],
          correct: 1,
          explanation: "display: grid grid tizimini yoqadi"
        },
        {
          id: 2,
          question: "grid-template-columns nima qiladi?",
          options: ["Qatorlarni belgilaydi", "Ustunlarni belgilaydi", "Elementlarni yashiradi", "Rang beradi"],
          correct: 1,
          explanation: "grid-template-columns ustunlar soni va kengligini belgilaydi"
        },
        {
          id: 3,
          question: "fr birligi nima?",
          options: ["Piksel", "Foiz", "Fraction (bo'lak)", "Rem"],
          correct: 2,
          explanation: "fr - fraction, bo'sh joyning ulushi"
        },
        {
          id: 4,
          question: "repeat() funksiyasi nima qiladi?",
          options: ["Elementni takrorlaydi", "Ustun/qatorlarni takroriy belgilaydi", "Rangni takrorlaydi", "Hech nima"],
          correct: 1,
          explanation: "repeat(3, 1fr) 3 ta teng ustun yaratadi"
        },
        {
          id: 5,
          question: "Grid va Flexbox farqi?",
          options: ["Farqi yo'q", "Grid 2D, Flexbox 1D", "Flexbox 2D, Grid 1D", "Ikkalasi ham 1D"],
          correct: 1,
          explanation: "Grid ikki o'lchamli, Flexbox bir o'lchamli"
        },
        {
          id: 6,
          question: "grid-gap nima?",
          options: ["Element o'lchami", "Grid elementlari orasidagi masofa", "Chegara", "Shrift"],
          correct: 1,
          explanation: "grid-gap (yoki gap) elementlar orasidagi masofa"
        },
        {
          id: 7,
          question: "grid-template-areas nima uchun?",
          options: ["Rang uchun", "Layout nomli hududlarini yaratish", "O'lcham uchun", "Shrift uchun"],
          correct: 1,
          explanation: "grid-template-areas nomlangan hududlar yaratadi"
        },
        {
          id: 8,
          question: "minmax() nima qiladi?",
          options: ["Minimal qiymat", "Maksimal qiymat", "Minimal va maksimal chegarani belgilaydi", "O'rtacha qiymat"],
          correct: 2,
          explanation: "minmax(min, max) chegaralarni belgilaydi"
        },
        {
          id: 9,
          question: "3 ta teng ustun yaratish uchun?",
          options: ["grid-template-columns: 1fr 1fr 1fr", "grid-template-columns: repeat(3, 1fr)", "Ikkalasi ham", "Hech biri"],
          correct: 2,
          explanation: "Ikkala usul ham bir xil natija beradi"
        },
        {
          id: 10,
          question: "grid-column: 1 / 3 nima qiladi?",
          options: ["Elementni 1-ustunga qo'yadi", "Elementni 1-ustundan 3-ustungacha cho'zadi", "Elementni o'chiradi", "3 ta ustun yaratadi"],
          correct: 1,
          explanation: "grid-column: 1/3 elementni 1-ustundan 3-ustungacha cho'zadi"
        }
      ],
      practice: {
        title: "CSS Grid amaliyoti",
        description: "Grid yordamida murakkab layout yarating.",
        tasks: [
          "3x3 grid yarating",
          "repeat() funksiyasidan foydalaning",
          "Elementlarni ustunlar bo'yicha cho'zing",
          "grid-template-areas bilan ishlang"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>CSS Grid</title>
    <style>
        .grid-container {
            display: grid;
            /* Grid xususiyatlari */
        }
        .grid-item {
            background: #3b82f6;
            padding: 20px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
    </div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 11-DARS: CSS PSEUDO ELEMENTS
  // ============================================
  {
    id: 11,
    title: "CSS PSEUDO elements",
    subtitle: "Pseudo elementlar bilan ishlash",
    icon: "FaMagic",
    color: "from-pink-400 to-pink-600",
    pdfFile: "lesson-11-pseudo-elements.pdf",
    duration: "50 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "Pseudo elementlar - elementning ma'lum qismlarini stillash yoki qo'shimcha kontent qo'shish imkonini beruvchi CSS selektorlari.",
      topics: [
        "::before pseudo elementi",
        "::after pseudo elementi",
        "::first-line",
        "::first-letter",
        "::selection",
        "::placeholder",
        "::marker",
        "content xususiyati",
        "Pseudo elementlar bilan dekoratsiya",
        "Pseudo element cheklovlari"
      ],
      questions: [
        {
          id: 1,
          question: "::before nima qiladi?",
          options: ["Elementdan keyin kontent qo'shadi", "Elementdan oldin kontent qo'shadi", "Elementni o'chiradi", "Rang beradi"],
          correct: 1,
          explanation: "::before element kontentidan oldin qo'shimcha qo'shadi"
        },
        {
          id: 2,
          question: "Pseudo elementda qaysi xususiyat majburiy?",
          options: ["color", "content", "display", "position"],
          correct: 1,
          explanation: "content xususiyati ::before va ::after uchun majburiy"
        },
        {
          id: 3,
          question: "::first-letter nima qiladi?",
          options: ["Birinchi so'zni", "Birinchi harfni stillaydi", "Oxirgi harfni", "Barcha harflarni"],
          correct: 1,
          explanation: "::first-letter faqat birinchi harfni stillaydi"
        },
        {
          id: 4,
          question: "::selection qanday ishlaydi?",
          options: ["Elementni tanlaydi", "Tanlangan matn ko'rinishini belgilaydi", "Elementni o'chiradi", "Rang beradi"],
          correct: 1,
          explanation: "::selection foydalanuvchi tanlagan matn stillini belgilaydi"
        },
        {
          id: 5,
          question: "::placeholder nima uchun?",
          options: ["Input placeholder stillash", "Div stillash", "Rasm stillash", "Text stillash"],
          correct: 0,
          explanation: "::placeholder input placeholder matnini stillaydi"
        },
        {
          id: 6,
          question: "Pseudo element nechta qo'shtirnoq bilan yoziladi?",
          options: ["Bitta :", "Ikkita ::", "Uchta :::", "Hech qanday"],
          correct: 1,
          explanation: "CSS3 da pseudo elementlar :: bilan yoziladi"
        },
        {
          id: 7,
          question: "::after qayerda paydo bo'ladi?",
          options: ["Element oldida", "Element ichida, kontentdan keyin", "Element tashqarisida", "Ko'rinmaydi"],
          correct: 1,
          explanation: "::after element ichida, asosiy kontentdan keyin"
        },
        {
          id: 8,
          question: "content: '' bo'sh bo'lsa nima bo'ladi?",
          options: ["Hech nima ko'rinmaydi", "Xatolik", "Element o'chadi", "Kontent ko'rinadi"],
          correct: 0,
          explanation: "Bo'sh content vizual element yaratish uchun ishlatiladi"
        },
        {
          id: 9,
          question: "::first-line nima qiladi?",
          options: ["Birinchi qatorni stillaydi", "Barcha qatorlarni", "Oxirgi qatorni", "Hech nima"],
          correct: 0,
          explanation: "::first-line faqat birinchi qatorni stillaydi"
        },
        {
          id: 10,
          question: "::marker qaysi elementlarda ishlaydi?",
          options: ["Barcha elementlarda", "Ro'yxat elementlarida", "Faqat div", "Faqat span"],
          correct: 1,
          explanation: "::marker ro'yxat markerlarini stillash uchun"
        }
      ],
      practice: {
        title: "Pseudo elementlar amaliyoti",
        description: "::before va ::after yordamida dekorativ elementlar yarating.",
        tasks: [
          "::before yordamida ikonka qo'shing",
          "::after yordamida dekorativ chiziq yarating",
          "::first-letter stillang",
          "::selection stillang"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Pseudo Elements</title>
    <style>
        .box { }
        .box::before { }
        .box::after { }
    </style>
</head>
<body>
    <div class="box">Salom Dunyo</div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 12-DARS: CSS PSEUDO ELEMENTS 2
  // ============================================
  {
    id: 12,
    title: "CSS PSEUDO elements 2",
    subtitle: "Pseudo klasslar bilan ishlash",
    icon: "FaClone",
    color: "from-rose-400 to-rose-600",
    pdfFile: "lesson-12-pseudo-elements2.pdf",
    duration: "55 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "Pseudo klasslar - elementning maxsus holatlarini (hover, active, focus, visited va boshqalar) stillash imkonini beradi.",
      topics: [
        ":hover pseudo klassi",
        ":active va :focus",
        ":visited va :link",
        ":first-child va :last-child",
        ":nth-child()",
        ":not() selektori",
        ":checked pseudo klassi",
        ":disabled va :enabled",
        ":empty",
        ":root"
      ],
      questions: [
        {
          id: 1,
          question: ":hover qachon ishlaydi?",
          options: ["Sichqoncha bosilganda", "Sichqoncha olib borilganda", "Element yuklanganda", "Hech qachon"],
          correct: 1,
          explanation: ":hover sichqoncha element ustiga olib borilganda"
        },
        {
          id: 2,
          question: ":nth-child(odd) nima qiladi?",
          options: ["Barcha elementlarni", "Toq elementlarni tanlaydi", "Juft elementlarni", "Hech nima"],
          correct: 1,
          explanation: ":nth-child(odd) toq elementlarni tanlaydi"
        },
        {
          id: 3,
          question: ":not() selektori nima qiladi?",
          options: ["Barchasini tanlaydi", "Ko'rsatilgan selektordan tashqarisini", "Hech nima tanlamaydi", "Faqat birinchisini"],
          correct: 1,
          explanation: ":not(.class) ko'rsatilgan class dan tashqari hammasini"
        },
        {
          id: 4,
          question: ":first-child nima qiladi?",
          options: ["Oxirgi elementni", "Birinchi elementni tanlaydi", "Barcha elementlarni", "Hech nima"],
          correct: 1,
          explanation: ":first-child ota elementning birinchi bolasini tanlaydi"
        },
        {
          id: 5,
          question: ":focus qachon ishlaydi?",
          options: ["Sichqoncha bosilganda", "Element fokusda bo'lganda (inputga yozganda)", "Hover qilganda", "Hech qachon"],
          correct: 1,
          explanation: ":focus element fokus olganda (masalan input tanlanganda)"
        },
        {
          id: 6,
          question: ":visited qanday havolalarni stillaydi?",
          options: ["Barcha havolalarni", "Tashrif buyurilgan havolalarni", "Yangi havolalarni", "Hech qanday"],
          correct: 1,
          explanation: ":visited foydalanuvchi kirgan havolalarni stillaydi"
        },
        {
          id: 7,
          question: ":nth-child(2n) nimani anglatadi?",
          options: ["Barcha elementlarni", "Juft elementlarni", "Toq elementlarni", "2-elementni"],
          correct: 1,
          explanation: ":nth-child(2n) juft elementlarni (2,4,6...)"
        },
        {
          id: 8,
          question: ":checked qayerda ishlatiladi?",
          options: ["Div da", "Checkbox va radio buttonlarda", "Paragrafda", "Havolada"],
          correct: 1,
          explanation: ":checked checkbox va radio button tanlanganda"
        },
        {
          id: 9,
          question: ":disabled nima uchun?",
          options: ["Faol elementlarni", "O'chirilgan elementlarni stillaydi", "Barcha elementlarni", "Hech nima"],
          correct: 1,
          explanation: ":disabled o'chirilgan (disabled) inputlarni stillaydi"
        },
        {
          id: 10,
          question: ":root nimani anglatadi?",
          options: ["Body ni", "html elementini (eng yuqori)", "Div ni", "Hech nima"],
          correct: 1,
          explanation: ":root eng yuqori darajadagi element (html)"
        }
      ],
      practice: {
        title: "Pseudo klasslar amaliyoti",
        description: "Hover, active, focus va boshqa pseudo klasslarni qo'llang.",
        tasks: [
          "Hover effekti yarating",
          "Input focus stillang",
          "nth-child bilan elementlarni stillang",
          "Checkbox checked holatini stillang"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Pseudo Class</title>
    <style>
        button:hover { }
        input:focus { }
        li:nth-child(odd) { }
    </style>
</head>
<body>
    <button>Tugma</button>
    <input type="text" placeholder="Matn kiriting">
    <ul>
        <li>1</li><li>2</li><li>3</li>
    </ul>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 13-DARS: MEDIA RESPONSIVE
  // ============================================
  {
    id: 13,
    title: "MEDIA responsive",
    subtitle: "Moslashuvchan dizayn asoslari",
    icon: "FaMobileAlt",
    color: "from-emerald-400 to-emerald-600",
    pdfFile: "lesson-13-media-responsive.pdf",
    duration: "60 daqiqa",
    difficulty: "Murakkab",
    content: {
      intro: "Responsive dizayn - veb-saytning turli qurilmalarda (telefon, planshet, desktop) to'g'ri ko'rinishini ta'minlash.",
      topics: [
        "Responsive dizayn nima?",
        "@media query asoslari",
        "Breakpointlar (320px, 768px, 1024px)",
        "Mobile-first yondashuv",
        "Viewport meta tegi",
        "Moslashuvchan o'lchamlar (%, vw, vh)",
        "Responsive typography",
        "Responsive rasmlar",
        "Responsive navigation",
        "Device testing"
      ],
      questions: [
        {
          id: 1,
          question: "@media nima uchun ishlatiladi?",
          options: ["Rang berish", "Turli ekran o'lchamlari uchun stillar", "Shrift uchun", "Hech nima"],
          correct: 1,
          explanation: "@media query turli qurilmalar uchun stillar yozish imkonini beradi"
        },
        {
          id: 2,
          question: "Mobile-first nima?",
          options: ["Desktop uchun yozish", "Avval mobil uchun yozib, keyin kattalashtirish", "Faqat mobil", "Faqat desktop"],
          correct: 1,
          explanation: "Mobile-first: avval kichik ekranlar uchun yoziladi"
        },
        {
          id: 3,
          question: "Viewport meta tegi nima uchun?",
          options: ["Rang uchun", "Mobil qurilmalarda to'g'ri masshtablash uchun", "Shrift uchun", "Hech nima"],
          correct: 1,
          explanation: "Viewport meta tegi mobil brauzerda ko'rinishni boshqaradi"
        },
        {
          id: 4,
          question: "@media (max-width: 768px) qachon ishlaydi?",
          options: ["768px dan katta ekranda", "768px va kichik ekranda", "Faqat 768px da", "Hech qachon"],
          correct: 1,
          explanation: "max-width:768px - 768px va undan kichik ekranlarda"
        },
        {
          id: 5,
          question: "min-width qachon ishlaydi?",
          options: ["Ko'rsatilgan o'lchamdan kichik", "Ko'rsatilgan o'lchamdan katta yoki teng", "Faqat teng", "Hech qachon"],
          correct: 1,
          explanation: "min-width ko'rsatilgan o'lchamdan katta ekranlarda"
        },
        {
          id: 6,
          question: "Responsive rasm qanday qilinadi?",
          options: ["max-width: 100%", "width: 100%", "height: auto", "max-width: 100% va height: auto"],
          correct: 3,
          explanation: "max-width:100% va height:auto rasmni moslashuvchan qiladi"
        },
        {
          id: 7,
          question: "1vw nechaga teng?",
          options: ["1 piksel", "Ekranga qarab foiz", "Viewport kengligining 1%", "1 santimetr"],
          correct: 2,
          explanation: "vw - viewport width, 1vw = viewport kengligining 1%"
        },
        {
          id: 8,
          question: "Standart planshet breakpointi?",
          options: ["320px", "480px", "768px", "1200px"],
          correct: 2,
          explanation: "768px odatda planshet breakpointi"
        },
        {
          id: 9,
          question: "clamp() funksiyasi nima?",
          options: ["Elementni qisadi", "Min, ideal, max o'lchamni belgilaydi", "Rang beradi", "Hech nima"],
          correct: 1,
          explanation: "clamp(min, ideal, max) moslashuvchan o'lcham"
        },
        {
          id: 10,
          question: "Responsive navigation qanday yaratiladi?",
          options: ["Faqat desktop", "Mobil uchun burger menyu", "Faqat mobil", "Hech qanday"],
          correct: 1,
          explanation: "Mobil qurilmalarda burger (hamburger) menyu ishlatiladi"
        }
      ],
      practice: {
        title: "Responsive dizayn amaliyoti",
        description: "Turli ekran o'lchamlari uchun moslashuvchan layout yarating.",
        tasks: [
          "Mobile-first yondashuvda yozing",
          "3 ta breakpoint qo'shing",
          "Rasmlarni responsive qiling",
          "Navigatsiyani mobil uchun moslang"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive</title>
    <style>
        /* Mobile-first */
        .container { }
        
        /* Planshet */
        @media (min-width: 768px) { }
        
        /* Desktop */
        @media (min-width: 1024px) { }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive dizayn</h1>
    </div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 14-DARS: CSS GRID RESPONSIVE
  // ============================================
  {
    id: 14,
    title: "CSS GRID responsive",
    subtitle: "Grid bilan moslashuvchan layout",
    icon: "FaTh",
    color: "from-violet-400 to-violet-600",
    pdfFile: "lesson-14-grid-responsive.pdf",
    duration: "55 daqiqa",
    difficulty: "Murakkab",
    content: {
      intro: "CSS Grid ni media query lar bilan birga ishlatib, turli ekran o'lchamlariga moslashuvchan murakkab layoutlar yaratish.",
      topics: [
        "Grid + Media Query",
        "auto-fit va auto-fill",
        "minmax() bilan moslashuvchan grid",
        "Grid template areas responsive",
        "Grid va Flexbox birgalikda",
        "Masonry layout",
        "Responsive card layout",
        "Dashboard layout",
        "Holy Grail layout",
        "Grid debugging"
      ],
      questions: [
        {
          id: 1,
          question: "auto-fit nima qiladi?",
          options: ["Elementlarni o'chiradi", "Elementlar soniga qarab avtomatik moslashadi", "O'lcham beradi", "Hech nima"],
          correct: 1,
          explanation: "auto-fit mavjud elementlar soniga qarab ustunlarni moslashtiradi"
        },
        {
          id: 2,
          question: "minmax(250px, 1fr) nima?",
          options: ["Min 250px, max 1fr", "Har doim 250px", "Har doim 1fr", "Hech nima"],
          correct: 0,
          explanation: "minmax(250px, 1fr) - min 250px, maksimal 1 fraksiya"
        },
        {
          id: 3,
          question: "auto-fill va auto-fit farqi?",
          options: ["Farqi yo'q", "auto-fill bo'sh joylarni to'ldiradi", "auto-fit elementlarni cho'zadi", "Hech qanday"],
          correct: 1,
          explanation: "auto-fill bo'sh ustunlarni ham yaratadi"
        },
        {
          id: 4,
          question: "Grid media query bilan qanday ishlaydi?",
          options: ["Ishlamaydi", "Turli ekranlarda turli grid tuzilishi", "Faqat desktop", "Faqat mobil"],
          correct: 1,
          explanation: "Media query da grid-template-columns o'zgartiriladi"
        },
        {
          id: 5,
          question: "repeat(auto-fit, minmax(300px, 1fr)) nima?",
          options: ["Avtomatik moslashuvchan grid", "3 ta ustun", "1 ta ustun", "Hech nima"],
          correct: 0,
          explanation: "Ekran kengligiga qarab avtomatik ustunlar soni"
        },
        {
          id: 6,
          question: "Holy Grail layout nima?",
          options: ["Header, footer, 3 ustunli layout", "Faqat header", "Faqat sidebar", "Hech nima"],
          correct: 0,
          explanation: "Holy Grail - header, footer, asosiy kontent va 2 ta sidebar"
        },
        {
          id: 7,
          question: "Masonry layout nima?",
          options: ["Bir xil o'lchamli grid", "G'isht terish kabi joylashuv", "Faqat qatorli", "Hech nima"],
          correct: 1,
          explanation: "Masonry - elementlar g'isht terish kabi joylashadi"
        },
        {
          id: 8,
          question: "Dashboard layout qanday yaratiladi?",
          options: ["Faqat flex", "Grid bilan turli o'lchamli bloklar", "Faqat block", "Hech nima"],
          correct: 1,
          explanation: "Grid dashboard layout uchun ideal"
        },
        {
          id: 9,
          question: "Responsive card layout uchun?",
          options: ["Faqat flex", "Grid + auto-fit/minmax", "Faqat block", "Hech nima"],
          correct: 1,
          explanation: "auto-fit + minmax responsive card layout uchun"
        },
        {
          id: 10,
          question: "Grid ni qanday debug qilish mumkin?",
          options: ["Ko'rib bo'lmaydi", "Browser DevTools Grid overlay", "Faqat kodda", "Hech qanday"],
          correct: 1,
          explanation: "Brauzer DevTools da Grid overlay orqali"
        }
      ],
      practice: {
        title: "Responsive Grid amaliyoti",
        description: "Grid va media query bilan responsive layout yarating.",
        tasks: [
          "auto-fit bilan responsive grid yarating",
          "3 ta breakpoint qo'shing",
          "Card layout yarating",
          "Grid template areas ishlating"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Responsive Grid</title>
    <style>
        .grid {
            display: grid;
            /* Responsive grid */
        }
        .card { background: #3b82f6; padding: 20px; color: white; }
    </style>
</head>
<body>
    <div class="grid">
        <div class="card">1</div>
        <div class="card">2</div>
        <div class="card">3</div>
    </div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 15-DARS: CSS ANIMATION
  // ============================================
  {
    id: 15,
    title: "CSS animation",
    subtitle: "Animatsiyalar yaratish",
    icon: "FaFilm",
    color: "from-amber-400 to-amber-600",
    pdfFile: "lesson-15-animation.pdf",
    duration: "65 daqiqa",
    difficulty: "Murakkab",
    content: {
      intro: "CSS animatsiyalar - elementlarni harakatlantirish, o'zgartirish va jonli effektlar yaratish imkonini beradi.",
      topics: [
        "@keyframes asoslari",
        "animation xususiyatlari",
        "animation-name va duration",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "transform bilan animatsiya",
        "Transition vs Animation",
        "Performance va best practices"
      ],
      questions: [
        {
          id: 1,
          question: "@keyframes nima?",
          options: ["Rang", "Animatsiya bosqichlarini belgilaydi", "O'lcham", "Hech nima"],
          correct: 1,
          explanation: "@keyframes animatsiyaning asosiy kadrlarini belgilaydi"
        },
        {
          id: 2,
          question: "animation-duration nima?",
          options: ["Animatsiya davomiyligi", "Kechikish", "Takrorlash", "Yo'nalish"],
          correct: 0,
          explanation: "animation-duration animatsiya qancha davom etishini belgilaydi"
        },
        {
          id: 3,
          question: "animation-iteration-count: infinite?",
          options: ["1 marta", "2 marta", "Cheksiz takrorlanadi", "0 marta"],
          correct: 2,
          explanation: "infinite - animatsiya cheksiz takrorlanadi"
        },
        {
          id: 4,
          question: "ease-in-out nima?",
          options: ["Sekin boshlanib, sekin tugaydi", "Tez boshlanadi", "Doimiy tezlik", "Hech nima"],
          correct: 0,
          explanation: "ease-in-out - sekin boshlanib, sekin tugaydi"
        },
        {
          id: 5,
          question: "animation-delay nima?",
          options: ["Davomiylik", "Kechikish vaqti", "Takrorlash", "Tezlik"],
          correct: 1,
          explanation: "animation-delay animatsiya boshlanishidan oldingi kechikish"
        },
        {
          id: 6,
          question: "Transition va Animation farqi?",
          options: ["Farqi yo'q", "Transition oddiy, Animation murakkabroq", "Animation oddiy", "Ikkalasi ham bir xil"],
          correct: 1,
          explanation: "Animation ko'p bosqichli, Transition ikki holat orasida"
        },
        {
          id: 7,
          question: "animation-direction: alternate?",
          options: ["Faqat oldinga", "Oldinga va orqaga qaytadi", "Faqat orqaga", "Hech nima"],
          correct: 1,
          explanation: "alternate animatsiya oldinga va orqaga harakatlanadi"
        },
        {
          id: 8,
          question: "transform: rotate(360deg) nima qiladi?",
          options: ["Elementni siljitadi", "Elementni to'liq aylantiradi", "Elementni kattalashtiradi", "Hech nima"],
          correct: 1,
          explanation: "rotate(360deg) elementni 360 gradusga aylantiradi"
        },
        {
          id: 9,
          question: "Animatsiya performansi uchun qaysi xususiyat yaxshiroq?",
          options: ["width", "height", "transform va opacity", "color"],
          correct: 2,
          explanation: "transform va opacity GPU da ishlaydi, tezroq"
        },
        {
          id: 10,
          question: "@keyframes ichida nechta bosqich bo'lishi mumkin?",
          options: ["2 ta (from/to)", "Cheksiz (0%, 50%, 100%...)", "3 ta", "1 ta"],
          correct: 1,
          explanation: "0% dan 100% gacha istalgancha foizlar"
        }
      ],
      practice: {
        title: "CSS Animatsiya amaliyoti",
        description: "@keyframes yordamida animatsiyalar yarating.",
        tasks: [
          "@keyframes yarating",
          "Elementni aylantiring",
          "Rang o'zgarish animatsiyasi",
          "Cheksiz takrorlanuvchi animatsiya yarating"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Animation</title>
    <style>
        @keyframes example {
            /* Animatsiya */
        }
        .box {
            width: 100px;
            height: 100px;
            background: #3b82f6;
            /* Animation xususiyatlari */
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>`
      }
    }
  },

  // ============================================
  // 16-DARS: BOOTSTRAP
  // ============================================
  {
    id: 16,
    title: "BOOTSTRAP bilan ishlash",
    subtitle: "Bootstrap framework asoslari",
    icon: "FaBootstrap",
    color: "from-purple-500 to-purple-700",
    pdfFile: "lesson-16-bootstrap.pdf",
    duration: "70 daqiqa",
    difficulty: "O'rta",
    content: {
      intro: "Bootstrap - eng mashhur CSS framework bo'lib, tayyor komponentlar va grid tizimi orqali tez veb-sayt yaratish imkonini beradi.",
      topics: [
        "Bootstrap nima?",
        "Bootstrap ulash (CDN yoki lokal)",
        "Bootstrap Grid tizimi (container, row, col)",
        "Breakpointlar (sm, md, lg, xl, xxl)",
        "Bootstrap komponentlari (button, card, navbar)",
        "Bootstrap formlar",
        "Utility klasslar (margin, padding, text)",
        "Bootstrap ranglari (primary, success, danger)",
        "Responsive tasvirlar",
        "Bootstrap Icons"
      ],
      questions: [
        {
          id: 1,
          question: "Bootstrap nima?",
          options: ["Dasturlash tili", "CSS Framework", "JavaScript library", "Database"],
          correct: 1,
          explanation: "Bootstrap - ochiq manbali CSS framework"
        },
        {
          id: 2,
          question: "Bootstrap container nima?",
          options: ["Element", "Asosiy konteyner (markaziy kontent)", "Shrift", "Hech nima"],
          correct: 1,
          explanation: ".container kontentni markazga joylashtiradi"
        },
        {
          id: 3,
          question: "Bootstrap grid necha ustunli?",
          options: ["6", "10", "12", "24"],
          correct: 2,
          explanation: "Bootstrap grid 12 ustunli tizim"
        },
        {
          id: 4,
          question: ".col-md-6 nima?",
          options: ["6 piksel", "O'rta ekranda 6 ustun (50%)", "6 qator", "Hech nima"],
          correct: 1,
          explanation: "md (medium) ekranda 12 tadan 6 ta ustun"
        },
        {
          id: 5,
          question: "Bootstrap qanday ulanadi?",
          options: ["Faqat yuklab olish", "CDN yoki yuklab olish", "Faqat CDN", "Hech qanday"],
          correct: 1,
          explanation: "Bootstrap CDN orqali yoki yuklab olinib ulanadi"
        },
        {
          id: 6,
          question: ".btn-primary qanday tugma yaratadi?",
          options: ["Qizil", "Ko'k (asosiy)", "Yashil", "Sariq"],
          correct: 1,
          explanation: "btn-primary ko'k rangli asosiy tugma"
        },
        {
          id: 7,
          question: ".table qanday klass?",
          options: ["Rasm", "Jadval stillash", "Forma", "Hech nima"],
          correct: 1,
          explanation: ".table klass jadvalni Bootstrap stillarida ko'rsatadi"
        },
        {
          id: 8,
          question: "Bootstrap da margin qanday qo'shiladi?",
          options: ["style='margin'", ".m-3", ".margin-3", "Hech qanday"],
          correct: 1,
          explanation: ".m-3 utility klassi margin qo'shadi"
        },
        {
          id: 9,
          question: ".navbar Bootstrap da nima?",
          options: ["Footer", "Navigatsiya paneli", "Sidebar", "Hech nima"],
          correct: 1,
          explanation: ".navbar - navigatsiya menyusi komponenti"
        },
        {
          id: 10,
          question: "Bootstrap responsive uchun qaysi breakpoint ishlatiladi?",
          options: ["@media", "col-sm, col-md, col-lg", "Faqat col", "Hech qanday"],
          correct: 1,
          explanation: "col-sm, col-md, col-lg responsive breakpointlar"
        }
      ],
      practice: {
        title: "Bootstrap amaliyoti",
        description: "Bootstrap framework yordamida sahifa yarating.",
        tasks: [
          "Bootstrap CDN ulang",
          "Grid tizimidan foydalaning",
          "Button komponentlarini qo'shing",
          "Card komponenti yarating"
        ],
        starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Bootstrap</title>
    <!-- Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Bootstrap</h1>
        <!-- Kodingiz -->
    </div>
</body>
</html>`
      }
    }
  }
];

// Helper funksiyalar
export const getAllLessons = () => lessons;

export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === parseInt(id));
};

export const getLessonCount = () => lessons.length;

export const getTotalQuestions = () => {
  return lessons.reduce((total, lesson) => total + (lesson.content?.questions?.length || 0), 0);
};

export const getTotalPractices = () => {
  return lessons.filter(lesson => lesson.content?.practice).length;
};

export default lessons;