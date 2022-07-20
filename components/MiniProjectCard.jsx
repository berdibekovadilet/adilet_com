import { ButtonWhite } from "./globalComponents/Button";
import styles from "/styles/MiniProjectsCard.module.scss";

const MiniProjectCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.buttonsWrapper}>
        <a href={data.livePreview} target="_blank" rel="noreferrer noopener">
          <ButtonWhite>Live Preview</ButtonWhite>
        </a>
        <a href={data.github} target="_blank" rel="noreferrer noopener">
          <ButtonWhite>Github</ButtonWhite>
        </a>
      </div>
    </div>
  );
};

export default MiniProjectCard;
