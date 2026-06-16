import React, { createContext, useState, useEffect, useContext } from "react";

const content = {
  en: {
    header: {
      brand: "IT Services SA",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
      btn: "Contact Us",
    },
    hero: {
      title: "Empowering Saudi Startups & SMEs",
      subtitle:
        "Your trusted partner in digital transformation. Comprehensive IT solutions from foundational infrastructure to cutting-edge AI and Cloud technologies.",
      ctaConsultation: "Get a Free Consultation",
      ctaServices: "Explore Our Services",
      visionBadge: "Vision 2030 Aligned",
      localBadge: "Local Expertise",
    },
    mainServices: {
      title: "Comprehensive IT Solutions",
      subtitle:
        "From foundational infrastructure to advanced digital transformation, we cover all aspects of your IT needs.",
      servicesList: {
        infra: {
          title: "IT Infrastructure Setup",
          desc: "Designing and implementing robust, scalable IT environments tailored to your business needs.",
        },
        support: {
          title: "IT Support & Managed Services",
          desc: "Proactive management and responsive technical assistance ensuring seamless operations.",
        },
        dev: {
          title: "Web & Mobile Development",
          desc: "Professional, engaging digital experiences across web and mobile platforms.",
        },
        cloud: {
          title: "Cloud Solutions",
          desc: "Scalable and secure cloud infrastructure, migration, and management services.",
        },
        ai: {
          title: "Artificial Intelligence",
          desc: "Leveraging AI to drive innovation, automate processes, and gain actionable insights.",
        },
        integration: {
          title: "System Integration",
          desc: "Seamlessly connecting disparate systems and applications for unified operations.",
        },
      },
    },
    services: {
      title: "Complete Service Portfolio",
      list: [
        "Basic IT Setup",
        "IT Infrastructure Setup",
        "IT Support",
        "IT Managed Services",
        "Website Development",
        "Mobile Application Development",
        "Application Development",
        "ERP & SaaS Solutions",
        "System Integrations",
        "Artificial Intelligence",
        "Data Management",
        "Automation",
        "Voice Solution",
        "Cloud Solutions",
        "IT Consultation",
      ],
    },
    about: {
      title: "About IT Services SA",
      p1: "Founded in Saudi Arabia, we are dedicated to empowering startups and SMEs in their digital transformation journey. We understand the unique challenges and opportunities within the Saudi market, particularly the national imperative for digital adoption.",
      p2: "Our team of seasoned professionals is committed to delivering tailored, scalable, and secure IT services that address your specific needs. We enable you to focus on your core business while we expertly manage your technological evolution.",
      satisfactionRate: "100%",
      satisfactionLabel: "Client Satisfaction",
      categoriesCount: "15+",
      categoriesLabel: "Service Categories",
    },
    whyUs: {
      title: "Why Choose IT Services SA?",
      reasons: [
        {
          title: "Local Expertise",
          description:
            "Deep understanding of the Saudi Arabian market, regulatory landscape, and business culture.",
        },
        {
          title: "Comprehensive Solutions",
          description:
            "A single partner for all IT needs, from foundational setup to advanced digital transformation.",
        },
        {
          title: "Client-Centric Approach",
          description:
            "Tailored solutions designed to meet the unique goals and challenges of each client.",
        },
        {
          title: "Innovation-Driven",
          description:
            "Committed to bringing the latest technologies and best practices to our clients.",
        },
        {
          title: "Reliability & Support",
          description:
            "Dedicated to providing consistent, high-quality service and support.",
        },
        {
          title: "Vision 2030 Aligned",
          description:
            "Our services support the national agenda for digital economic growth.",
        },
      ],
    },
    contact: {
      title: "Ready to Transform Your Business?",
      subtitle:
        "Contact us today for a personalized consultation and discover how our expert IT solutions can drive your success.",
      ctaTouch: "Get in Touch",
      ctaLearn: "Learn More",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationVal: "Riyadh, Saudi Arabia",
    },
    footer: {
      desc: "Empowering Saudi businesses through digital transformation.",
      services: "Services",
      infra: "Infrastructure",
      dev: "Development",
      cloud: "Cloud Solutions",
      company: "Company",
      about: "About Us",
      contact: "Contact",
      privacy: "Privacy",
      legal: "Legal",
      terms: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      copyright:
        "© 2026 IT Services SA. All rights reserved. Aligned with Vision 2030.",
    },
  },
  ar: {
    header: {
      brand: "خدمات تقنية المعلومات SA",
      home: "الرائيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      btn: "اتصل بنا",
    },
    hero: {
      title: "تمكين الشركات السعودية الناشئة والصغيرة والمتوسطة",
      subtitle:
        "شريكك الموثوق في التحول الرقمي. حلول تقنية معلومات متكاملة تبدأ من البنية التحتية الأساسية وصولاً إلى تقنيات الذكاء الاصطناعي والسحابية المتقدمة.",
      ctaConsultation: "احصل على استشارة مجانية",
      ctaServices: "استكشف خدماتنا",
      visionBadge: "متوافق مع رؤية 2030",
      localBadge: "خبرة محلية",
    },
    mainServices: {
      title: "حلول تقنية معلومات متكاملة",
      subtitle:
        "من البنية التحتية الأساسية إلى التحول الرقمي المتقدم، نغطي كافة جوانب احتياجاتك التقنية.",
      servicesList: {
        infra: {
          title: "تأسيس البنية التحتية لتقنية المعلومات",
          desc: "تصميم وتنفيذ بيئات تقنية معلومات قوية وقابلة للتوسع ومخصصة لاحتياجات عملك.",
        },
        support: {
          title: "الدعم الفني والخدمات المدارة",
          desc: "إدارة استباقية ومساعدة تقنية سريعة الاستجابة لضمان تشغيل العمليات بسلاسة.",
        },
        dev: {
          title: "تتطوير الويب والهواتف المحمولة",
          desc: "تجارب رقمية احترافية وجذابة عبر منصات الويب وتطبيقات الجوال.",
        },
        cloud: {
          title: "الحلول السحابية",
          desc: "بنية تحتية سحابية آمنة وقابلة للتوسع، وخدمات النقل والإدارة السحابية.",
        },
        ai: {
          title: "الذكاء الاصطناعي",
          desc: "تسخير الذكاء الاصطناعي لدفع الابتكار، وأتمتة العمليات، والحصول على رؤى قابلة للتطبيق.",
        },
        integration: {
          title: "تكامل الأنظمة",
          desc: "ربط الأنظمة والتطبيقات المختلفة بسلاسة لتوحيد العمليات وتكاملها.",
        },
      },
    },
    services: {
      title: "محفظة الخدمات المتكاملة",
      list: [
        "إعداد تقنية المعلومات الأساسية",
        "تأسيس البنية التحتية لتقنية المعلومات",
        "الدعم الفني لتقنية المعلومات",
        "الخدمات المدارة لتقنية المعلومات",
        "تطوير المواقع الإلكترونية",
        "تطوير تطبيقات الجوال",
        "تطوير التطبيقات البرمجية",
        "حلول تخطيط موارد المؤسسات (ERP) والبرمجيات كخدمة (SaaS)",
        "تكامل الأنظمة والبرامج",
        "تقنيات الذكاء الاصطناعي",
        "إدارة البيانات والتحليل",
        "أتمتة العمليات والمهام",
        "حلول الاتصالات الصوتية وهواتف الشبكة",
        "الحلول والخدمات السحابية",
        "الاستشارات التقنية لتقنية المعلومات",
      ],
    },
    about: {
      title: "حول خدمات تقنية المعلومات SA",
      p1: "تأسسنا في المملكة العربية السعودية، ونلتزم بتمكين الشركات الناشئة والصغيرة والمتوسطة في رحلة تحولها الرقمي. نحن نتفهم التحديات والفرص الفريدة داخل السوق السعودي، لا سيما الضرورة الوطنية للتبني الرقمي.",
      p2: "يلتزم فريقنا من المحترفين ذوي الخبرة بتقديم خدمات تقنية معلومات مخصصة وآمنة وقابلة للتوسع تلبي احتياجاتك الخاصة. نحن نمكنك من التركيز على عملك الأساسي بينما ندير تطورك التكنولوجي بمهارة.",
      satisfactionRate: "100%",
      satisfactionLabel: "رضا العملاء",
      categoriesCount: "15+",
      categoriesLabel: "تصنيفاً للخدمات",
    },
    whyUs: {
      title: "لماذا تختار خدمات تقنية المعلومات SA؟",
      reasons: [
        {
          title: "خبرة محلية",
          description:
            "فهم عميق للسوق السعودي، والبيئة التنظيمية، وثقافة الأعمال المحلية.",
        },
        {
          title: "حلول شاملة ومتكاملة",
          description:
            "شريك واحد لجميع احتياجات تقنية المعلومات، بدءاً من التأسيس الأولي وحتى التحول الرقمي المتقدم.",
        },
        {
          title: "التركيز على العميل",
          description:
            "حلول مخصصة مصممة لتلبية الأهداف والتحديات الفريدة لكل عميل.",
        },
        {
          title: "الابتكار المستمر",
          description:
            "نلتزم بتقديم أحدث التقنيات وأفضل الممارسات العالمية لعملائنا.",
        },
        {
          title: "الموثوقية والدعم المستمر",
          description: "مكرسون لتقديم خدمة ودعم فني متسق وعالي الجودة.",
        },
        {
          title: "متوافق مع رؤية 2030",
          description:
            "تدعم خدماتنا الأجندة الوطنية للنمو الاقتصادي الرقمي للمملكة.",
        },
      ],
    },
    contact: {
      title: "هل أنت جاهز لتحويل أعمالك رقمياً؟",
      subtitle:
        "تواصل معنا اليوم للحصول على استشارة مخصصة واكتشف كيف يمكن لحلولنا التقنية الخبيرة أن تدفع نجاحك.",
      ctaTouch: "تواصل معنا",
      ctaLearn: "معرفة المزيد",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationVal: "الرياض، المملكة العربية السعودية",
    },
    footer: {
      desc: "تمكين الشركات السعودية من خلال التحول الرقمي.",
      services: "الخدمات",
      infra: "البنية التحتية",
      dev: "التطوير والبرمجة",
      cloud: "الحلول السحابية",
      company: "الشركة",
      about: "من نحن",
      contact: "اتصل بنا",
      privacy: "الخصوصية",
      legal: "القانونية",
      terms: "شروط الخدمة",
      privacyPolicy: "سياسة الخصوصية",
      copyright:
        "© 2026 جميع الحقوق محفوظة لشركة خدمات تقنية المعلومات SA. متوافق مع رؤية 2030.",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    document.documentElement.classList.add("no-transition");
    setLang((prev) => (prev === "en" ? "ar" : "en"));
    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
    }, 50);
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLanguage, t: content[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
