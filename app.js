(function () {
  "use strict";

  var content = window.SITE_CONTENT;
  var currentLang = "ru";
  var currentFilter = "all";
  var gallery = document.getElementById("gallery");
  var visibleCount = document.getElementById("visible-count");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = lightbox.querySelector("img");
  var lightboxTitle = lightbox.querySelector("h3");
  var lightboxMeta = lightbox.querySelector(".lightbox-meta");
  var lightboxKicker = lightbox.querySelector(".lightbox-kicker");
  var revealObserver;

  try {
    var savedLanguage = localStorage.getItem("konyshev-language");
    if (savedLanguage === "zh" || savedLanguage === "ru") currentLang = savedLanguage;
  } catch (error) {
    currentLang = "ru";
  }

  function t(key) {
    return content.translations[currentLang][key] || key;
  }

  function padNumber(number) {
    return String(number).padStart(2, "0");
  }

  function createCard(artwork, index) {
    var figure = document.createElement("figure");
    figure.className = "art-card reveal";
    figure.dataset.status = artwork.status;

    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", t("openWork") + ": " + artwork[currentLang].title);

    var imageWrap = document.createElement("div");
    imageWrap.className = "art-image-wrap";

    var image = document.createElement("img");
    image.src = artwork.image;
    image.alt = artwork[currentLang].title;
    image.loading = index < 6 ? "eager" : "lazy";
    image.decoding = "async";
    imageWrap.appendChild(image);

    var number = document.createElement("span");
    number.className = "art-index";
    number.textContent = padNumber(index + 1) + " / " + padNumber(content.artworks.length);

    var title = document.createElement("h3");
    title.textContent = artwork[currentLang].title;

    var meta = document.createElement("p");
    meta.className = "art-meta";
    meta.textContent = artwork[currentLang].meta;

    button.appendChild(imageWrap);
    button.appendChild(number);
    button.appendChild(title);
    button.appendChild(meta);
    button.addEventListener("click", function () { openLightbox(artwork, index); });
    figure.appendChild(button);
    return figure;
  }

  function renderGallery() {
    gallery.innerHTML = "";
    var shown = 0;
    content.artworks.forEach(function (artwork, index) {
      var shouldShow = currentFilter === "all" || artwork.status === currentFilter;
      if (!shouldShow) return;
      gallery.appendChild(createCard(artwork, index));
      shown += 1;
    });
    visibleCount.textContent = shown;
    observeReveals();
  }

  function openLightbox(artwork, index) {
    lightboxImage.src = artwork.image;
    lightboxImage.alt = artwork[currentLang].title;
    lightboxTitle.textContent = artwork[currentLang].title;
    lightboxMeta.textContent = artwork[currentLang].meta;
    lightboxKicker.textContent = padNumber(index + 1) + " / " + padNumber(content.artworks.length);
    document.body.classList.add("is-locked");
    lightbox.showModal();
  }

  function closeLightbox() {
    if (lightbox.open) lightbox.close();
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "ru";
    document.title = lang === "zh" ? "尤拉·科内舍夫 — 艺术家" : "Юра Конышев — художник";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.dataset.i18n;
      var value = t(key);
      if (value.indexOf("<") !== -1) element.innerHTML = value;
      else element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });

    document.querySelectorAll("[data-alt-ru]").forEach(function (image) {
      image.alt = image.getAttribute("data-alt-" + lang);
    });

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem("konyshev-language", lang); } catch (error) { /* optional */ }
    renderGallery();
  }

  function observeReveals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -6%" });
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (element) { revealObserver.observe(element); });
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () { applyLanguage(button.dataset.lang); });
  });

  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      currentFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
      renderGallery();
    });
  });

  var menuButton = document.querySelector(".menu-button");
  var siteNav = document.getElementById("site-nav");
  menuButton.addEventListener("click", function () {
    var open = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("close", function () {
    document.body.classList.remove("is-locked");
    lightboxImage.src = "";
  });

  applyLanguage(currentLang);
  observeReveals();
})();
