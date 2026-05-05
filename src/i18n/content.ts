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
        'سيو فيلوسيتي برنامج ابتكار مكثّف لمدة ٧ أيام لتطوير حلول تقنية تخدم القطاع الرياضي، بمبادرة من الجامعة السعودية الإلكترونية.',
    },
    nav: {
      brand: 'سيو فيلوسيتي',
      back: { label: 'مسرعة سيو', href: AR_ROOT },
      sections: [
        { label: 'عن البرنامج', href: '#why' },
        { label: 'الرحلة', href: '#journey' },
        { label: 'المسارات', href: '#tracks' },
        { label: 'المزايا', href: '#benefits' },
        { label: 'الأسئلة الشائعة', href: '#faq' },
      ],
      register: { label: 'سجّل الآن', href: '/velocity/ar/register/' },
      langSwitch: 'En',
      langSwitchHref: '/velocity/en/',
    },
    hero: {
      title: 'سيو فيلوسيتي',
      subtitle: 'أوّل برنامج ابتكار يركّز على التيكنولوجيا الرياضية',
      ctaPrimary: { label: 'سجّل الآن', href: '/velocity/ar/register/' },
    },
    countdown: {
      title: 'بداية البرنامج خلال',
      units: { days: 'يوم', hours: 'ساعة', minutes: 'دقيقة', seconds: 'ثانية' },
      live: 'البرنامج منطلق الآن',
    },
    infobar: [
      { icon: 'clock', label: 'المدة', value: '٧ أيام' },
      { icon: 'cloud', label: 'عن بُعد', value: '٤ أيام' },
      { icon: 'pin', label: 'المرحلة الحضورية', value: '٣ أيام في الرياض لأفضل ١٠ فرق' },
      { icon: 'trophy', label: 'الجوائز', value: '١٠٠٬٠٠٠', valuePrefix: 'حتى', currencyIcon: true },
    ],
    why: {
      title: 'ما هو فيلوسيتي؟',
      programName: 'برنامج SEU Velocity',
      paragraphs: [
        'هو برنامج مكثّف في مجال التقنية الرياضية، يجمع المبتكرين ورواد الأعمال والمطورين للعمل على تطوير حلول مبتكرة وتحويلها إلى مشاريع قابلة للاختبار في السوق.',
        'يوفر البرنامج بيئة عملية عالية التنفيذ، تجمع بين الإرشاد التطبيقي، والتجارب الواقعية، والعمل المباشر على تطوير المنتجات، بهدف بناء أساس قوي للانطلاق في قطاع الرياضة.',
      ],
    },
    selection: {
      title: 'آلية الاختيار',
      subtitle: 'من التقديم حتى العرض الختامي في الرياض',
      steps: [
        { n: '١', title: 'تقديم الفكرة', desc: 'إكمال نموذج التسجيل والتعريف بالفكرة والفريق.' },
        { n: '٢', title: 'التطوير والعمل على الفكرة', desc: 'تطوير الفكرة إلى نموذج أولي خلال ٤ أيام أونلاين مكثفة.' },
        { n: '٣', title: 'اختيار أفضل ١٠ فرق', desc: 'تُراجع المشاريع من قِبَل لجنة الخبراء ويُعلن عن الفرق المتأهلة.' },
        { n: '٤', title: 'النهائيات في الرياض', desc: '٣ أيام حضورية مكثفة تنتهي بالعرض الختامي وإعلان الفائزين.' },
      ],
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
          n: '٠١',
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
          n: '٠٢',
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
          n: '٠٣',
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
          n: '٠٤',
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
      title: 'رحلة البرنامج في ٧ أيام',
      subtitle: '٤ أيام عن بُعد + ٣ أيام حضوريًا في الرياض',
      virtualLabel: 'عن بُعد',
      onsiteLabel: 'حضوري · الرياض',
      finalistsCalloutLabel: 'إعلان أفضل ١٠ فرق',
      steps: [
        { day: '١', date: '٢٩ يونيو', title: 'الإطلاق', desc: 'انطلاق البرنامج، استعراض التحديات، وتحديد مسار العمل.', mode: 'virtual' as const },
        { day: '٢', date: '٣٠ يونيو', title: 'التطوير', desc: 'بدء العمل على الفكرة وتحويلها إلى نموذج أولي.', mode: 'virtual' as const },
        { day: '٣', date: '١ يوليو', title: 'التحقق', desc: 'اختبار الفكرة، جلسات إرشادية، وتحسين النموذج بناءً على الملاحظات.', mode: 'virtual' as const },
        { day: '٤', date: '٢ يوليو', title: 'إعلان المتأهلين', desc: 'مراجعة المشاريع واختيار أفضل ١٠ فرق للانتقال إلى المرحلة الحضورية.', mode: 'virtual' as const, finalists: true },
        { day: '٥', date: '٥ يوليو', title: 'الاستعداد النهائي', desc: 'يوم حضوري مكثّف في الرياض لصقل المنتج واستكمال التجهيزات.', mode: 'onsite' as const },
        { day: '٦', date: '٦ يوليو', title: 'الاستعداد للعرض', desc: 'بروفات العرض، جلسات مع المرشدين، والاستعداد للأسئلة والنقاش.', mode: 'onsite' as const },
        { day: '٧', date: '٧ يوليو', title: 'العرض الختامي', desc: 'تقديم المشاريع أمام لجنة التحكيم، ثم إعلان الفائزين.', mode: 'onsite' as const, demo: true },
      ],
    },
    benefits: {
      title: 'ماذا يقدّم لك سيو فيلوسيتي؟',
      subtitle: 'مزايا يحصل عليها جميع المشاركين',
      items: [
        { icon: 'certificate', title: 'شهادات معتمدة', desc: 'شهادات مشاركة وإنجاز لجميع المشاركين.' },
        { icon: 'rocket', title: 'أولوية للمسرعة', desc: 'أولوية للنظر في الانضمام إلى مسرعة سيو للتكنولوجيا الرياضية للفرق المؤهلة.' },
        { icon: 'mentor', title: 'إرشاد مكثّف', desc: 'متابعة مباشرة من مرشدين وخبراء طوال فترة البرنامج.' },
        { icon: 'trophy', title: 'جوائز للفرق المتميزة', desc: 'جوائز نقدية للفرق التي تقدّم أفضل الحلول.' },
      ],
    },
    leaveWith: {
      title: 'ماذا ستخرج به من البرنامج؟',
      subtitle: 'مخرجات عملية بنهاية الرحلة',
      items: [
        { icon: 'rocket', title: 'نموذج أولي أو MVP', desc: 'مخرج عملي يترجم فكرتك إلى حل قابل للعرض.' },
        { icon: 'target', title: 'فهم أوضح للمشكلة', desc: 'صياغة أدق للمشكلة مدعومة بتجارب وملاحظات حقيقية.' },
        { icon: 'media', title: 'عرض تقديمي جاهز', desc: 'عرض منظم يوضّح الفكرة والقيمة وخطة التنفيذ.' },
        { icon: 'mentor', title: 'ملاحظات خبراء', desc: 'تغذية راجعة مباشرة من لجنة التحكيم والمرشدين.' },
        { icon: 'rocket', title: 'فرصة للانتقال إلى المسرعة', desc: 'أولوية للنظر في الانضمام إلى مسرعة سيو للتكنولوجيا الرياضية.' },
      ],
    },
    audience: {
      title: 'الفئة المستهدفة وشروط الأهلية',
      description:
        'البرنامج مفتوح للأفراد والفرق من جميع أنحاء المملكة الذين يمتلكون فكرة أو مشروعًا مبكرًا في مجال التكنولوجيا الرياضية. نرحّب بالمؤسسين في المراحل الأولى والمبتكرين الطموحين.',
      cards: [
        {
          image: 'enthusiasts.jpg',
          title: 'المهتمون بالرياضة والتقنية',
          desc: 'أشخاص شغوفون بتقاطع الرياضة والتكنولوجيا والابتكار.',
        },
        {
          image: 'entrepreneurs.jpg',
          title: 'رواد الأعمال',
          desc: 'أصحاب الأفكار الريادية في مجال التكنولوجيا الرياضية.',
        },
        {
          image: 'designers.jpg',
          title: 'المصممون',
          desc: 'مصممو تجربة المستخدم وواجهات المنتجات الرقمية.',
        },
        {
          image: 'developers.jpg',
          title: 'المطورون والمهندسون',
          desc: 'مطورو البرمجيات والتطبيقات وأنظمة التقنية.',
        },
      ],
      eligibilityTitle: 'شروط الأهلية',
      eligibility: [
        'الالتزام بحضور جميع أيام البرنامج',
        'فكرة أو مشروع مبكر في SportsTech',
        'فريق من ٢ إلى ٥ أعضاء',
      ],
    },
    accelPipeline: {
      title: 'من فيلوسيتي إلى المسرعة',
      subtitle: 'مسار يبدأ من الفكرة وينتهي بفرصة تسريع حقيقية',
      velocity: {
        title: 'سيو فيلوسيتي',
        desc: 'برنامج ابتكار مكثّف لمدة ٧ أيام',
        bullets: ['من الفكرة إلى النموذج الأولي', 'إرشاد متخصص ولجنة تحكيم', 'جوائز للفرق المتميزة'],
        footer: 'أفضل الفرق تحصل على أولوية للنظر في الانضمام إلى المسرعة',
      },
      arrow: 'ثم تنتقل إلى',
      accelerator: {
        title: 'مسرعة سيو للتكنولوجيا الرياضية',
        desc: 'أكتوبر ٢٠٢٦',
        bullets: ['برنامج مسرعة متكامل', 'تمويل وشركاء من المنظومة', 'دعم لبناء الشركات الناشئة'],
        applicationsOpenLabel: 'فتح باب التقديم',
        applicationsOpenDate: 'قريبًا',
        learnMore: 'تعرّف على المسرعة',
        href: AR_ROOT,
      },
      note: 'هذا المسار يوضّح كيف يمكن أن تنتقل أفضل الفرق من فيلوسيتي إلى المرحلة التالية في المسرعة.',
    },
    partners: {
      title: 'الشركاء والجهات الداعمة',
      items: [
        { name: 'وزارة الاتصالات وتقنية المعلومات', logo: 'mcit.png', invert: true },
        { name: 'وزارة الرياضة', logo: 'ministry-sport.svg', invert: true },
      ],
    },
    prizes: {
      title: 'جوائز الفرق الفائزة',
      lead: 'جوائز نقدية تقديرًا للفرق الأكثر تميّزًا في البرنامج.',
      currency: 'ر.س',
      items: [
        { rank: 'المركز الأول', tier: 'gold' as const, amount: '٥٠٬٠٠٠', highlight: true },
        { rank: 'المركز الثاني', tier: 'silver' as const, amount: '٣٠٬٠٠٠' },
        { rank: 'المركز الثالث', tier: 'bronze' as const, amount: '٢٠٬٠٠٠' },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          q: 'من يمكنه المشاركة في البرنامج؟',
          a: 'البرنامج مفتوح لرواد الأعمال والطلاب والمطورين والمصممين وصنّاع المحتوى والمهنيين في القطاع الرياضي. ولا يُشترط أن تكون لديك خبرة سابقة في تأسيس الشركات الناشئة.',
        },
        {
          q: 'هل البرنامج حضوري؟',
          a: 'تُقام الأيام الأربعة الأولى من ٢٩ يونيو إلى ٢ يوليو عن بُعد بالكامل. وفي ٢ يوليو يتم اختيار أفضل ١٠ فرق للانتقال إلى الرياض والمشاركة في الأيام الثلاثة الختامية من ٥ إلى ٧ يوليو. الحضور في الرياض مطلوب فقط للفرق المتأهلة.',
        },
        {
          q: 'كم عدد أعضاء الفريق؟',
          a: 'يمكن المشاركة بشكل فردي أو ضمن فريق يتكوّن من ٢ إلى ٥ أعضاء.',
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
          a: 'نعم، المشاركة في الأيام من ١ إلى ٤ متاحة عن بُعد من أي مكان. أما الفرق المتأهلة، فيلزمها السفر إلى الرياض للمشاركة في الأيام من ٥ إلى ٧. كما أن البرنامج لا يغطي تكاليف السفر أو السكن.',
        },
        {
          q: 'ما لغة العرض؟',
          a: 'يمكن تقديم العروض باللغة العربية أو الإنجليزية.',
        },
      ],
    },
    finalCta: {
      title: 'جاهز لتبنّي تحديات الرياضة وبناء حل حقيقي؟',
      lead: 'سجّل الآن وابدأ رحلتك مع سيو فيلوسيتي في ٧ أيام من التطوير والإرشاد والعرض أمام خبراء المنظومة الرياضية.',
      ctaPrimary: { label: 'سجّل الآن', href: '/velocity/ar/register/' },
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
      rights: '© ٢٠٢٦ سيو. جميع الحقوق محفوظة.',
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
      register: { label: 'Register Now', href: '/velocity/en/register/' },
      langSwitch: 'ع',
      langSwitchHref: '/velocity/ar/',
    },
    hero: {
      title: 'SEU Velocity',
      subtitle: 'The first innovation program focused on Sports Technology',
      ctaPrimary: { label: 'Register Now', href: '/velocity/en/register/' },
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
      { icon: 'trophy', label: 'Prizes', value: '100,000', valuePrefix: 'Up to', currencyIcon: true },
    ],
    why: {
      title: 'What is Velocity?',
      programName: 'SEU Velocity Program',
      paragraphs: [
        'An intensive program in sports technology that brings together innovators, entrepreneurs, and developers to build innovative solutions and turn them into market-testable projects.',
        'The program provides a high-execution practical environment that combines applied mentorship, real-world experimentation, and hands-on product development — building a strong foundation for launching into the sports sector.',
      ],
    },
    selection: {
      title: 'How selection works',
      subtitle: 'From application to Demo Day in Riyadh',
      steps: [
        { n: '1', title: 'Idea submission', desc: 'Complete the application form and introduce your idea, team, and chosen challenge track.' },
        { n: '2', title: 'Development & build', desc: 'Develop your idea into a prototype over 4 intensive online days.' },
        { n: '3', title: 'Top 10 teams selected', desc: 'Projects reviewed by expert jury; top 10 teams announced for on-site phase.' },
        { n: '4', title: 'Finals in Riyadh', desc: '3 intensive on-site days ending with Demo Day and winners announcement.' },
      ],
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
      finalistsCalloutLabel: 'Top 10 teams announced',
      steps: [
        { day: '1', date: 'Jun 29', title: 'Kick-off', desc: 'Program launch and challenge briefings.', mode: 'virtual' as const },
        { day: '2', date: 'Jun 30', title: 'Build', desc: 'Idea development and prototype construction.', mode: 'virtual' as const },
        { day: '3', date: 'Jul 1', title: 'Validate', desc: 'User testing, mentor feedback, and refinements.', mode: 'virtual' as const },
        { day: '4', date: 'Jul 2', title: 'Finalists', desc: 'Final virtual review. Top 10 teams selected and announced.', mode: 'virtual' as const, finalists: true },
        { day: '5', date: 'Jul 5', title: 'Preparation', desc: 'On-site full-day hackathon sprint in Riyadh — final product polish.', mode: 'onsite' as const },
        { day: '6', date: 'Jul 6', title: 'Pitch Prep', desc: 'Live pitch rehearsal, investor Q&A practice, mentor final sessions.', mode: 'onsite' as const },
        { day: '7', date: 'Jul 7', title: 'Demo Day', desc: 'Final presentations to the jury, awards ceremony, accelerator offers revealed.', mode: 'onsite' as const, demo: true },
      ],
    },
    benefits: {
      title: 'What SEU Velocity offers',
      subtitle: 'Exclusive perks for every participant',
      items: [
        { icon: 'certificate', title: 'Accredited certificates', desc: 'Participation and achievement certificates for all participants.' },
        { icon: 'rocket', title: 'Accelerator fast-track', desc: 'A chance to join the SEU SportsTech Accelerator for qualifying teams.' },
        { icon: 'mentor', title: 'Intensive mentorship', desc: 'Guidance from specialist mentors and experts throughout Velocity.' },
        { icon: 'trophy', title: 'Prizes for winning teams', desc: 'Cash prizes — pool up to SAR 100,000 for standout teams.' },
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
    audience: {
      title: 'Target Audience & Eligibility',
      description:
        'The program is open to individuals and teams across Saudi Arabia who have an idea or early-stage project in sports technology. We welcome early-stage founders and ambitious innovators.',
      cards: [
        {
          image: 'enthusiasts.jpg',
          title: 'Sports & Tech Enthusiasts',
          desc: 'Those passionate about the intersection of sports, technology, and innovation.',
        },
        {
          image: 'entrepreneurs.jpg',
          title: 'Entrepreneurs',
          desc: 'Founders with entrepreneurial ideas in sports technology.',
        },
        {
          image: 'designers.jpg',
          title: 'Designers',
          desc: 'UX/UI and digital product designers.',
        },
        {
          image: 'developers.jpg',
          title: 'Developers & Engineers',
          desc: 'Software, app, and technical systems developers.',
        },
      ],
      eligibilityTitle: 'Eligibility',
      eligibility: [
        'Commitment to attend all program days',
        'Early-stage idea or project in SportsTech',
        'Team of 2 to 5 members',
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
        desc: 'October 2026',
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
      lead: 'Register now and start your Velocity journey — 7 days of innovation, development and pitching to sports-ecosystem experts.',
      ctaPrimary: { label: 'Register Now', href: '/velocity/en/register/' },
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
