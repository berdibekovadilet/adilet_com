import styles from "/styles/ProjectCard.module.scss";
import Image from "next/image";
import Button from "./globalComponents/Button";
import Chips from "./globalComponents/Chips";

const ProjectCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={data.cover}
          size="cover"
          width={400}
          height={250}
          alt="project image"
        />
      </div>
      <div className={styles.row}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.chipsWrapper}>
          {data.chips.map((item) => (
            <Chips key={item}>{item}</Chips>
          ))}
        </div>
        <p className={styles.desc}>{data.desc}</p>
        <div className={styles.buttonsWrapper}>
          <a href={data.livePreview} target="_blank" rel="noreferrer noopener">
            <Button>Live Preview</Button>
          </a>
          <a href={data.github} target="_blank" rel="noreferrer noopener">
            <Button>Github</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
