export type Lang = 'en' | 'ru' | 'az'

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'az', label: 'AZ' },
]

export type Dictionary = {
  heroLine: string
  heroSideWords: [string, string, string]
  changeLanguage: string
  services: {
    packaging: { label: string; body: string }
    advertising: { label: string; body: string }
    merch: { label: string; body: string }
  }
  partners: { label: string; body: string }
  about: { title: string; body: string; experience: string }
  footer: {
    label: string
    phonesTitle: string
    mailTitle: string
    addressTitle: string
    address: string
    phones: [string, string, string, string, string, string, string]
  }
  portfolioAlts: string[]
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    heroLine: 'Full-cycle advertising production',
    heroSideWords: ['ADVERTISING', 'PACKAGING', 'MARKETING'],
    changeLanguage: 'Change language',
    services: {
      packaging: {
        label: 'Packaging',
        body: 'We create stylish and practical packaging for restaurants, cafes, coffee shops and delivery services. Our designs highlight your brand and make product presentation memorable. We produce burger and pizza boxes, cups, bags, containers, sushi and dessert packaging, and takeaway solutions — using quality materials and modern printing for a bright, durable result.',
      },
      advertising: {
        label: 'Advertising',
        body: 'We design and produce advertising structures of any complexity — from signs and lightboxes to 3D letters, interior and outdoor advertising. We work with modern materials and technologies: LED lighting, vinyl films, plotter cutting, window and vehicle branding. We also handle installation of any complexity. Our goal is advertising that is visible, high-quality and long-lasting.',
      },
      merch: {
        label: 'Promo souvenirs',
        body: 'We create branded promo souvenirs and corporate gifts — from pens, flash drives and notebooks to custom creative solutions. With years of experience working with international companies and the banking sector, we help your brand leave a lasting impression.',
      },
    },
    partners: {
      label: 'Partners & recommendations',
      body: 'We value the trust of our clients and partners, so every project focuses on quality, deadlines and attention to detail. Over the years we have completed projects for companies across many industries — from restaurants and stores to major brands and manufacturers. We are recommended for our professional approach, modern solutions and reliable delivery of projects of any complexity. We aim for long-term partnerships and projects that help businesses stand out and grow.',
    },
    about: {
      title: 'Advertising company',
      body: 'PRESTIGE Group of Companies has been operating in the Azerbaijani market for many years. The company started as a full-service advertising agency and gradually defined its core directions. Today the group focuses on advertising and production — delivering full-cycle solutions from design to manufacturing and installation.',
      experience: '18 YEARS OF EXPERIENCE!',
    },
    footer: {
      label: 'Contacts',
      phonesTitle: 'Contact numbers',
      mailTitle: 'Email',
      addressTitle: 'Address',
      address: 'Şamil Əzizbəyov 154, Baku, Azerbaijan',
      phones: [
        'Napkins, toothpicks, granulated sugar & disposables',
        'Bags, cups & packaging products',
        'Laser & offset printing',
        'Advertising structures',
        'Promo souvenirs',
        'Vinyl graphics',
        'Wide-format printing',
      ],
    },
    portfolioAlts: [
      'Branded beverage cups',
      'Branded cups',
      'Branded sachets',
      'Hospitality packaging',
      'Branded wet wipes',
      'Antibacterial wipe packs',
      'Product assortment',
      'Branded disposables',
      'Cutlery sets',
    ],
  },
  ru: {
    heroLine: 'Рекламное производство полного цикла',
    heroSideWords: ['РЕКЛАМА', 'УПАКОВКА', 'МАРКЕТИНГ'],
    changeLanguage: 'Сменить язык',
    services: {
      packaging: {
        label: 'Упаковка',
        body: 'Создаём стильную и практичную упаковку для ресторанов, кафе, кофеен и служб доставки. Дизайн подчёркивает ваш бренд и делает подачу продукции узнаваемой. Изготавливаем коробки для бургеров и пиццы, стаканы, пакеты, контейнеры, упаковку для суши, десертов и takeaway — на качественных материалах и с современной печатью.',
      },
      advertising: {
        label: 'Реклама',
        body: 'Разрабатываем и производим рекламные конструкции любой сложности — от вывесок и световых коробов до объёмных букв, интерьерной и наружной рекламы. Работаем со световыми элементами, LED, виниловыми плёнками, плоттерной резкой, оклейкой витрин и транспорта. Выполняем монтаж любой сложности. Наша задача — сделать рекламу заметной, качественной и долговечной.',
      },
      merch: {
        label: 'Промосувениры',
        body: 'Создаём брендированные промосувениры и корпоративные подарки — от ручек, флешек и ежедневников до креативных индивидуальных решений. Многолетний опыт работы с иностранными компаниями и банковским сектором помогает вашему бренду запомниться.',
      },
    },
    partners: {
      label: 'Партнёры и рекомендации',
      body: 'Мы ценим доверие клиентов и партнёров, поэтому в каждом проекте делаем акцент на качестве, сроках и внимании к деталям. За время работы мы реализовали проекты для компаний из разных сфер — от ресторанов и магазинов до крупных брендов и производств. Нас рекомендуют за профессиональный подход, современные решения и надёжное выполнение задач любой сложности. Мы стремимся к долгосрочному партнёрству и проектам, которые помогают бизнесу выделяться и расти.',
    },
    about: {
      title: 'Рекламная компания',
      body: 'Группа компаний PRESTIGE работает на рынке Азербайджана много лет. Изначально компания существовала как сервисная рекламная компания и постепенно определила основные направления деятельности. Сегодня группа сосредоточена на рекламно-производственной сфере — от дизайна до изготовления и монтажа.',
      experience: '18 ЛЕТ ОПЫТА!',
    },
    footer: {
      label: 'Контакты',
      phonesTitle: 'Контактные номера',
      mailTitle: 'Почта',
      addressTitle: 'Адрес',
      address: 'Şamil Əzizbəyov 154, Баку, Азербайджан',
      phones: [
        'Салфетки, зубочистки, сахарный песок, одноразовая продукция',
        'Пакеты, стаканы и упаковочная продукция',
        'Лазерная и офсетная печать',
        'Рекламные конструкции',
        'Промосувениры',
        'Виниловые работы',
        'Широкоформатная печать',
      ],
    },
    portfolioAlts: [
      'Брендированные стаканы для напитков',
      'Брендированные стаканы',
      'Брендированные саше',
      'Упаковка для HoReCa',
      'Брендированные влажные салфетки',
      'Антибактериальные саше',
      'Ассортимент продукции',
      'Одноразовая продукция',
      'Наборы приборов',
    ],
  },
  az: {
    heroLine: 'Tam dövrəli reklam istehsalı',
    heroSideWords: ['REKLAM', 'QABLAŞDIRMA', 'MARKETİNQ'],
    changeLanguage: 'Dili dəyiş',
    services: {
      packaging: {
        label: 'Qablaşdırma',
        body: 'Restoranlar, kafelər, qəhvəxanalar və çatdırılma xidmətləri üçün zövqlü və praktik qablaşdırma yaradırıq. Dizayn brendinizi önə çıxarır və məhsulun təqdimatını yadda qalan edir. Burger və pizza qutuları, stəkanlar, paketlər, konteynerlər, suşi və desert qablaşdırması, takeaway həlləri istehsal edirik — keyfiyyətli materiallar və müasir çap ilə.',
      },
      advertising: {
        label: 'Reklam',
        body: 'İstənilən mürəkkəblikdə reklam konstruksiyaları layihələndirir və istehsal edirik — lövhələrdən və işıq qutularından 3D hərflərə, interyer və açıq hava reklamına qədər. LED işıqlandırma, vinil plyonkalar, plotter kəsimi, vitrin və nəqliyyat brendləməsi ilə işləyirik. İstənilən mürəkkəblikdə montaj da həyata keçiririk. Məqsədimiz — görünən, keyfiyyətli və uzunömürlü reklamdır.',
      },
      merch: {
        label: 'Promo suvenirlər',
        body: 'Brendli promo suvenirlər və korporativ hədiyyələr yaradırıq — qələmlərdən, fləşlərdən və dəftərlərdən fərdi kreativ həllərə qədər. Beynəlxalq şirkətlər və bank sektoru ilə illərin təcrübəsi brendinizin yadda qalmasına kömək edir.',
      },
    },
    partners: {
      label: 'Tərəfdaşlar və tövsiyələr',
      body: 'Müştəri və tərəfdaşlarımızın etimadını qiymətləndiririk, ona görə hər layihədə keyfiyyətə, müddətlərə və detallara diqqət yetiririk. İllər ərzində müxtəlif sahələrdən — restoran və mağazalardan iri brendlərə və istehsalçılara qədər — layihələr həyata keçirmişik. Peşəkar yanaşma, müasir həllər və etibarlı icra üçün tövsiyə olunuruq. Uzunmüddətli tərəfdaşlıq və biznesin seçilməsinə, inkişafına kömək edən layihələr hədəfləyirik.',
    },
    about: {
      title: 'Reklam şirkəti',
      body: 'PRESTIGE Şirkətlər Qrupu Azərbaycan bazarında uzun illərdir fəaliyyət göstərir. Şirkət xidmət reklam agentliyi kimi başlayıb və tədricən əsas istiqamətlərini müəyyənləşdirib. Bu gün qrup reklam və istehsal sahəsinə fokuslanır — dizayndan istehsala və montaja qədər tam dövrəli həllər təqdim edir.',
      experience: '18 İLLİK TƏCRÜBƏ!',
    },
    footer: {
      label: 'Əlaqə',
      phonesTitle: 'Əlaqə nömrələri',
      mailTitle: 'E-poçt',
      addressTitle: 'Ünvan',
      address: 'Şamil Əzizbəyov 154, Bakı, Azərbaycan',
      phones: [
        'Salfetlər, diş çubuqları, şəkər tozu, birdəfəlik məhsullar',
        'Paketlər, stəkanlar və qablaşdırma məhsulları',
        'Lazer və ofset çap',
        'Reklam konstruksiyaları',
        'Promo suvenirlər',
        'Vinil işləri',
        'Genişformatlı çap',
      ],
    },
    portfolioAlts: [
      'Brendli içki stəkanları',
      'Brendli stəkanlar',
      'Brendli paketlər',
      'HoReCa qablaşdırması',
      'Brendli nəm salfetlər',
      'Antibakterial paketlər',
      'Məhsul çeşidi',
      'Birdəfəlik məhsullar',
      'Çəngəl-qaşıq dəstləri',
    ],
  },
}
