import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Empowering modern Saudi Startups and SMEs with Smart IT Solutions
          </h1>

          <p className={styles.subTitle}>
            <strong> TAQNIAT ALMONSHAAT ALTHAKIYAH</strong> is a dynamic and
            innovative IT services provider founded in the heart of Saudi
            Arabia, dedicated to empowering startups, Small and Medium-sized
            Enterprises (SMEs) in their digital journey. Aligned with the
            ambitious goals of Saudi Vision 2030, we offer a comprehensive suite
            of IT services and solutions designed to enhance efficiency, foster
            growth, and drive innovation within the Kingdom's dynamic business
            ecosystem. From foundational IT infrastructure to cutting-edge AI &
            Cloud solutions, our expertise ensures our clients are well-equipped
            to compete and thrive in the digital age.
          </p>
        </div>
      </div>
      <div className={styles.companyInfo}>
        <div className={styles.vision}>
          <h3>Our Vision</h3>
          <p>
            To be one of the leading IT services providers in Saudi Arabia,
            recognized for innovation, excellence, and pivotal role in
            accelerating digital growth for startups and SMEs
          </p>
        </div>
        <div className={styles.mission}>
          <h3>Our Mission</h3>
          <p>
            To empower Saudi Arabian startups and SMEs with robust, future-proof
            IT solutions & strategic guidance, enabling operational excellence,
            competitive advantage, and sustainable growth in an increasingly
            digital & interconnected world
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
