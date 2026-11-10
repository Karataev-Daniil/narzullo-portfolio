export type Lang = 'en' | 'ru';

export interface LinkItem {
  label: string;
  href: string;
}

export interface PressItem {
  source: string;
  title: string;
  href: string;
}

export interface Job {
  dates: string;
  kind: string;
  role: string;
  org: string;
  url?: string;
  points: string[];
  stack: string[];
}

export interface PipelineStep {
  name: string;
  detail: string;
  /** What travels to the next step: sound or text. */
  carries?: 'audio' | 'text';
}

export interface Content {
  meta: { title: string; description: string };
  skipLink: string;
  nav: { id: string; label: string }[];
  menu: { open: string; close: string };
  langLabel: string;
  hero: {
    name: [string, string];
    available: string;
    place: string;
    intro: string[];
    play: string;
    stop: string;
    voiceNote: string;
    noVoice: string;
    ctaWork: string;
    ctaContact: string;
    portraitAlt: string;
  };
  about: {
    title: string;
    lead: string;
    story: string[];
    principlesTitle: string;
    principles: { title: string; text: string }[];
    recordTitle: string;
    record: string[];
    lookingTitle: string;
    looking: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    educationTitle: string;
    education: { course: string; dates: string };
  };
  experience: {
    title: string;
    lead: string;
    stackLabel: string;
    show: string;
    hide: string;
    jobs: Job[];
  };
  projects: {
    title: string;
    lead: string;
    stackLabel: string;
    pressTitle: string;
    lunara: {
      name: string;
      tagline: string;
      summary: string;
      doesTitle: string;
      does: string[];
      stack: string[];
      site: LinkItem;
      press: PressItem[];
    };
    toy: {
      name: string;
      tagline: string;
      summary: string;
      pipelineTitle: string;
      pipeline: PipelineStep[];
      legendAudio: string;
      legendText: string;
      stack: string[];
      press: PressItem[];
    };
    moreTitle: string;
    more: { name: string; text: string; stack: string[] }[];
    github: LinkItem;
  };
  skills: {
    title: string;
    groups: { name: string; items: string[] }[];
  };
  contact: {
    title: string;
    statement: string;
    lead: string;
    email: string;
    copy: string;
    copied: string;
    copyFailed: string;
    channels: { label: string; value: string; href: string }[];
  };
  footer: { rights: string; place: string };
  newTab: string;
}

const LUNARA_URL = 'https://lunaravox.netlify.app/';
const GITHUB_URL = 'https://github.com/nik671641/WORK-EXPERIENCE';
const EMAIL = 'narzullozugurov88@gmail.com';

const PRESS = {
  alibaba:
    'https://pavelzingan.md/andrej-nemolyakin-lunara-kak-moldavskij-startap-voshel-v-elitnyj-ai-aliyans-alibaba/',
  logos:
    'https://logos-pres.md/ru/novosti/moldavskaya-kompaniya-razrabotala-detskuyu-igrushku-s-iskusstvennym-intellektom/',
  kp: 'https://kp.md/raznoe/moldavskaya-igrushka-s-iskusstvennym-intellektom-ot-lunara-ai-kak-rabotaet-kogda-vyjdet-v-prodazhu-i-skolko-mozhet-stoit/',
};

const STACK = {
  lunaraJob: ['Python', 'FastAPI', 'PostgreSQL', 'AI / LLM', 'Voice', 'REST APIs'],
  toyJob: ['Python', 'Flask', 'Socket.IO', 'OpenAI', 'Gemini', 'STT / TTS', 'Heroku'],
  rdg: ['Python', 'FastAPI', 'Aiogram', 'PostgreSQL', 'Bitrix24', 'GPT-4'],
  n8n: ['n8n', 'Telegram Bot API', 'PostgreSQL', 'LangChain', 'OpenAI', 'Webhooks'],
  amatto: ['Python', 'Django', 'FastAPI', 'REST APIs'],
  freelance: ['Python', 'Telegram Bot API', 'Google Docs API', 'GPT-4', 'Bitrix24'],
  lunara: ['Python', 'FastAPI', 'PostgreSQL', 'LLM', 'Voice'],
  toy: ['Python', 'Flask', 'Socket.IO', 'OpenAI', 'Gemini', 'STT', 'TTS'],
  tgBot: ['Aiogram', 'GPT-4', 'Bitrix24 REST', 'PostgreSQL'],
  n8nEngine: ['n8n', 'LangChain', 'OpenAI', 'Webhooks'],
  binance: ['Python', 'Async', 'Pandas', 'REST APIs'],
  ops: ['Telegram Bot API', 'Google Docs API', 'Python'],
};

const CHANNELS = {
  telegram: { value: '@Nik6712', href: 'https://t.me/Nik6712' },
  phone: { value: '+373 671 07 269', href: 'tel:+37367107269' },
  linkedin: {
    value: 'linkedin.com/in/narzullo-zugurov',
    href: 'https://www.linkedin.com/in/narzullo-zugurov-441b4a262/',
  },
  github: { value: 'github.com/nik671641', href: GITHUB_URL },
};

const en: Content = {
  meta: {
    title: 'Narzullo Zugurov, Python full-stack developer',
    description:
      'Python full-stack developer from Chișinău building AI voice and chat assistants, Telegram bots and CRM automation for businesses.',
  },
  skipLink: 'Skip to content',
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  menu: { open: 'Menu', close: 'Close' },
  langLabel: 'Language',
  hero: {
    name: ['Narzullo', 'Zugurov'],
    available: 'Available for work',
    place: 'Chișinău, Moldova',
    intro: [
      "I'm Narzullo Zugurov, a Python full-stack developer from Chișinău.",
      'I build automated systems, AI voice and chat assistants, and CRM integrations for businesses.',
      'My latest product is LunaraVox, an AI voice platform that answers and makes calls for businesses.',
    ],
    play: 'Play the intro',
    stop: 'Stop the intro',
    voiceNote: 'Press play and your browser reads this intro aloud. The voice is synthesized, not mine.',
    noVoice: "Your browser has no voice for this language, so the transcript plays without sound.",
    ctaWork: 'See selected work',
    ctaContact: 'Get in touch',
    portraitAlt: 'Portrait of Narzullo Zugurov',
  },
  about: {
    title: 'About',
    lead: 'Middle full-stack developer working with Python, AI voice and chat assistants, backend services and integrations. I build clean, automated systems that free teams from repetitive work.',
    story: [
      'Self-taught, with around three years of hands-on experience. I started with Python automation, moved into Telegram bots and CRM integrations, and ended up building production AI voice systems.',
      'Most of what I know I learned by shipping: real projects, real users, real bugs at 2 AM. No bootcamp, no shortcuts. Just iteration, documentation and a lot of curiosity.',
    ],
    principlesTitle: 'How I work',
    principles: [
      {
        title: 'Ship, then refine',
        text: "I'd rather ship a clean first version and improve it with real feedback than polish forever in isolation.",
      },
      {
        title: 'Automate the boring parts',
        text: "If a task repeats, it should be a script, a bot or a workflow, not someone's afternoon.",
      },
      {
        title: 'Own the outcome',
        text: 'I care about the business result, not just the ticket. I ask why before I write the first line.',
      },
    ],
    recordTitle: 'Track record',
    record: [
      "Core contributor on LunaraVox, an AI voice platform that joined Alibaba's AI alliance.",
      "Built the end-to-end voice pipeline for an AI children's toy, covered by Logos-Press and KP.md.",
      'Shipped 6+ production projects across voice AI, CRM automation and Telegram tools for business.',
      'About three years of building real systems, fully self-taught, without a CS degree.',
    ],
    lookingTitle: 'Looking for',
    looking: [
      'A long-term role in a product team building with AI',
      'Startups working on voice, agents or LLM products',
      'Automation projects for businesses: CRM, bots, internal tools',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Conversational' },
      { name: 'Bulgarian', level: 'Conversational' },
    ],
    educationTitle: 'Education',
    education: {
      course: 'Python Fundamentals & Django Web Development',
      dates: 'Oct 2022 – Jul 2023',
    },
  },
  experience: {
    title: 'Experience',
    lead: 'From freelance Telegram bots in 2023 to voice AI in production.',
    stackLabel: 'Stack',
    show: 'Show details',
    hide: 'Hide details',
    jobs: [
      {
        dates: 'Oct 2025 – May 2026',
        kind: 'Product',
        role: 'Backend / AI Developer',
        org: 'LunaraVox',
        url: LUNARA_URL,
        points: [
          'Contributed to an AI voice platform where businesses create and manage virtual assistants for inbound and outbound calls, multilingual conversations, meeting scheduling and knowledge-based support.',
          'Built features for creating and configuring voice assistants, call workflows, conversation tracking, transcripts and summaries.',
          'Worked on the backend, integrations, database logic and assistant behavior, turning business needs into technical implementation.',
          'Helped automate repetitive communication, reduce missed opportunities and speed up responses to customers.',
        ],
        stack: STACK.lunaraJob,
      },
      {
        dates: '2026',
        kind: 'Collaboration',
        role: 'Backend / AI Integration Developer',
        org: 'AI Toy Voice Assistant',
        points: [
          "Worked with a toy manufacturer to embed an AI voice assistant into a children's smart toy, so a child can simply talk to it.",
          'Built the end-to-end voice pipeline: audio capture on the device, streaming to the backend, speech recognition, the AI reply and voice synthesis back to the toy.',
          'Implemented chunked audio processing, session management, authentication and resilient hardware-to-cloud communication.',
          'Added debug audio logging, analyzed latency and improved stability between the device and the server.',
        ],
        stack: STACK.toyJob,
      },
      {
        dates: 'Feb 2025 – Sep 2025',
        kind: 'Full-time',
        role: 'Python AI Developer',
        org: 'RDG Smart Solutions',
        points: [
          'Developed and maintained Telegram bots with GPT-4 integration.',
          'Integrated the Bitrix24 REST API to create and update deals automatically.',
          'Optimized backend services in Python with FastAPI and Aiogram.',
          'Worked with PostgreSQL for data storage and analytics.',
        ],
        stack: STACK.rdg,
      },
      {
        dates: '2025',
        kind: 'Project',
        role: 'Bot Developer on n8n',
        org: 'Independent',
        points: [
          'Telegram triggers with IF/Switch branching by JSON fields and prefixes.',
          'Postgres operations with upsert logic by chat_id.',
          'Bitrix24 REST integrations: crm.contact.list/add, crm.deal.add, webhooks.',
          'A LangChain agent on an OpenAI chat model (gpt-3.5-turbo) with a memory buffer.',
        ],
        stack: STACK.n8n,
      },
      {
        dates: 'Mar 2025 – Jun 2025',
        kind: 'Part-time',
        role: 'Python Developer',
        org: 'Amatto Partner',
        points: [
          'Developed and tested internal Python services.',
          'Integrated third-party APIs to automate business processes.',
          'Supported projects built with Django and FastAPI.',
        ],
        stack: STACK.amatto,
      },
      {
        dates: 'Dec 2023 – Apr 2024',
        kind: 'Self-employed',
        role: 'Python Developer',
        org: 'Freelance',
        points: [
          'Binance parsing: collected market data for ML teams and crypto predictions.',
          'Telegram bots for notes, warehouse accounting, name-engraving orders and Google Docs integration.',
          'A Telegram bot with AI and Bitrix24 for customer service: GPT-4 chat, deal creation, dialogue history.',
        ],
        stack: STACK.freelance,
      },
    ],
  },
  projects: {
    title: 'Projects',
    lead: 'Built for real businesses and real users.',
    stackLabel: 'Stack',
    pressTitle: 'In the press',
    lunara: {
      name: 'LunaraVox',
      tagline: 'AI voice platform for businesses',
      summary:
        'Virtual assistants that take a company’s inbound and outbound calls. Built to take repetitive communication off the team and answer customers faster.',
      doesTitle: 'What the assistants do',
      does: [
        'Answer inbound calls and make outbound ones',
        'Talk in several languages',
        'Schedule meetings',
        'Produce call transcripts and summaries',
        'Answer from the company’s knowledge base',
      ],
      stack: STACK.lunara,
      site: { label: 'Open the live site', href: LUNARA_URL },
      press: [
        {
          source: 'pavelzingan.md',
          title: 'How a Moldovan startup joined Alibaba’s elite AI alliance',
          href: PRESS.alibaba,
        },
      ],
    },
    toy: {
      name: 'AI toy voice assistant',
      tagline: 'Built with a toy manufacturer',
      summary:
        'A children’s smart toy with a built-in AI voice assistant. The child speaks, the toy listens, thinks and answers in a natural voice.',
      pipelineTitle: 'How one reply travels',
      pipeline: [
        { name: 'Toy microphone', detail: 'Records the child’s voice in chunks', carries: 'audio' },
        { name: 'Socket.IO stream', detail: 'Carries the audio to the Flask backend', carries: 'audio' },
        { name: 'Speech-to-text', detail: 'Turns speech into text', carries: 'text' },
        { name: 'LLM', detail: 'OpenAI or Gemini writes the reply', carries: 'text' },
        { name: 'Text-to-speech', detail: 'Gives the reply a natural voice', carries: 'audio' },
        { name: 'Toy speaker', detail: 'The toy answers out loud' },
      ],
      legendAudio: 'Audio',
      legendText: 'Text',
      stack: STACK.toy,
      press: [
        {
          source: 'Logos-Press',
          title: 'Moldovan company built an AI-powered children’s toy',
          href: PRESS.logos,
        },
        {
          source: 'KP.md',
          title: 'How Lunara AI’s smart toy works and when it launches',
          href: PRESS.kp,
        },
      ],
    },
    moreTitle: 'More projects',
    more: [
      {
        name: 'Telegram AI assistant with Bitrix24',
        text: 'Customer service automation: GPT-4 conversations, automatic deal creation, dialogue history and quick buttons for payment, a manager or services.',
        stack: STACK.tgBot,
      },
      {
        name: 'n8n workflow engine',
        text: 'Visual orchestration with Telegram triggers, routing by JSON prefixes, Postgres upserts by chat_id and a LangChain agent on OpenAI with a memory buffer.',
        stack: STACK.n8nEngine,
      },
      {
        name: 'Binance market parser',
        text: 'A data collection pipeline for ML teams that feeds crypto-prediction models with clean, normalized historical and real-time market data.',
        stack: STACK.binance,
      },
      {
        name: 'Operations bots suite',
        text: 'Internal tools for small businesses, all run from Telegram: notes, warehouse accounting, name-engraving orders and Google Docs integration.',
        stack: STACK.ops,
      },
    ],
    github: { label: 'More code on GitHub', href: GITHUB_URL },
  },
  skills: {
    title: 'Skills',
    groups: [
      { name: 'Languages and frameworks', items: ['Python', 'Flask', 'Django', 'FastAPI', 'Aiogram', 'LangChain'] },
      {
        name: 'AI and automation',
        items: ['OpenAI / GPT-4', 'Google Gemini', 'Qwen', 'n8n', 'Prompt engineering', 'Webhooks'],
      },
      {
        name: 'Voice and integrations',
        items: ['Asterisk', 'SIP / VoIP', 'Socket.IO', 'Telegram Bot API', 'REST APIs', 'API integrations'],
      },
      { name: 'Data and tools', items: ['PostgreSQL', 'SQL', 'Git', 'GitHub', 'Postman', 'System debugging'] },
      { name: 'Web', items: ['HTML', 'CSS', 'WordPress'] },
    ],
  },
  contact: {
    title: 'Contact',
    statement: 'Let’s build something useful.',
    lead: 'Open to full-time, contract and freelance work: Python backend, automation and AI integrations.',
    email: EMAIL,
    copy: 'Copy email',
    copied: 'Email copied',
    copyFailed: 'Couldn’t copy. Select the address instead.',
    channels: [
      { label: 'Telegram', ...CHANNELS.telegram },
      { label: 'Phone', ...CHANNELS.phone },
      { label: 'LinkedIn', ...CHANNELS.linkedin },
      { label: 'GitHub', ...CHANNELS.github },
    ],
  },
  footer: { rights: '© 2026 Narzullo Zugurov', place: 'Chișinău, Moldova' },
  newTab: 'opens in a new tab',
};

const ru: Content = {
  meta: {
    title: 'Нарзулло Зугуров, Python full-stack разработчик',
    description:
      'Python full-stack разработчик из Кишинёва: голосовые и чат-ассистенты на ИИ, Telegram-боты и автоматизация CRM для бизнеса.',
  },
  skipLink: 'Перейти к содержанию',
  nav: [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'projects', label: 'Проекты' },
    { id: 'skills', label: 'Навыки' },
    { id: 'contact', label: 'Контакты' },
  ],
  menu: { open: 'Меню', close: 'Закрыть' },
  langLabel: 'Язык',
  hero: {
    name: ['Narzullo', 'Zugurov'],
    available: 'Открыт к предложениям',
    place: 'Кишинёв, Молдова',
    intro: [
      'Я Нарзулло Зугуров, Python full-stack разработчик из Кишинёва.',
      'Создаю автоматизированные системы, голосовых и чат-ассистентов на ИИ и интеграции с CRM для бизнеса.',
      'Мой последний продукт — LunaraVox, голосовая ИИ-платформа, которая принимает и совершает звонки за бизнес.',
    ],
    play: 'Прослушать интро',
    stop: 'Остановить интро',
    voiceNote: 'Нажмите play, и браузер прочитает интро вслух. Голос синтезированный, не мой.',
    noVoice: 'В браузере нет голоса для этого языка, поэтому расшифровка идёт без звука.',
    ctaWork: 'Смотреть проекты',
    ctaContact: 'Связаться',
    portraitAlt: 'Портрет Нарзулло Зугурова',
  },
  about: {
    title: 'Обо мне',
    lead: 'Middle full-stack разработчик: Python, голосовые и чат-ассистенты на ИИ, бэкенд-сервисы и интеграции. Строю чистые автоматизированные системы, которые избавляют команды от рутины.',
    story: [
      'Самоучка, около трёх лет практического опыта. Начинал с автоматизации на Python, перешёл к Telegram-ботам и интеграциям с CRM, а пришёл к голосовым ИИ-системам в продакшене.',
      'Почти всему я научился, выпуская продукты: реальные проекты, реальные пользователи, реальные баги в два часа ночи. Без буткемпов и коротких путей — итерации, документация и много любопытства.',
    ],
    principlesTitle: 'Как я работаю',
    principles: [
      {
        title: 'Сначала запуск, потом доводка',
        text: 'Лучше выпустить аккуратную первую версию и улучшать её по реальной обратной связи, чем бесконечно полировать в стол.',
      },
      {
        title: 'Рутину — автоматизировать',
        text: 'Если задача повторяется, это работа для скрипта, бота или воркфлоу, а не для чьего-то рабочего дня.',
      },
      {
        title: 'Отвечать за результат',
        text: 'Мне важен результат для бизнеса, а не просто закрытый тикет. Я спрашиваю «зачем» до первой строчки кода.',
      },
    ],
    recordTitle: 'Что уже сделано',
    record: [
      'Один из ключевых разработчиков LunaraVox — голосовой ИИ-платформы, которая вошла в AI-альянс Alibaba.',
      'Построил голосовой пайплайн детской ИИ-игрушки от начала до конца; о проекте писали Logos-Press и KP.md.',
      'Запустил 6+ проектов в продакшене: голосовой ИИ, автоматизация CRM, Telegram-инструменты для бизнеса.',
      'Около трёх лет разработки реальных систем — полностью самостоятельно, без профильного диплома.',
    ],
    lookingTitle: 'Что ищу',
    looking: [
      'Долгосрочную роль в продуктовой команде, которая работает с ИИ',
      'Стартапы в сфере голоса, агентов и LLM-продуктов',
      'Проекты по автоматизации бизнеса: CRM, боты, внутренние инструменты',
    ],
    languagesTitle: 'Языки',
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'Разговорный' },
      { name: 'Болгарский', level: 'Разговорный' },
    ],
    educationTitle: 'Обучение',
    education: {
      course: 'Основы Python и веб-разработка на Django',
      dates: 'окт 2022 – июл 2023',
    },
  },
  experience: {
    title: 'Опыт',
    lead: 'От фриланс-ботов в Telegram в 2023 году до голосового ИИ в продакшене.',
    stackLabel: 'Стек',
    show: 'Подробнее',
    hide: 'Свернуть',
    jobs: [
      {
        dates: 'окт 2025 – май 2026',
        kind: 'Продукт',
        role: 'Backend / AI-разработчик',
        org: 'LunaraVox',
        url: LUNARA_URL,
        points: [
          'Участвовал в разработке голосовой ИИ-платформы, где бизнес создаёт виртуальных ассистентов для входящих и исходящих звонков, многоязычных разговоров, записи на встречи и поддержки по базе знаний.',
          'Делал функции создания и настройки голосовых ассистентов, сценарии звонков, отслеживание разговоров, расшифровки и саммари.',
          'Работал над бэкендом, интеграциями, логикой базы данных и поведением ассистентов — переводил задачи бизнеса в техническую реализацию.',
          'Помог автоматизировать рутинные коммуникации, сократить упущенные обращения и ускорить ответы клиентам.',
        ],
        stack: STACK.lunaraJob,
      },
      {
        dates: '2026',
        kind: 'Коллаборация',
        role: 'Backend / разработчик ИИ-интеграций',
        org: 'Голосовой ИИ-ассистент для игрушки',
        points: [
          'Вместе с производителем игрушек встроил голосового ИИ-ассистента в детскую умную игрушку — ребёнок может просто с ней разговаривать.',
          'Построил голосовой пайплайн от начала до конца: запись звука на устройстве, стриминг на бэкенд, распознавание речи, ответ ИИ и синтез голоса обратно в игрушку.',
          'Реализовал обработку аудио чанками, управление сессиями, аутентификацию и устойчивую связь устройства с облаком.',
          'Добавил отладочное логирование аудио, анализировал задержки и повышал стабильность связи устройства с сервером.',
        ],
        stack: STACK.toyJob,
      },
      {
        dates: 'фев 2025 – сен 2025',
        kind: 'Полная занятость',
        role: 'Python AI-разработчик',
        org: 'RDG Smart Solutions',
        points: [
          'Разрабатывал и поддерживал Telegram-ботов с интеграцией GPT-4.',
          'Интегрировал REST API Bitrix24 для автоматического создания и обновления сделок.',
          'Оптимизировал бэкенд-сервисы на Python (FastAPI, Aiogram).',
          'Работал с PostgreSQL для хранения данных и аналитики.',
        ],
        stack: STACK.rdg,
      },
      {
        dates: '2025',
        kind: 'Проект',
        role: 'Разработчик ботов на n8n',
        org: 'Независимый проект',
        points: [
          'Telegram-триггеры с ветвлением IF/Switch по полям JSON и префиксам.',
          'Операции в Postgres с upsert-логикой по chat_id.',
          'Интеграции с REST API Bitrix24: crm.contact.list/add, crm.deal.add, вебхуки.',
          'LangChain-агент на чат-модели OpenAI (gpt-3.5-turbo) с буфером памяти.',
        ],
        stack: STACK.n8n,
      },
      {
        dates: 'мар 2025 – июн 2025',
        kind: 'Частичная занятость',
        role: 'Python-разработчик',
        org: 'Amatto Partner',
        points: [
          'Разрабатывал и тестировал внутренние сервисы на Python.',
          'Интегрировал сторонние API для автоматизации бизнес-процессов.',
          'Поддерживал проекты на Django и FastAPI.',
        ],
        stack: STACK.amatto,
      },
      {
        dates: 'дек 2023 – апр 2024',
        kind: 'Самозанятость',
        role: 'Python-разработчик',
        org: 'Фриланс',
        points: [
          'Парсинг Binance: сбор рыночных данных для ML-команд и крипто-прогнозов.',
          'Telegram-боты для заметок, складского учёта, заказов на гравировку имён и интеграции с Google Docs.',
          'Telegram-бот с ИИ и Bitrix24 для клиентского сервиса: чат на GPT-4, создание сделок, история диалогов.',
        ],
        stack: STACK.freelance,
      },
    ],
  },
  projects: {
    title: 'Проекты',
    lead: 'Для реального бизнеса и реальных пользователей.',
    stackLabel: 'Стек',
    pressTitle: 'В прессе',
    lunara: {
      name: 'LunaraVox',
      tagline: 'Голосовая ИИ-платформа для бизнеса',
      summary:
        'Виртуальные ассистенты, которые принимают и совершают звонки за компанию. Платформа снимает с команды рутинные коммуникации и помогает быстрее отвечать клиентам.',
      doesTitle: 'Что умеют ассистенты',
      does: [
        'Принимают входящие и совершают исходящие звонки',
        'Говорят на нескольких языках',
        'Записывают на встречи',
        'Готовят расшифровки и саммари звонков',
        'Отвечают по базе знаний компании',
      ],
      stack: STACK.lunara,
      site: { label: 'Открыть сайт', href: LUNARA_URL },
      press: [
        {
          source: 'pavelzingan.md',
          title: 'Как молдавский стартап вошёл в элитный AI-альянс Alibaba',
          href: PRESS.alibaba,
        },
      ],
    },
    toy: {
      name: 'Голосовой ИИ-ассистент для игрушки',
      tagline: 'Сделан вместе с производителем игрушек',
      summary:
        'Детская умная игрушка со встроенным голосовым ИИ-ассистентом. Ребёнок говорит — игрушка слушает, думает и отвечает естественным голосом.',
      pipelineTitle: 'Путь одного ответа',
      pipeline: [
        { name: 'Микрофон игрушки', detail: 'Записывает голос ребёнка чанками', carries: 'audio' },
        { name: 'Поток Socket.IO', detail: 'Передаёт звук на бэкенд на Flask', carries: 'audio' },
        { name: 'Речь в текст', detail: 'Распознаёт, что сказал ребёнок', carries: 'text' },
        { name: 'LLM', detail: 'OpenAI или Gemini пишет ответ', carries: 'text' },
        { name: 'Текст в речь', detail: 'Озвучивает ответ естественным голосом', carries: 'audio' },
        { name: 'Динамик игрушки', detail: 'Игрушка отвечает вслух' },
      ],
      legendAudio: 'Звук',
      legendText: 'Текст',
      stack: STACK.toy,
      press: [
        {
          source: 'Logos-Press',
          title: 'Молдавская компания разработала детскую игрушку с искусственным интеллектом',
          href: PRESS.logos,
        },
        {
          source: 'KP.md',
          title: 'Игрушка с ИИ от Lunara AI: как работает и когда выйдет в продажу',
          href: PRESS.kp,
        },
      ],
    },
    moreTitle: 'Другие проекты',
    more: [
      {
        name: 'Telegram ИИ-ассистент с Bitrix24',
        text: 'Автоматизация клиентского сервиса: диалоги на GPT-4, автоматическое создание сделок, история переписки и быстрые кнопки — оплата, менеджер, услуги.',
        stack: STACK.tgBot,
      },
      {
        name: 'Воркфлоу на n8n',
        text: 'Визуальная оркестрация: Telegram-триггеры, маршрутизация по JSON-префиксам, upsert в Postgres по chat_id и LangChain-агент на OpenAI с буфером памяти.',
        stack: STACK.n8nEngine,
      },
      {
        name: 'Парсер рынка Binance',
        text: 'Пайплайн сбора данных для ML-команд: чистые нормализованные исторические и real-time данные рынка для моделей крипто-прогнозов.',
        stack: STACK.binance,
      },
      {
        name: 'Набор операционных ботов',
        text: 'Внутренние инструменты для малого бизнеса, которыми управляют из Telegram: заметки, складской учёт, заказы на гравировку и интеграция с Google Docs.',
        stack: STACK.ops,
      },
    ],
    github: { label: 'Больше кода на GitHub', href: GITHUB_URL },
  },
  skills: {
    title: 'Навыки',
    groups: [
      { name: 'Языки и фреймворки', items: ['Python', 'Flask', 'Django', 'FastAPI', 'Aiogram', 'LangChain'] },
      {
        name: 'ИИ и автоматизация',
        items: ['OpenAI / GPT-4', 'Google Gemini', 'Qwen', 'n8n', 'Промпт-инжиниринг', 'Вебхуки'],
      },
      {
        name: 'Голос и интеграции',
        items: ['Asterisk', 'SIP / VoIP', 'Socket.IO', 'Telegram Bot API', 'REST API', 'Интеграции API'],
      },
      { name: 'Данные и инструменты', items: ['PostgreSQL', 'SQL', 'Git', 'GitHub', 'Postman', 'Отладка систем'] },
      { name: 'Веб', items: ['HTML', 'CSS', 'WordPress'] },
    ],
  },
  contact: {
    title: 'Контакты',
    statement: 'Давайте сделаем что-то полезное.',
    lead: 'Открыт к full-time, контракту и фрилансу: Python-бэкенд, автоматизация и ИИ-интеграции.',
    email: EMAIL,
    copy: 'Скопировать почту',
    copied: 'Почта скопирована',
    copyFailed: 'Не удалось скопировать. Выделите адрес вручную.',
    channels: [
      { label: 'Telegram', ...CHANNELS.telegram },
      { label: 'Телефон', ...CHANNELS.phone },
      { label: 'LinkedIn', ...CHANNELS.linkedin },
      { label: 'GitHub', ...CHANNELS.github },
    ],
  },
  footer: { rights: '© 2026 Нарзулло Зугуров', place: 'Кишинёв, Молдова' },
  newTab: 'откроется в новой вкладке',
};

export const content: Record<Lang, Content> = { en, ru };
