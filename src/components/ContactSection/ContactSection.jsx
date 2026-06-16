import { useState } from "react";
import Section from "../../ui/Section/Section";
// import Button from "../../ui/Button/Button";
import styles from "./ContactSection.module.css";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import { useLanguage } from "../../context/LanguageContext";

const ContactSection = ({ content }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError(false);

    form.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const infoCards = [
    {
      title: "Address",
      titleAr: "العنوان",
      //   value: content.en.contact.address,
      icon: "📍",
    },
    {
      title: "Phone",
      titleAr: "رقم الهاتف",
      //   value: content.en.contact.phone,
      icon: "☎️",
      ltr: true,
    },
    {
      title: "Email",
      titleAr: "البريد الإلكتروني",
      //   value: content.en.contact.email,
      icon: "✉️",
    },
    {
      title: "Hours",
      titleAr: "أوقات العمل",
      //   value: content.en.contact.hours,
      icon: "🕒",
    },
  ];

  return (
    <Section id="contact">
      <div className="container">
        <HeroTitle
          title="Ready to Transform Your Business?"
          subTitle="Contact us today for a personalized consultation and discover how our expert IT solutions can drive your success."
        />
        <a href="mailto:info@monshaatech.com" className={styles.mainBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square mr-2 w-5 h-5"
            data-loc="client/src/pages/Home.tsx:333"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Contact Us for free consultation</span>
        </a>
        <div className={styles.contactGrid}>
          {/* INFO */}

          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>Contact Info</h3>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <h3 className={styles.label}>{t.contact.email}</h3>
                <a className={styles.text} href="mailto:info@monshaatech.com">
                  info@monshaatech.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.label}>{t.contact.phone}</h3>
                <a className={styles.text} href="tel:+966562721190">
                  +966 56 272 1190
                </a>
              </div>
              <div className={styles.infoItem}>
                <h3 className={styles.label}>{t.contact.location}</h3>
                <div className={styles.text}>{t.contact.locationVal}</div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <form className={styles.form} onSubmit={handleSubmit}>
            {success && (
              <div className={styles.success}>
                {content.en.contact.form.success}
              </div>
            )}

            {error && (
              <div className={styles.error}>
                {content.en.contact.form.error}
              </div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.group}>
                <label>Name *</label>

                <input name="name" placeholder="John Doe" />
              </div>

              <div className={styles.group}>
                <label>Email *</label>

                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.group}>
                <label>Phone</label>

                <input name="phone" placeholder="+966 50 000 0000" />
              </div>

              <div className={styles.group}>
                <label>Company</label>

                <input name="company" placeholder="My Startup LLC" />
              </div>

              <div className={`${styles.group} ${styles.full}`}>
                <label>Service</label>

                {/* <select>
                  {content.en.contact.form.servicesList.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select> */}
              </div>

              <div className={`${styles.group} ${styles.full}`}>
                <label>Message *</label>

                <textarea name="message" rows="4" />
              </div>
            </div>

            <div className={styles.footer}>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
