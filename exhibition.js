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
      footer: "Юра Конышев · Москва", backTop: "Наверх"
    },
    zh: {
      skip: "跳到正文", menu: "菜单", navLabel: "主导航", languageLabel: "语言选择",
      navAbout: "关于艺术家", navWorks: "作品", navExhibitions: "展览", back: "全部展览",
      solo: "个展 · 2025", title: "莫斯科<br><em>市杜马</em>", place: "莫斯科<br>2025",
      format: "展览影像<br>00:28", videoLabel: "莫斯科市杜马展览影像",
      caption: "展览中的作品", aboutLabel: "关于展览",
      about: "尤拉·科内舍夫在莫斯科市杜马举办个展的影像记录。今后可在此补充展览现场照片、作品清单和策展文字。",
      footer: "尤拉·科内舍夫 · 莫斯科", backTop: "返回顶部"
    }
  };
  var currentLang = "ru";
  try {
    var stored = localStorage.getItem("konyshev-language");
    if (stored === "ru" || stored === "zh") currentLang = stored;
  } catch (error) { currentLang = "ru"; }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "ru";
    document.title = lang === "zh" ? "莫斯科市杜马 — 尤拉·科内舍夫" : "Московская городская Дума — Юра Конышев";
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
