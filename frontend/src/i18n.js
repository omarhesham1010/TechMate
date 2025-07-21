import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// translation resources 
const resources = {
  en: {
    translation: {
      // Brand/technical words should not be translated
      brand: "TechMate",
      headline: "Your Digital Partner for Web, SEO, and More",
      services: {
        section_title: "Our Services",
        website_creation: {
          title: "Website Creation",
          desc: "Modern, responsive websites tailored to your business.",
        },
        seo_enhancement: {
          title: "SEO Enhancement",
          desc: "Boost your online presence and search rankings.",
        },
        presentation_design: {
          title: "Presentation Design",
          desc: "Professional PowerPoint and digital presentations.",
        },
        system_development: {
          title: "System Development",
          desc: "Custom software and full system solutions.",
        },
        campaign_funding: {
          title: "Campaign Funding",
          desc: "Support for launching and funding your marketing campaigns.",
        },
        other_service: {
          title: "Other",
          desc: "Have a different request? Let us know how we can help.",
        },
      },
      contact: "Contact",
      'nav.home': "Home",
      'nav.services': "Services",
      'nav.contact': "Contact",
      toggle_dark_mode: "Toggle dark mode",
      sign_in: "Sign In",
      open_menu: "Open menu",
      hero: {
        headline: "Elevate Your Digital Presence",
        with_brand: "with {{brand}}",
        subheadline: "Professional web development, SEO, presentations, and system building for every business. Fast, modern, and tailored to your needs.",
        cta: "Start Your Project",
      },
      how: {
        section_title: "Why Choose TechMate?",
        fast: { title: "Fast & Reliable", desc: "Get your projects delivered quickly and professionally." },
        personalized: { title: "Personalized Service", desc: "Solutions tailored to your needs and budget." },
        communication: { title: "Real Communication", desc: "Stay in touch with our team throughout your project." },
        trust: { title: "Trust & Security", desc: "Your data and ideas are safe and confidential." },
        campaign_funding: {
          title: "Financement de Campagne",
          desc: "Soutien pour le lancement et le financement de vos campagnes marketing.",
        },
        other_service: {
          title: "Autre",
          desc: "Vous avez une autre demande ? Dites-nous comment nous pouvons vous aider.",
        },
      },
      testimonials: {
        section_title: "What Our Clients Say",
        sarah: "TechMate delivered my website fast and exceeded my expectations! Highly recommended.",
        ahmed: "Professional, responsive, and truly understood my needs. Will use again.",
        omar: "The team was communicative and the results were top-notch. Great value!",
      },
      request: {
        section_title: "Request a Service",
        name: "Your Name",
        company: "Company Name",
        job: "Job Title",
        phone: "Phone Number",
        email: "Your Email",
        select_service: "Select Service",
        budget: "Budget (optional)",
        deadline_label: "Deadline for your request (optional)",
        finish_date: "Finish Date (optional)",
        message: "Tell us about your project...",
        send: "Send Request",
        sent: "Sent!",
        success: "Your request has been sent successfully!",
        error: "Failed to send your request. Please try again later.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "All rights reserved.",
      },
      seo: {
        title: "TechMate | Digital Services Platform",
        description: "Get modern websites, SEO optimization, animated presentations & full systems — tailored to your business. 100% online, flexible pricing, and fast delivery from TechMate.",
        keywords: "web development, SEO services, business websites, tech agency, animated presentations, custom systems, lawyer website, doctor website, entrepreneur tools, TechMate"
      },
      // ...add all other keys used in your UI
    },
  },
  ar: {
    translation: {
      brand: "تك ميت",
      headline: "شريكك الرقمي لتطوير الويب وتحسين محركات البحث والمزيد",
      services: {
        section_title: "خدماتنا",
        website_creation: {
          title: "إنشاء المواقع",
          desc: "مواقع عصرية ومتجاوبة مصممة خصيصًا لعملك.",
        },
        seo_enhancement: {
          title: "تحسين محركات البحث",
          desc: "عزز حضورك على الإنترنت ونتائج البحث.",
        },
        presentation_design: {
          title: "تصميم العروض التقديمية",
          desc: "عروض تقديمية احترافية رقمية وPowerPoint.",
        },
        system_development: {
          title: "تطوير الأنظمة",
          desc: "برمجيات وحلول أنظمة كاملة مخصصة.",
        },
        campaign_funding: {
          title: "تمويل الحملات",
          desc: "دعم لإطلاق وتمويل حملاتك التسويقية.",
        },
        other_service: {
          title: "أخرى",
          desc: "هل لديك طلب مختلف؟ دعنا نعرف كيف يمكننا المساعدة.",
        },
      },
      contact: "اتصل",
      'nav.home': "الرئيسية",
      'nav.services': "الخدمات",
      'nav.contact': "اتصل",
      toggle_dark_mode: "تبديل الوضع الداكن",
      sign_in: "تسجيل الدخول",
      open_menu: "فتح القائمة",
      hero: {
        headline: "ارتقِ بحضورك الرقمي",
        with_brand: "مع {{brand}}",
        subheadline: "تطوير مواقع احترافي، تحسين محركات البحث، عروض تقديمية، وبناء أنظمة لكل الأعمال. سريع، عصري، ومصمم خصيصًا لك.",
        cta: "ابدأ مشروعك",
      },
      how: {
        section_title: "لماذا تختار TechMate؟",
        fast: { title: "سريع وموثوق", desc: "احصل على مشاريعك بسرعة واحترافية." },
        personalized: { title: "خدمة مخصصة", desc: "حلول مصممة حسب احتياجاتك وميزانيتك." },
        communication: { title: "تواصل حقيقي", desc: "ابقَ على تواصل مع فريقنا طوال مشروعك." },
        trust: { title: "ثقة وأمان", desc: "بياناتك وأفكارك آمنة وسرية." },
        campaign_funding: {
          title: "تمويل الحملات",
          desc: "دعم لإطلاق وتمويل حملاتك التسويقية.",
        },
        other_service: {
          title: "أخرى",
          desc: "هل لديك طلب مختلف؟ دعنا نعرف كيف يمكننا المساعدة.",
        },
      },
      testimonials: {
        section_title: "ماذا يقول عملاؤنا",
        sarah: "TechMate أنجزت موقعي بسرعة وتجاوزت توقعاتي! أنصح بها بشدة.",
        ahmed: "احترافيون، متجاوبون، وفهموا احتياجاتي تمامًا. سأتعامل معهم مجددًا.",
        omar: "الفريق كان متواصلًا والنتائج كانت ممتازة. قيمة رائعة!",
      },
      request: {
        section_title: "طلب خدمة",
        name: "اسمك",
        company: "اسم الشركة",
        job: "المسمى الوظيفي",
        phone: "رقم الهاتف",
        email: "بريدك الإلكتروني",
        select_service: "اختر الخدمة",
        budget: "الميزانية (اختياري)",
        deadline_label: "الموعد النهائي لطلبك (اختياري)",
        finish_date: "تاريخ الانتهاء (اختياري)",
        message: "أخبرنا عن مشروعك...",
        send: "إرسال الطلب",
        sent: "تم الإرسال!",
        success: "تم إرسال طلبك بنجاح!",
        error: "فشل في إرسال طلبك. يرجى المحاولة لاحقًا.",
      },
      footer: {
        twitter: "تويتر",
        linkedin: "لينكدإن",
        rights: "جميع الحقوق محفوظة.",
      },
      seo: {
        title: "تك ميت | منصة الخدمات الرقمية",
        description: "احصل على مواقع ويب حديثة، تحسين لمحركات البحث، عروض تقديمية متحركة وأنظمة كاملة — مصممة خصيصًا لعملك. 100٪ عبر الإنترنت، أسعار مرنة، وتسليم سريع من تك ميت.",
        keywords: "تطوير الويب, خدمات تحسين محركات البحث, مواقع ويب للأعمال, وكالة تقنية, عروض تقديمية متحركة, أنظمة مخصصة, موقع ويب لمحامي, موقع ويب لطبيب, أدوات لأصحاب المشاريع, تك ميت"
      },
      // ...add all other keys used in your UI
    },
  },
  fr: {
    translation: {
      brand: "TechMate",
      headline: "Votre partenaire digital pour le web, le SEO et plus encore",
      services: {
        section_title: "Nos services",
        website_creation: {
          title: "Création de site web",
          desc: "Sites web modernes et réactifs adaptés à votre entreprise.",
        },
        seo_enhancement: {
          title: "Optimisation SEO",
          desc: "Améliorez votre présence en ligne et votre classement dans les recherches.",
        },
        presentation_design: {
          title: "Conception de présentations",
          desc: "Présentations PowerPoint et numériques professionnelles.",
        },
        system_development: {
          title: "Développement de systèmes",
          desc: "Logiciels personnalisés et solutions complètes.",
        },
        campaign_funding: {
          title: "Financement de campagnes",
          desc: "Soutien pour le lancement et le financement de vos campagnes marketing.",
        },
        other_service: {
          title: "Autre",
          desc: "Vous avez une autre demande ? Dites-nous comment nous pouvons vous aider.",
        },
      },
      contact: "Contact",
      'nav.home': "Accueil",
      'nav.services': "Services",
      'nav.contact': "Contact",
      toggle_dark_mode: "Activer le mode sombre",
      sign_in: "Se connecter",
      open_menu: "Ouvrir le menu",
      hero: {
        headline: "Élevez votre présence digitale",
        with_brand: "avec {{brand}}",
        subheadline: "Développement web professionnel, SEO, présentations et création de systèmes pour chaque entreprise. Rapide, moderne et adapté à vos besoins.",
        cta: "Commencez votre projet",
      },
      how: {
        section_title: "Pourquoi choisir TechMate ?",
        fast: { title: "Rapide & Fiable", desc: "Recevez vos projets rapidement et professionnellement." },
        personalized: { title: "Service personnalisé", desc: "Des solutions adaptées à vos besoins et à votre budget." },
        communication: { title: "Communication réelle", desc: "Restez en contact avec notre équipe tout au long de votre projet." },
        trust: { title: "Confiance & Sécurité", desc: "Vos données et idées sont sûres et confidentielles." },
        campaign_funding: {
          title: "Financement de Campagne",
          desc: "Soutien pour le lancement et le financement de vos campagnes marketing.",
        },
        other_service: {
          title: "Autre",
          desc: "Vous avez une autre demande ? Dites-nous comment nous pouvons vous aider.",
        },
      },
      testimonials: {
        section_title: "Ce que disent nos clients",
        sarah: "TechMate a livré mon site rapidement et a dépassé mes attentes ! Je recommande vivement.",
        ahmed: "Professionnels, réactifs et ont vraiment compris mes besoins. Je referai appel à eux.",
        omar: "L'équipe était communicative et les résultats étaient excellents. Super rapport qualité/prix !",
      },
      request: {
        section_title: "Demander un service",
        name: "Votre nom",
        company: "Nom de l'entreprise",
        job: "Poste",
        phone: "Numéro de téléphone",
        email: "Votre email",
        select_service: "Sélectionner un service",
        budget: "Budget (optionnel)",
        deadline_label: "Date limite pour votre demande (optionnel)",
        finish_date: "Date de fin (optionnel)",
        message: "Parlez-nous de votre projet...",
        send: "Envoyer la demande",
        sent: "Envoyé !",
        success: "Votre demande a été envoyée avec succès !",
        error: "Échec de l'envoi de votre demande. Veuillez réessayer plus tard.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Tous droits réservés.",
      },
      seo: {
        title: "TechMate | Plateforme de Services Numériques",
        description: "Obtenez des sites web modernes, une optimisation SEO, des présentations animées et des systèmes complets — adaptés à votre entreprise. 100% en ligne, prix flexibles et livraison rapide par TechMate.",
        keywords: "développement web, services SEO, sites web professionnels, agence tech, présentations animées, systèmes sur mesure, site web avocat, site web médecin, outils entrepreneur, TechMate"
      },
      // ...add all other keys used in your UI
    },
  },
  es: {
    translation: {
      brand: "TechMate",
      headline: "Tu socio digital para web, SEO y más",
      services: {
        section_title: "Nuestros servicios",
        website_creation: {
          title: "Creación de sitios web",
          desc: "Sitios web modernos y responsivos adaptados a tu negocio.",
        },
        seo_enhancement: {
          title: "Mejora de SEO",
          desc: "Impulsa tu presencia en línea y tu posicionamiento en búsquedas.",
        },
        presentation_design: {
          title: "Diseño de presentaciones",
          desc: "Presentaciones digitales y PowerPoint profesionales.",
        },
        system_development: {
          title: "Desarrollo de sistemas",
          desc: "Software personalizado y soluciones completas.",
        },
        campaign_funding: {
          title: "Financiación de campañas",
          desc: "Apoyo para lanzar y financiar sus campañas de marketing.",
        },
        other_service: {
          title: "Otro",
          desc: "¿Tiene una solicitud diferente? Háganos saber cómo podemos ayudar.",
        },
      },
      contact: "Contacto",
      'nav.home': "Inicio",
      'nav.services': "Servicios",
      'nav.contact': "Contacto",
      toggle_dark_mode: "Activar modo oscuro",
      sign_in: "Iniciar sesión",
      open_menu: "Abrir menú",
      hero: {
        headline: "Eleva tu presencia digital",
        with_brand: "con {{brand}}",
        subheadline: "Desarrollo web profesional, SEO, presentaciones y creación de sistemas para cualquier negocio. Rápido, moderno y adaptado a tus necesidades.",
        cta: "Comienza tu proyecto",
      },
      how: {
        section_title: "¿Por qué elegir TechMate?",
        fast: { title: "Rápido y fiable", desc: "Recibe tus proyectos de forma rápida y profesional." },
        personalized: { title: "Servicio personalizado", desc: "Soluciones adaptadas a tus necesidades y presupuesto." },
        communication: { title: "Comunicación real", desc: "Mantente en contacto con nuestro equipo durante tu proyecto." },
        trust: { title: "Confianza y seguridad", desc: "Tus datos e ideas están seguros y son confidenciales." },
        campaign_funding: {
          title: "Financiamiento de Campañas",
          desc: "Apoyo para lanzar y financiar sus campañas de marketing.",
        },
        other_service: {
          title: "Otro",
          desc: "¿Tiene una solicitud diferente? Háganos saber cómo podemos ayudar.",
        },
      },
      testimonials: {
        section_title: "Lo que dicen nuestros clientes",
        sarah: "¡TechMate entregó mi sitio web rápido y superó mis expectativas! Muy recomendable.",
        ahmed: "Profesionales, receptivos y realmente entendieron mis necesidades. Volveré a contratarlos.",
        omar: "El equipo fue comunicativo y los resultados fueron excelentes. ¡Gran valor!",
      },
      request: {
        section_title: "Solicitar un servicio",
        name: "Tu nombre",
        company: "Nombre de la empresa",
        job: "Puesto",
        phone: "Número de teléfono",
        email: "Tu correo electrónico",
        select_service: "Seleccionar servicio",
        budget: "Presupuesto (opcional)",
        deadline_label: "Fecha límite para tu solicitud (opcional)",
        finish_date: "Fecha de finalización (opcional)",
        message: "Cuéntanos sobre tu proyecto...",
        send: "Enviar solicitud",
        sent: "¡Enviado!",
        success: "¡Tu solicitud ha sido enviada con éxito!",
        error: "No se pudo enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Todos los derechos reservados.",
      },
      seo: {
        title: "TechMate | Plataforma de Servicios Digitales",
        description: "Obtenga sitios web modernos, optimización SEO, presentaciones animadas y sistemas completos, adaptados a su negocio. 100% en línea, precios flexibles y entrega rápida de TechMate.",
        keywords: "desarrollo web, servicios SEO, sitios web para empresas, agencia de tecnología, presentaciones animadas, sistemas a medida, sitio web para abogados, sitio web para médicos, herramientas para emprendedores, TechMate"
      },
      // ...add all other keys used in your UI
    },
  },
  zh: {
    translation: {
      brand: "泰克梅特",
      headline: "您的数字合作伙伴，提供网站、SEO等服务",
      services: {
        section_title: "我们的服务",
        website_creation: { title: "网站建设", desc: "为您的企业量身定制现代响应式网站。" },
        seo_enhancement: { title: "SEO优化", desc: "提升您的在线影响力和搜索排名。" },
        presentation_design: { title: "演示设计", desc: "专业的PPT和数字演示。" },
        system_development: { title: "系统开发", desc: "定制软件和完整系统解决方案。" },
        campaign_funding: { title: "活动筹资", desc: "支持启动和资助您的营销活动。" },
        other_service: {
          title: "其他",
          desc: "有不同的要求吗？让我们知道我们如何能提供帮助。"
        },
      },
      contact: "联系",
      'nav.home': "首页",
      'nav.services': "服务",
      'nav.contact': "联系",
      toggle_dark_mode: "切换夜间模式",
      sign_in: "登录",
      open_menu: "打开菜单",
      hero: {
        headline: "提升您的数字影响力",
        with_brand: "与{{brand}}",
        subheadline: "专业网站开发、SEO、演示和系统建设，适合每个企业。快速、现代、量身定制。",
        cta: "开始您的项目",
      },
      how: {
        section_title: "为什么选择TechMate？",
        fast: { title: "快速可靠", desc: "快速专业地交付您的项目。" },
        personalized: { title: "个性化服务", desc: "根据您的需求和预算量身定制解决方案。" },
        communication: { title: "真实沟通", desc: "在整个项目期间与我们的团队保持联系。" },
        trust: { title: "信任与安全", desc: "您的数据和想法安全保密。" },
        campaign_funding: {
          title: "活动资金",
          desc: "支持启动和资助您的营销活动。"
        },
        other_service: {
          title: "其他",
          desc: "有不同的要求吗？让我们知道我们如何能提供帮助。"
        },
      },
      testimonials: {
        section_title: "客户评价",
        sarah: "TechMate快速交付了我的网站，超出了我的预期！强烈推荐。",
        ahmed: "专业、响应迅速，真正理解了我的需求。还会再合作。",
        omar: "团队沟通顺畅，结果非常棒。物超所值！",
      },
      request: {
        section_title: "请求服务",
        name: "您的姓名",
        company: "公司名称",
        job: "职位",
        phone: "电话号码",
        email: "您的邮箱",
        select_service: "选择服务",
        budget: "预算（可选）",
        deadline_label: "请求截止日期（可选）",
        finish_date: "完成日期（可选）",
        message: "请描述您的项目...",
        send: "发送请求",
        sent: "已发送！",
        success: "您的请求已成功发送！",
        error: "请求发送失败，请稍后再试。",
      },
      footer: {
        twitter: "推特",
        linkedin: "领英",
        rights: "版权所有。",
      },
      seo: {
        title: "泰克梅特 | 数字服务平台",
        description: "从泰克梅特获取为您的业务量身定制的现代化网站、SEO优化、动画演示和完整系统。100%在线，价格灵活，交付快捷。",
        keywords: "网站开发, SEO服务, 企业网站, 科技机构, 动画演示, 定制系统, 律师网站, 医生网站, 创业工具, 泰克梅特"
      },
    },
  },
  ru: {
    translation: {
      brand: "ТекМейт",
      headline: "Ваш цифровой партнер для веба, SEO и многого другого",
      services: {
        section_title: "Наши услуги",
        website_creation: { title: "Создание сайтов", desc: "Современные адаптивные сайты для вашего бизнеса." },
        seo_enhancement: { title: "SEO-оптимизация", desc: "Улучшите свое онлайн-присутствие и позиции в поиске." },
        presentation_design: { title: "Дизайн презентаций", desc: "Профессиональные презентации и PowerPoint." },
        system_development: { title: "Разработка систем", desc: "Индивидуальное ПО и комплексные решения." },
        campaign_funding: { title: "Финансирование кампаний", desc: "Поддержка для запуска и финансирования ваших маркетинговых кампаний." },
        other_service: {
          title: "Другое",
          desc: "У вас есть другой запрос? Дайте нам знать, как мы можем помочь.",
        },
      },
      contact: "Контакт",
      'nav.home': "Главная",
      'nav.services': "Услуги",
      'nav.contact': "Контакт",
      toggle_dark_mode: "Переключить темный режим",
      sign_in: "Войти",
      open_menu: "Открыть меню",
      hero: {
        headline: "Поднимите свое цифровое присутствие",
        with_brand: "с {{brand}}",
        subheadline: "Профессиональная разработка сайтов, SEO, презентации и системы для любого бизнеса. Быстро, современно, индивидуально.",
        cta: "Начать проект",
      },
      how: {
        section_title: "Почему выбирают TechMate?",
        fast: { title: "Быстро и надежно", desc: "Ваши проекты быстро и профессионально." },
        personalized: { title: "Индивидуальный подход", desc: "Решения под ваши задачи и бюджет." },
        communication: { title: "Настоящее общение", desc: "Оставайтесь на связи с нашей командой." },
        trust: { title: "Доверие и безопасность", desc: "Ваши данные и идеи в безопасности." },
        campaign_funding: {
          title: "Финансирование кампаний",
          desc: "Поддержка для запуска и финансирования ваших маркетинговых кампаний.",
        },
        other_service: {
          title: "Другое",
          desc: "У вас есть другой запрос? Дайте нам знать, как мы можем помочь.",
        },
      },
      testimonials: {
        section_title: "Отзывы клиентов",
        sarah: "TechMate быстро сделал мой сайт и превзошел ожидания! Рекомендую.",
        ahmed: "Professionell, быстро, поняли мои задачи. Буду обращаться еще.",
        omar: "Команда была на связи, результат отличный. Отличная цена!",
      },
      request: {
        section_title: "Запросить услугу",
        name: "Ваше имя",
        company: "Название компании",
        job: "Должность",
        phone: "Телефон",
        email: "Ваш email",
        select_service: "Выбрать услугу",
        budget: "Бюджет (необязательно)",
        deadline_label: "Срок выполнения (необязательно)",
        finish_date: "Дата завершения (необязательно)",
        message: "Расскажите о вашем проекте...",
        send: "Отправить запрос",
        sent: "Отправлено!",
        success: "Ваш запрос успешно отправлен!",
        error: "Не удалось отправить запрос. Попробуйте позже.",
      },
      footer: {
        twitter: "Твиттер",
        linkedin: "Линкедин",
        rights: "Все права защищены.",
      },
      seo: {
        title: "ТекМейт | Платформа цифровых услуг",
        description: "Получите современные веб-сайты, SEO-оптимизацию, анимированные презентации и полные системы, адаптированные для вашего бизнеса. 100% онлайн, гибкие цены и быстрая доставка от ТекМейт.",
        keywords: "веб-разработка, SEO-услуги, бизнес-сайты, технологическое агентство, анимированные презентации, пользовательские системы, сайт для юриста, сайт для врача, инструменты для предпринимателей, ТекМейт"
      },
    },
  },
  de: {
    translation: {
      brand: "TechMate",
      headline: "Ihr digitaler Partner für Web, SEO und mehr",
      services: {
        section_title: "Unsere Dienstleistungen",
        website_creation: { title: "Webseitenerstellung", desc: "Moderne, responsive Websites für Ihr Unternehmen." },
        seo_enhancement: { title: "SEO-Optimierung", desc: "Verbessern Sie Ihre Online-Präsenz und Ihr Suchranking." },
        presentation_design: { title: "Präsentationsdesign", desc: "Professionelle PowerPoint- und Digitalpräsentationen." },
        system_development: { title: "Systementwicklung", desc: "Individuelle Software und Komplettlösungen." },
        campaign_funding: { title: "Kampagnenfinanzierung", desc: "Unterstützung für digitale Inhalte und Kampagnenstarts." },
        other_service: {
          title: "Sonstiges",
          desc: "Haben Sie eine andere Anfrage? Lassen Sie uns wissen, wie wir helfen können.",
        },
      },
      contact: "Kontakt",
      'nav.home': "Startseite",
      'nav.services': "Dienstleistungen",
      'nav.contact': "Kontakt",
      toggle_dark_mode: "Dunkelmodus umschalten",
      sign_in: "Anmelden",
      open_menu: "Menü öffnen",
      hero: {
        headline: "Steigern Sie Ihre digitale Präsenz",
        with_brand: "mit {{brand}}",
        subheadline: "Professionelle Webentwicklung, SEO, Präsentationen und Systembau für jedes Unternehmen. Schnell, modern und maßgeschneidert.",
        cta: "Projekt starten",
      },
      how: {
        section_title: "Warum TechMate wählen?",
        fast: { title: "Schnell & Zuverlässig", desc: "Erhalten Sie Ihre Projekte schnell und professionell." },
        personalized: { title: "Personalisierter Service", desc: "Lösungen, die auf Ihre Bedürfnisse und Ihr Budget zugeschnitten sind." },
        communication: { title: "Echte Kommunikation", desc: "Bleiben Sie während Ihres Projekts mit unserem Team in Kontakt." },
        trust: { title: "Vertrauen & Sicherheit", desc: "Ihre Daten und Ideen sind sicher und vertraulich." },
        campaign_funding: {
          title: "Kampagnenfinanzierung",
          desc: "Unterstützung für digitale Inhalte und Kampagnenstarts.",
        },
        other_service: {
          title: "Sonstiges",
          desc: "Haben Sie eine andere Anfrage? Lassen Sie uns wissen, wie wir helfen können.",
        },
      },
      testimonials: {
        section_title: "Was unsere Kunden sagen",
        sarah: "TechMate hat meine Website schnell geliefert und meine Erwartungen übertroffen! Sehr zu empfehlen.",
        ahmed: "Professionell, reaktionsschnell und hat meine Bedürfnisse verstanden. Ich werde wiederkommen.",
        omar: "Das Team war kommunikativ und die Ergebnisse waren erstklassig. Tolles Preis-Leistungs-Verhältnis!",
      },
      request: {
        section_title: "Dienstleistung anfragen",
        name: "Ihr Name",
        company: "Firmenname",
        job: "Berufsbezeichnung",
        phone: "Telefonnummer",
        email: "Ihre E-Mail",
        select_service: "Dienstleistung auswählen",
        budget: "Budget (optional)",
        deadline_label: "Frist für Ihre Anfrage (optional)",
        finish_date: "Fertigstellungsdatum (optional)",
        message: "Erzählen Sie uns von Ihrem Projekt...",
        send: "Anfrage senden",
        sent: "Gesendet!",
        success: "Ihre Anfrage wurde erfolgreich gesendet!",
        error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Alle Rechte vorbehalten.",
      },
      seo: {
        title: "TechMate | Plattform für digitale Dienstleistungen",
        description: "Erhalten Sie moderne Websites, SEO-Optimierung, animierte Präsentationen und vollständige Systeme – zugeschnitten auf Ihr Unternehmen. 100 % online, flexible Preise und schnelle Lieferung von TechMate.",
        keywords: "Webentwicklung, SEO-Dienstleistungen, Unternehmenswebsites, Technologieagentur, animierte Präsentationen, benutzerdefinierte Systeme, Anwaltswebsite, Arztwebsite, Unternehmer-Tools, TechMate"
      },
    },
  },
  tr: {
    translation: {
      brand: "TekMate",
      headline: "Web, SEO ve daha fazlası için sayısal ortaklınız",
      services: {
        section_title: "Hizmetlerimiz",
        website_creation: { title: "Web sitesi oluşturma", desc: "İşletmenize özel modern yanıtlayıcı web siteleri." },
        seo_enhancement: { title: "SEO iyileştirme", desc: "Çevrimiçi görünürlüğünüzü ve arama sonuçlarınızı artırın." },
        presentation_design: { title: "Sunu tasarımı", desc: "Profesyonel PowerPoint ve dijital sunumlar." },
        system_development: { title: "Sistem geliştirme", desc: "Özel yazılım ve tam sistem çözümleri." },
        campaign_funding: { title: "Kampanya finansmanı", desc: "Dijital içerik ve kampanyaları destekleyin." },
        other_service: {
          title: "Diğer",
          desc: "Farklı bir talebiniz mi var? Nasıl yardımcı olabileceğimizi bize bildirin.",
        },
      },
      contact: "İletişim",
      'nav.home': "Ana Sayfa",
      'nav.services': "Hizmetler",
      'nav.contact': "İletişim",
      toggle_dark_mode: "Karanlık modu değiştir",
      sign_in: "Giriş yap",
      open_menu: "Menüyü aç",
      hero: {
        headline: "Sayısal görünürlüğünüzü artırın",
        with_brand: "{{brand}} ile",
        subheadline: "Her işletme için profesyonel web geliştirme, SEO, sunumlar ve sistemler. Hızlı, modern ve özelleştirilmiş.",
        cta: "Projenizi başlatın",
      },
      how: {
        section_title: "Neden TechMate\'i seçersiniz?",
        fast: { title: "Hızlı ve Güvenilir", desc: "Projenizi hızlı ve profesyonel olarak alın." },
        personalized: { title: "Özel hizmet", desc: "İhtiyaçlarınıza ve bütçenize göre çözümler." },
        communication: { title: "Gerçek iletişim", desc: "Projeniz boyunca ekibimizle iletişimde kalın." },
        trust: { title: "Güven ve Güvenliği", desc: "Verileriniz ve fikirleriniz güvenli ve gizli." },
        campaign_funding: {
          title: "Kampanya Fonlaması",
          desc: "Pazarlama kampanyalarınızı başlatma ve finanse etme desteği.",
        },
        other_service: {
          title: "Diğer",
          desc: "Farklı bir talebiniz mi var? Nasıl yardımcı olabileceğimizi bize bildirin.",
        },
      },
      testimonials: {
        section_title: "Müşterilerimizin söylediği",
        sarah: "TechMate hızlı bir şekilde web sitenizi teslim etti ve beklentilerimi aştı! Çok tavsiye ederim.",
        ahmed: "Profesyonel, hızlı ve gerçekten ihtiyaçlarımı anladı. Onlarla tekrar çalışacağım.",
        omar: "Ekip iletişimliydi ve sonuçlar harikaydı. Harika değer!",
      },
      request: {
        section_title: "Hizmet isteği",
        name: "Adınız",
        company: "Şirket adı",
        job: "Pozisyon",
        phone: "Telefon numarası",
        email: "E-posta adresiniz",
        select_service: "Hizmet seçin",
        budget: "Bütçe (isteğe bağlı)",
        deadline_label: "İsteğinizin son tarihi (isteğe bağlı)",
        finish_date: "Bitiş tarihi (isteğe bağlı)",
        message: "Projenizi anlatın...",
        send: "İsteği gönder",
        sent: "Gönderildi!",
        success: "İsteğiniz başarıyla gönderildi!",
        error: "İsteğiniz gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Tüm hakları saklıdır.",
      },
      seo: {
        title: "TechMate | Dijital Hizmetler Platformu",
        description: "İşinize özel modern web siteleri, SEO optimizasyonu, animasyonlu sunumlar ve tam sistemler edinin. %100 çevrimiçi, esnek fiyatlandırma ve TechMate'ten hızlı teslimat.",
        keywords: "web geliştirme, SEO hizmetleri, kurumsal web siteleri, teknoloji ajansı, animasyonlu sunumlar, özel sistemler, avukat web sitesi, doktor web sitesi, girişimci araçları, TechMate"
      },
    },
  },
  he: {
    translation: {
      brand: "טקמייט",
      headline: "שיתוף דיגיטלי עם חבר מוביל באתרים, SEO ועוד",
      services: {
        section_title: "שירותינו",
        website_creation: { title: "יצירת אתרים", desc: "אתרים מודרניים ותגובתיים מיושנים לעסקתך." },
        seo_enhancement: { title: "שיפור SEO", desc: "הגדל את הזמינות הדיגיטלית שלך ואת מיקומך בחיפושים." },
        presentation_design: { title: "עיצוב תיבות", desc: "הצגות PowerPoint והצגות דיגיטליות מקצועיות." },
        system_development: { title: "פיתוח מערכות", desc: "תוכנה מותאמת ופתרונות מערכת מלאים." },
        campaign_funding: { title: "הקמת ממשקלות", desc: "תמיכה בתוכן דיגיטלי והפצת ממשקלות." },
        other_service: {
          title: "אחר",
          desc: "יש לך בקשה אחרת? ספר לנו איך אנחנו יכולים לעזור.",
        },
      },
      contact: "יצירת קשר",
      'nav.home': "דף הבית",
      'nav.services': "שירות",
      'nav.contact': "יצירת קשר",
      toggle_dark_mode: "החלף מצב כהה",
      sign_in: "התחברות",
      open_menu: "פתח תפריט",
      hero: {
        headline: "הגבר זמינות דיגיטלית שלך",
        with_brand: "עם {{brand}}",
        subheadline: "פיתוח אתרים מקצועי, SEO, הצגות ובניית מערכות לכל עסקה. מהיר, מודרני ומיושן לך.",
        cta: "התחל פרויקט שלך",
      },
      how: {
        section_title: "למה בחרת TechMate?",
        fast: { title: "מהיר ומוביל", desc: "קבלו פרויקטיכם מהיר ובצוות." },
        personalized: { title: "שירות מותאם", desc: "פתרונות מותאמים לצרכיכם ולתקציב שלך." },
        communication: { title: "תקשורת אמיתית", desc: "הישארו בקשר עם הצוות שלנו במהלך הפרויקט." },
        trust: { title: "סמכות ובטיחות", desc: "נתוניכם והרעיונות שלך בטוחים וסודיים." },
        campaign_funding: {
          title: "הקמת ממשקלות",
          desc: "תמיכה בתוכן דיגיטלי והפצת ממשקלות.",
        },
        other_service: {
          title: "אחר",
          desc: "יש לך בקשה אחרת? ספר לנו איך אנחנו יכולים לעזור.",
        },
      },
      testimonials: {
        section_title: "מה שלקוחותינו מגיבים",
        sarah: "TechMate סירב באתר שלי מהיר והפכה מעל תיאוריותי! מומלץ בחום.",
        ahmed: "מקצועיים, תגובתיים ובאמת הבנו את הצרכיכם שלי. אני אחזור אליהם.",
        omar: "הצוות היה בקשר והתוצאות היו מצוינות. ערך מעולה!",
      },
      request: {
        section_title: "בקשת שירות",
        name: "שמך",
        company: "שם החברה",
        job: "תפקיד",
        phone: "מספר טלפון",
        email: "דואר אלקטרוני שלך",
        select_service: "בחר שירות",
        budget: "תקציב (אופציונלי)",
        deadline_label: "תאריך סיום (אופציונלי)",
        finish_date: "תאריך סיום (אופציונלי)",
        message: "תספר לנו על פרויקט שלך...",
        send: "שלח בקשה",
        sent: "נשלח!",
        success: "הבקשה שלך נשלחה בהצלחה!",
        error: "לא ניתן לשלוח את הבקשה שלך. אנא נסה שוב מאוחר יותר.",
      },
      footer: {
        twitter: "טוויטר",
        linkedin: "לינקדאין",
        rights: "כל הזכויות שמורות.",
      },
      seo: {
        title: "טק-מייט | פלטפורמת שירותים דיגיטליים",
        description: "קבלו אתרים מודרניים, אופטימיזציה למנועי חיפוש, מצגות אנימציה ומערכות מלאות - המותאמות לעסק שלכם. 100% באינטרנט, תמחור גמיש ומשלוח מהיר מטק-מייט.",
        keywords: "פיתוח אתרים, שירותי SEO, אתרים לעסקים, סוכנות טכנולוגית, מצגות אנימציה, מערכות מותאמות אישית, אתר לעורך דין, אתר לרופא, כלים ליזמים, טק-מייט"
      },
    },
  },
  fa: {
    translation: {
      brand: "تک‌میت",
      headline: "شریک دیجیتالی برای وب، SEO و بیشتر",
      services: {
        section_title: "خدمات ما",
        website_creation: { title: "ساخت وب‌سایت", desc: "وب‌سایت‌های مدرن و پاسخگو برای کسب‌وکار شما." },
        seo_enhancement: { title: "بهینه‌سازی SEO", desc: "حضور دیجیتالی و رتبه‌بندی جستجویی خود را بهبود دهید." },
        presentation_design: { title: "طراحی ارائه", desc: "ارائه‌های احترافی و عددی PowerPoint." },
        system_development: { title: "توسعه سیستم", desc: "نرم‌افزار مخصوص و راه‌حل‌های کامل." },
        campaign_funding: { title: "مالیات کمپین", desc: "پشتیبانی از محتوای دیجیتالی و راه‌اندازی کمپین." },
        other_service: {
          title: "سایر",
          desc: "درخواست دیگری دارید؟ به ما بگویید چگونه می‌توانیم کمک کنیم.",
        },
      },
      contact: "تماس",
      'nav.home': "خانه",
      'nav.services': "خدمات",
      'nav.contact': "تماس",
      toggle_dark_mode: "تغییر مود تاریک",
      sign_in: "ورود",
      open_menu: "باز کردن منو",
      hero: {
        headline: "ارتقا دهید حضور دیجیتالی خود را",
        with_brand: "با {{brand}}",
        subheadline: "توسعه وب احترافی، SEO، ارائه و ساخت سیستم برای هر کسب‌وکار. سریع، مدرن و طراحی شده برای شما.",
        cta: "پروژه خود را شروع کنید",
      },
      how: {
        section_title: "چرا TechMate را انتخاب کنید؟",
        fast: { title: "سریع و قابل اعتماد", desc: "پروژه‌های خود را به سرعت و احترافی دریافت کنید." },
        personalized: { title: "خدمت مخصوص", desc: "راه‌حل‌هایی که بر اساس نیازها و بودجه شما طراحی شده‌اند." },
        communication: { title: "تماس واقعی", desc: "در طول پروژه با تیم ما در ارتباط باشید." },
        trust: { title: "امیدواری و امان", desc: "داده‌های و ایده‌های شما امن و خصوصی هستند." },
        campaign_funding: {
          title: "مالیات کمپین",
          desc: "پشتیبانی از محتوای دیجیتالی و راه‌اندازی کمپین.",
        },
        other_service: {
          title: "سایر",
          desc: "درخواست دیگری دارید؟ به ما بگویید چگونه می‌توانیم کمک کنیم.",
        },
      },
      testimonials: {
        section_title: "چیزی که مشتریان ما می‌گویند",
        sarah: "TechMate سایت من را به سرعت تحویل داد و امیدواری‌هایم را تجاوز کرد! توصیه می‌کنم.",
        ahmed: "متخصص، پاسخگو و واقعاً درک کردن نیازهایم. من دوباره با آنها کار خواهم کرد.",
        omar: "تیم در ارتباط بود و نتایج عالی بود. یک ارزش بسیار خوب!",
      },
      request: {
        section_title: "درخواست خدمت",
        name: "نام شما",
        company: "نام شرکت",
        job: "پست",
        phone: "شماره تماس",
        email: "پست الکترونیکی شما",
        select_service: "انتخاب خدمت",
        budget: "بودجه (اختیاری)",
        deadline_label: "تاریخ سررسید برای درخواست شما (اختیاری)",
        finish_date: "تاریخ پایان (اختیاری)",
        message: "درباره پروژه خود به ما بگویید...",
        send: "درخواست ارسال کنید",
        sent: "ارسال شد!",
        success: "درخواست شما با موفقیت ارسال شد!",
        error: "درخواست شما ارسال نشد. لطفاً دوباره تلاش کنید.",
      },
      footer: {
        twitter: "تویتر",
        linkedin: "لینکدإن",
        rights: "تمام حقوق محفوظ است.",
      },
      seo: {
        title: "تک‌میت | پلتفرم خدمات دیجیتال",
        description: "وب‌سایت‌های مدرن، بهینه‌سازی سئو، ارائه‌های متحرک و سیستم‌های کامل متناسب با کسب‌وکار خود را دریافت کنید. 100% آنلاین، قیمت‌گذاری انعطاف‌پذیر و تحویل سریع از تک‌میت.",
        keywords: "توسعه وب، خدمات سئو، وب‌سایت‌های تجاری، آژانس فناوری، ارائه‌های متحرک، سیستم‌های سفارشی، وب‌سایت وکلا، وب‌سایت پزشکان، ابزارهای کارآفرینی، تک‌میت"
      },
    },
  },
  ur: {
    translation: {
      brand: "ٹیکمیٹ",
      headline: "آپ کا ڈیجیٹل پارٹنر ویب، SEO اور مزید کے لیے",
      services: {
        section_title: "ہماری خدمات",
        website_creation: { title: "ویب سائٹ بنانا", desc: "آپ کے کاروبار کے لیے جدید، جوابی ویب سائٹس۔" },
        seo_enhancement: { title: "SEO میں بہتری", desc: "اپنی آن لائن موجودگی اور سرچ رینکنگ کو بہتر بنائیں۔" },
        presentation_design: { title: "پریزنٹیشن ڈیزائن", desc: "پروفیشنل پاورپوائنٹ اور ڈیجیٹل پریزنٹیشنز۔" },
        system_development: { title: "سسٹم ڈیولپمنٹ", desc: "کسٹم سافٹ ویئر اور مکمل سسٹم حل۔" },
        campaign_funding: { title: "مہم کی فنڈنگ", desc: "ڈیجیٹل مواد اور مہم کے آغاز کے لیے سپورٹ۔" },
        other_service: {
          title: "دیگر",
          desc: "کیا آپ کی کوئی مختلف درخواست ہے؟ ہمیں بتائیں کہ ہم کس طرح مدد کرسکتے ہیں۔"
        },
      },
      contact: "رابطہ",
      'nav.home': "ہوم",
      'nav.services': "خدمات",
      'nav.contact': "رابطہ",
      toggle_dark_mode: "ڈارک موڈ تبدیل کریں",
      sign_in: "سائن ان",
      open_menu: "مینو کھولیں",
      hero: {
        headline: "اپنی ڈیجیٹل موجودگی کو بڑھائیں",
        with_brand: "{{brand}} کے ساتھ",
        subheadline: "پروفیشنل ویب ڈویلپمنٹ، SEO، پریزنٹیشنز، اور سسٹم بلڈنگ ہر کاروبار کے لیے۔ تیز، جدید، اور آپ کی ضروریات کے مطابق۔",
        cta: "اپنا پروجیکٹ شروع کریں",
      },
      how: {
        section_title: "TechMate کیوں منتخب کریں؟",
        fast: { title: "تیز اور قابل اعتماد", desc: "اپنے پروجیکٹس تیزی سے اور پروفیشنل انداز میں حاصل کریں۔" },
        personalized: { title: "خدمة مخصوص", desc: "حلول مصمم حسب احتياجاتك وميزانيتك." },
        communication: { title: "تواصل حقيقي", desc: "ابقَ على تواصل مع فريقنا طوال مشروعك." },
        trust: { title: "اعتماد اور سیکیورٹی", desc: "بياناتك وأفكارك آمنة وسرية." },
        campaign_funding: {
          title: "مہم کی فنڈنگ",
          desc: "آپ کی مارکیٹنگ مہموں کو شروع کرنے اور فنڈ کرنے کے لئے معاونت۔"
        },
        other_service: {
          title: "سایر",
          desc: "درخواست دیگری دارید؟ به ما بگویید چگونه می‌توانیم کمک کنیم.",
        },
      },
      testimonials: {
        section_title: "ہمارے کلائنٹس کیا کہتے ہیں",
        sarah: "TechMate نے میری ویب سائٹ تیزی سے بنائی اور میری توقعات سے بڑھ کر کام کیا! بہت سفارش کروں گا۔",
        ahmed: "پروفیشنل، جوابدہ، اور واقعی میری ضروریات کو سمجھا۔ دوبارہ استعمال کروں گا۔",
        omar: "الفريق كان متواصلًا والنتائج كانت ممتازة. قيمة رائعة!"
      },
      request: {
        section_title: "سروس کی درخواست کریں",
        name: "آپ کا نام",
        company: "کمپنی کا نام",
        job: "عہدہ",
        phone: "فون نمبر",
        email: "آپ کا ای میل",
        select_service: "سروس منتخب کریں",
        budget: "الميزانية (اختياري)",
        deadline_label: "آپ کی درخواست کے لیے آخری تاریخ (اختياري)",
        finish_date: "ختم ہونے کی تاریخ (اختياري)",
        message: "اپنے پروجیکٹ کے بارے میں بتائیں...",
        send: "درخواست بھیجیں",
        sent: "بھیج دیا گیا!",
        success: "تم آپ کی درخواست کامیابی سے بھیج دی گئی ہے!",
        error: "آپ کی درخواست بھیجنے میں ناکام۔ براہ کرم بعد میں کوشش کریں۔",
      },
      footer: {
        twitter: "ٹوئٹر",
        linkedin: "لنکڈ اِن",
        rights: "جملہ حقوق محفوظ ہیں۔",
      },
      seo: {
        title: "ٹیک میٹ | ڈیجیٹل سروسز پلیٹ فارم",
        description: "جدید ویب سائٹس، SEO آپٹیمائزیشن، اینیمیٹڈ پریزنٹیشنز اور مکمل سسٹمز حاصل کریں — جو آپ کے کاروبار کے لیے تیار کیے گئے ہیں۔ 100% آن لائن، لچکدار قیمتوں کا تعین، اور ٹیک میٹ سے تیز ترسیل۔",
        keywords: "ویب ڈویلپment, SEO سروسز, بزنس ویب سائٹس, ٹیک ایجنسی, اینیمیٹڈ پریزنٹیشنز, کسٹم سسٹمز, وکیل کی ویب سائٹ, ڈاکٹر کی ویب سائٹ, کاروباری اوزار, ٹیک میٹ"
      },
    },
  },
  hi: {
    translation: {
      brand: "टेकमेट",
      headline: "वेब, SEO और अधिक के लिए आपका डिजिटल पार्टनर",
      services: {
        section_title: "हमारी सेवाएँ",
        website_creation: { title: "वेबसाइट निर्माण", desc: "आपके व्यवसाय के लिए आधुनिक, उत्तरदायी वेबसाइटें।" },
        seo_enhancement: { title: "SEO सुधार", desc: "अपनी ऑनलाइन उपस्थिति और खोज रैंकिंग बढ़ाएँ।" },
        presentation_design: { title: "प्रस्तुति डिज़ाइन", desc: "पेशेवर पावरपॉइंट और डिजिटल प्रस्तुतियाँ।" },
        system_development: { title: "सिस्टम विकास", desc: "कस्टम सॉफ़्टवेयर और पूर्ण सिस्टम समाधान।" },
        campaign_funding: { title: "अभियान फंडिंग", desc: "डिजिटल सामग्री और अभियान लॉन्च के लिए समर्थन।" },
        other_service: {
          title: "अन्य",
          desc: "क्या आपका कोई अलग अनुरोध है? हमें बताएं कि हम कैसे मदद कर सकते हैं।"
        },
      },
      contact: "संपर्क करें",
      'nav.home': "होम",
      'nav.services': "सेवाएँ",
      'nav.contact': "संपर्क",
      toggle_dark_mode: "डार्क मोड टॉगल करें",
      sign_in: "साइन इन",
      open_menu: "मेनू खोलें",
      hero: {
        headline: "अपनी डिजिटल उपस्थिति बढ़ाएँ",
        with_brand: "{{brand}} के साथ",
        subheadline: "पेशेवर वेब विकास, SEO, प्रस्तुतियाँ, और सिस्टम निर्माण हर व्यवसाय के लिए। तेज़, आधुनिक, और आपकी आवश्यकताओं के अनुसार।",
        cta: "अपना प्रोजेक्ट शुरू करें",
      },
      how: {
        section_title: "गुणवत्ता क्यों चुनें?",
        fast: { title: "तेज़ और विश्वसनीय", desc: "अपने प्रोजेक्ट्स तेज़ी से और पेशेवर रूप से प्राप्त करें।" },
        personalized: { title: "व्यक्तिगत सेवा", desc: "आपकी आवश्यकताओं और बजट के अनुसार समाधान।" },
        communication: { title: "वास्तविक संचार", desc: "अपने प्रोजेक्ट के दौरान हमारी टीम के साथ संपर्क में रहें।" },
        trust: { title: "विश्वास और सुरक्षा", desc: "आपका डेटा और विचार सुरक्षित और गोपनीय हैं।" },
        campaign_funding: {
          title: "अभियान अनुदान",
          desc: "आपके विपणन अभियानों को लॉन्च करने और अनुदान देने के लिए समर्थन।"
        },
        other_service: {
          title: "अन्य",
          desc: "क्या आपका कोई अलग अनुरोध है? हमें बताएं कि हम कैसे मदद कर सकते हैं।"
        },
      },
      testimonials: {
        section_title: "हमारे ग्राहक क्या कहते हैं",
        sarah: "TechMate ने मेरी वेबसाइट जल्दी बनाई और मेरी अपेक्षाओं से अधिक किया! अत्यधिक अनुशंसा करता हूँ।",
        ahmed: "पेशेवर, उत्तरदायी, और वास्तव में मेरी आवश्यकताओं को समझा। फिर से उपयोग करूँगा।",
        omar: "टीम ने संपर्क बनाए रखा और परिणाम शानदार थे। शानदार मूल्य!"
      },
      request: {
        section_title: "सेवा का अनुरोध करें",
        name: "आपका नाम",
        company: "कंपनी का नाम",
        job: "पद",
        phone: "फ़ोन नंबर",
        email: "आपका ईमेल",
        select_service: "सेवा चुनें",
        budget: "बजट (वैकल्पिक)",
        deadline_label: "आपके अनुरोध के लिए अंतिम तिथि (वैकल्पिक)",
        finish_date: "समाप्ति तिथि (वैकल्पिक)",
        message: "अपने प्रोजेक्ट के बारे में बताएं...",
        send: "अनुरोध भेजें",
        sent: "भेजा गया!",
        success: "आपका अनुरोध सफलतापूर्वक भेजा गया है!",
        error: "आपका अनुरोध भेजने में विफल। कृपया बाद में प्रयास करें।",
      },
      footer: {
        twitter: "ट्विटर",
        linkedin: "लिंक्डइन",
        rights: "सर्वाधिकार सुरक्षित।",
      },
      seo: {
        title: "टेकमेट | डिजिटल सेवा मंच",
        description: "आधुनिक वेबसाइट, एसईओ अनुकूलन, एनिमेटेड प्रस्तुतियाँ और पूर्ण सिस्टम प्राप्त करें - आपके व्यवसाय के अनुरूप। 100% ऑनलाइन, लचीला मूल्य निर्धारण, और टेकमेट से तेज़ डिलीवरी।",
        keywords: "वेब डेवलपमेंट, एसईओ सेवाएं, बिजनेस वेबसाइट, टेक एजेंसी, एनिमेटेड प्रस्तुतियाँ, कस्टम सिस्टम, वकील वेबसाइट, डॉक्टर वेबसाइट, उद्यमी उपकरण, टेकमेट"
      },
    },
  },
  ja: {
    translation: {
      brand: "テックメイト",
      headline: "ウェブ、SEOなどのデジタルパートナー",
      services: {
        section_title: "サービス",
        website_creation: { title: "ウェブサイト制作", desc: "ビジネスに合わせたモダンでレスポンシブなウェブサイト。" },
        seo_enhancement: { title: "SEO強化", desc: "オンラインでの存在感と検索順位を向上。" },
        presentation_design: { title: "プレゼンテーションデザイン", desc: "プロフェッショナルなPowerPointとデジタルプレゼン。" },
        system_development: { title: "システム開発", desc: "カスタムソフトウェアとフルシステムソリューション。" },
        campaign_funding: { title: "キャンペーン資金調達", desc: "デジタルコンテンツとキャンペーン立ち上げのサポート。" },
        other_service: {
          title: "その他",
          desc: "他にリクエストはありますか？どのようにお手伝いできるかお知らせください。"
        },
      },
      contact: "お問い合わせ",
      'nav.home': "ホーム",
      'nav.services': "サービス",
      'nav.contact': "お問い合わせ",
      toggle_dark_mode: "ダークモード切替",
      sign_in: "サインイン",
      open_menu: "メニューを開く",
      hero: {
        headline: "デジタルプレゼンスを高めよう",
        with_brand: "{{brand}}と共に",
        subheadline: "プロのウェブ開発、SEO、プレゼン、システム構築をすべてのビジネスに。速く、モダンで、あなたに合わせて。",
        cta: "プロジェクトを始める",
      },
      how: {
        section_title: "なぜTechMate？",
        fast: { title: "速くて信頼できる", desc: "プロジェクトを迅速かつプロフェッショナルに納品。" },
        personalized: { title: "パーソナライズサービス", desc: "ニーズと予算に合わせたソリューション。" },
        communication: { title: "リアルなコミュニケーション", desc: "プロジェクト中は常にチームと連絡。" },
        trust: { title: "信頼と安全", desc: "データとアイデアは安全で機密。" },
        campaign_funding: {
          title: "キャンペーン資金調達",
          desc: "マーケティングキャンペーンの立ち上げと資金調達のサポート。"
        },
        other_service: {
          title: "その他",
          desc: "他にリクエストはありますか？どのようにお手伝いできるかお知らせください。"
        },
      },
      testimonials: {
        section_title: "お客様の声",
        sarah: "TechMateは私のサイトを素早く納品し、期待以上でした！強くおすすめします。",
        ahmed: "プロフェッショナルで、要望をしっかり理解してくれました。また利用します。",
        omar: "チームは連絡が密で、結果も素晴らしかったです。コスパ最高！"
      },
      request: {
        section_title: "サービスを依頼",
        name: "お名前",
        company: "会社名",
        job: "役職",
        phone: "電話番号",
        email: "メールアドレス",
        select_service: "サービスを選択",
        budget: "予算（任意）",
        deadline_label: "ご依頼の締切日（任意）",
        finish_date: "完了日（任意）",
        message: "プロジェクトについて教えてください...",
        send: "依頼を送信",
        sent: "送信済み！",
        success: "ご依頼が正常に送信されました！",
        error: "送信に失敗しました。後ほど再度お試しください。",
      },
      footer: {
        twitter: "ツイッター",
        linkedin: "リンクトイン",
        rights: "全著作権所有。",
      },
      seo: {
        title: "テックメイト | デジタルサービスプラットフォーム",
        description: "ビジネスに合わせた最新のウェブサイト、SEO最適化、アニメーション付きプレゼンテーション、および完全なシステムを入手できます。100%オンライン、柔軟な価格設定、そしてテックメイトからの迅速な納品。",
        keywords: "ウェブ開発, SEOサービス, ビジネスウェブサイト, テックエージェンシー, アニメーション付きプレゼンテーション, カスタムシステム, 弁護士ウェブサイト, 医師ウェブサイト, 起業家ツール, テックメイト"
      },
    },
  },
  pt: {
    translation: {
      brand: "TechMate",
      headline: "Seu parceiro digital para web, SEO e mais",
      services: {
        section_title: "Nossos serviços",
        website_creation: { title: "Criação de sites", desc: "Sites modernos e responsivos para o seu negócio." },
        seo_enhancement: { title: "Aprimoramento de SEO", desc: "Aumente sua presença em línea e ranking de busca." },
        presentation_design: { title: "Design de apresentações", desc: "Apresentações PowerPoint e digitais profissionais." },
        system_development: { title: "Desenvolvimento de sistemas", desc: "Software personalizado e soluções completas." },
        campaign_funding: { title: "Financiamento de campanhas", desc: "Apoio para lançamento e financiamento de suas campanhas de marketing." },
        other_service: {
          title: "Outro",
          desc: "Tem um pedido diferente? Diga-nos como podemos ajudar.",
        },
      },
      contact: "Contato",
      'nav.home': "Início",
      'nav.services': "Serviços",
      'nav.contact': "Contato",
      toggle_dark_mode: "Alternar modo escuro",
      sign_in: "Entrar",
      open_menu: "Abrir menu",
      hero: {
        headline: "Eleve sua presença digital",
        with_brand: "com {{brand}}",
        subheadline: "Desenvolvimento web profissional, SEO, apresentações e sistemas para todo negócio. Rápido, moderno e sob medida.",
        cta: "Comece seu projeto",
      },
      how: {
        section_title: "Por que escolher a TechMate?",
        fast: { title: "Rápido & Confiável", desc: "Receba seus projetos rapidamente e com profissionalismo." },
        personalized: { title: "Serviço personalizado", desc: "Soluções sob medida para suas necessidades e orçamento." },
        communication: { title: "Comunicação real", desc: "Fique em contato com nossa equipe durante seu projeto." },
        trust: { title: "Confiança & Segurança", desc: "Seus dados e ideias estão seguros e confidenciais." },
        campaign_funding: {
          title: "Financiamento de Campanhas",
          desc: "Apoio para lançamento e financiamento de suas campanhas de marketing.",
        },
        other_service: {
          title: "Outro",
          desc: "Tem um pedido diferente? Diga-nos como podemos ajudar.",
        },
      },
      testimonials: {
        section_title: "O que nossos clientes dizem",
        sarah: "A TechMate entregou meu site rapidamente e superou minhas expectativas! Recomendo muito.",
        ahmed: "Profissionais, receptivos e realmente entenderam minhas necessidades. Usarei novamente.",
        omar: "A equipe foi comunicativa e os resultados foram excelentes. Ótimo valor!",
      },
      request: {
        section_title: "Solicitar um serviço",
        name: "Seu nome",
        company: "Nome da empresa",
        job: "Cargo",
        phone: "Número de telefone",
        email: "Seu e-mail",
        select_service: "Selecionar serviço",
        budget: "Orçamento (opcional)",
        deadline_label: "Prazo para sua solicitação (opcional)",
        finish_date: "Data de conclusão (opcional)",
        message: "Conte-nos sobre seu projeto...",
        send: "Enviar solicitação",
        sent: "Enviado!",
        success: "Sua solicitação foi enviada com sucesso!",
        error: "Falha ao enviar sua solicitação. Por favor, tente novamente mais tarde.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Todos os direitos reservados.",
      },
      seo: {
        title: "TechMate | Plataforma de Serviços Digitais",
        description: "Obtenha sites modernos, otimização de SEO, apresentações animadas e sistemas completos — adaptados ao seu negócio. 100% online, preços flexíveis e entrega rápida da TechMate.",
        keywords: "desenvolvimento web, serviços de SEO, sites para empresas, agência de tecnologia, apresentações animadas, sistemas personalizados, site para advogados, site para médicos, ferramentas para empreendedores, TechMate"
      },
    },
  },
  it: {
    translation: {
      brand: "TechMate",
      headline: "Il tuo partner digitale per web, SEO e altro",
      services: {
        section_title: "I nostri servizi",
        website_creation: { title: "Creazione di siti web", desc: "Siti web moderni e reattivi su misura per la tua azienda." },
        seo_enhancement: { title: "Ottimizzazione SEO", desc: "Migliora la tua presenza online e il posizionamento nei motori di ricerca." },
        presentation_design: { title: "Design di presentazioni", desc: "Presentazioni PowerPoint e digitali professionali." },
        system_development: { title: "Sviluppo di sistemi", desc: "Software personalizzato e soluzioni complete." },
        campaign_funding: { title: "Finanziamento campagne", desc: "Supporto per contenuti digitali e lanci di campagne." },
        other_service: {
          title: "Altro",
          desc: "Hai una richiesta diversa? Facci sapere come possiamo aiutarti.",
        },
      },
      contact: "Contatto",
      'nav.home': "Home",
      'nav.services': "Servizi",
      'nav.contact': "Contatto",
      toggle_dark_mode: "Attiva modalità scura",
      sign_in: "Accedi",
      open_menu: "Apri menu",
      hero: {
        headline: "Eleva la tua presenza digitale",
        with_brand: "con {{brand}}",
        subheadline: "Sviluppo web professionale, SEO, presentazioni e sistemi per ogni azienda. Veloce, moderno e su misura.",
        cta: "Inizia il tuo progetto",
      },
      how: {
        section_title: "Perché scegliere TechMate?",
        fast: { title: "Veloce & Affidabile", desc: "Ricevi i tuoi progetti rapidamente e professionalmente." },
        personalized: { title: "Servizio personalizzato", desc: "Soluzioni su misura per le tue esigenze e il tuo budget." },
        communication: { title: "Comunicazione reale", desc: "Rimani in contatto con il nostro team durante il tuo progetto." },
        trust: { title: "Fiducia & Sicurezza", desc: "I tuoi dati e le tue idee sono sicuri e riservati." },
        campaign_funding: {
          title: "Finanziamento Campagne",
          desc: "Supporto per contenuti digitali e lanci di campagne.",
        },
        other_service: {
          title: "Altro",
          desc: "Hai una richiesta diversa? Facci sapere come possiamo aiutarti.",
        },
      },
      testimonials: {
        section_title: "Cosa dicono i nostri clienti",
        sarah: "TechMate ha consegnato il mio sito rapidamente e ha superato le mie aspettative! Consigliatissimo.",
        ahmed: "Professionali, reattivi e hanno davvero capito le mie esigenze. Userò di nuovo.",
        omar: "Il team è stato comunicativo e i risultati sono stati eccellenti. Ottimo valore!",
      },
      request: {
        section_title: "Richiedi un servizio",
        name: "Il tuo nome",
        company: "Nome azienda",
        job: "Ruolo",
        phone: "Numero di telefono",
        email: "La tua email",
        select_service: "Seleziona servizio",
        budget: "Budget (opzionale)",
        deadline_label: "Scadenza per la tua richiesta (opzionale)",
        finish_date: "Data di fine (opzionale)",
        message: "Raccontaci del tuo progetto...",
        send: "Invia richiesta",
        sent: "Inviato!",
        success: "La tua richiesta è stata inviata con successo!",
        error: "Impossibile inviare la tua richiesta. Riprova più tardi.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Tutti i diritti riservati.",
      },
      seo: {
        title: "TechMate | Piattaforma di Servizi Digitali",
        description: "Ottieni siti web moderni, ottimizzazione SEO, presentazioni animate e sistemi completi, su misura per la tua attività. 100% online, prezzi flessibili e consegna rapida da TechMate.",
        keywords: "sviluppo web, servizi SEO, siti web aziendali, agenzia tecnologica, presentazioni animate, sistemi personalizzati, sito web per avvocati, sito web per medici, strumenti per imprenditori, TechMate"
      },
    },
  },
  id: {
    translation: {
      brand: "TechMate",
      headline: "Mitra digital Anda untuk web, SEO, dan lainnya",
      services: {
        section_title: "Layanan Kami",
        website_creation: { title: "Pembuatan Website", desc: "Website modern dan responsif yang disesuaikan untuk bisnis Anda." },
        seo_enhancement: { title: "Peningkatan SEO", desc: "Tingkatkan kehadiran online dan peringkat pencarian Anda." },
        presentation_design: { title: "Desain Presentasi", desc: "Presentasi PowerPoint dan digital profesional." },
        system_development: { title: "Pengembangan Sistem", desc: "Perangkat lunak khusus dan solusi sistem lengkap." },
        campaign_funding: { title: "Pendanaan Kampanye", desc: "Dukungan untuk konten digital dan lancar kampanye." },
        other_service: {
          title: "Lainnya",
          desc: "Apakah Anda memiliki permintaan lain? Beritahu kami bagaimana kami bisa membantu.",
        },
      },
      contact: "Kontak",
      'nav.home': "Beranda",
      'nav.services': "Layanan",
      'nav.contact': "Kontak",
      toggle_dark_mode: "Aktifkan mode gelap",
      sign_in: "Masuk",
      open_menu: "Buka menu",
      hero: {
        headline: "Tingkatkan Kehadiran Digital Anda",
        with_brand: "dengan {{brand}}",
        subheadline: "Pengembangan web profesional, SEO, presentasi, dan sistem untuk setiap bisnis. Cepat, modern dan disesuaikan.",
        cta: "Mulai Proyek Anda",
      },
      how: {
        section_title: "Mengapa Memilih TechMate?",
        fast: { title: "Cepat & Andal", desc: "Projenizi hızlı ve profesyonel olarak alın." },
        personalized: { title: "Layanan Pribadi", desc: "Solusi yang disesuaikan dengan kebutuhan dan anggaran Anda." },
        communication: { title: "Komunikasi Nyata", desc: "Projeniz boyunca ekibimizle iletişimde kalın." },
        trust: { title: "Güven & Güvenliği", desc: "Verileriniz ve fikirleriniz güvenli ve gizli." },
        campaign_funding: {
          title: "Kampanya Fonlaması",
          desc: "Pazarlama kampanyalarınızı başlatma ve finanse etme desteği.",
        },
        other_service: {
          title: "Lainnya",
          desc: "Apakah Anda memiliki permintaan lain? Beritahu kami bagaimana kami bisa membantu.",
        },
      },
      testimonials: {
        section_title: "Apa Kata Klien Kami",
        sarah: "TechMate mengirimkan situs saya dengan cepat dan melebihi harapan saya! Sangat direkomendasikan.",
        ahmed: "Profesional, responsif, dan benar-benar memahami kebutuhan saya. Akan menggunakan lagi.",
        omar: "Timnya komunikatif dan hasilnya luar biasa. Nilai yang bagus!"
      },
      request: {
        section_title: "Minta Layanan",
        name: "Nama Anda",
        company: "Nama Perusahaan",
        job: "Jabatan",
        phone: "Nomor Telepon",
        email: "Email Anda",
        select_service: "Pilih Layanan",
        budget: "Anggaran (opsional)",
        deadline_label: "Batas waktu permintaan Anda (opsional)",
        finish_date: "Tanggal Selesai (opsional)",
        message: "Ceritakan tentang proyek Anda...",
        send: "Kirim Permintaan",
        sent: "Terkirim!",
        success: "Permintaan Anda berhasil dikirim!",
        error: "Gagal mengirim permintaan Anda. Silakan coba lagi nanti.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Hak cipta dilindungi undang-undang.",
      },
      seo: {
        title: "TechMate | Platform Layanan Digital",
        description: "Dapatkan situs web modern, optimisasi SEO, presentasi animasi & sistem lengkap — yang disesuaikan untuk bisnis Anda. 100% online, harga fleksibel, dan pengiriman cepat dari TechMate.",
        keywords: "pengembangan web, layanan SEO, situs web bisnis, agensi teknologi, presentasi animasi, sistem kustom, situs web pengacara, situs web dokter, alat pengusaha, TechMate"
      },
    },
  },
  th: {
    translation: {
      brand: "เทคเมท",
      headline: "พันธมิตรดิจิทัลของคุณสำหรับเว็บ, SEO และอื่น ๆ",
      services: {
        section_title: "บริการของเรา",
        website_creation: { title: "สร้างเว็บไซต์", desc: "เว็บไซต์ที่ทันสมัยและตอบสนองได้ตามธุรกิจของคุณ" },
        seo_enhancement: { title: "การปรับปรุง SEO", desc: "เพิ่มการแสดงตัวตนออนไลน์และอันดับการค้นหาของคุณ" },
        presentation_design: { title: "ออกแบบงานนำเสนอ", desc: "งานนำเสนอ PowerPoint และดิจิทัลแบบมืออาชีพ" },
        system_development: { title: "พัฒนาระบบ", desc: "ซอฟต์แวร์ที่กำหนดเองและโซลูชันระบบครบวงจร" },
        campaign_funding: { title: "ระดมทุนแคมเปญ", desc: "สนับสนุนเนื้อหาดิจิทัลและการเปิดตัวแคมเปญ" },
        other_service: {
          title: "อื่น ๆ",
          desc: "มีคำขออื่นหรือไม่? แจ้งให้เราทราบว่าเราจะช่วยได้อย่างไร"
        },
      },
      contact: "ติดต่อ",
      'nav.home': "หน้าแรก",
      'nav.services': "บริการ",
      'nav.contact': "ติดต่อ",
      toggle_dark_mode: "เปิดโหมดมืด",
      sign_in: "เข้าสู่ระบบ",
      open_menu: "เปิดเมนู",
      hero: {
        headline: "ยกระดับการแสดงตัวตนดิจิทัลของคุณ",
        with_brand: "กับ {{brand}}",
        subheadline: "พัฒนาเว็บไซต์มืออาชีพ, SEO, งานนำเสนอ และสร้างระบบสำหรับทุกธุรกิจ รวดเร็ว ทันสมัย และปรับแต่งได้",
        cta: "เริ่มโปรเจกต์ของคุณ",
      },
      how: {
        section_title: "ทำไมต้องเลือก TechMate?",
        fast: { title: "รวดเร็ว & เชื่อถือได้", desc: "รับโปรเจกต์ของคุณอย่างรวดเร็วและมืออาชีพ" },
        personalized: { title: "บริการเฉพาะบุคคล", desc: "โซลูชันที่ปรับให้เหมาะกับความต้องการและงบประมาณของคุณ" },
        communication: { title: "การสื่อสารจริง", desc: "ติดต่อกับทีมของเราตลอดโปรเจกต์ของคุณ" },
        trust: { title: "ความไว้วางใจ & ความปลอดภัย", desc: "ข้อมูลและไอเดียของคุณปลอดภัยและเป็นความลับ" },
        campaign_funding: {
          title: "ระดมทุนแคมเปญ",
          desc: "การสนับสนุนสำหรับการเปิดตัวและการระดมทุนแคมเปญการตลาดของคุณ"
        },
        other_service: {
          title: "อื่น ๆ",
          desc: "มีคำขออื่นหรือไม่? แจ้งให้เราทราบว่าเราจะช่วยได้อย่างไร"
        },
      },
      testimonials: {
        section_title: "สิ่งที่ลูกค้าของเราพูด",
        sarah: "TechMate ส่งมอบเว็บไซต์ของฉันอย่างรวดเร็วและเกินความคาดหมาย! แนะนำมาก ๆ",
        ahmed: "มืออาชีพ ตอบสนองไว และเข้าใจความต้องการของฉันจริง ๆ จะใช้บริการอีกแน่นอน",
        omar: "ทีมงานสื่อสารดีและผลลัพธ์ยอดเยี่ยม คุ้มค่ามาก!"
      },
      request: {
        section_title: "ขอบริการ",
        name: "ชื่อของคุณ",
        company: "ชื่อบริษัท",
        job: "ตำแหน่ง",
        phone: "เบอร์โทรศัพท์",
        email: "อีเมลของคุณ",
        select_service: "เลือกบริการ",
        budget: "งบประมาณ (ไม่บังคับ)",
        deadline_label: "กำหนดเวลาสำหรับคำขอของคุณ (ไม่บังคับ)",
        finish_date: "วันที่เสร็จสิ้น (ไม่บังคับ)",
        message: "บอกเราเกี่ยวกับโปรเจกต์ของคุณ...",
        send: "ส่งคำขอ",
        sent: "ส่งแล้ว!",
        success: "ส่งคำขอของคุณเรียบร้อยแล้ว!",
        error: "ไม่สามารถส่งคำขอของคุณได้ กรุณาลองใหม่อีกครั้งภายหลัง",
      },
      footer: {
        twitter: "ทวิตเตอร์",
        linkedin: "ลิงก์อิน",
        rights: "สงวนลิขสิทธิ์ทั้งหมด",
      },
      seo: {
        title: "เทคเมท | แพลตฟอร์มบริการดิจิทัล",
        description: "รับเว็บไซต์ที่ทันสมัย การปรับแต่ง SEO การนำเสนอภาพเคลื่อนไหว และระบบที่สมบูรณ์แบบ — ที่เหมาะกับธุรกิจของคุณ 100% ออนไลน์ ราคาที่ยืดหยุ่น และการจัดส่งที่รวดเร็วจากเทคเมท",
        keywords: "การพัฒนาเว็บ, บริการ SEO, เว็บไซต์ธุรกิจ, เอเจนซี่เทคโนโลยี, การนำเสนอภาพเคลื่อนไหว, ระบบที่กำหนดเอง, เว็บไซต์ทนายความ, เว็บไซต์แพทย์, เครื่องมือสำหรับผู้ประกอบการ, เทคเมท"
      },
    },
  },
  ko: {
    translation: {
      brand: "테크메이트",
      headline: "웹, SEO 등 디지털 파트너",
      services: {
        section_title: "서비스",
        website_creation: { title: "웹사이트 제작", desc: "비즈니스에 맞는 현대적이고 반응형 웹사이트." },
        seo_enhancement: { title: "SEO 향상", desc: "온라인 존재감과 검색 순위 향상." },
        presentation_design: { title: "프레젠테이션 디자인", desc: "전문적인 파워포인트 및 디지털 프레젠테이션." },
        system_development: { title: "시스템 개발", desc: "맞춤형 소프트웨어 및 전체 시스템 솔루션." },
        campaign_funding: { title: "캠페인 펀딩", desc: "디지털 콘텐츠 및 캠페인 시작 지원." },
        other_service: {
          title: "기타",
          desc: "다른 요청이 있으신가요? 저희가 어떻게 도와드릴 수 있는지 알려주세요.",
        },
      },
      contact: "문의",
      'nav.home': "홈",
      'nav.services': "서비스",
      'nav.contact': "문의",
      toggle_dark_mode: "다크 모드 전환",
      sign_in: "로그인",
      open_menu: "메뉴 열기",
      hero: {
        headline: "디지털 존재감을 높이세요",
        with_brand: "{{brand}}와 함께",
        subheadline: "모든 비즈니스를 위한 전문 웹 개발, SEO, 프레젠테이션, 시스템 구축. 빠르고 현대적이며 맞춤화.",
        cta: "프로젝트 시작",
      },
      how: {
        section_title: "왜 TechMate를 선택할까요?",
        fast: { title: "빠르고 신뢰할 수 있음", desc: "프로젝트를 빠르고 전문적으로 제공합니다." },
        personalized: { title: "맞춤 서비스", desc: "귀하의 요구와 예산에 맞는 솔루션." },
        communication: { title: "실제 소통", desc: "프로젝트 동안 팀과 소통하세요." },
        trust: { title: "신뢰 & 보안", desc: "귀하의 데이터와 아이디어는 안전하고 기밀입니다." },
        campaign_funding: {
          title: "캠페인 펀딩",
          desc: "디지털 콘텐츠 및 캠페인 시작 지원.",
        },
        other_service: {
          title: "기타",
          desc: "다른 요청이 있으신가요? 저희가 어떻게 도와드릴 수 있는지 알려주세요.",
        },
      },
      testimonials: {
        section_title: "고객의 평가",
        sarah: "TechMate가 제 웹사이트를 빠르게 제공했고 기대 이상이었습니다! 강력 추천합니다.",
        ahmed: "전문적이고, 신속하며, 제 요구를 잘 이해했습니다. 또 이용할 예정입니다.",
        omar: "팀이 소통을 잘했고 결과도 훌륭했습니다. 최고의 가치!",
      },
      request: {
        section_title: "서비스 요청",
        name: "이름",
        company: "회사명",
        job: "직책",
        phone: "전화번호",
        email: "이메일",
        select_service: "서비스 선택",
        budget: "예산 (선택사항)",
        deadline_label: "요청 마감일 (선택사항)",
        finish_date: "완료일 (선택사항)",
        message: "프로젝트에 대해 알려주세요...",
        send: "요청 보내기",
        sent: "보냄!",
        success: "요청이 성공적으로 전송되었습니다!",
        error: "요청을 전송하지 못했습니다. 나중에 다시 시도해 주세요.",
      },
      footer: {
        twitter: "트위터",
        linkedin: "링크드인",
        rights: "모든 권리 보유.",
      },
      seo: {
        title: "테크메이트 | 디지털 서비스 플랫폼",
        description: "비즈니스에 맞춘 현대적인 웹사이트, SEO 최적화, 애니메이션 프레젠테이션 및 전체 시스템을 이용하세요. 100% 온라인, 유연한 가격 책정 및 테크메이트의 빠른 배송.",
        keywords: "웹 개발, SEO 서비스, 비즈니스 웹사이트, 기술 에이전시, 애니메이션 프레젠테이션, 맞춤형 시스템, 변호사 웹사이트, 의사 웹사이트, 기업가 도구, 테크메이트"
      },
    },
  },
  bn: {
    translation: {
      brand: "টেকমেট",
      headline: "ওয়েব, SEO এবং আরও অনেক কিছুর জন্য আপনার ডিজিটাল পার্টনার",
      services: {
        section_title: "আমাদের পরিষেবা",
        website_creation: { title: "ওয়েবসাইট তৈরি", desc: "আপনার ব্য঵সার জন্য আধুনিক, প্রতিক্রিয়াশীল ওয়েবসাইট।" },
        seo_enhancement: { title: "SEO উন্নতি", desc: "আপনার অনলাইন উপস্থিতি এবং সার্চ র‍্যাঙ্কিং বাড়ান।" },
        presentation_design: { title: "প্রেজেন্টেশন ডিজাইন", desc: "পেশাদার PowerPoint এবং ডিজিটাল প্রেজেন্টেশন।" },
        system_development: { title: "সিস্টেম ডেভেলপমেন্ট", desc: "কাস্টম সফটওয়্যার এবং পূর্ণ সিস্টেম সমাধান।" },
        campaign_funding: { title: "ক্যাম্পেইন ফান্ডিং", desc: "ডিজিটাল কনটেন্ট এবং ক্যাম্পেইন লঞ্চের জন্য সহায়তা।" },
        other_service: {
          title: "অন্যান্য",
          desc: "আপনার কি অন্য কোন অনুরোধ আছে? আমাদের জানান আমরা কিভাবে সাহায্য করতে পারি।"
        },
      },
      contact: "যোগাযোগ",
      'nav.home': "হোম",
      'nav.services': "পরিষেবা",
      'nav.contact': "যোগাযোগ",
      toggle_dark_mode: "ডার্ক মোড চালু করুন",
      sign_in: "সাইন ইন",
      open_menu: "মেনু খুলুন",
      hero: {
        headline: "আপনার ডিজিটাল উপস্থিতি বাড়ান",
        with_brand: "{{brand}}-এর সাথে",
        subheadline: "প্রফেশনাল ওয়েব ডেভেলপমেন্ট, SEO, প্রেজেন্টেশন এবং সিস্টেম বিল্ডিং প্রতিটি ব্যবসার জন্য। দ্রুত, আধুনিক এবং আপনার চাহিদা অনুযায়ী।",
        cta: "আপনার প্রকল্প শুরু করুন",
      },
      how: {
        section_title: "কেন TechMate বেছে নেবেন?",
        fast: { title: "দ্রুত ও নির্ভরযোগ্য", desc: "আপনার প্রকল্প দ্রুত এবং পেশাদারভাবে পান।" },
        personalized: { title: "ব্যক্তিগত পরিষেবা", desc: "আপনার চাহিদা ও বজেট অনুযায়ী সমাধান।" },
        communication: { title: "বাস্তব যোগাযোগ", desc: "আপনার প্রকল্প চলাকালীন আমাদের টিমের সাথে যোগাযোগ রাখুন।" },
        trust: { title: "বিশ্বাস ও নিরাপত্তা", desc: "আপনার ডেটা ও আইডিয়া নিরাপদ এবং গোপনীয়।" },
        campaign_funding: {
          title: "ক্যাম্পেইন ফান্ডিং",
          desc: "ডিজিটাল কনটেন্ট এবং ক্যাম্পেইন লঞ্চের জন্য সহায়তা।"
        },
        other_service: {
          title: "অন্যান্য",
          desc: "আপনার কি অন্য কোন অনুরোধ আছে? আমাদের জানান আমরা কিভাবে সাহায্য করতে পারি।"
        },
      },
      testimonials: {
        section_title: "আমাদের ক্লায়েন্টরা কী বলেন",
        sarah: "TechMate আমার ওয়েবসাইট দ্রুত ডেলিভার করেছে এবং আমার প্রত্যাশা ছাড়িয়ে গেছে! অত্যন্ত সুপারিশ করছি।",
        ahmed: "পেশাদার, দ্রুত, এবং সত্যিই আমার চাহিদা বুঝেছে। আমি আবার ব্যবহার করব।",
        omar: "দলটি যোগাযোগ রেখেছিল এবং ফলাফল চমৎকার ছিল। দারুণ মূল্য!"
      },
      request: {
        section_title: "পরিষেবা অনুরোধ করুন",
        name: "আপনার নাম",
        company: "কোম্পানির নাম",
        job: "পদবী",
        phone: "ফোন নম্বর",
        email: "আপনার ইমেইল",
        select_service: "পরিষেবা নির্বাচন করুন",
        budget: "বজেট (ঐচ্ছিক)",
        deadline_label: "আপনার অনুরোধের জন্য সময়সীমা (ঐচ্ছিক)",
        finish_date: "শেষ তারিখ (ঐচ্ছিক)",
        message: "আপনার প্রকল্প সম্পর্কে বলুন...",
        send: "অনুরোধ পাঠান",
        sent: "পাঠানো হয়েছে!",
        success: "আপনার অনুরোধ সফলভাবে পাঠানো হয়েছে!",
        error: "আপনার অনুরোধ পাঠাতে ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",
      },
      footer: {
        twitter: "টুইটার",
        linkedin: "লিঙ্কডইন",
        rights: "সমস্ত অধিকার সংরক্ষিত।",
      },
      seo: {
        title: "টেকমেট | ডিজিটাল পরিষেবা প্ল্যাটফর্ম",
        description: "আধুনিক ওয়েবসাইট, এসইও অপ্টিমাইজেশান, অ্যানিমেটেড উপস্থাপনা এবং সম্পূর্ণ সিস্টেম পান — আপনার ব্যবসার জন্য বিশেষভাবে তৈরি। ১০০% অনলাইন, নমনীয় মূল্য নির্ধারণ এবং টেকমেট থেকে দ্রুত ডেলিভারি।",
        keywords: "ওয়েব ডেভেলপমেন্ট, এসইও পরিষেবা, ব্যবসায়িক ওয়েবসাইট, প্রযুক্তি সংস্থা, অ্যানিমেটেড উপস্থাপনা, কাস্টম সিস্টেম, আইনজীবীর ওয়েবসাইট, ডাক্তারের ওয়েবসাইট, উদ্যোক্তা সরঞ্জাম, টেকমেট"
      },
    },
  },
  vi: {
    translation: {
      brand: "TechMate",
      headline: "Đối tác kỹ thuật số của bạn cho web, SEO và hơn thế nữa",
      services: {
        section_title: "Dịch vụ của chúng tôi",
        website_creation: { title: "Tạo website", desc: "Website hiện đại, đáp ứng phù hợp cho doanh nghiệp của bạn." },
        seo_enhancement: { title: "Nâng cao SEO", desc: "Tăng sự hiện diện trực tuyến và xếp hạng tìm kiếm của bạn." },
        presentation_design: { title: "Thiết kế trình bày", desc: "Trình bày PowerPoint và kỹ thuật số chuyên nghiệp." },
        system_development: { title: "Phát triển hệ thống", desc: "Phần mềm tùy chỉnh và giải pháp hệ thống hoàn chỉnh." },
        campaign_funding: { title: "Gây quỹ chiến dịch", desc: "Hỗ trợ nội dung kỹ thuật số và khởi động chiến dịch." },
        other_service: {
          title: "Khác",
          desc: "Bạn có yêu cầu khác không? Hãy cho chúng tôi biết chúng tôi có thể giúp đỡ như thế nào.",
        },
      },
      contact: "Liên hệ",
      'nav.home': "Trang chủ",
      'nav.services': "Dịch vụ",
      'nav.contact': "Liên hệ",
      toggle_dark_mode: "Bật chế độ tối",
      sign_in: "Đăng nhập",
      open_menu: "Mở menu",
      hero: {
        headline: "Nâng tầm hiện diện kỹ thuật số của bạn",
        with_brand: "với {{brand}}",
        subheadline: "Phát triển web chuyên nghiệp, SEO, trình bày và xây dựng hệ thống cho mọi doanh nghiệp. Hệ thống nhanh chóng, hiện đại và phù hợp với bạn.",
        cta: "Bắt đầu dự án của bạn",
      },
      how: {
        section_title: "Tại sao chọn TechMate?",
        fast: { title: "Nhanh & Đáng tin cậy", desc: "Nhận dự án của bạn nhanh chóng và chuyên nghiệp." },
        personalized: { title: "Dịch vụ cá nhân hóa", desc: "Giải pháp phù hợp với nhu cầu và bộ ngân sách của bạn." },
        communication: { title: "Giao tiếp thực sự", desc: "Trong suốt dự án, hãy liên lạc với đội ngũ của chúng tôi." },
        trust: { title: "Tin cậy & Bảo mật", desc: "Dữ liệu và ý tưởng của bạn được an toàn và bảo mật." },
        campaign_funding: {
          title: "Gây quỹ chiến dịch",
          desc: "Hỗ trợ nội dung kỹ thuật số và khởi động chiến dịch.",
        },
        other_service: {
          title: "Khác",
          desc: "Bạn có yêu cầu khác không? Hãy cho chúng tôi biết chúng tôi có thể giúp đỡ như thế nào.",
        },
      },
      testimonials: {
        section_title: "Khách hàng nói gì",
        sarah: "TechMate đã giao website của tôi rất nhanh và vượt mong đợi! Rất khuyến khích.",
        ahmed: "Chuyên nghiệp, phản hồi nhanh và thực sự hiểu nhu cầu của tôi. Sẽ sử dụng lại.",
        omar: "Đội ngũ giao tiếp tốt và kết quả xuất sắc. Giá trị tuyệt vời!"
      },
      request: {
        section_title: "Yêu cầu dịch vụ",
        name: "Tên của bạn",
        company: "Tên công ty",
        job: "Chức vụ",
        phone: "Số điện thoại",
        email: "Email của bạn",
        select_service: "Chọn dịch vụ",
        budget: "Ngân sách (tùy chọn)",
        deadline_label: "Hạn chót cho yêu cầu của bạn (tùy chọn)",
        finish_date: "Ngày hoàn thành (tùy chọn)",
        message: "Hãy cho chúng tôi biết về dự án của bạn...",
        send: "Gửi yêu cầu",
        sent: "Đã gửi!",
        success: "Yêu cầu của bạn đã được gửi thành công!",
        error: "Gửi yêu cầu không thành công. Vui lòng thử lại sau.",
      },
      footer: {
        twitter: "Twitter",
        linkedin: "LinkedIn",
        rights: "Đã đăng ký bản quyền.",
      },
      seo: {
        title: "TechMate | Nền tảng Dịch vụ Kỹ thuật số",
        description: "Nhận các trang web hiện đại, tối ưu hóa SEO, bản trình bày hoạt hình và hệ thống đầy đủ — phù hợp với doanh nghiệp của bạn. 100% trực tuyến, giá cả linh hoạt và giao hàng nhanh chóng từ TechMate.",
        keywords: "phát triển web, dịch vụ SEO, trang web doanh nghiệp, công ty công nghệ, bản trình bày hoạt hình, hệ thống tùy chỉnh, trang web luật sư, trang web bác sĩ, công cụ cho doanh nhân, TechMate"
      },
    },
  },
};
// Detect if language is RTL
const isRTL = (lang) => ['ar', 'he', 'fa', 'ur'].includes(lang);

// Set document direction on language change
const setDirection = (lang) => {
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
};

// i18n initialization
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Listen for language changes to update direction
i18n.on('languageChanged', setDirection);
setDirection(i18n.language);

export const languages = [
  { code: "en", name: "English", rtl: false },
  { code: "ar", name: "العربية", rtl: true },
  { code: "fr", name: "Français", rtl: false },
  { code: "es", name: "Español", rtl: false },
  { code: "zh", name: "中文", rtl: false },
  { code: "ru", name: "Русский", rtl: false },
  { code: "de", name: "Deutsch", rtl: false },
  { code: "tr", name: "Türkçe", rtl: false },
  { code: "he", name: "עברית", rtl: true },
  { code: "fa", name: "فارسی", rtl: true },
  { code: "ur", name: "اردو", rtl: true },
  { code: "hi", name: "हिन्दी", rtl: false },
  { code: "ja", name: "日本語", rtl: false },
  { code: "pt", name: "Português", rtl: false },
  { code: "it", name: "Italiano", rtl: false },
  { code: "id", name: "Bahasa Indonesia", rtl: false },
  { code: "th", name: "ไทย", rtl: false },
  { code: "ko", name: "한국어", rtl: false },
  { code: "bn", name: "বাংলা", rtl: false },
  { code: "vi", name: "Tiếng Việt", rtl: false },
  // ...add more as needed
];

export default i18n; 