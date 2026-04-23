import type { Locale } from './content';

export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'url'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox-group'
  | 'checkbox-single'
  | 'number';

export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  help?: string;
  options?: SelectOption[];
  wordLimit?: number;
  rows?: number;
  min?: number;
  max?: number;
  dependsOn?: { name: string; equals: string };
}

export interface SectionSchema {
  number: string;
  title: string;
  fields: FieldSchema[];
}

export interface RegisterCopy {
  meta: { title: string; description: string };
  header: {
    eyebrow: string;
    title: string;
    lead: string;
    backToHome: string;
  };
  sections: SectionSchema[];
  submit: { label: string; loading: string };
  success: { title: string; body: string; cta: string };
  error: { generic: string };
  validation: {
    required: string;
    invalidEmail: string;
    invalidUrl: string;
    wordLimitExceeded: (limit: number) => string;
  };
  wordCounter: (used: number, limit: number) => string;
}

export const registerContent: Record<Locale, RegisterCopy> = {
  ar: {
    meta: {
      title: 'نموذج التسجيل | سيو فيلوسيتي',
      description: 'سجّل في برنامج SEU Velocity للتكنولوجيا الرياضية.',
    },
    header: {
      eyebrow: 'نموذج التسجيل',
      title: 'سجّل في برنامج سيو فيلوسيتي',
      lead: 'عبّئ النموذج أدناه للمشاركة في البرنامج. جميع الحقول المميزة بعلامة (*) إلزامية.',
      backToHome: 'العودة للرئيسية',
    },
    sections: [
      {
        number: '1',
        title: 'المعلومات الأساسية',
        fields: [
          { name: 'fullName', label: 'الاسم الكامل', type: 'text', required: true },
          { name: 'email', label: 'البريد الإلكتروني', type: 'email', required: true },
          { name: 'phone', label: 'رقم الجوال', type: 'tel', required: true, placeholder: '+966' },
          { name: 'location', label: 'المدينة / الدولة', type: 'text', required: true },
          {
            name: 'status',
            label: 'الحالة',
            type: 'select',
            required: true,
            options: [
              { value: 'student', label: 'طالب' },
              { value: 'employee', label: 'موظف' },
              { value: 'entrepreneur', label: 'رائد أعمال' },
              { value: 'other', label: 'أخرى' },
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'معلومات التقديم',
        fields: [
          {
            name: 'applicationType',
            label: 'نوع التقديم',
            type: 'radio',
            required: true,
            options: [
              { value: 'individual', label: 'فردي' },
              { value: 'team', label: 'فريق' },
            ],
          },
          {
            name: 'teamName',
            label: 'اسم الفريق (إن وجد)',
            type: 'text',
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
          {
            name: 'teamSize',
            label: 'عدد أعضاء الفريق',
            type: 'number',
            min: 2,
            max: 5,
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
          {
            name: 'teamMembers',
            label: 'أسماء أعضاء الفريق + تخصصاتهم',
            type: 'textarea',
            rows: 4,
            placeholder: 'الاسم — التخصص (سطر لكل عضو)',
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
        ],
      },
      {
        number: '3',
        title: 'معلومات المشروع / الفكرة',
        fields: [
          { name: 'projectName', label: 'اسم المشروع / الفكرة', type: 'text', required: true },
          {
            name: 'sector',
            label: 'القطاع',
            type: 'select',
            required: true,
            options: [
              { value: 'sports-tech', label: 'Sports Tech' },
              { value: 'health-fitness', label: 'Health & Fitness' },
              { value: 'ai-data', label: 'AI & Data' },
              { value: 'fan-engagement', label: 'Fan Engagement' },
              { value: 'other', label: 'أخرى' },
            ],
          },
          {
            name: 'ideaDescription',
            label: 'وصف الفكرة',
            type: 'textarea',
            required: true,
            rows: 6,
            wordLimit: 150,
            help: 'حد أقصى 150 كلمة',
          },
          {
            name: 'problemSolved',
            label: 'المشكلة التي تحلها الفكرة',
            type: 'textarea',
            required: true,
            rows: 4,
          },
        ],
      },
      {
        number: '4',
        title: 'مرحلة المشروع',
        fields: [
          {
            name: 'projectStage',
            label: 'المرحلة الحالية',
            type: 'radio',
            required: true,
            options: [
              { value: 'idea', label: 'فكرة' },
              { value: 'prototype', label: 'Prototype' },
              { value: 'mvp', label: 'MVP' },
              { value: 'startup', label: 'شركة ناشئة' },
            ],
          },
        ],
      },
      {
        number: '6',
        title: 'الالتزام',
        fields: [
          {
            name: 'attendanceMode',
            label: 'الالتزام بحضور البرنامج كاملاً',
            type: 'radio',
            required: true,
            options: [
              { value: 'onsite', label: 'حضوري' },
              { value: 'online', label: 'أونلاين' },
            ],
          },
          {
            name: 'canAttendRiyadh',
            label: 'القدرة على الحضور في الرياض (لليومين الختاميين)',
            type: 'radio',
            required: true,
            options: [
              { value: 'yes', label: 'نعم' },
              { value: 'no', label: 'لا' },
            ],
          },
          {
            name: 'availableDuringProgram',
            label: 'التفرغ خلال فترة البرنامج',
            type: 'radio',
            required: true,
            options: [
              { value: 'yes', label: 'نعم، متفرغ بشكل كامل' },
              { value: 'partial', label: 'متفرغ جزئياً' },
              { value: 'no', label: 'لا' },
            ],
          },
        ],
      },
      {
        number: '7',
        title: 'الأهداف من المشاركة',
        fields: [
          {
            name: 'expectations',
            label: 'ما الذي تتوقع تحقيقه من البرنامج؟',
            type: 'textarea',
            required: true,
            rows: 4,
          },
          {
            name: 'goals',
            label: 'الأهداف (يمكن اختيار أكثر من هدف)',
            type: 'checkbox-group',
            required: true,
            options: [
              { value: 'develop-idea', label: 'تطوير فكرة' },
              { value: 'build-prototype', label: 'بناء نموذج' },
              { value: 'investor-pitch', label: 'تجهيز عرض استثماري' },
              { value: 'networking', label: 'بناء شبكة علاقات' },
            ],
          },
        ],
      },
      {
        number: '8',
        title: 'المرفقات (اختياري)',
        fields: [
          { name: 'pitchDeckUrl', label: 'رابط Pitch Deck', type: 'url', placeholder: 'https://' },
          { name: 'linkedinUrl', label: 'رابط LinkedIn', type: 'url', placeholder: 'https://linkedin.com/in/' },
          { name: 'videoUrl', label: 'فيديو تعريفي (إن وجد)', type: 'url', placeholder: 'https://' },
        ],
      },
      {
        number: '9',
        title: 'الإقرار',
        fields: [
          {
            name: 'ackAccuracy',
            label: 'أقر بأن المعلومات المقدمة صحيحة.',
            type: 'checkbox-single',
            required: true,
          },
          {
            name: 'ackCommitment',
            label: 'ألتزم بحضور البرنامج كاملاً.',
            type: 'checkbox-single',
            required: true,
          },
          {
            name: 'ackTerms',
            label: 'أوافق على شروط وأحكام البرنامج.',
            type: 'checkbox-single',
            required: true,
          },
        ],
      },
    ],
    submit: { label: 'إرسال التسجيل', loading: 'جارٍ الإرسال…' },
    success: {
      title: 'تم استلام طلبك بنجاح',
      body: 'شكرًا لتسجيلك في برنامج سيو فيلوسيتي. سنتواصل معك قريبًا عبر البريد الإلكتروني.',
      cta: 'العودة للرئيسية',
    },
    error: {
      generic: 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.',
    },
    validation: {
      required: 'هذا الحقل إلزامي',
      invalidEmail: 'البريد الإلكتروني غير صالح',
      invalidUrl: 'الرابط غير صالح (يجب أن يبدأ بـ https://)',
      wordLimitExceeded: (limit: number) => `تجاوزت الحد الأقصى (${limit} كلمة)`,
    },
    wordCounter: (used, limit) => `${used} / ${limit} كلمة`,
  },

  en: {
    meta: {
      title: 'Registration Form | SEU Velocity',
      description: 'Register for SEU Velocity — the sports-tech innovation program.',
    },
    header: {
      eyebrow: 'Registration form',
      title: 'Register for SEU Velocity',
      lead: 'Complete the form below to apply. Fields marked with (*) are required.',
      backToHome: 'Back to home',
    },
    sections: [
      {
        number: '1',
        title: 'Basic Information',
        fields: [
          { name: 'fullName', label: 'Full name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '+966' },
          { name: 'location', label: 'City / Country', type: 'text', required: true },
          {
            name: 'status',
            label: 'Status',
            type: 'select',
            required: true,
            options: [
              { value: 'student', label: 'Student' },
              { value: 'employee', label: 'Employee' },
              { value: 'entrepreneur', label: 'Entrepreneur' },
              { value: 'other', label: 'Other' },
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'Application Details',
        fields: [
          {
            name: 'applicationType',
            label: 'Application type',
            type: 'radio',
            required: true,
            options: [
              { value: 'individual', label: 'Individual' },
              { value: 'team', label: 'Team' },
            ],
          },
          {
            name: 'teamName',
            label: 'Team name (if any)',
            type: 'text',
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
          {
            name: 'teamSize',
            label: 'Number of team members',
            type: 'number',
            min: 2,
            max: 5,
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
          {
            name: 'teamMembers',
            label: 'Team members — name & specialisation',
            type: 'textarea',
            rows: 4,
            placeholder: 'Name — specialisation (one per line)',
            dependsOn: { name: 'applicationType', equals: 'team' },
          },
        ],
      },
      {
        number: '3',
        title: 'Project / Idea',
        fields: [
          { name: 'projectName', label: 'Project / idea name', type: 'text', required: true },
          {
            name: 'sector',
            label: 'Sector',
            type: 'select',
            required: true,
            options: [
              { value: 'sports-tech', label: 'Sports Tech' },
              { value: 'health-fitness', label: 'Health & Fitness' },
              { value: 'ai-data', label: 'AI & Data' },
              { value: 'fan-engagement', label: 'Fan Engagement' },
              { value: 'other', label: 'Other' },
            ],
          },
          {
            name: 'ideaDescription',
            label: 'Idea description',
            type: 'textarea',
            required: true,
            rows: 6,
            wordLimit: 150,
            help: '150 words max',
          },
          {
            name: 'problemSolved',
            label: 'Problem the idea solves',
            type: 'textarea',
            required: true,
            rows: 4,
          },
        ],
      },
      {
        number: '4',
        title: 'Project Stage',
        fields: [
          {
            name: 'projectStage',
            label: 'Current stage',
            type: 'radio',
            required: true,
            options: [
              { value: 'idea', label: 'Idea' },
              { value: 'prototype', label: 'Prototype' },
              { value: 'mvp', label: 'MVP' },
              { value: 'startup', label: 'Startup' },
            ],
          },
        ],
      },
      {
        number: '6',
        title: 'Commitment',
        fields: [
          {
            name: 'attendanceMode',
            label: 'Commitment to full program attendance',
            type: 'radio',
            required: true,
            options: [
              { value: 'onsite', label: 'On-site' },
              { value: 'online', label: 'Online' },
            ],
          },
          {
            name: 'canAttendRiyadh',
            label: 'Ability to attend in Riyadh (final two days)',
            type: 'radio',
            required: true,
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
          },
          {
            name: 'availableDuringProgram',
            label: 'Availability during the program',
            type: 'radio',
            required: true,
            options: [
              { value: 'yes', label: 'Yes, fully available' },
              { value: 'partial', label: 'Partially available' },
              { value: 'no', label: 'No' },
            ],
          },
        ],
      },
      {
        number: '7',
        title: 'Participation Goals',
        fields: [
          {
            name: 'expectations',
            label: 'What do you expect to achieve from the program?',
            type: 'textarea',
            required: true,
            rows: 4,
          },
          {
            name: 'goals',
            label: 'Goals (you may select more than one)',
            type: 'checkbox-group',
            required: true,
            options: [
              { value: 'develop-idea', label: 'Develop an idea' },
              { value: 'build-prototype', label: 'Build a prototype' },
              { value: 'investor-pitch', label: 'Prepare an investor pitch' },
              { value: 'networking', label: 'Build a network' },
            ],
          },
        ],
      },
      {
        number: '8',
        title: 'Attachments (optional)',
        fields: [
          { name: 'pitchDeckUrl', label: 'Pitch deck URL', type: 'url', placeholder: 'https://' },
          { name: 'linkedinUrl', label: 'LinkedIn URL', type: 'url', placeholder: 'https://linkedin.com/in/' },
          { name: 'videoUrl', label: 'Intro video URL (if any)', type: 'url', placeholder: 'https://' },
        ],
      },
      {
        number: '9',
        title: 'Acknowledgement',
        fields: [
          {
            name: 'ackAccuracy',
            label: 'I confirm that the information provided is accurate.',
            type: 'checkbox-single',
            required: true,
          },
          {
            name: 'ackCommitment',
            label: 'I commit to attending the full program.',
            type: 'checkbox-single',
            required: true,
          },
          {
            name: 'ackTerms',
            label: 'I agree to the program terms and conditions.',
            type: 'checkbox-single',
            required: true,
          },
        ],
      },
    ],
    submit: { label: 'Submit registration', loading: 'Submitting…' },
    success: {
      title: 'Registration received',
      body: 'Thank you for registering for SEU Velocity. We will be in touch shortly via email.',
      cta: 'Back to home',
    },
    error: {
      generic: 'Something went wrong while submitting. Please try again.',
    },
    validation: {
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      invalidUrl: 'Invalid URL (must start with https://)',
      wordLimitExceeded: (limit: number) => `Exceeds the ${limit}-word limit`,
    },
    wordCounter: (used, limit) => `${used} / ${limit} words`,
  },
};
