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
  intro: {
    label: string
    contactPrefix: string
    prev: string
    next: string
    slideLabel: string
    slides: {
      wideformat: { title: string; subtitle: string; body: string }
      construction: { title: string; subtitle: string; body: string }
      vinyl: { title: string; subtitle: string; body: string }
      print: { title: string; subtitle: string; body: string }
      merch: { title: string; subtitle: string; body: string }
      napkins: { title: string; subtitle: string; body: string }
    }
  }
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
    intro: {
      label: 'Services',
      contactPrefix: 'For more information, please call',
      prev: 'Previous slide',
      next: 'Next slide',
      slideLabel: 'Slide',
      slides: {
        wideformat: {
          title: 'Wide-format printing and plotter cutting',
          subtitle: 'In-house equipment with design support',
          body: 'In-house equipment and experienced staff let you order directly from the producer. Wide-format printing (3.2 and 5 m) on banner, vinyl and canvas, plus plotter and laser cutting for any advertising materials.',
        },
        construction: {
          title: 'Advertising structures and installation',
          subtitle:
            'Our own workshop, deep experience with non-standard tasks, and a wide range of work',
          body: 'For over 8 years we have produced outdoor advertising in-house: lightboxes, signs, 3D letters, pylons and boards. Installation and vehicle wrapping — more than 8,000 cars, facades, malls and custom projects.',
        },
        vinyl: {
          title: 'Vinyl work and vehicle wrapping',
          subtitle: '',
          body: 'For over 8 years we have delivered vinyl work and vehicle wrapping of any complexity. Quality materials, our own workshop and a hands-on approach — for corporate fleets, buses and custom media with lasting results.',
        },
        print: {
          title: 'Laser and offset printing',
          subtitle:
            'Corporate-segment experience with international companies in several countries',
          body: 'We entered laser and offset printing relatively recently, but already have solid experience and a strong client base (not only in Azerbaijan). Low prices and high quality are the core of our work in this direction.',
        },
        merch: {
          title: 'Promo souvenirs and gifts',
          subtitle: 'A decade of experience and a large portfolio',
          body: 'Years of work with international companies and banks. We help with promo souvenirs: from flash drives, pens and notebooks to creative custom solutions. Surprising with gifts is our strength.',
        },
        napkins: {
          title: 'Wet and paper napkin production',
          subtitle:
            'A leading position in wet wipes, with experience in government institutions and HoReCa',
          body: 'In three years we became a reliable HoReCa partner for hotels and restaurants and one of the local leaders in wet wipe production. We also offer paper napkins and other HoReCa products.',
        },
      },
    },
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
      address: 'Baku, Nizami district, Bəhruz Nuriyev street 24a',
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
    intro: {
      label: 'Услуги',
      contactPrefix: 'За дополнительной информацией обращайтесь по телефону',
      prev: 'Предыдущий слайд',
      next: 'Следующий слайд',
      slideLabel: 'Слайд',
      slides: {
        wideformat: {
          title: 'Широкоформатная печать и плоттерная резка',
          subtitle: 'Свое оборудование с дизайнерской поддержкой',
          body: 'Собственное оборудование и опытный персонал позволяют заказывать напрямую у производителя. Широкоформатная печать (3,2 и 5 м) на баннере, виниле и холсте, плоттерная и лазерная резка любых рекламных материалов.',
        },
        construction: {
          title: 'Изготовление рекламных конструкций и монтажные работы',
          subtitle:
            'Свой собственный цех, огромный опыт в решении нестандартных задач, широкий спектр работ',
          body: 'Более 8 лет производим наружную рекламу на собственном производстве: лайтбоксы, вывески, объёмные буквы, пилоны и борды. Монтаж и оклейка транспорта — более 8000 автомобилей, фасады, ТЦ и нестандартные проекты.',
        },
        vinyl: {
          title: 'Виниловые работы и оклейка транспорта',
          subtitle: '',
          body: 'Более 8 лет выполняем виниловые работы и оклейку транспорта любой сложности. Качественные материалы, собственный цех и ручной подход — для корпоративных авто, автобусов и нестандартных носителей с долговечным результатом.',
        },
        print: {
          title: 'Лазерная и офсетная печать',
          subtitle:
            'Опыт работы в корпоративном сегменте с международными компаниями в нескольких странах мира',
          body: 'На рынок лазерной и офсетной печати мы вышли относительно недавно, но несмотря на это мы уже имеем небольшой опыт работы в данной сфере и неплохой пул клиентов (кстати не только в Азербайджане). Максимально низкие цены и высокое качество – это и есть критерий нашей работы в этом направлении.',
        },
        merch: {
          title: 'Промосувениры и подарки',
          subtitle: 'Десятилетний опыт работы большое портфолио',
          body: 'Многолетний опыт с иностранными компаниями и банками. Помогаем с промосувенирами: от флешек, ручек и ежедневников до креативных индивидуальных решений. Удивлять подарками — наша сильная сторона.',
        },
        napkins: {
          title: 'Производство влажных и бумажных салфеток',
          subtitle:
            'Лидерская позиция на рынке влажных салфеток опыт работы с государственными учреждениями и с сегментом HoReCa',
          body: 'За три года стали надёжным партнёром отелей и ресторанов HoReCa и одним из лидеров по влажным салфеткам местного производства. Также предлагаем бумажные салфетки и другие продукты для сегмента HoReCa.',
        },
      },
    },
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
      address: 'г. Баку, Низами район, ул. Бехруз Нуриев 24a',
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
    intro: {
      label: 'Xidmətlər',
      contactPrefix: 'Əlavə məlumat üçün zəng edin',
      prev: 'Əvvəlki slayd',
      next: 'Növbəti slayd',
      slideLabel: 'Slayd',
      slides: {
        wideformat: {
          title: 'Genişformatlı çap və plotter kəsimi',
          subtitle: 'Öz avadanlığımız və dizayn dəstəyi',
          body: 'Öz avadanlığımız və təcrübəli personal birbaşa istehsalçıdan sifariş etməyə imkan verir. Banner, vinil və kətan üzərində genişformatlı çap (3,2 və 5 m), həmçinin istənilən reklam materialları üçün plotter və lazer kəsimi.',
        },
        construction: {
          title: 'Reklam konstruksiyaları və montaj işləri',
          subtitle:
            'Öz seximiz, qeyri-standart tapşırıqlarda böyük təcrübə və geniş iş spektri',
          body: '8 ildən artıqdır öz istehsalımızda açıq hava reklamı hazırlayırıq: işıq qutuları, lövhələr, 3D hərflər, pilonlar və bordlar. Montaj və nəqliyyat brendləməsi — 8000-dən çox avtomobil, fasadlar, TİM və fərdi layihələr.',
        },
        vinyl: {
          title: 'Vinil işləri və nəqliyyat brendləməsi',
          subtitle: '',
          body: '8 ildən artıqdır istənilən mürəkkəblikdə vinil işləri və nəqliyyat brendləməsi həyata keçiririk. Keyfiyyətli materiallar, öz seximiz və fərdi yanaşma — korporativ avtomobillər, avtobuslar və uzunömürlü nəticə üçün fərdi daşıyıcılar.',
        },
        print: {
          title: 'Lazer və ofset çap',
          subtitle:
            'Bir neçə ölkədə beynəlxalq şirkətlərlə korporativ seqmentdə təcrübə',
          body: 'Lazer və ofset çap bazarına nisbətən yaxınlarda daxil olmuşuq, lakin artıq bu sahədə təcrübəmiz və möhkəm müştəri bazamız var (təkcə Azərbaycanda deyil). Aşağı qiymət və yüksək keyfiyyət bu istiqamətdə işimizin əsas meyarlarıdır.',
        },
        merch: {
          title: 'Promo suvenirlər və hədiyyələr',
          subtitle: 'On illik təcrübə və geniş portfolio',
          body: 'Beynəlxalq şirkətlər və banklarla illərin təcrübəsi. Promo suvenirlərdə kömək edirik: fləşlərdən, qələmlərdən və dəftərlərdən kreativ fərdi həllərə qədər. Hədiyyələrlə heyrətləndirmək — güclü tərəfimizdir.',
        },
        napkins: {
          title: 'Nəm və kağız salfet istehsalı',
          subtitle:
            'Nəm salfet bazarında lider mövqe, dövlət qurumları və HoReCa ilə təcrübə',
          body: 'Üç ildə otel və restoranlar üçün etibarlı HoReCa tərəfdaşı və yerli nəm salfet istehsalında liderlərdən birinə çevrildik. Həmçinin kağız salfetlər və digər HoReCa məhsulları təklif edirik.',
        },
      },
    },
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
      address: 'Bakı şəhəri, Nizami rayonu, Bəhruz Nuriyev küçəsi 24a',
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
