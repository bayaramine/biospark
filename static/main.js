// ============================================================
//  BioSpark — main.js
//  i18n (EN / FR / AR) + scroll reveal
// ============================================================

const translations = {
  en: {
    // NAV
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.contact':  'Contact',

    // HERO
    'hero.tag':     'Biostatistics · Clinical Trials · Oncology &amp; Hematology · AI/ML',
    'hero.name':    'Mohamed Amine Bayar',
    'hero.title':   'PhD — Independent Consultant',
    'hero.tagline': '"Bridging clinical trials and artificial intelligence."',
    'hero.cta1':    'Explore Services',
    'hero.cta2':    'Get in Touch',

    // HOME — SECTION 1
    'home.s1.label': 'The gap no one is talking about',
    'home.s1.p1':    'Everyone is hiring data scientists and engineers to build healthcare AI. Almost no one is asking the people who actually understand clinical trials — the workflows, the regulatory logic, the edge cases, the conversations with health authorities.',
    'home.s1.p2':    'I spent 13 years in drug development, from academic research at Gustave Roussy to global programs at Novartis and Johnson &amp; Johnson — CAR-T therapies, bispecific antibodies, pivotal Phase III trials. I\'ve seen what happens when AI meets clinical development with deep domain expertise, and what happens without it. The difference is not subtle. It is the difference between a product that passes regulatory scrutiny and one that doesn\'t.',
    'home.s1.p3':    'Clinical AI needs clinical trialists — not as validators at the end, but as architects from the start.',

    // HOME — SECTION 2
    'home.s2.label':     'Two worlds. One bridge.',
    'home.s2.p1':        'There are people who speak fluently about biostatistics, trial design, and regulatory submissions — but have never written a line of Python. There are people who build sophisticated ML pipelines — but have never read a protocol or an FDA guidance document.',
    'home.s2.highlight': 'BioSpark sits at the intersection.',
    'home.s2.p2':        'If you\'re a biotech, a pharma company, or a healthcare SME looking for someone who speaks biostatistics and regulatory submissions as fluently as Python, machine learning, and cloud infrastructure — let\'s talk.',

    // ABOUT PAGE — SECTION 3
    'about.label':         'About',
    'about.page.name':     'Mohamed Amine Bayar, PhD',
    'about.page.subtitle': 'Biostatistician. Clinical development strategist. AI/ML practitioner.',
    'about.page.intro':    '13 years across the full clinical development lifecycle — from Phase I dose escalation to Phase III pivotal trials, from SAP authorship to health authority interactions.',
    'about.where':         'Where I\'ve worked:',
    'about.jnj.title':     'Johnson &amp; Johnson',
    'about.jnj.desc':      'Lead biostatistician on multiple myeloma bispecifics, a first-in-class trispecific antibody, and CAR-T therapies. Designed and reported pivotal studies in one of the most competitive spaces in oncology.',
    'about.novartis.title': 'Novartis',
    'about.novartis.desc':  'Core statistical contributor to the asciminib (Scemblix) program for CML, supporting both FDA and EMA marketing approvals.',
    'about.gr.title':       'Gustave Roussy',
    'about.gr.desc':        'Europe\'s largest cancer center. Academic research at the intersection of biostatistics, genomics, and clinical outcomes.',
    'about.apart':          'What sets me apart:',
    'about.apart.text':     'Co-inventor of a patent applying machine learning to predict prognosis in triple-negative breast cancer. Author of 15+ peer-reviewed publications with over 1,200 citations in journals including the Annals of Oncology, JCO, and Statistics in Medicine. PhD from Université Paris-Saclay focused on Phase III trial design in rare diseases and biomarker-defined subgroups.',
    'about.apart.text2':    'I don\'t just analyze clinical data. I understand where it comes from, what it means clinically, and what regulators need to see.',
    'about.cv':             'Download full CV',
    'stat.years':           'Years of Experience',
    'stat.phases':          'Trial Phases',
    'stat.publications':    'Publications',
    'stat.citations':       'Citations',

    // SERVICES PAGE — SECTION 4
    'services.label':      'Services',
    'services.title':      'Areas of <em>expertise</em>',
    'services.what':       'What we do',
    'services.tier1.label': 'Strategic advisory',
    'services.tier1.i1':   'Clinical AI architecture — embedding domain expertise into healthcare AI products from design to validation',
    'services.tier1.i2':   'Trial design consulting — adaptive designs, Bayesian methods, estimand frameworks',
    'services.tier1.i3':   'Regulatory-statistical strategy — bridging biostatistics and health authority expectations (FDA, EMA)',
    'services.tier2.label': 'Operational support',
    'services.tier2.i1':   'Embedded biostatistician on clinical programs (Phase I–III)',
    'services.tier2.i2':   'Statistical analysis plans, programming oversight, study reporting',
    'services.tier2.i3':   'CDISC standards, TLF production, submission-ready deliverables',
    'services.cta':        'Discuss Your Project',

    // CONTACT PAGE — SECTION 5 + FORM
    'contact.label': 'Contact',
    'contact.title': 'Let\'s work <em>together</em>',
    'contact.sub':   'Whether you need a strategic partner to shape your clinical AI approach or a senior biostatistician to strengthen your team on an ongoing program — I\'m one conversation away.',
    'contact.form':  'Contact Form',
    'form.name':     'Full name',
    'form.email':    'Email address',
    'form.message':  'Your message',
    'form.send':     'Send Message',
    'form.success':  'Your message has been sent. I will get back to you shortly.',
    'form.error':    'Please fill in all fields.',

    // FOOTER
    'footer.copy': 'All rights reserved'
  },

  fr: {
    // NAV
    'nav.home':     'Accueil',
    'nav.about':    'À propos',
    'nav.services': 'Services',
    'nav.contact':  'Contact',

    // HERO
    'hero.tag':     'Biostatistiques · Essais Cliniques · Oncologie &amp; Hématologie · IA/ML',
    'hero.name':    'Mohamed Amine Bayar',
    'hero.title':   'Docteur — Consultant Indépendant',
    'hero.tagline': '« À l\'intersection des essais cliniques et de l\'intelligence artificielle. »',
    'hero.cta1':    'Voir les services',
    'hero.cta2':    'Me contacter',

    // HOME — SECTION 1
    'home.s1.label': 'Le fossé dont personne ne parle',
    'home.s1.p1':    'Tout le monde recrute des data scientists et des ingénieurs pour développer l\'IA en santé. Presque personne ne sollicite ceux qui comprennent réellement les essais cliniques — les flux de travail, la logique réglementaire, les cas limites, les échanges avec les autorités de santé.',
    'home.s1.p2':    'J\'ai passé 13 ans dans le développement de médicaments, de la recherche académique à Gustave Roussy aux programmes mondiaux chez Novartis et Johnson &amp; Johnson — thérapies CAR-T, anticorps bispécifiques, essais de Phase III pivotaux. J\'ai vu ce qui se passe lorsque l\'IA rencontre le développement clinique avec une expertise métier profonde, et sans elle. La différence n\'est pas subtile. C\'est la différence entre un produit qui passe le scrutin réglementaire et un qui ne le passe pas.',
    'home.s1.p3':    'L\'IA clinique a besoin de spécialistes en essais cliniques — non comme validateurs en fin de parcours, mais comme architectes dès le début.',

    // HOME — SECTION 2
    'home.s2.label':     'Deux mondes. Un pont.',
    'home.s2.p1':        'Il y a des personnes qui parlent couramment de biostatistiques, de conception d\'essais et de soumissions réglementaires — mais qui n\'ont jamais écrit une ligne de Python. Il y a des personnes qui construisent des pipelines de machine learning sophistiqués — mais qui n\'ont jamais lu un protocole ou un document de guidance FDA.',
    'home.s2.highlight': 'BioSpark se trouve à cette intersection.',
    'home.s2.p2':        'Si vous êtes une biotech, une entreprise pharmaceutique ou une PME dans le secteur de la santé à la recherche d\'un interlocuteur maîtrisant aussi bien la biostatistique et les soumissions réglementaires que Python, le machine learning et l\'infrastructure cloud — parlons-en.',

    // ABOUT PAGE — SECTION 3
    'about.label':         'À propos',
    'about.page.name':     'Mohamed Amine Bayar, PhD',
    'about.page.subtitle': 'Biostatisticien. Stratège en développement clinique. Praticien en IA/ML.',
    'about.page.intro':    '13 ans sur l\'ensemble du cycle de développement clinique — de l\'escalade de dose en Phase I aux essais pivotaux de Phase III, de la rédaction des SAP aux interactions avec les autorités de santé.',
    'about.where':         'Où j\'ai travaillé :',
    'about.jnj.title':     'Johnson &amp; Johnson',
    'about.jnj.desc':      'Biostatisticien principal sur les anticorps bispécifiques pour le myélome multiple, un anticorps trispécifique de première classe et les thérapies CAR-T. Conception et rapport d\'études pivotales dans l\'un des espaces les plus compétitifs de l\'oncologie.',
    'about.novartis.title': 'Novartis',
    'about.novartis.desc':  'Contributeur statistique principal au programme asciminib (Scemblix) pour la LMC, ayant soutenu les approbations marketing de la FDA et de l\'EMA.',
    'about.gr.title':       'Gustave Roussy',
    'about.gr.desc':        'Le plus grand centre de lutte contre le cancer en Europe. Recherche académique à l\'intersection de la biostatistique, de la génomique et des résultats cliniques.',
    'about.apart':          'Ce qui me distingue :',
    'about.apart.text':     'Co-inventeur d\'un brevet appliquant le machine learning pour prédire le pronostic dans le cancer du sein triple négatif. Auteur de 15+ publications évaluées par les pairs avec plus de 1 200 citations dans des revues incluant les Annals of Oncology, le JCO et Statistics in Medicine. Doctorat de l\'Université Paris-Saclay axé sur la conception d\'essais de Phase III dans les maladies rares et les sous-groupes définis par biomarqueurs.',
    'about.apart.text2':    'Je n\'analyse pas seulement les données cliniques. Je comprends d\'où elles viennent, ce qu\'elles signifient cliniquement, et ce que les régulateurs ont besoin de voir.',
    'about.cv':             'Télécharger le CV complet',
    'stat.years':           'Ans d\'expérience',
    'stat.phases':          'Phases d\'essais',
    'stat.publications':    'Publications',
    'stat.citations':       'Citations',

    // SERVICES PAGE — SECTION 4
    'services.label':      'Services',
    'services.title':      'Domaines d\'<em>expertise</em>',
    'services.what':       'Ce que nous proposons',
    'services.tier1.label': 'Conseil stratégique',
    'services.tier1.i1':   'Architecture de l\'IA clinique — intégration de l\'expertise métier dans les produits IA de santé, de la conception à la validation',
    'services.tier1.i2':   'Conseil en conception d\'essais — designs adaptatifs, méthodes bayésiennes, cadre des estimands',
    'services.tier1.i3':   'Stratégie réglementaire-statistique — pont entre la biostatistique et les attentes des autorités de santé (FDA, EMA)',
    'services.tier2.label': 'Support opérationnel',
    'services.tier2.i1':   'Biostatisticien intégré sur des programmes cliniques (Phases I–III)',
    'services.tier2.i2':   'Plans d\'analyses statistiques, supervision de la programmation, rapports d\'études',
    'services.tier2.i3':   'Standards CDISC, production des TLFs, livrables prêts pour la soumission',
    'services.cta':        'Discutons de votre projet',

    // CONTACT PAGE — SECTION 5 + FORM
    'contact.label': 'Contact',
    'contact.title': 'Travaillons <em>ensemble</em>',
    'contact.sub':   'Que vous ayez besoin d\'un partenaire stratégique pour façonner votre approche de l\'IA clinique ou d\'un biostatisticien senior pour renforcer votre équipe sur un programme en cours — je suis à une conversation de distance.',
    'contact.form':  'Formulaire de Contact',
    'form.name':     'Nom complet',
    'form.email':    'Adresse e-mail',
    'form.message':  'Votre message',
    'form.send':     'Envoyer',
    'form.success':  'Votre message a été envoyé. Je vous répondrai très prochainement.',
    'form.error':    'Veuillez remplir tous les champs.',

    // FOOTER
    'footer.copy': 'Tous droits réservés'
  },

  ar: {
    // NAV
    'nav.home':     'الرئيسية',
    'nav.about':    'نبذة عني',
    'nav.services': 'الخدمات',
    'nav.contact':  'تواصل',

    // HERO
    'hero.tag':     'إحصاء حيوي · تجارب سريرية · أورام وأمراض الدم · الذكاء الاصطناعي',
    'hero.name':    'محمّد أمين بيّار',
    'hero.title':   'دكتوراه — مستشار مستقل',
    'hero.tagline': '«في تقاطع التجارب السريرية والذكاء الاصطناعي.»',
    'hero.cta1':    'استعرض الخدمات',
    'hero.cta2':    'تواصل معي',

    // HOME — SECTION 1
    'home.s1.label': 'الفجوة التي لا أحد يتحدث عنها',
    'home.s1.p1':    'الجميع يستعين بعلماء البيانات والمهندسين لبناء الذكاء الاصطناعي في قطاع الرعاية الصحية. لكن لا أحد تقريباً يستعين بالأشخاص الذين يفهمون التجارب السريرية فعلاً — سير العمل، والمنطق التنظيمي، والحالات الحدية، والنقاشات مع السلطات الصحية.',
    'home.s1.p2':    'أمضيت 13 عاماً في تطوير الأدوية، من البحث الأكاديمي في مركز غوستاف روسي إلى البرامج العالمية في نوفارتيس وجونسون آند جونسون — علاجات CAR-T، والأجسام المضادة ثنائية الخصوصية، وتجارب المرحلة الثالثة المحورية. رأيت ما يحدث حين يلتقي الذكاء الاصطناعي بالتطوير السريري مع خبرة مجالية عميقة، وما يحدث بدونها. الفرق ليس طفيفاً. إنه الفرق بين منتج يجتاز الفحص التنظيمي وآخر لا يجتازه.',
    'home.s1.p3':    'الذكاء الاصطناعي السريري يحتاج إلى متخصصين في التجارب السريرية — ليس كمراجعين في نهاية المطاف، بل كمهندسين منذ البداية.',

    // HOME — SECTION 2
    'home.s2.label':     'عالمان. جسر واحد.',
    'home.s2.p1':        'ثمة من يتحدث بطلاقة عن الإحصاء الحيوي وتصميم التجارب والتقديمات التنظيمية — لكنه لم يكتب سطراً واحداً من Python قط. وثمة من يبني خطوط أنابيب تعلم آلي متطورة — لكنه لم يطّلع على بروتوكول أو وثيقة توجيهية من FDA قط.',
    'home.s2.highlight': '.BioSpark يقع عند هذا التقاطع',
    'home.s2.p2':        'إن كنت شركة بيوتك، أو مؤسسة دوائية، أو منشأة صغيرة ومتوسطة في قطاع الرعاية الصحية تبحث عمن يجمع بين الإحصاء الحيوي والتقديمات التنظيمية من جهة، وPython والتعلم الآلي والبنية التحتية السحابية من جهة أخرى — فلنتحدث.',

    // ABOUT PAGE — SECTION 3
    'about.label':         'نبذة عني',
    'about.page.name':     'محمّد أمين بيّار، دكتوراه',
    'about.page.subtitle': 'إحصائي حيوي. استراتيجي في التطوير السريري. ممارس في الذكاء الاصطناعي والتعلم الآلي.',
    'about.page.intro':    '13 عاماً على امتداد دورة التطوير السريري الكاملة — من تصاعد الجرعات في المرحلة الأولى إلى التجارب المحورية في المرحلة الثالثة، ومن صياغة خطط التحليل الإحصائي إلى التفاعلات مع السلطات الصحية.',
    'about.where':         'أين عملت:',
    'about.jnj.title':     'جونسون آند جونسون',
    'about.jnj.desc':      'كبير الإحصائيين الحيويين على برامج المايلوما المتعددة بالأجسام المضادة ثنائية الخصوصية، وجسم مضاد ثلاثي الخصوصية فريد من نوعه، وعلاجات CAR-T. صمّم وأعدّ تقارير دراسات محورية في أحد أكثر مجالات الأورام تنافسية.',
    'about.novartis.title': 'نوفارتيس',
    'about.novartis.desc':  'مساهم إحصائي رئيسي في برنامج أسيمينيب (Scemblix) لسرطان الدم النخاعي المزمن، دعماً لاعتمادات التسويق الصادرة عن FDA وEMA.',
    'about.gr.title':       'غوستاف روسي',
    'about.gr.desc':        'أكبر مركز لعلاج السرطان في أوروبا. بحث أكاديمي عند تقاطع الإحصاء الحيوي وعلم الجينوم والنتائج السريرية.',
    'about.apart':          'ما يميّزني:',
    'about.apart.text':     'مشارك في اختراع براءة تطبّق التعلم الآلي للتنبؤ بالإنذار في سرطان الثدي سلبي المستقبلات الثلاثية. مؤلف لأكثر من 15 ورقة بحثية محكّمة بأكثر من 1,200 استشهاد في مجلات منها Annals of Oncology وJCO وStatistics in Medicine. دكتوراه من جامعة باريس-ساكليه تمحورت حول تصميم تجارب المرحلة الثالثة في الأمراض النادرة والمجموعات الفرعية المحددة بالمؤشرات الحيوية.',
    'about.apart.text2':    'لا أحلّل البيانات السريرية فحسب. بل أفهم مصدرها، ودلالتها السريرية، وما يحتاج المنظمون إلى رؤيته.',
    'about.cv':             'تحميل السيرة الذاتية الكاملة',
    'stat.years':           'سنوات الخبرة',
    'stat.phases':          'مراحل التجارب',
    'stat.publications':    'منشورات',
    'stat.citations':       'استشهادات',

    // SERVICES PAGE — SECTION 4
    'services.label':      'الخدمات',
    'services.title':      'مجالات <em>الخبرة</em>',
    'services.what':       'ما نقدّمه',
    'services.tier1.label': 'الاستشارة الاستراتيجية',
    'services.tier1.i1':   'هندسة الذكاء الاصطناعي السريري — دمج الخبرة المجالية في منتجات الذكاء الاصطناعي الصحي من التصميم إلى التحقق',
    'services.tier1.i2':   'استشارات تصميم التجارب — التصاميم التكيفية، والأساليب البايزية، وأطر التقديرات',
    'services.tier1.i3':   'الاستراتيجية التنظيمية الإحصائية — جسر بين الإحصاء الحيوي وتوقعات السلطات الصحية (FDA، EMA)',
    'services.tier2.label': 'الدعم التشغيلي',
    'services.tier2.i1':   'إحصائي حيوي متكامل ضمن البرامج السريرية (المراحل I–III)',
    'services.tier2.i2':   'خطط التحليل الإحصائي، والإشراف على البرمجة، وإعداد تقارير الدراسات',
    'services.tier2.i3':   'معايير CDISC، وإنتاج TLFs، والمستندات الجاهزة للتقديم',
    'services.cta':        'ناقش مشروعك',

    // CONTACT PAGE — SECTION 5 + FORM
    'contact.label': 'تواصل',
    'contact.title': 'لنعمل <em>معًا</em>',
    'contact.sub':   'سواء احتجت إلى شريك استراتيجي لتشكيل نهجك في الذكاء الاصطناعي السريري، أو إلى إحصائي حيوي أول لتعزيز فريقك في برنامج جارٍ — أنا على بُعد محادثة واحدة.',
    'contact.form':  'نموذج الاتصال',
    'form.name':     'الاسم الكامل',
    'form.email':    'البريد الإلكتروني',
    'form.message':  'رسالتك',
    'form.send':     'إرسال',
    'form.success':  'تم إرسال رسالتك. سأرد عليك في أقرب وقت.',
    'form.error':    'يرجى ملء جميع الحقول.',

    // FOOTER
    'footer.copy': 'جميع الحقوق محفوظة'
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('biospark_lang', lang);

  // Update html lang + dir attributes
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

// On page load, restore saved language
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('biospark_lang') || 'en';
  setLang(saved);

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
