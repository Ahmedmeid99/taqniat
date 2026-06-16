import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/logos/logo-footer.png";
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <a href="#" className={styles.logo} aria-label="Go to top">
              <img src={logo} alt="" />
            </a>
            <p className={styles.text}>{t.footer.desc}</p>
          </div>
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.company}</div>
            <ul>
              <li>
                <a href="/#">{t.footer.home}</a>
              </li>
              <li>
                <a href="#about">{t.footer.about}</a>
              </li>
              <li>
                <a href="#contact">{t.footer.contact}</a>
              </li>
              <li>
                <a href="#contact">{t.footer.privacy}</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>{t.footer.services}</div>
            <ul>
              <li>
                <a href="#services">{t.footer.infra}</a>
              </li>
              <li>
                <a href="#services">{t.footer.dev}</a>
              </li>
              <li>
                <a href="#services">{t.footer.cloud}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>{t.footer.copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
