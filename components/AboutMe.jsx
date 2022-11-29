import styles from "/styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Обо мне</h2>
      <div className={styles.row}>
        <div className={styles.info}>
          <p>Быстро и качественно верстаю на флекс-боксах</p>
          <span className={styles.dot}></span>
          <p>Хорошо типизирую данные на TypeScript</p>
          <span className={styles.dot}></span>
          <p>Создаваю изолированные и реюзабельные UI компоненты на TS</p>
          <span className={styles.dot}></span>
          <p>Разбираюсь в Redux Toolkit</p>
          <span className={styles.dot}></span>
          <p>
            Помимо Front-End еще изучаю Back-End. Бэк на Express и Nest JS, БД на
            Postgres и MongoDB
          </p>
          <span className={styles.dot}></span>
          <p>Большой опыт удаленной работы</p>
          <span className={styles.dot}></span>
          <p>
            Не оставляю коллег в подвешенном состоянии, сообщаю о каждом шаге
            проекта
          </p>
          <span className={styles.dot}></span>
          <p>Опыт работы в ИТ компаниях и в стартапах</p>
          <span className={styles.dot}></span>
          <p>Имею технику Apple для работы</p>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
