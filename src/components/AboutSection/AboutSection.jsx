import Section from "../../ui/Section/Section";
import styles from "./AboutSection.module.css";
import aboutImage from "../../assets/Images/WhyUs.png";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
const AboutSection = () => {
  return (
    <Section>
      <div className="container">
        <HeroTitle title="About Us" />
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <div className={styles.slug}>Who we are? </div>
            <h4 className={styles.title}>TAQNIAT ALMONSHAAT ALTHAKIYAH </h4>
            <article>
              <p>
                is a dynamic and innovative IT services provider founded in the
                heart of Saudi Arabia, dedicated to empowering startups, Small
                and Medium-sized Enterprises (SMEs) in their digital
                journey.{" "}
              </p>
              <p>
                Aligned with the ambitious goals of Saudi Vision 2030, we offer
                a comprehensive suite of IT services and solutions designed to
                enhance efficiency, foster growth, and drive innovation within
                the Kingdom's dynamic business ecosystem.{" "}
              </p>
              <p>
                From foundational IT infrastructure to cutting-edge AI & Cloud
                solutions, our expertise ensures our clients are well-equipped
                to compete and thrive in the digital age.
              </p>
            </article>
          </div>
          <div className={styles.imageCover}>
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
