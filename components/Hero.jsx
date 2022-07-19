import styles from "/styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.stack}>
          <h3>ЗНАЮ, УМЕЮ</h3>
          <ul className={styles.stackList}>
            <li>React / Next</li>
            <li>Typescript</li>
            <li>Redux Toolkit</li>
            <li>Module.scss</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
        <div className={styles.about}>
          <h1>Привет - Я, Адилет. Front-End разработчик на React / Next JS</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
