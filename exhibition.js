(function () {
  "use strict";
  var translations = {
    ru: {
      skip: "К содержанию", menu: "Меню", navLabel: "Основная навигация", languageLabel: "Выбор языка",
      navAbout: "О художнике", navWorks: "Работы", navExhibitions: "Выставки", back: "Все выставки",
      solo: "Персональная выставка · 2025", title: "Московская<br><em>городская Дума</em>", place: "Москва<br>2025",
      format: "Видео-документация<br>00:28", videoLabel: "Видео выставки в Московской городской Думе",
      caption: "Работы на выставке", aboutLabel: "О выставке",
      about: "Видео-документация персональной выставки Юры Конышева в Московской городской Думе. Раздел можно дополнить фотографиями экспозиции, списком работ и текстом куратора.",
      footer: "Юра Конышев · Москва", backTop: "Наверх",
      pageTitle: "Московская городская Дума — Юра Конышев",
      metaDescription: "Персональная выставка Юры Конышева в Московской городской Думе, 2025."
    },
    zh: {
      skip: "跳到正文", menu: "菜单", navLabel: "主导航", languageLabel: "语言选择",
      navAbout: "关于艺术家", navWorks: "作品", navExhibitions: "展览", back: "全部展览",
      solo: "个展 · 2025", title: "莫斯科<br><em>市杜马</em>", place: "莫斯科<br>2025",
      format: "展览影像<br>00:28", videoLabel: "莫斯科市杜马展览影像",
      caption: "展览中的作品", aboutLabel: "关于展览",
      about: "尤拉·科内舍夫在莫斯科市杜马举办个展的影像记录。今后可在此补充展览现场照片、作品清单和策展文字。",
      footer: "尤拉·科内舍夫 · 莫斯科", backTop: "返回顶部",
      pageTitle: "莫斯科市杜马 — 尤拉·科内舍夫",
      metaDescription: "尤拉·科内舍夫于2025年在莫斯科市杜马举办的个展。"
    },
    ar: {
      skip: "الانتقال إلى المحتوى", menu: "القائمة", navLabel: "التنقل الرئيسي", languageLabel: "اختيار اللغة",
      navAbout: "عن الفنان", navWorks: "الأعمال", navExhibitions: "المعارض", back: "كل المعارض",
      solo: "معرض فردي · 2025", title: "مجلس دوما<br><em>مدينة موسكو</em>", place: "موسكو<br>2025",
      format: "فيديو توثيقي<br>00:28", videoLabel: "فيديو معرض مجلس دوما مدينة موسكو",
      caption: "أعمال المعرض", aboutLabel: "عن المعرض",
      about: "توثيق بالفيديو للمعرض الفردي ليورا كونيشيف في مجلس دوما مدينة موسكو. ويمكن لاحقاً إضافة صور من قاعة العرض وقائمة الأعمال ونص القيّم الفني.",
      footer: "يورا كونيشيف · موسكو", backTop: "إلى الأعلى",
      pageTitle: "مجلس دوما مدينة موسكو — يورا كونيشيف",
      metaDescription: "المعرض الفردي ليورا كونيشيف في مجلس دوما مدينة موسكو، 2025."
    }
  };
  var currentLang = "ru";
  try {
    var stored = localStorage.getItem("konyshev-language");
    if (["ru", "zh", "ar"].indexOf(stored) !== -1) currentLang = stored;
  } catch (error) { currentLang = "ru"; }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = translations[lang].pageTitle;
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", translations[lang].metaDescription);
    document.querySelectorAll("[data-detail]").forEach(function (element) {
      var value = translations[lang][element.dataset.detail];
      if (value.indexOf("<") !== -1) element.innerHTML = value;
      else element.textContent = value;
    });
    document.querySelectorAll("[data-detail-aria]").forEach(function (element) {
      element.setAttribute("aria-label", translations[lang][element.dataset.detailAria]);
    });
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem("konyshev-language", lang); } catch (error) { /* optional */ }
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () { applyLanguage(button.dataset.lang); });
  });
  var menuButton = document.querySelector(".menu-button");
  var nav = document.getElementById("site-nav");
  menuButton.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(function (element) { observer.observe(element); });
  applyLanguage(currentLang);
})();
