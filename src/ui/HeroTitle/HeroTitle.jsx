import styles from "./HeroTitle.module.css";

const HeroTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.heroTitle}>
      <h3 className={styles.title}>{title}</h3>
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
    </div>
  );
};
export default HeroTitle;
