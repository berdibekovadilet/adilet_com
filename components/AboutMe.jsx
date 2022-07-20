import styles from "/styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Обо мне</h2>
      <div className={styles.row}>
        <div className={styles.info}>
          <p>
            В вебе не новичок, несколько лет работал делая сайты на Wordpress
          </p>
          <span className={styles.dot}></span>
          <p>Несколько лет работал UX/UI дизайнером</p>
          <span className={styles.dot}></span>
          <p>В компонентах не новичок, умею работать с дизайн системами</p>
          <span className={styles.dot}></span>
          <p> Работа в рамках гайдлайнов, фирменных стилей</p>
          <span className={styles.dot}></span>
          <p>Изучал C# и Swift</p>
          <span className={styles.dot}></span>
          <p>
            Сейчас помимо Front-End еще изучаю Back-End и БД, хочу в будущем
            стать FullStack разработчиком
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
