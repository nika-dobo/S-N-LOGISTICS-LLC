// 1. თარგმანების ბაზა (ლექსიკონი)
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_links: "Links",
    nav_blogs: "Blogs",

    // Hero Section
    hero_title: "S&N LOGISTICS LLC",
    hero_subtitle: "Your Trusted Partner in International Shipping",
    hero_desc:
      "We provide comprehensive logistics solutions for air, sea, rail, and road freight worldwide.",
    btn_started: "Get Started",
    btn_learn: "Learn More",

    // Services Main
    serv_main_title: "Our Services",
    serv_main_desc: "Comprehensive shipping solutions tailored to your needs",

    // Sea Freight
    serv_sea_title: "Sea Freight",
    serv_sea_desc: "Cost-effective ocean shipping for large cargo volumes",
    serv_sea_li1: "FCL & LCL Shipments",
    serv_sea_li2: "Port to Port / Door to Door",
    serv_sea_li3: "Customs Clearance",
    serv_sea_li4: "Cargo Insurance",

    // Air Freight
    serv_air_title: "Air Freight",
    serv_air_desc:
      "Fast and reliable air transportation for time-sensitive shipments",
    serv_air_li1: "Express Delivery",
    serv_air_li2: "Consolidated Cargo",
    serv_air_li3: "Dangerous Goods Handling",
    serv_air_li4: "Real-time Tracking",

    // Rail Freight
    serv_rail_title: "Rail Freight",
    serv_rail_desc: "Efficient rail transport across continents",
    serv_rail_li1: "Container Transport",
    serv_rail_li2: "Intermodal Services",
    serv_rail_li3: "Cross-border Delivery",
    serv_rail_li4: "Cost-effective Solutions",

    // Road Freight
    serv_road_title: "Road Freight",
    serv_road_desc: "Flexible door-to-door delivery solutions",
    serv_road_li1: "Local & International",
    serv_road_li2: "Temperature Controlled",
    serv_road_li3: "Specialized Transport",
    serv_road_li4: "Last-mile Delivery",

    // Gallery
    gal_title: "Gallery",
    gal_desc: "Our operations around the world",
    gal_img1_title: "Cargo Loading",
    gal_img1_desc: "Secure packaging solutions",
    gal_img2_title: "Container Stuffing",
    gal_img2_desc: "Professional cargo handling",
    gal_img3_title: "Quality Inspection",
    gal_img3_desc: "Safety and compliance checks",
    gal_img4_title: "Heavy Equipment Transport",
    gal_img4_desc: "Specialized machinery shipping",
    gal_img5_title: "Vehicle Logistics",
    gal_img5_desc: "Safe automobile transportation",
    gal_img6_title: "Cargo Supervision",
    gal_img6_desc: "Expert loading monitoring",

    // Contact Section
    cont_title: "Get in Touch",
    cont_desc: "Have questions? We'd love to hear from you.",
    cont_info_title: "Contact Information",
    cont_addr_label: "Address",
    cont_phone_label: "Phone",
    cont_email_label: "Email",

    // Footer
    footer_contact_title: "Contact",
    footer_addr_val: "Poti, Georgia",
    footer_links_title: "Useful Links",
    footer_rights: "© 2026 S&N Logistics LLC. All rights reserved.",
  },

  ka: {
    // ნავიგაცია
    nav_home: "მთავარი",
    nav_about: "ჩვენს შესახებ",
    nav_links: "ბმულები",
    nav_blogs: "ბლოგი",

    // მთავარი სექცია
    hero_title: "S&N LOGISTICS LLC",
    hero_subtitle: "თქვენი სანდო პარტნიორი საერთაშორისო გადაზიდვებში",
    hero_desc:
      "ჩვენ გთავაზობთ სრულ ლოგისტიკურ მომსახურებას საჰაერო, საზღვაო, სარკინიგზო და სახმელეთო გზებით.",
    btn_started: "დაწყება",
    btn_learn: "ვრცლად",

    // სერვისები
    serv_main_title: "ჩვენი სერვისები",
    serv_main_desc: "თქვენს საჭიროებებზე მორგებული სრული გადაზიდვის სერვისი",

    // საზღვაო
    serv_sea_title: "საზღვაო გადაზიდვა",
    serv_sea_desc: "ეფექტური საზღვაო გადაზიდვა დიდი მოცულობის ტვირთებისთვის",
    serv_sea_li1: "FCL და LCL გადაზიდვები",
    serv_sea_li2: "პორტიდან პორტამდე / კარიდან კარამდე",
    serv_sea_li3: "საბაჟო გაფორმება",
    serv_sea_li4: "ტვირთის დაზღვევა",

    // საჰაერო
    serv_air_title: "საჰაერო გადაზიდვა",
    serv_air_desc: "სწრაფი და საიმედო ავია გადაზიდვა",
    serv_air_li1: "ექსპრეს მიწოდება",
    serv_air_li2: "ნაკრები ტვირთები",
    serv_air_li3: "სახიფათო ტვირთების გადაზიდვა",
    serv_air_li4: "რეალურ დროში მონიტორინგი",

    // სარკინიგზო
    serv_rail_title: "სარკინიგზო გადაზიდვა",
    serv_rail_desc: "ეფექტური სარკინიგზო ტრანსპორტი კონტინენტებს შორის",
    serv_rail_li1: "საკონტეინერო გადაზიდვა",
    serv_rail_li2: "ინტერმოდალური სერვისები",
    serv_rail_li3: "საზღვრისკვეთა და მიწოდება",
    serv_rail_li4: "ბიუჯეტური გადაწყვეტილებები",

    // სახმელეთო
    serv_road_title: "სახმელეთო გადაზიდვა",
    serv_road_desc: "მოქნილი მიწოდება კარიდან კარამდე",
    serv_road_li1: "ადგილობრივი და საერთაშორისო",
    serv_road_li2: "ტემპერატურული რეჟიმის დაცვა",
    serv_road_li3: "სპეციალიზებული ტრანსპორტი",
    serv_road_li4: "საბოლოო დანიშნულებამდე მიტანა",

    // გალერეა
    gal_title: "გალერეა",
    gal_desc: "ჩვენი ოპერაციები მსოფლიოს მასშტაბით",
    gal_img1_title: "ტვირთის დატვირთვა",
    gal_img1_desc: "უსაფრთხო შეფუთვის გადაწყვეტილებები",
    gal_img2_title: "კონტეინერის შევსება",
    gal_img2_desc: "ტვირთის პროფესიონალური დამუშავება",
    gal_img3_title: "ხარისხის ინსპექცია",
    gal_img3_desc: "უსაფრთხოებისა და სტანდარტების შემოწმება",
    gal_img4_title: "მძიმე ტექნიკის ტრანსპორტირება",
    gal_img4_desc: "სპეციალიზებული ტექნიკის გადაზიდვა",
    gal_img5_title: "ავტომობილების ლოგისტიკა",
    gal_img5_desc: "მანქანების უსაფრთხო ტრანსპორტირება",
    gal_img6_title: "ტვირთის ზედამხედველობა",
    gal_img6_desc: "დატვირთვის პროცესის მონიტორინგი",

    // კონტაქტი
    cont_title: "დაგვიკავშირდით",
    cont_desc: "გაქვთ კითხვები? მოგვწერეთ ან დაგვირეკეთ.",
    cont_info_title: "საკონტაქტო ინფორმაცია",
    cont_addr_label: "მისამართი",
    cont_phone_label: "ტელეფონი",
    cont_email_label: "ელ-ფოსტა",

    // ფუტერი
    footer_contact_title: "კონტაქტი",
    footer_addr_val: "ფოთი, საქართველო",
    footer_links_title: "სასარგებლო ბმულები",
    footer_rights: "© 2026 შპს S&N Logistics. ყველა უფლება დაცულია.",
  },

  ru: {
    // Навигация
    nav_home: "Главная",
    nav_about: "О нас",
    nav_links: "Ссылки",
    nav_blogs: "Блоги",

    // Главная секция
    hero_title: "S&N LOGISTICS LLC",
    hero_subtitle: "Ваш надежный партнер в международных перевозках",
    hero_desc:
      "Мы предоставляем комплексные логистические решения для авиа, морских, железнодорожных и автоперевозок.",
    btn_started: "Начать",
    btn_learn: "Подробнее",

    // Сервисы
    serv_main_title: "Наши услуги",
    serv_main_desc:
      "Комплексные решения по доставке, адаптированные к вашим потребностям",

    // Морские
    serv_sea_title: "Морские перевозки",
    serv_sea_desc: "Экономичная морская доставка больших объемов грузов",
    serv_sea_li1: "FCL и LCL перевозки",
    serv_sea_li2: "Порт-Порт / Дверь-Дверь",
    serv_sea_li3: "Таможенное оформление",
    serv_sea_li4: "Страхование грузов",

    // Авиа
    serv_air_title: "Авиаперевозки",
    serv_air_desc: "Быстрая и надежная авиаперевозка срочных грузов",
    serv_air_li1: "Экспресс доставка",
    serv_air_li2: "Сборные грузы",
    serv_air_li3: "Перевозка опасных грузов",
    serv_air_li4: "Отслеживание в реальном времени",

    // ЖД
    serv_rail_title: "Ж/Д Перевозки",
    serv_rail_desc: "Эффективные железнодорожные перевозки через континенты",
    serv_rail_li1: "Контейнерные перевозки",
    serv_rail_li2: "Интермодальные услуги",
    serv_rail_li3: "Трансграничная доставка",
    serv_rail_li4: "Выгодные решения",

    // Авто
    serv_road_title: "Автоперевозки",
    serv_road_desc: "Гибкая доставка от двери до двери",
    serv_road_li1: "Местные и международные",
    serv_road_li2: "Температурный режим",
    serv_road_li3: "Специализированный транспорт",
    serv_road_li4: "Доставка последней мили",

    // Галерея
    gal_title: "Галерея",
    gal_desc: "Наши операции по всему миру",
    gal_img1_title: "Погрузка груза",
    gal_img1_desc: "Решения для надежной упаковки",
    gal_img2_title: "Загрузка контейнера",
    gal_img2_desc: "Профессиональная обработка грузов",
    gal_img3_title: "Контроль качества",
    gal_img3_desc: "Проверка безопасности и соответствия",
    gal_img4_title: "Перевозка тяжелой техники",
    gal_img4_desc: "Перевозка спецтехники",
    gal_img5_title: "Логистика автомобилей",
    gal_img5_desc: "Безопасная перевозка автомобилей",
    gal_img6_title: "Контроль груза",
    gal_img6_desc: "Мониторинг процесса погрузки",

    // Контакты
    cont_title: "Связаться с нами",
    cont_desc: "Есть вопросы? Мы будем рады ответить.",
    cont_info_title: "Контактная информация",
    cont_addr_label: "Адрес",
    cont_phone_label: "Телефон",
    cont_email_label: "Email",

    // Футер
    footer_contact_title: "Контакты",
    footer_addr_val: "Поти, Грузия",
    footer_links_title: "Полезные ссылки",
    footer_rights: "© 2026 ООО S&N Logistics. Все права защищены.",
  },
};

// 2. ელემენტის წამოღება (Select)
const languageSelect = document.getElementById("select-leng");

// 3. ფუნქცია ენის შესაცვლელად
function changeLanguage(lang) {
  // 1. ვპოულობთ ყველა ელემენტს, რომელსაც აქვს data-key
  const elements = document.querySelectorAll("[data-key]");

  // 2. გადავურბენთ თითოეულ ელემენტს
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");

    // 3. ვამოწმებთ თუ არსებობს თარგმანი ამ გასაღებისთვის
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // 4. ვინახავთ არჩევანს ბრაუზერის მეხსიერებაში
  localStorage.setItem("selectedLanguage", lang);
}

// 4. ივენთ ლისენერი (როცა სელექტს ცვლიან)
languageSelect.addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

// 5. გვერდის ჩატვირთვისას (შემოწმება)
document.addEventListener("DOMContentLoaded", () => {
  // ვნახულობთ არის თუ არა შენახული ენა, თუ არა და დეფოლტად 'en'
  const savedLang = localStorage.getItem("selectedLanguage") || "en";

  // სელექტს ვაყენებთ შენახულ ენაზე
  languageSelect.value = savedLang;

  // ვუშვებთ ფუნქციას
  changeLanguage(savedLang);
});
