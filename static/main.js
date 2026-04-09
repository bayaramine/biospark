// ============================================================
//  BioSpark — main.js
//  i18n (EN / FR / AR) + scroll reveal
// ============================================================

const translations = {
  en: {
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.contact':  'Contact',
    'hero.tag':     'Biostatistics · Clinical Trials · Oncology &amp; Hematology · AI/ML',
    'hero.name':    'Mohamed Amine Bayar',
    'hero.title':   'PhD — Independent Consultant',
    'hero.tagline': '"Bridging clinical trials and artificial intelligence."',
    'hero.cta1':    'Explore Services',
    'hero.cta2':    'Get in Touch',
    'hero.badge':   'Biostats &amp; AI',
    'about.label':  'About',
    'about.title':  'Biostatistician at the <em>intersection</em><br>of clinical trials and AI/ML',
    'about.p1': 'PhD-trained biostatistician with 13+ years of experience across the full clinical development lifecycle — from Phase I dose escalation to Phase III pivotal trials. My primary expertise lies in oncology and hematology, though I bring rigorous methodology and a results-driven approach to any therapeutic area.',
    'about.p2': 'I have contributed to landmark drug development programs at Johnson &amp; Johnson (Multiple Myeloma bispecifics, a trispecific, and CAR-T therapies), Novartis (Scemblix/asciminib for CML, supporting FDA and EMA approval), and Gustave Roussy, Europe\'s largest cancer center. Across these roles, I have led trial design, SAP development, regulatory interactions, and final study reporting to the highest scientific and regulatory standards.',
    'about.p3': 'Beyond classical biostatistics, I apply machine learning and AI to clinical and genomic data. I am the co-inventor of a patent using ML to predict prognosis in Triple Negative Breast Cancer, and an author of 15+ peer-reviewed publications (1,200+ citations) in journals including the Annals of Oncology, JCO, and Statistics in Medicine.',
    'stat.years':        'Years of Experience',
    'stat.phases':       'Trial Phases',
    'stat.publications': 'Publications',
    'stat.citations':    'Citations',
    'services.label': 'Services',
    'services.title': 'Areas of <em>expertise</em>',
    'services.cta':   'Discuss Your Project',
    's1.title': 'Statistical Analysis &amp; End-to-End Clinical Trial Support',
    's1.desc':  'Advanced clinical trial design and analysis including Bayesian framework and adaptive designs, sample size calculations, Estimand Framework, and regulatory-grade statistical reporting (SAP, TLFs, CSRs).',
    's2.title': 'Data Science, Machine Learning &amp; Artificial Intelligence',
    's2.desc':  'Advanced analytics on clinical data, real-world data, and high-dimensional data — predictive modeling, reproducible pipelines, and application of ML and AI to biomarker discovery.',
    'contact.label': 'Contact',
    'contact.title': 'Let\'s work <em>together</em>',
    'contact.sub':   'Available for freelance consulting missions, collaboration on clinical studies, and research projects.',
    'contact.form':  'Contact Form',
    'form.name':     'Full name',
    'form.email':    'Email address',
    'form.message':  'Your message',
    'form.send':     'Send Message',
    'form.success':  'Your message has been sent. I will get back to you shortly.',
    'form.error':    'Please fill in all fields.',
    'footer.copy':   'All rights reserved'
  },

  fr: {
    'nav.about':    'À propos',
    'nav.services': 'Services',
    'nav.contact':  'Contact',
    'hero.tag':     'Biostatistiques · Essais Cliniques · Oncologie &amp; Hématologie · IA/ML',
    'hero.name':    'Mohamed Amine Bayar',
    'hero.title':   'Docteur — Consultant Indépendant',
    'hero.tagline': '« À l\'intersection des essais cliniques et de l\'intelligence artificielle. »',
    'hero.cta1':    'Voir les services',
    'hero.cta2':    'Me contacter',
    'hero.badge':   'Biostats &amp; IA',
    'about.label':  'À propos',
    'about.title':  'Biostatisticien à l\'<em>intersection</em><br>des essais cliniques et de l\'IA/ML',
    'about.p1': 'Biostatisticien titulaire d\'un doctorat, avec plus de 13 ans d\'expérience au sein de laboratoires pharmaceutiques et en académie sur l\'ensemble du cycle de développement clinique — de l\'escalade de dose en Phase I aux essais pivotaux de Phase III. Mon expertise principale porte sur l\'oncologie et l\'hématologie, mais j\'apporte une méthodologie rigoureuse et une approche orientée résultats à toute aire thérapeutique.',
    'about.p2': 'J\'ai contribué à des programmes de développement de référence chez Johnson &amp; Johnson (bispecifiques, un trispecifique et thérapies CAR-T pour le myélome multiple), Novartis (Scemblix/asciminib pour la LMC, ayant soutenu les approbations FDA et EMA), et Gustave Roussy, le plus grand centre de lutte contre le cancer en Europe. Dans ces rôles, j\'ai travaillé sur la conception des essais, le développement des protocols et des plans d\'analyses statistiques, les interactions réglementaires et la rédaction des rapports d\'étude selon les plus hauts standards scientifiques et réglementaires.',
    'about.p3': 'Au-delà de la biostatistique classique, j\'applique le machine learning et l\'IA aux données cliniques et génomiques. Je suis co-inventeur d\'un brevet utilisant le ML pour prédire le pronostic dans le cancer du sein triple négatif, et auteur de plus de 15 publications évaluées par des pairs (plus de 1 200 citations) dans des revues telles que les Annals of Oncology, le JCO et Statistics in Medicine.',
    'stat.years':        'Ans d\'expérience',
    'stat.phases':       'Phases d\'essais',
    'stat.publications': 'Publications',
    'stat.citations':    'Citations',
    'services.label': 'Services',
    'services.title': 'Domaines d\'<em>expertise</em>',
    'services.cta':   'Discutons de votre projet',
    's1.title': 'Analyse Statistique &amp; Support Complet des Essais Cliniques',
    's1.desc':  'Conception et analyse avancées d\'essais cliniques incluant les approches bayésiennes et les designs adaptatifs, calcul de taille d\'échantillon, déploiement des estimands, et rapports statistiques réglementaires (SAP, TLFs, CSRs).',
    's2.title': 'Data Science, Machine Learning &amp; Intelligence Artificielle',
    's2.desc':  'Analyse avancée de données cliniques, de données en vie réelle et de données en haute dimension — modélisation prédictive, pipelines reproductibles, et application du ML et de l\'IA à la découverte de biomarqueurs.',
    'contact.label': 'Contact',
    'contact.title': 'Travaillons <em>ensemble</em>',
    'contact.sub':   'Disponible pour des missions de conseil en freelance, des collaborations sur des études cliniques et des projets de recherche.',
    'contact.form':  'Formulaire de Contact',
    'form.name':     'Nom complet',
    'form.email':    'Adresse e-mail',
    'form.message':  'Votre message',
    'form.send':     'Envoyer',
    'form.success':  'Votre message a été envoyé. Je vous répondrai très prochainement.',
    'form.error':    'Veuillez remplir tous les champs.',
    'footer.copy':   'Tous droits réservés'
  },

  ar: {
    'nav.about':    'نبذة عني',
    'nav.services': 'الخدمات',
    'nav.contact':  'تواصل',
    'hero.tag':     'إحصاء حيوي · تجارب سريرية · أورام وأمراض الدم · الذكاء الاصطناعي',
    'hero.name':    'محمّد أمين بيّار',
    'hero.title':   'دكتوراه — مستشار مستقل',
    'hero.tagline': '«في تقاطع التجارب السريرية والذكاء الاصطناعي.»',
    'hero.cta1':    'استعرض الخدمات',
    'hero.cta2':    'تواصل معي',
    'hero.badge':   'إحصاء وذكاء اصطناعي',
    'about.label':  'نبذة عني',
    'about.title':  'إحصائي حيوي عند <em>تقاطع</em><br>التجارب السريرية والذكاء الاصطناعي',
    'about.p1': 'إحصائي حيوي حاصل على درجة الدكتوراه، بخبرة تمتد لأكثر من 13 عامًا على امتداد دورة التطوير السريري الكاملة — من تصاعد الجرعات في المرحلة الأولى إلى التجارب المحورية في المرحلة الثالثة. تتمحور خبرتي الرئيسية حول علم الأورام وأمراض الدم، غير أنني أقدم منهجية واضحة في مجالات علاجية مختلفة.',
    'about.p2': 'أسهمت في برامج تطوير أدوية بارزة في شركة جونسون آند جونسون (عوامل ثنائية ومثلثة الخصوصية وعلاجات CAR-T لمرض المايلوما المتعددة)، وشركة نوفارتيس (Scemblix/أسيمينيب لسرطان الدم النخاعي المزمن، دعمًا لاعتمادات FDA وEMA)، ومركز غوستاف روسي، أكبر مركز لعلاج السرطان في أوروبا. في هذه الأدوار، قمت بتصميم التجارب وتطوير خطط التحليل الإحصائي والتفاعلات التنظيمية وإعداد تقارير الدراسات النهائية وفق أعلى المعايير العلمية والتنظيمية.',
    'about.p3': 'إلى جانب الإحصاء الحيوي الكلاسيكي، أطبّق تقنيات التعلم الآلي والذكاء الاصطناعي على البيانات السريرية والجينومية. أنا مشارك في اختراع براءة تستخدم التعلم الآلي للتنبؤ بالإنذار في سرطان الثدي، ومؤلف لأكثر من 15 ورقة بحثية محكّمة (أكثر من 1,200 استشهاد) في مجلات منها Annals of Oncology وJCO وStatistics in Medicine.',
    'stat.years':        'سنوات الخبرة',
    'stat.phases':       'مراحل التجارب',
    'stat.publications': 'منشورات',
    'stat.citations':    'استشهادات',
    'services.label': 'الخدمات',
    'services.title': 'مجالات <em>الخبرة</em>',
    'services.cta':   'ناقش مشروعك',
    's1.title': 'التحليل الإحصائي والدعم للتجارب السريرية',
    's1.desc':  'تصميم وتحليل متقدم للتجارب السريرية يشمل الأساليب البايزية والتصاميم التكيفية، حساب حجم العينة، والتقارير الإحصائية التنظيمية (SAP، TLFs، CSRs).',
    's2.title': 'علم البيانات والتعلم الآلي والذكاء الاصطناعي',
    's2.desc':  'تحليل متقدم للبيانات السريرية والبيانات الواقعية والبيانات عالية الأبعاد — نمذجة تنبؤية، وتطبيق التعلم الآلي والذكاء الاصطناعي على اكتشاف المؤشرات الحيوية.',
    'contact.label': 'تواصل',
    'contact.title': 'لنعمل <em>معًا</em>',
    'contact.sub':   'متاح لمهام الاستشارة المستقلة، والتعاون في الدراسات السريرية والمشاريع البحثية.',
    'contact.form':  'نموذج الاتصال',
    'form.name':     'الاسم الكامل',
    'form.email':    'البريد الإلكتروني',
    'form.message':  'رسالتك',
    'form.send':     'إرسال',
    'form.success':  'تم إرسال رسالتك. سأرد عليك في أقرب وقت.',
    'form.error':    'يرجى ملء جميع الحقول.',
    'footer.copy':   'جميع الحقوق محفوظة'
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('biospark_lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Update innerHTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Set lang and direction
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

// Restore language on page load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('biospark_lang') || 'en';
  setLang(saved);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 120);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
