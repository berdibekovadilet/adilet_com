import { ButtonWhite } from "./globalComponents/Button";
import Chips from "./globalComponents/Chips";
import styles from "/styles/MiniProjectsCard.module.scss";

const BackProjectCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.chipsWrapper}>
        {data.chips.map((item) => (
          <Chips key={item}>{item}</Chips>
        ))}
      </div>
      <div className={styles.buttonsWrapper}>
        <a href={data.github} target="_blank" rel="noreferrer noopener">
          <ButtonWhite>Github</ButtonWhite>
        </a>
      </div>
    </div>
  );
};

export default BackProjectCard;
