import styles from "/styles/ProjectCard.module.scss";
import Image from "next/image";
import Button from "./globalComponents/Button";

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/quoteGenerator.png"
          size="cover"
          width={400}
          height={250}
          alt="project image"
        />
      </div>
      <div className={styles.row}>
        <h2 className={styles.title}>Quote Generator App</h2>
        <div className={styles.chipsWrapper}>React API Fetch</div>
        <p className={styles.desk}>
          Генератор аниме цитат из открытого API с функцией sharing в Твиттер.
        </p>
        <div className={styles.buttonsWrapper}>
          <Button>Live Preview</Button>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
