export type Locale = 'ar' | 'en';

const AR_ROOT = 'https://sportstechaccelerator.seu.edu.sa/ar';
const EN_ROOT = 'https://sportstechaccelerator.seu.edu.sa/en';

// Program runs Jun 29 – Jul 7, 2026 (4 days online + 3 on-site in Riyadh)
export const PROGRAM_START_ISO = '2026-06-29T09:00:00+03:00';
export const REGISTRATION_DEADLINE_ISO = '2026-06-15T23:59:59+03:00';
export const PRIORITY_DEADLINE_ISO = '2026-05-31T23:59:59+03:00';

export const content = {
  ar: {
    dir: 'rtl' as const,
    lang: 'ar',
    meta: {
      title: 'سيو فيلوسيتي | برنامج الابتكار للتكنولوجيا الرياضية',
      description:
        'سيو فيلوسيتي — برنامج ابتكار مكثف مدته 7 أيام لتطوير حلول تقنية مبتكرة في قطاع الرياضة. مبادرة من الجامعة السعودية الإلكترونية.',
    },
    nav: {
      brand: 'سيو فيلوسيتي',
      back: { label: 'مسرعة سيو', href: AR_ROOT },
      sections: [
        { label: 'عن البرنامج', href: '#why' },
        { label: 'الرحلة', href: '#journey' },
        { label: 'المسارات', href: '#tracks' },
        { label: 'المزايا', href: '#benefits' },
        { label: 'الأسئلة', href: '#faq' },
      ],
      register: { label: 'قدّم الآن', href: '/velocity/ar/register/' },
      langSwitch: 'En',
      langSwitchHref: '/velocity/en/',
    },
    hero: {
      eyebrow: 'مبادرة من الجامعة السعودية الإلكترونية',
      title: 'سيو فيلوسيتي',
      editionBadge: 'النسخة الأولى — أول برنامج ابتكار مخصص للتكنولوجيا الرياضية',
      lead: '٤ أيام أونلاين، ثم ينتقل أفضل ١٠ فرق إلى الرياض في الأيام الثلاثة الختامية لبناء النموذج الأولي وتقديمه أمام خبراء القطاع، مع الأولوية للنظر في الانضمام إلى مسرعة سيو للتكنولوجيا الرياضية.',
      ctaPrimary: { label: 'قدّم الآن', href: '/velocity/ar/register/' },
      deadlineLabel: 'آخر موعد للتسجيل',
      deadlineValue: '15 يونيو',
      priorityDeadlineLabel: 'الموعد المُفضّل',
      priorityDeadlineValue: '31 مايو',
    },
    countdown: {
      title: 'بداية البرنامج خلال',
      units: { days: 'يوم', hours: 'ساعة', minutes: 'دقيقة', seconds: 'ثانية' },
      live: 'البرنامج منطلق الآن',
    },
    infobar: [
      { icon: 'clock', label: 'المدة', value: '٧ أيام' },
      { icon: 'cloud', label: 'افتراضي', value: '٤ أيام أونلاين' },
      { icon: 'pin', label: 'حضوري في الرياض', value: '٣ أيام (أفضل ١٠ فرق)' },
      { icon: 'trophy', label: 'الجوائز', value: 'حتى 50,000 ر.س' },
    ],
    why: {
      title: 'عن فيلوسيتي',
      lead: 'برنامج مكثف يهدف إلى دعم المبتكرين ورواد الأعمال لتطوير حلول تقنية في قطاع الرياضة وتحويل الأفكار إلى نماذج أولية قابلة للتطبيق، بدعم من خبراء القطاع وفرصة عرض المشاريع أمام شركاء من المنظومة الرياضية.',
      stats: [
        { value: '7', label: 'أيام مكثفة' },
        { value: '4', label: 'مسارات تحديات' },
        { value: '+20', label: 'مرشد وخبير' },
        { value: '50,000', label: 'ر.س جوائز' },
      ],
    },
    selection: {
      title: 'كيف يتم الاختيار',
      subtitle: 'من التقديم إلى الديمو داي في الرياض',
      steps: [
        { n: '1', title: 'التقديم أونلاين', desc: 'سجّل بياناتك وفكرتك عبر النموذج.' },
        { n: '2', title: 'انضمام للسبرنت الافتراضي', desc: 'بناء النموذج الأولي خلال ٤ أيام عن بُعد.' },
        { n: '3', title: 'اختيار أفضل ١٠ فرق', desc: 'إعلان المتأهلين وانتقالهم للمرحلة الحضورية.' },
        { n: '4', title: 'الفرق النهائية تصل الرياض', desc: 'ثلاثة أيام حضورية، تُكلّل بالعرض النهائي والجوائز.' },
      ],
      footer: 'الفرق المتميزة تحصل على جوائز نقدية والأولوية للنظر في الانضمام إلى مسرعة سيو للتكنولوجيا الرياضية.',
    },
    tracks: {
      title: 'مسارات التحديات',
      lead: 'اختر مسارك وابنِ حلًا يغيّر المنظومة الرياضية.',
      legend: {
        examples: 'أمثلة التحديات:',
        types: 'نوع الحلول المقترحة',
        who: 'المستفيدون',
        deliverables: 'المخرجات المتوقعة',
      },
      items: [
        {
          n: '01',
          title: 'البنية التحتية والمنشآت الرياضية',
          desc: 'حلول لإدارة المنشآت، الحجز والتذاكر، تكامل الأنظمة، وتحسين جاهزية التشغيل والبث.',
          examples: [
            'تطوير منصة متكاملة لإدارة حجوزات المنشآت الرياضية',
            'حلول لتكامل أنظمة البث المباشر مع بيانات الملاعب',
            'منصة لتحسين استخدام الطاقة في الملاعب',
            'نظام ذكي لإدارة التذاكر ومنع التلاعب',
            'تطوير تطبيق للصيانة التنبؤية للمنشآت',
            'نظام إدارة المواقف الذكية للفعاليات الرياضية',
          ],
          types: 'منصات رقمية، تطبيقات IoT، أنظمة إدارة متكاملة، حلول AI للتنبؤ',
          who: 'المنشآت الرياضية، الأندية، هيئة الترفيه، المستثمرون',
          deliverables: 'نموذج عملي للحجز، تقرير جدوى، خطة تنفيذ',
        },
        {
          n: '02',
          title: 'اكتشاف المواهب الرياضية ورعايتها',
          desc: 'حلول لرصد المواهب، تسجيل اللاعبين، تقييم الأداء، وتسهيل مشاركة البيانات بشكل آمن.',
          examples: [
            'منصة لاكتشاف المواهب باستخدام الذكاء الاصطناعي',
            'نظام تقييم أداء موحد للأكاديميات الرياضية',
            'حل لربط المواهب بفرص الاحتراف المحلية والدولية',
            'تطبيق لتسجيل اللاعبين الناشئين وتتبع تطورهم',
            'منصة آمنة لمشاركة بيانات اللاعبين بين الأندية',
          ],
          types: 'منصات AI/ML، تطبيقات تتبع، أنظمة تحليل فيديو، Blockchain للبيانات',
          who: 'الاتحادات الرياضية، الأكاديميات، اللاعبون الناشئون، الكشافون',
          deliverables: 'نموذج تقييم ذكي، منصة MVP، تقرير تحليلي',
        },
        {
          n: '03',
          title: 'تطوير اللاعبين الحاليين',
          desc: 'حلول لمتابعة أداء الرياضيين وصحتهم، التدريب المستمر، وإعادة التأهيل والإصابات.',
          examples: [
            'تطبيق لمتابعة الصحة النفسية والجسدية للرياضيين',
            'نظام لإدارة برامج إعادة التأهيل بعد الإصابات',
            'منصة تحليل الفيديو للتدريب التكتيكي',
            'منصة تدريب شخصية مدعومة بالذكاء الاصطناعي',
            'حلول Wearables لمتابعة الأداء اللحظي',
          ],
          types: 'تطبيقات صحية، Wearables، منصات تدريب ذكية، أنظمة تحليل بيانات',
          who: 'اللاعبون المحترفون، المدربون، الأندية، الأطباء الرياضيون',
          deliverables: 'تطبيق متابعة، لوحة تحكم تحليلية، خطة تأهيل ذكية',
        },
        {
          n: '04',
          title: 'إشراك الجمهور وتجربة المشجع',
          desc: 'حلول لرحلة المشجع الرقمية من شراء التذكرة وحتى تجربة الملعب، وبرامج الولاء والتفاعل.',
          examples: [
            'تطبيق متكامل لتجربة المشجع من المنزل للملعب',
            'حلول الواقع المعزز لتجربة الملعب',
            'منصة للمحتوى الحصري والإحصائيات اللحظية',
            'منصة برامج ولاء للأندية الرياضية',
            'نظام تفاعلي للمشجعين أثناء المباريات',
            'تطبيق للتنبؤ بنتائج المباريات وتحديات المشجعين',
          ],
          types: 'تطبيقات جوال، AR/VR، منصات Gamification، أنظمة ولاء',
          who: 'الجماهير، الأندية، الرعاة، المنظومة الإعلامية',
          deliverables: 'تطبيق تجربة مشجع، نموذج ولاء، تجربة AR',
        },
      ],
    },
    journey: {
      title: 'رحلة 7 أيام',
      subtitle: '٤ أيام أونلاين + ٣ أيام حضوريًا في الرياض',
      virtualLabel: 'افتراضي',
      onsiteLabel: 'حضوري · الرياض',
      finalistsCalloutLabel: 'إعلان أفضل ١٠ فرق مساء الخميس',
      steps: [
        { day: '1', date: '29 يونيو', title: 'الإطلاق', desc: 'إطلاق البرنامج والتعريف بالتحديات.', mode: 'virtual' as const },
        { day: '2', date: '30 يونيو', title: 'البناء', desc: 'تطوير الفكرة وبناء النموذج الأولي.', mode: 'virtual' as const },
        { day: '3', date: '1 يوليو', title: 'التحقق', desc: 'تجارب المستخدمين، جلسات الإرشاد، تحسينات النموذج.', mode: 'virtual' as const },
        { day: '4', date: '2 يوليو', title: 'المتأهلون', desc: 'العرض النهائي للنماذج، اختيار أفضل ١٠ فرق وإعلانها مساء الخميس.', mode: 'virtual' as const, finalists: true },
        { day: '5', date: '5 يوليو', title: 'التجهيز', desc: 'سبرنت حضوري كامل في الرياض، صقل المنتج النهائي.', mode: 'onsite' as const },
        { day: '6', date: '6 يوليو', title: 'تجهيز العرض', desc: 'بروفة العرض، جلسات أسئلة وأجوبة مع المستثمرين، تجهيز الديمو.', mode: 'onsite' as const },
        { day: '7', date: '7 يوليو', title: 'Demo Day', desc: 'العرض النهائي أمام لجنة التحكيم وتكريم الفائزين.', mode: 'onsite' as const },
      ],
    },
    benefits: {
      title: 'ما يقدمه برنامج SEU Velocity',
      subtitle: 'مزايا حصرية لجميع المشاركين',
      items: [
        { icon: 'certificate', title: 'شهادات معتمدة', desc: 'شهادات مشاركة وإنجاز لجميع المشاركين.' },
        { icon: 'rocket', title: 'الانضمام للمسرعة', desc: 'فرصة الانضمام إلى مسرعة سيو الرياضية للفرق المؤهلة.' },
        { icon: 'partners', title: 'فرص شراكة', desc: 'فرص شراكة مع جهات رائدة بالمجال.' },
        { icon: 'mentor', title: 'توجيه مكثف', desc: 'إرشاد من مرشدين وخبراء متخصصين طوال فيلوسيتي.' },
        { icon: 'trophy', title: 'جوائز للفرق الفائزة', desc: 'جوائز مالية وعينية قيّمة للفرق المتميزة.' },
        { icon: 'support', title: 'دعم مستمر بعد البرنامج', desc: 'إرشاد متواصل للمتأهلين، مع وصول جميع المشاركين إلى شبكة خريجي سيو والأولوية في الإشعار بالبرامج المستقبلية.' },
      ],
    },
    leaveWith: {
      title: 'ما الذي ستخرج به؟',
      subtitle: 'مخرجات ملموسة في نهاية البرنامج',
      items: [
        { icon: 'rocket', title: 'نموذج أولي / MVP', desc: 'منتج عملي يعكس فكرتك بشكل ملموس.' },
        { icon: 'target', title: 'تعريف موثّق للمشكلة', desc: 'صياغة مشكلة مدعومة بأدلة ميدانية.' },
        { icon: 'media', title: 'عرض احترافي', desc: 'بنية عرض جاهزة للمستثمرين والشركاء.' },
        { icon: 'mentor', title: 'تغذية راجعة من خبراء', desc: 'تقييم مفصّل من لجنة التحكيم والمرشدين.' },
        { icon: 'rocket', title: 'مسار واضح للمسرعة', desc: 'الأولوية للنظر في الانضمام إلى مسرعة سيو للتكنولوجيا الرياضية.' },
      ],
    },
    eligibility: {
      title: 'شروط التقديم',
      subtitle: 'من يحق له المشاركة',
      items: [
        '18 عامًا فأكبر',
        'مفتوح لجميع الجنسيات',
        'الفكرة في مرحلة النموذج الأولي (MVP) مرحّبٌ بها',
        'الشركات المسجلة تستطيع التقديم',
      ],
      note: 'الأيام الافتراضية (1–4) مفتوحة عالميًا. يُشترط على الفرق المتأهلة الحضور للرياض في الأيام 5–7.',
    },
    audience: {
      title: 'من ينبغي له التقديم؟',
      subtitle: 'البرنامج مفتوح للأفراد والفرق على حد سواء',
      primary: {
        label: 'الفئة الرئيسية',
        sublabel: 'هذا البرنامج موجّه إلى:',
        items: [
          { icon: 'bulb', title: 'رواد الأعمال', desc: 'لتحويل أفكاركم إلى منتجات قابلة للتسويق.' },
          { icon: 'student', title: 'الطلاب', desc: 'لاكتساب تجربة عملية في بناء حلول حقيقية.' },
          { icon: 'spark', title: 'رواد الأعمال الناشئون', desc: 'لتحويل الشغف إلى مشروع ملموس.' },
        ],
      },
      specialisations: {
        label: 'التخصصات',
        sublabel: 'ما المهارات التي تحتاجها الفرق؟',
        items: [
          { icon: 'code', title: 'مطورون', desc: 'Web / Mobile / Data' },
          { icon: 'design', title: 'مصممون', desc: 'UI / UX' },
          { icon: 'media', title: 'صناع محتوى', desc: 'إعلام رياضي وقصص' },
          { icon: 'support', title: 'مختصو دعم وتشغيل', desc: 'إدارة عمليات ومنتجات' },
          { icon: 'ai', title: 'خبراء ذكاء اصطناعي', desc: 'AI / ML' },
        ],
      },
    },
    technologies: {
      title: 'التقنيات التي يدعمها البرنامج',
      subtitle: 'أدوات وبنية تقنية جاهزة لبناء حلول حقيقية',
      items: [
        { icon: 'ai', title: 'الذكاء الاصطناعي', desc: 'AI / Machine Learning لبناء حلول ذكية.' },
        { icon: 'data', title: 'تحليل البيانات', desc: 'تحليلات تتحوّل إلى قرارات دقيقة.' },
        { icon: 'wearable', title: 'الأجهزة القابلة للارتداء', desc: 'بيانات لحظية لمتابعة الأداء.' },
        { icon: 'mobile', title: 'تطوير تطبيقات الجوال', desc: 'iOS / Android لتطبيقات المشجعين والرياضيين والمنشآت.' },
        { icon: 'iot', title: 'IoT وتقنيات المنشآت الذكية', desc: 'مستشعرات متصلة، أنظمة منشآت، البث الرياضي.' },
        { icon: 'data', title: 'Sports Data APIs', desc: 'بيانات لايف، إحصائيات اللاعبين، تكاملات الأداء وبيانات الأطراف الثالثة.' },
        { icon: 'vision', title: 'الرؤية الحاسوبية', desc: 'تتبع اللاعبين، تحليل الحركة، تحليلات البث الآلي.' },
      ],
    },
    accelPipeline: {
      title: 'من فيلوسيتي إلى المسرعة',
      subtitle: 'مسار متّصل من النموذج الأولي حتى المسرعة الكاملة',
      velocity: {
        title: 'سيو فيلوسيتي',
        desc: 'سبرنت الابتكار، 7 أيام',
        bullets: ['فكرة → نموذج أولي', 'إرشاد ولجنة تحكيم', 'الجوائز للفرق المتميزة'],
        footer: 'أولوية النظر في الانضمام إلى المسرعة',
      },
      arrow: 'يقودك إلى',
      accelerator: {
        title: 'مسرعة سيو للتكنولوجيا الرياضية',
        desc: 'المرحلة الثانية — أكتوبر 2026',
        bullets: ['برنامج المسرعة الكامل', 'تمويل وشركاء المنظومة', 'دعم بناء الشركات الناشئة'],
        applicationsOpenLabel: 'فتح التقديم',
        applicationsOpenDate: 'قريبًا',
        learnMore: 'اعرف المزيد عن المسرعة',
        href: AR_ROOT,
      },
      note: 'بدون هذه المرحلة يبدو الجزء الخاص بالمسرعة منفصلًا — هنا تتضح صورة الانتقال الكاملة.',
    },
    partners: {
      title: 'الشركاء والجهات الداعمة',
      items: [
        { name: 'وزارة الاتصالات وتقنية المعلومات', logo: 'mcit.png', invert: true },
        { name: 'وزارة الرياضة', logo: 'ministry-sport.svg', invert: true },
        { name: 'الاتحاد السعودي للثقافة الرياضية', logo: 'cultural-sport.webp', invert: false },
      ],
    },
    prizes: {
      title: 'جوائز الفرق الفائزة',
      lead: 'تحصل الفرق الفائزة على جوائز مالية تقديرًا لتميزها وابتكارها.',
      currency: 'ر.س',
      items: [
        { rank: 'المركز الأول', tier: 'gold' as const, amount: '50,000', highlight: true },
        { rank: 'المركز الثاني', tier: 'silver' as const, amount: '30,000' },
        { rank: 'المركز الثالث', tier: 'bronze' as const, amount: '20,000' },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          q: 'من يمكنه المشاركة في البرنامج؟',
          a: 'البرنامج مفتوح لرواد الأعمال والطلاب والمطورين والمصممين وصُنّاع المحتوى ومختصّي القطاع الرياضي. لا يُشترط امتلاك خبرة سابقة في تأسيس الشركات الناشئة.',
        },
        {
          q: 'هل البرنامج حضوري؟',
          a: 'الأيام الأربعة الأولى (29 يونيو – 2 يوليو) أونلاين بالكامل. يتم اختيار أفضل ١٠ فرق يوم 2 يوليو ليتوجهوا للرياض في الأيام الثلاثة الختامية (5–7 يوليو). الحضور للرياض مطلوب فقط للفرق المتأهلة.',
        },
        {
          q: 'كم عدد أعضاء الفريق؟',
          a: 'يمكن المشاركة بشكل فردي أو ضمن فريق يتكوّن من 2 إلى 5 أعضاء.',
        },
        {
          q: 'كيف يتم تقييم المشاريع؟',
          a: 'يتم تقييم المشاريع وفق معايير تشمل: الابتكار، قابلية التطبيق، القيمة المضافة للقطاع الرياضي، جودة النموذج الأولي، وجودة العرض النهائي.',
        },
        {
          q: 'من يملك حقوق المشروع؟',
          a: 'تظل حقوق الملكية الفكرية للمشاريع مملوكة بالكامل لأصحابها.',
        },
        {
          q: 'هل يوجد ورش عمل؟',
          a: 'نعم، يتضمن البرنامج ورش عمل وجلسات إرشادية لدعم تطوير المشاريع.',
        },
        {
          q: 'هل يمكن تقديم أكثر من مشروع؟',
          a: 'نعم، يمكن تقديم أكثر من فكرة مع تسجيل مستقل لكل مشروع.',
        },
        {
          q: 'هل يمكن للمشاركين من خارج المملكة التسجيل؟',
          a: 'نعم. الأيام الافتراضية (1–4) مفتوحة عالميًا. يُشترط على الفرق المتأهلة السفر للرياض في الأيام 5–7.',
        },
        {
          q: 'ما لغة العرض؟',
          a: 'يمكن تقديم العروض باللغة العربية أو الإنجليزية.',
        },
      ],
    },
    finalCta: {
      title: 'جاهز لتبنّي تحديات الرياضة وبناء حل حقيقي؟',
      lead: 'سجّل الآن وابدأ رحلتك في سيو فيلوسيتي خلال 7 أيام من الابتكار والتطوير والعرض أمام خبراء المنظومة الرياضية.',
      ctaPrimary: { label: 'قدّم الآن', href: '/velocity/ar/register/' },
    },
    footer: {
      tagline: 'تابعنا على',
      socials: [
        { label: 'X', icon: 'x', href: 'https://x.com/abusiness_seu?s=11' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/seu-accelerator-477324389/' },
      ],
      links: [
        { label: 'عن سيو', href: `${AR_ROOT}#about` },
        { label: 'مميزات المسرّعة', href: `${AR_ROOT}#features` },
        { label: 'شركة ناشئة', href: `${AR_ROOT}#startup` },
        { label: 'مستثمر', href: `${AR_ROOT}#investor` },
      ],
      legal: [
        { label: 'الشروط والأحكام', href: '/velocity/ar/terms/' },
        { label: 'سياسة الخصوصية', href: '/velocity/ar/privacy/' },
      ],
      rights: '© 2026 سيو. جميع الحقوق محفوظة.',
    },
    legal: {
      backToHome: 'العودة للرئيسية',
      contactEmail: 'BA.RSI@seu.edu.sa',
      contactWebsite: { label: 'sportstechaccelerator.seu.edu.sa', href: AR_ROOT },
      terms: {
        title: 'الشروط والأحكام',
        program: 'برنامج SEU Velocity — مسرعة سيو للتكنولوجيا الرياضية',
        intro:
          'يُعد التسجيل أو المشاركة في البرنامج موافقةً على جميع الشروط والأحكام الواردة في هذه الصفحة.',
        sections: [
          {
            title: 'التعريف بالبرنامج',
            body: [
              'برنامج SEU Velocity هو برنامج ابتكار تنظّمه مسرعة سيو للتكنولوجيا الرياضية التابعة للجامعة السعودية الإلكترونية، ويهدف إلى دعم تطوير حلول تقنية مبتكرة في قطاع الرياضة من خلال برنامج مكثف يجمع بين الإرشاد والتطوير وعرض المشاريع.',
            ],
          },
          {
            title: 'أهلية المشاركة',
            body: ['يمكن المشاركة في البرنامج للأفراد أو الفرق الذين لديهم اهتمام بتطوير حلول مبتكرة في قطاع الرياضة، ويشمل ذلك:'],
            list: ['رواد الأعمال', 'المطورين', 'المصممين', 'الباحثين والطلاب', 'المهتمين بالتقنية والابتكار'],
            footer: 'كما يمكن المشاركة بشكل فردي أو ضمن فريق.',
          },
          {
            title: 'تشكيل الفرق',
            body: ['يجوز للمشاركين التسجيل بشكل فردي أو ضمن فريق، على أن:'],
            list: [
              'يتكوّن الفريق من عدد مناسب من الأعضاء لضمان تطوير المشروع.',
              'يلتزم جميع أعضاء الفريق بالشروط والأحكام الخاصة بالبرنامج.',
              'يتم اختيار ممثل رسمي للفريق للتواصل مع الجهة المنظّمة.',
            ],
          },
          {
            title: 'طبيعة البرنامج',
            body: ['يُقام برنامج SEU Velocity بصيغة هجين تجمع بين المشاركة الافتراضية والحضور الفعلي في بعض مراحل البرنامج. وقد يتضمن البرنامج:'],
            list: ['جلسات تعريفية', 'ورش عمل', 'جلسات إرشاد', 'تطوير نماذج أولية', 'عرض المشاريع أمام لجنة تحكيم'],
            footer: 'ويجوز للجهة المنظّمة تعديل جدول البرنامج أو آلية تنفيذه عند الحاجة.',
          },
          {
            title: 'تقديم المشاريع',
            body: ['يجب أن تستوفي المشاريع المشاركة المتطلبات التالية:'],
            list: ['أن تكون فكرة أصلية وغير منسوخة.', 'ألا تنتهك حقوق الملكية الفكرية لأي طرف ثالث.', 'أن تكون مرتبطة بقطاع الرياضة أو التكنولوجيا الرياضية.'],
            footer: 'ويحق للجنة التنظيمية استبعاد أي مشروع لا يلتزم بهذه المعايير.',
          },
          {
            title: 'التقييم والتحكيم',
            body: ['يتم تقييم المشاريع من قِبل لجنة مختصة وفق مجموعة من المعايير، والتي قد تشمل:'],
            list: ['مستوى الابتكار', 'قابلية التطبيق', 'القيمة المضافة للقطاع الرياضي', 'جودة النموذج الأولي', 'جودة العرض النهائي'],
            footer: 'وتُعدّ قرارات لجنة التحكيم نهائية.',
          },
          {
            title: 'الملكية الفكرية',
            body: [
              'تظل جميع حقوق الملكية الفكرية للمشاريع المقدّمة خلال البرنامج مملوكة لأصحابها.',
              'ومع ذلك، يحق للجهة المنظّمة استخدام المعلومات العامة المتعلقة بالمشاريع المشاركة لأغراض إعلامية أو ترويجية مرتبطة بالبرنامج.',
            ],
          },
          {
            title: 'المسؤولية القانونية',
            body: ['يتحمل المشاركون المسؤولية الكاملة عن:'],
            list: ['صحة المعلومات المقدّمة.', 'أصالة المشاريع.', 'عدم انتهاك حقوق الملكية الفكرية أو الحقوق القانونية لأي طرف ثالث.'],
            footer: 'ولا تتحمل الجهة المنظّمة أي مسؤولية قانونية عن أي نزاع ينشأ بين المشاركين أو مع أطراف أخرى.',
          },
          {
            title: 'استخدام الصور والمحتوى',
            body: [
              'يوافق المشاركون على إمكانية استخدام صورهم أو لقطات من مشاركتهم في البرنامج ضمن المواد الإعلامية أو التوثيقية الخاصة بالبرنامج.',
            ],
          },
          {
            title: 'تعديل الشروط',
            body: [
              'تحتفظ الجهة المنظّمة بالحق في تعديل أو تحديث هذه الشروط والأحكام عند الحاجة. وسيتم نشر أي تحديثات عبر الموقع الرسمي للبرنامج.',
            ],
          },
        ],
      },
      privacy: {
        title: 'سياسة الخصوصية',
        program: 'برنامج SEU Velocity — مسرعة سيو للتكنولوجيا الرياضية',
        sections: [
          {
            title: 'مقدمة',
            body: [
              'تحرص مسرعة سيو للتكنولوجيا الرياضية التابعة للجامعة السعودية الإلكترونية على حماية خصوصية المشاركين والمستخدمين لمنصة برنامج SEU Velocity.',
              'تهدف هذه السياسة إلى توضيح كيفية جمع المعلومات الشخصية للمشاركين، وآلية استخدامها، والإجراءات المتّبعة للحفاظ على سرية هذه البيانات.',
              'باستخدامك للمنصة أو التسجيل في البرنامج، فإنك توافق على سياسة الخصوصية الموضّحة في هذه الصفحة.',
            ],
          },
          {
            title: 'البيانات التي يتم جمعها',
            subtitle: 'ما نوع البيانات التي قد يتم جمعها؟',
            body: ['عند التسجيل في برنامج SEU Velocity قد يُطلب منك تزويدنا ببعض المعلومات الأساسية مثل:'],
            list: ['الاسم الكامل', 'البريد الإلكتروني', 'رقم الهاتف', 'جهة العمل أو الدراسة', 'التخصص أو المجال المهني', 'بيانات الفريق أو المشروع', 'أي معلومات أخرى يتم إدخالها أثناء التسجيل'],
            extra: {
              title: 'كيف يتم جمع البيانات؟',
              body: [
                'قد يتم جمع المعلومات بالطرق التالية:',
              ],
              list: [
                'عبر التسجيل في المنصة — حيث يقوم المشارك بإدخال بياناته الشخصية عند التسجيل.',
                'عبر استخدام المنصة — قد يتم تسجيل بعض بيانات الاستخدام مثل تاريخ ووقت الدخول، الصفحات التي يتم زيارتها، ومراحل التقديم والمشاركة في البرنامج، وذلك لأغراض تشغيلية وتحليلية.',
              ],
            },
          },
          {
            title: 'استخدام المعلومات',
            body: ['يتم استخدام البيانات التي يتم جمعها لأغراض مرتبطة بتنظيم البرنامج، مثل:'],
            list: [
              'إدارة التسجيل في البرنامج',
              'التواصل مع المشاركين',
              'إرسال الإشعارات والتحديثات المتعلقة بالبرنامج',
              'تنظيم جلسات الإرشاد وورش العمل',
              'تقييم المشاريع المشاركة',
              'تحسين تجربة المنصة والبرامج المستقبلية',
            ],
            footer: 'ولا يتم استخدام البيانات لأي أغراض خارج نطاق البرنامج دون موافقة المستخدم أو وفق ما يقتضيه النظام.',
          },
          {
            title: 'حماية البيانات وسريتها',
            body: [
              'تلتزم الجهة المنظّمة باتخاذ الإجراءات المناسبة لحماية البيانات الشخصية من الوصول غير المصرح به أو الاستخدام غير المشروع.',
              'كما يتم التعامل مع جميع المعلومات المقدّمة بسرية تامة، ولا يتم الإفصاح عنها إلا في الحالات التي يقتضيها النظام أو عند الضرورة لتنفيذ متطلبات البرنامج.',
            ],
          },
          {
            title: 'الاحتفاظ بالبيانات',
            body: [
              'يتم الاحتفاظ بالبيانات الشخصية خلال فترة إدارة وتنفيذ البرنامج، وقد يتم الاحتفاظ بها لفترة إضافية لأغراض تنظيمية أو نظامية أو لأغراض تحليلية تتعلق بتطوير البرامج المستقبلية.',
            ],
          },
          {
            title: 'تحديث سياسة الخصوصية',
            body: [
              'تحتفظ الجهة المنظّمة بالحق في تعديل أو تحديث سياسة الخصوصية في أي وقت.',
              'وسيتم نشر أي تحديثات على هذه الصفحة، ويُعد استمرار استخدام المنصة بعد نشر التعديلات موافقةً ضمنيةً على النسخة المحدّثة من السياسة.',
            ],
          },
          {
            title: 'التواصل والاستفسارات',
            body: [
              'في حال وجود أي استفسارات حول سياسة الخصوصية أو كيفية استخدام البيانات، يمكن التواصل مع فريق البرنامج عبر:',
            ],
            contact: true,
          },
        ],
      },
    },
  },

  en: {
    dir: 'ltr' as const,
    lang: 'en',
    meta: {
      title: 'SEU Velocity | Sports Tech Innovation Program',
      description:
        'SEU Velocity — an intensive 7-day program to turn sports-sector challenges into viable technology solutions. An initiative by Saudi Electronic University.',
    },
    nav: {
      brand: 'SEU Velocity',
      back: { label: 'SEU Accelerator', href: EN_ROOT },
      sections: [
        { label: 'About', href: '#why' },
        { label: 'Journey', href: '#journey' },
        { label: 'Tracks', href: '#tracks' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'FAQ', href: '#faq' },
      ],
      register: { label: 'Apply Now', href: '/velocity/en/register/' },
      langSwitch: 'ع',
      langSwitchHref: '/velocity/ar/',
    },
    hero: {
      eyebrow: 'An initiative by Saudi Electronic University',
      title: 'SEU Velocity',
      editionBadge: 'First Edition — first SportsTech-focused innovation program',
      lead: '4 days online. Top teams come to Riyadh for the final 3 days. Build your prototype, present to industry experts, and get priority consideration for the SEU SportsTech Accelerator.',
      ctaPrimary: { label: 'Apply Now', href: '/velocity/en/register/' },
      deadlineLabel: 'Registration closes',
      deadlineValue: 'June 15',
      priorityDeadlineLabel: 'Priority deadline',
      priorityDeadlineValue: 'May 31',
    },
    countdown: {
      title: 'Program starts in',
      units: { days: 'days', hours: 'hours', minutes: 'min', seconds: 'sec' },
      live: 'The program is live now',
    },
    infobar: [
      { icon: 'clock', label: 'Duration', value: '7 days total' },
      { icon: 'cloud', label: 'Online', value: '4 days virtual' },
      { icon: 'pin', label: 'On-site Riyadh', value: '3 days (Top 10 teams)' },
      { icon: 'trophy', label: 'Prizes', value: 'Up to SAR 50,000' },
    ],
    why: {
      title: 'About Velocity',
      lead: 'An intensive program designed to support innovators and entrepreneurs in building technology solutions for the sports sector — turning ideas into viable prototypes with guidance from sector experts and the opportunity to present to partners from the sports ecosystem.',
      stats: [
        { value: '7', label: 'Intensive days' },
        { value: '4', label: 'Challenge tracks' },
        { value: '+20', label: 'Mentors & experts' },
        { value: '50,000', label: 'SAR prize pool' },
      ],
    },
    selection: {
      title: 'How selection works',
      subtitle: 'From application to Demo Day in Riyadh',
      steps: [
        { n: '1', title: 'Apply online', desc: 'Submit your application and idea via the form.' },
        { n: '2', title: 'Join the virtual sprint', desc: '4 days of remote prototyping with all participants.' },
        { n: '3', title: 'Top 10 teams shortlisted', desc: 'Finalists announced and invited on-site.' },
        { n: '4', title: 'Finalists come to Riyadh', desc: 'Three on-site days, ending with Demo Day and prizes.' },
      ],
      footer: 'Top teams receive prizes and priority consideration for the SEU SportsTech Accelerator.',
    },
    tracks: {
      title: 'Challenge Tracks',
      lead: 'Pick your track and build a solution that moves the sports ecosystem forward.',
      legend: {
        examples: 'Challenge examples:',
        types: 'Proposed solution types',
        who: 'Beneficiaries',
        deliverables: 'Expected deliverables',
      },
      items: [
        {
          n: '01',
          title: 'Sports Infrastructure & Facilities',
          desc: 'Solutions for venue operations, bookings and ticketing, systems integration, and improving broadcast readiness.',
          examples: [
            'Integrated platform for managing sports-venue reservations',
            'Solutions integrating live broadcast feeds with stadium data',
            'Platform for optimising energy use in stadiums',
            'Smart ticketing system that prevents fraud',
            'Predictive-maintenance app for venues',
            'Smart parking management system for sports events',
          ],
          types: 'Digital platforms, IoT apps, integrated management systems, predictive-AI solutions',
          who: 'Sports venues, clubs, Entertainment Authority, investors',
          deliverables: 'Working booking model, feasibility report, execution plan',
        },
        {
          n: '02',
          title: 'Talent Discovery & Nurturing',
          desc: 'Solutions for scouting talent, registering players, evaluating performance, and enabling secure data sharing.',
          examples: [
            'AI-powered talent-scouting platform',
            'Unified performance-evaluation system for sports academies',
            'Solution linking talent to local and international pro opportunities',
            'App to register rising players and track their progression',
            'Secure platform for sharing player data between clubs',
          ],
          types: 'AI/ML platforms, tracking apps, video-analysis systems, Blockchain for data',
          who: 'Sports federations, academies, rising players, scouts',
          deliverables: 'Smart evaluation model, MVP platform, analytics report',
        },
        {
          n: '03',
          title: 'Developing Current Athletes',
          desc: 'Solutions for monitoring athletes\' performance and health, continuous training, and rehabilitation after injuries.',
          examples: [
            'App for monitoring athletes\' mental and physical health',
            'System for managing post-injury rehabilitation programs',
            'Video-analysis platform for tactical training',
            'AI-powered personalised training platform',
            'Wearables solutions for real-time performance tracking',
          ],
          types: 'Health apps, wearables, smart coaching platforms, data-analytics systems',
          who: 'Professional athletes, coaches, clubs, sports physicians',
          deliverables: 'Tracking app, analytics dashboard, smart rehab plan',
        },
        {
          n: '04',
          title: 'Fan Engagement & Experience',
          desc: 'Solutions for the fan\'s digital journey — from buying a ticket to the in-stadium experience, plus loyalty and engagement programs.',
          examples: [
            'Integrated app for the fan experience from home to stadium',
            'Augmented-reality solutions for the stadium experience',
            'Platform for exclusive content and live statistics',
            'Loyalty-program platform for sports clubs',
            'Interactive system for fans during matches',
            'App for predicting match outcomes and fan challenges',
          ],
          types: 'Mobile apps, AR/VR, gamification platforms, loyalty systems',
          who: 'Fans, clubs, sponsors, media ecosystem',
          deliverables: 'Fan-experience app, loyalty model, AR experience',
        },
      ],
    },
    journey: {
      title: 'A 7-day journey',
      subtitle: '4 days online + 3 days on-site in Riyadh',
      virtualLabel: 'Virtual',
      onsiteLabel: 'On-site · Riyadh',
      finalistsCalloutLabel: 'Top 10 teams announced Thursday evening',
      steps: [
        { day: '1', date: 'Jun 29', title: 'Kick-off', desc: 'Program launch and challenge briefings.', mode: 'virtual' as const },
        { day: '2', date: 'Jun 30', title: 'Build', desc: 'Idea development and prototype construction.', mode: 'virtual' as const },
        { day: '3', date: 'Jul 1', title: 'Validate', desc: 'User testing, mentor feedback, and refinements.', mode: 'virtual' as const },
        { day: '4', date: 'Jul 2', title: 'Finalists', desc: 'Final virtual review. Top 10 teams selected and announced Thursday evening.', mode: 'virtual' as const, finalists: true },
        { day: '5', date: 'Jul 5', title: 'Preparation', desc: 'On-site full-day hackathon sprint in Riyadh — final product polish.', mode: 'onsite' as const },
        { day: '6', date: 'Jul 6', title: 'Pitch Prep', desc: 'Live pitch rehearsal, investor Q&A practice, mentor final sessions.', mode: 'onsite' as const },
        { day: '7', date: 'Jul 7', title: 'Demo Day', desc: 'Final presentations to the jury, awards ceremony, accelerator offers revealed.', mode: 'onsite' as const },
      ],
    },
    benefits: {
      title: 'What SEU Velocity offers',
      subtitle: 'Exclusive perks for every participant',
      items: [
        { icon: 'certificate', title: 'Accredited certificates', desc: 'Participation and achievement certificates for all participants.' },
        { icon: 'rocket', title: 'Accelerator fast-track', desc: 'A chance to join the SEU SportsTech Accelerator for qualifying teams.' },
        { icon: 'partners', title: 'Partnership opportunities', desc: 'Partnership opportunities with leading organizations in the field.' },
        { icon: 'mentor', title: 'Intensive mentorship', desc: 'Guidance from specialist mentors and experts throughout Velocity.' },
        { icon: 'trophy', title: 'Prizes for winning teams', desc: 'Cash prizes — pool up to SAR 50,000 for standout teams.' },
        { icon: 'support', title: 'Ongoing support after the program', desc: 'Continued mentorship for finalists, plus SEU alumni network access and priority for future programs and cohorts for all participants.' },
      ],
    },
    leaveWith: {
      title: 'What you leave with',
      subtitle: 'Tangible outputs by the end of the program',
      items: [
        { icon: 'rocket', title: 'Prototype / MVP concept', desc: 'A working artifact that brings your idea to life.' },
        { icon: 'target', title: 'Validated problem statement', desc: 'A problem definition backed by user evidence.' },
        { icon: 'media', title: 'Pitch presentation', desc: 'Investor-ready deck and narrative.' },
        { icon: 'mentor', title: 'Expert jury feedback', desc: 'Detailed evaluation from judges and mentors.' },
        { icon: 'rocket', title: 'Pathway to accelerator', desc: 'Priority consideration for the SEU SportsTech Accelerator.' },
      ],
    },
    eligibility: {
      title: 'Eligibility rules',
      subtitle: 'Who can apply',
      items: [
        'Minimum age 18+',
        'All nationalities welcome',
        'Idea / MVP-stage projects welcome',
        'Registered companies are also welcome',
      ],
      note: 'Virtual days (1–4) are open globally. Finalists must travel to Riyadh for Days 5–7.',
    },
    audience: {
      title: 'Who should apply?',
      subtitle: 'Open to individuals and teams alike',
      primary: {
        label: 'Primary',
        sublabel: 'Who this program is for:',
        items: [
          { icon: 'bulb', title: 'Entrepreneurs', desc: 'Bring an idea — leave with a real product.' },
          { icon: 'student', title: 'Students', desc: 'Get hands-on experience building real solutions.' },
          { icon: 'spark', title: 'Aspiring entrepreneurs', desc: 'Turn ambition into a tangible project.' },
        ],
      },
      specialisations: {
        label: 'Specialisations',
        sublabel: 'What skills do teams need?',
        items: [
          { icon: 'code', title: 'Developers', desc: 'Web / Mobile / Data' },
          { icon: 'design', title: 'Designers', desc: 'UI / UX' },
          { icon: 'media', title: 'Content creators', desc: 'Sports media & storytelling' },
          { icon: 'support', title: 'Support specialists', desc: 'Sports domain, operations' },
          { icon: 'ai', title: 'AI / ML experts', desc: 'AI & Machine Learning' },
        ],
      },
    },
    technologies: {
      title: 'Technologies supported',
      subtitle: 'A ready-to-use technical stack for building real solutions',
      items: [
        { icon: 'ai', title: 'Artificial Intelligence', desc: 'AI / Machine Learning for intelligent solutions.' },
        { icon: 'data', title: 'Data Analytics', desc: 'Turn data into precise decisions.' },
        { icon: 'wearable', title: 'Wearables', desc: 'Wearable devices and real-time data.' },
        { icon: 'mobile', title: 'Mobile Development', desc: 'iOS & Android apps for fans, athletes, and venue-facing teams.' },
        { icon: 'iot', title: 'IoT & Smart Venue Tech', desc: 'Connected devices, sensor integration, stadium and facility systems.' },
        { icon: 'data', title: 'Sports Data APIs', desc: 'Live game data, player stats, performance feeds, third-party integrations.' },
        { icon: 'vision', title: 'Computer Vision', desc: 'Player tracking, movement analysis, automated broadcast tools.' },
      ],
    },
    accelPipeline: {
      title: 'From Velocity to the Accelerator',
      subtitle: 'A connected path from prototype to full accelerator',
      velocity: {
        title: 'SEU Velocity',
        desc: '7-day innovation sprint',
        bullets: ['Idea → working prototype', 'Mentorship & expert jury', 'Prizes for top teams'],
        footer: 'Top teams get priority consideration for the accelerator',
      },
      arrow: 'leads into',
      accelerator: {
        title: 'SEU SportsTech Accelerator',
        desc: 'Phase 2 — October 2026',
        bullets: ['Full accelerator program', 'Funding & ecosystem partners', 'Startup-building support'],
        applicationsOpenLabel: 'Applications open',
        applicationsOpenDate: 'Coming soon',
        learnMore: 'Learn more about the accelerator',
        href: EN_ROOT,
      },
      note: 'Without this section the accelerator feels disconnected from Velocity — this is the through-line.',
    },
    partners: {
      title: 'Partners & supporters',
      items: [
        { name: 'Ministry of Communications & IT', logo: 'mcit.png', invert: true },
        { name: 'Ministry of Sport', logo: 'ministry-sport.svg', invert: true },
        { name: 'Saudi Sports Culture Federation', logo: 'cultural-sport.webp', invert: false },
      ],
    },
    prizes: {
      title: 'Winning team prizes',
      lead: 'Winning teams receive cash prizes in recognition of their innovation and excellence.',
      currency: 'SAR',
      items: [
        { rank: '1st place', tier: 'gold' as const, amount: '50,000', highlight: true },
        { rank: '2nd place', tier: 'silver' as const, amount: '30,000' },
        { rank: '3rd place', tier: 'bronze' as const, amount: '20,000' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Who can join the program?',
          a: 'Entrepreneurs, students, developers, designers, content creators, and sports professionals are all welcome. No prior startup experience required.',
        },
        {
          q: 'Is the program in person?',
          a: 'The first 4 days (June 29 – July 2) are fully virtual. The top 10 finalist teams are selected on July 2 and come to Riyadh for the final 3 days (July 5–7). Only finalists need to travel to Riyadh.',
        },
        {
          q: 'How many members can a team have?',
          a: 'You can take part solo, or as a team of 2 to 5 members.',
        },
        {
          q: 'How are projects evaluated?',
          a: 'Projects are assessed against criteria including: innovation, feasibility, added value to the sports sector, prototype quality, and the quality of the final pitch.',
        },
        {
          q: 'Who owns the project rights?',
          a: 'Intellectual property rights remain fully owned by the project creators.',
        },
        {
          q: 'Are there workshops?',
          a: 'Yes — the program includes workshops and mentoring sessions to help develop your project.',
        },
        {
          q: 'Can I submit more than one project?',
          a: 'Yes — you may submit multiple ideas, with a separate registration per project.',
        },
        {
          q: 'Can participants from outside Saudi Arabia register?',
          a: 'Yes. Virtual days (1–4) are open globally. Finalists must travel to Riyadh for Days 5–7. The program does not cover transportation, travel, or accommodation arrangements.',
        },
        {
          q: 'Which language is used for pitches?',
          a: 'Pitches may be delivered in Arabic or English.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to take on sports challenges and build a real solution?',
      lead: 'Apply now and start your Velocity journey — 7 days of innovation, development and pitching to sports-ecosystem experts.',
      ctaPrimary: { label: 'Apply Now', href: '/velocity/en/register/' },
    },
    footer: {
      tagline: 'Follow us',
      socials: [
        { label: 'X', icon: 'x', href: 'https://x.com/abusiness_seu?s=11' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/seu-accelerator-477324389/' },
      ],
      links: [
        { label: 'About SEU', href: `${EN_ROOT}#about` },
        { label: 'Accelerator Benefits', href: `${EN_ROOT}#features` },
        { label: 'For Startups', href: `${EN_ROOT}#startup` },
        { label: 'For Investors', href: `${EN_ROOT}#investor` },
      ],
      legal: [
        { label: 'Terms & Conditions', href: '/velocity/en/terms/' },
        { label: 'Privacy Policy', href: '/velocity/en/privacy/' },
      ],
      rights: '© 2026 SEU. All rights reserved.',
    },
    legal: {
      backToHome: 'Back to home',
      contactEmail: 'BA.RSI@seu.edu.sa',
      contactWebsite: { label: 'sportstechaccelerator.seu.edu.sa', href: EN_ROOT },
      terms: {
        title: 'Terms & Conditions',
        program: 'SEU Velocity — SEU Sports Tech Accelerator',
        intro:
          'Registering or participating in the program constitutes acceptance of all terms and conditions set out on this page.',
        sections: [
          {
            title: 'About the program',
            body: [
              'SEU Velocity is an innovation program organised by the Sports Tech Accelerator of Saudi Electronic University. It aims to support the development of innovative technology solutions in the sports sector through an intensive program combining mentorship, development and project pitching.',
            ],
          },
          {
            title: 'Eligibility',
            body: ['Participation is open to individuals and teams with an interest in developing innovative sports-sector solutions, including:'],
            list: ['Entrepreneurs', 'Developers', 'Designers', 'Researchers and students', 'Anyone interested in technology and innovation'],
            footer: 'Participation is allowed individually or as part of a team.',
          },
          {
            title: 'Team formation',
            body: ['Participants may register individually or as part of a team, provided that:'],
            list: [
              'The team has an appropriate number of members to deliver the project.',
              'All team members comply with the program’s terms and conditions.',
              'An official team representative is designated to communicate with the organiser.',
            ],
          },
          {
            title: 'Program format',
            body: ['SEU Velocity runs in a hybrid format, combining virtual participation with in-person attendance at certain stages. The program may include:'],
            list: ['Introductory sessions', 'Workshops', 'Mentoring sessions', 'Prototype development', 'Presentations before a jury'],
            footer: 'The organiser may adjust the program schedule or delivery method when required.',
          },
          {
            title: 'Project submissions',
            body: ['Submitted projects must meet the following requirements:'],
            list: ['Be an original, non-plagiarised idea.', 'Not infringe any third-party intellectual property rights.', 'Be related to the sports sector or sports technology.'],
            footer: 'The organising committee may exclude any project that fails to meet these criteria.',
          },
          {
            title: 'Evaluation & judging',
            body: ['Projects are evaluated by a specialist committee against criteria that may include:'],
            list: ['Level of innovation', 'Feasibility', 'Added value to the sports sector', 'Prototype quality', 'Quality of the final pitch'],
            footer: 'Decisions of the judging committee are final.',
          },
          {
            title: 'Intellectual property',
            body: [
              'All intellectual property rights in projects submitted during the program remain owned by their creators.',
              'However, the organiser may use general information related to participating projects for media and promotional purposes connected to the program.',
            ],
          },
          {
            title: 'Legal responsibility',
            body: ['Participants bear full responsibility for:'],
            list: ['Accuracy of information provided.', 'Originality of projects.', 'Not infringing the intellectual or legal rights of any third party.'],
            footer: 'The organiser bears no legal responsibility for disputes between participants or with other parties.',
          },
          {
            title: 'Use of images & content',
            body: [
              'Participants agree to the possible use of their images or program footage within the program’s media or documentary materials.',
            ],
          },
          {
            title: 'Changes to terms',
            body: [
              'The organiser reserves the right to modify or update these terms and conditions when required. Updates will be published on the program’s official website.',
            ],
          },
        ],
      },
      privacy: {
        title: 'Privacy Policy',
        program: 'SEU Velocity — SEU Sports Tech Accelerator',
        sections: [
          {
            title: 'Introduction',
            body: [
              'The SEU Sports Tech Accelerator at Saudi Electronic University is committed to protecting the privacy of participants and users of the SEU Velocity platform.',
              'This policy explains how personal information is collected, how it is used, and the measures taken to keep it confidential.',
              'By using the platform or registering for the program, you agree to the privacy policy set out on this page.',
            ],
          },
          {
            title: 'Data collected',
            subtitle: 'What data may be collected?',
            body: ['When registering for SEU Velocity you may be asked to provide basic information such as:'],
            list: ['Full name', 'Email', 'Phone number', 'Work or study affiliation', 'Specialisation or professional field', 'Team or project details', 'Any other information entered during registration'],
            extra: {
              title: 'How data is collected',
              body: [
                'Data may be collected in the following ways:',
              ],
              list: [
                'Through platform registration — where participants enter their personal information at sign-up.',
                'Through platform usage — some usage data may be recorded such as sign-in date and time, pages visited, and stages of submission and participation, for operational and analytical purposes.',
              ],
            },
          },
          {
            title: 'Use of information',
            body: ['Collected data is used for purposes related to running the program, such as:'],
            list: [
              'Managing program registration',
              'Communicating with participants',
              'Sending program-related notifications and updates',
              'Organising mentoring and workshop sessions',
              'Evaluating participating projects',
              'Improving the platform experience and future programs',
            ],
            footer: 'Data is not used for purposes outside the scope of the program without the user’s consent or where required by law.',
          },
          {
            title: 'Data protection & confidentiality',
            body: [
              'The organiser takes appropriate measures to protect personal data from unauthorised access or unlawful use.',
              'All information provided is treated in strict confidence and is not disclosed except where required by law or necessary to deliver the program.',
            ],
          },
          {
            title: 'Data retention',
            body: [
              'Personal data is retained during the period of program administration and delivery, and may be kept for an additional period for regulatory or legal reasons, or for analytical purposes connected to improving future programs.',
            ],
          },
          {
            title: 'Updates to this policy',
            body: [
              'The organiser reserves the right to modify or update this privacy policy at any time.',
              'Updates will be posted on this page. Continued use of the platform after updates are posted constitutes implicit consent to the updated version of the policy.',
            ],
          },
          {
            title: 'Contact & enquiries',
            body: [
              'For any questions about this privacy policy or how data is used, you can contact the program team via:',
            ],
            contact: true,
          },
        ],
      },
    },
  },
} as const;

export type Content = (typeof content)[Locale];
