/*
 * Контент сайта. Чтобы добавить работу, скопируйте один объект в массиве artworks.
 * Подробная инструкция находится в README.md.
 */
window.SITE_CONTENT = {
  translations: {
    ru: {
      skip: "К содержанию",
      menu: "Меню",
      navLabel: "Основная навигация",
      languageLabel: "Выбор языка",
      filterLabel: "Фильтр работ",
      close: "Закрыть",
      navAbout: "О художнике",
      navWorks: "Работы",
      navExhibitions: "Выставки",
      heroEyebrow: "Художник · Москва",
      heroNameFirst: "Юра",
      heroNameLast: "Конышев",
      heroIntro: "Живопись о людях, городе и странных связях между ними.",
      viewWorks: "Смотреть работы",
      portraitCaption: "Портрет художника",
      aboutTitle: "Инженер по образованию,<br><em>художник по призванию.</em>",
      aboutText: "Юра Конышев живёт и работает в Москве. Он выпускник МАИ и художник из Чертанова — района, который становится героем и декорацией его живописи.",
      baseLabel: "Город",
      baseValue: "Москва",
      practiceLabel: "Практика",
      practiceValue: "Живопись",
      educationLabel: "Образование",
      educationValue: "МАИ",
      selectedWorks: "Избранные работы",
      worksTitle: "Живопись",
      worksCount: "работ",
      filterAll: "Все",
      filterPrivate: "В частных коллекциях",
      exhibitionsTitle: "Выставочная<br><em>хроника</em>",
      soloExhibition: "Персональная выставка",
      mgdTitle: "Московская городская Дума",
      mgdPlace: "Москва · 2025",
      openExhibition: "Открыть страницу выставки в Московской городской Думе",
      futureEyebrow: "Сайт растёт вместе с практикой",
      futureTitle: "Следующие<br><em>главы</em>",
      futureNews: "Новости и новые выставки",
      futurePress: "Публикации и пресса",
      futureCatalog: "Скачиваемый каталог работ",
      footerLine: "Юра Конышев · Москва",
      backTop: "Наверх",
      privateLabel: "Частная коллекция",
      openWork: "Открыть работу"
    },
    zh: {
      skip: "跳到正文",
      menu: "菜单",
      navLabel: "主导航",
      languageLabel: "语言选择",
      filterLabel: "作品筛选",
      close: "关闭",
      navAbout: "关于艺术家",
      navWorks: "作品",
      navExhibitions: "展览",
      heroEyebrow: "艺术家 · 莫斯科",
      heroNameFirst: "尤拉",
      heroNameLast: "科内舍夫",
      heroIntro: "关于人与城市，以及两者之间奇妙联系的绘画。",
      viewWorks: "浏览作品",
      portraitCaption: "艺术家肖像",
      aboutTitle: "工程师出身，<br><em>因热爱成为艺术家。</em>",
      aboutText: "尤拉·科内舍夫生活并工作于莫斯科。他毕业于莫斯科航空学院，也是一位来自切尔塔诺沃的艺术家——这片城区常常成为他绘画中的主角和舞台。",
      baseLabel: "城市",
      baseValue: "莫斯科",
      practiceLabel: "创作领域",
      practiceValue: "绘画",
      educationLabel: "教育",
      educationValue: "莫斯科航空学院",
      selectedWorks: "精选作品",
      worksTitle: "绘画",
      worksCount: "件作品",
      filterAll: "全部",
      filterPrivate: "私人收藏",
      exhibitionsTitle: "展览<br><em>纪事</em>",
      soloExhibition: "个展",
      mgdTitle: "莫斯科市杜马",
      mgdPlace: "莫斯科 · 2025",
      openExhibition: "打开莫斯科市杜马展览页面",
      futureEyebrow: "网站与创作一同成长",
      futureTitle: "未来<br><em>篇章</em>",
      futureNews: "新闻与新展览",
      futurePress: "出版物与媒体报道",
      futureCatalog: "可下载的作品图录",
      footerLine: "尤拉·科内舍夫 · 莫斯科",
      backTop: "返回顶部",
      privateLabel: "私人收藏",
      openWork: "打开作品"
    }
  },

  artworks: [
    {
      id: "roma-logvin",
      image: "assets/artworks/01-roma-logvin.webp",
      status: "private",
      ru: { title: "Рома Логвин", meta: "Холст, масло · в частной коллекции" },
      zh: { title: "罗马·洛格温", meta: "布面油画 · 私人收藏" }
    },
    {
      id: "rik",
      image: "assets/artworks/02-rik.webp",
      status: "catalog",
      ru: { title: "Административное здание в Чертаново. «РИК»", meta: "Холст, масло" },
      zh: { title: "切尔塔诺沃行政大楼“РИК”", meta: "布面油画" }
    },
    {
      id: "old-chertanovo",
      image: "assets/artworks/03-old-chertanovo.webp",
      status: "private",
      ru: { title: "Старое Чертаново", meta: "Холст, масло · 60 × 80 см · в частной коллекции" },
      zh: { title: "老切尔塔诺沃", meta: "布面油画 · 60 × 80 厘米 · 私人收藏" }
    },
    {
      id: "swans",
      image: "assets/artworks/04-swans.webp",
      status: "private",
      ru: { title: "Лебеди", meta: "Холст, масло · 100 × 100 см · в частной коллекции" },
      zh: { title: "天鹅", meta: "布面油画 · 100 × 100 厘米 · 私人收藏" }
    },
    {
      id: "municipal-machines",
      image: "assets/artworks/05-municipal-machines.webp",
      status: "private",
      ru: { title: "Московские коммунальные машины", meta: "Холст, масло · в частной коллекции" },
      zh: { title: "莫斯科市政车辆", meta: "布面油画 · 私人收藏" }
    },
    {
      id: "gagra",
      image: "assets/artworks/06-gagra.webp",
      status: "catalog",
      ru: { title: "Гагра", meta: "Холст, масло" },
      zh: { title: "加格拉", meta: "布面油画" }
    },
    {
      id: "creator",
      image: "assets/artworks/07-creator.webp",
      status: "private",
      ru: { title: "Творец и детище", meta: "Холст, масло · в частной коллекции" },
      zh: { title: "创作者与造物", meta: "布面油画 · 私人收藏" }
    },
    {
      id: "swans-ii",
      image: "assets/artworks/08-swans-ii.webp",
      status: "catalog",
      ru: { title: "Лебеди II", meta: "Холст, масло" },
      zh: { title: "天鹅 II", meta: "布面油画" }
    },
    {
      id: "fish-port",
      image: "assets/artworks/09-fish-port.webp",
      status: "catalog",
      ru: { title: "Рыбный порт, балалайка и скрипка", meta: "Картон, масло" },
      zh: { title: "渔港、巴拉莱卡琴与小提琴", meta: "纸板油画" }
    },
    {
      id: "pasha",
      image: "assets/artworks/10-pasha.webp",
      status: "catalog",
      ru: { title: "Паша танкист", meta: "Холст на картоне, масло" },
      zh: { title: "坦克兵帕沙", meta: "纸板裱布油画" }
    },
    {
      id: "filyor",
      image: "assets/artworks/11-filyor.webp",
      status: "catalog",
      ru: { title: "Филёр", meta: "Холст на картоне, масло" },
      zh: { title: "密探", meta: "纸板裱布油画" }
    },
    {
      id: "portal",
      image: "assets/artworks/12-portal.webp",
      status: "catalog",
      ru: { title: "Портал", meta: "Холст, масло · 80 × 80 см" },
      zh: { title: "入口", meta: "布面油画 · 80 × 80 厘米" }
    },
    {
      id: "miroslava",
      image: "assets/artworks/13-miroslava.webp",
      status: "private",
      ru: { title: "Мирослава", meta: "Холст, масло · 50 × 65 см · в частной коллекции" },
      zh: { title: "米罗丝拉娃", meta: "布面油画 · 50 × 65 厘米 · 私人收藏" }
    },
    {
      id: "night-hunt",
      image: "assets/artworks/14-night-hunt.webp",
      status: "catalog",
      ru: { title: "Ночная охота", meta: "Холст, масло" },
      zh: { title: "夜猎", meta: "布面油画" }
    },
    {
      id: "woman",
      image: "assets/artworks/15-woman.webp",
      status: "private",
      ru: { title: "Женщина", meta: "Холст, масло · в частной коллекции" },
      zh: { title: "女人", meta: "布面油画 · 私人收藏" }
    },
    {
      id: "not-sisters",
      image: "assets/artworks/16-not-sisters.webp",
      status: "catalog",
      ru: { title: "Не сёстры", meta: "Холст, масло · 71 × 120 см" },
      zh: { title: "并非姐妹", meta: "布面油画 · 71 × 120 厘米" }
    }
  ]
};
