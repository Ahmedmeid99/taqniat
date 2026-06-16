import { useState } from "react";
import Section from "../../ui/Section/Section";
import styles from "./ContactSection.module.css";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import { useLanguage } from "../../context/LanguageContext";

const ContactSection = () => {
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

  return (
    <Section id="contact">
      <div className="container">
        <HeroTitle
          title={t.contact.title}
          subTitle={t.contact.subtitle}
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
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{t.contact.ctaBtn}</span>
        </a>
        <div className={styles.contactGrid}>
          {/* INFO */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>{t.contact.infoTitle}</h3>

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
              <div className={styles.success}>{t.contact.form.success}</div>
            )}

            {error && (
              <div className={styles.error}>{t.contact.form.error}</div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.group}>
                <label>{t.contact.form.name} *</label>
                <input name="name" placeholder={t.contact.form.namePlaceholder} />
              </div>

              <div className={styles.group}>
                <label>{t.contact.form.email} *</label>
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div className={styles.group}>
                <label>{t.contact.form.phone}</label>
                <input name="phone" placeholder={t.contact.form.phonePlaceholder} />
              </div>

              <div className={styles.group}>
                <label>{t.contact.form.company}</label>
                <input name="company" placeholder={t.contact.form.companyPlaceholder} />
              </div>

              <div className={`${styles.group} ${styles.full}`}>
                <label>{t.contact.form.message} *</label>
                <textarea name="message" rows="4" />
              </div>
            </div>

            <div className={styles.footer}>
              <button type="submit">{t.contact.form.send}</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
