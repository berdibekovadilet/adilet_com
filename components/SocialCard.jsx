import styles from "/styles/SocialCard.module.scss";
import Image from "next/image";

const SocialCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={data.icon} width="32px" height="32px" alt="social icon" />
      <a href={data.link}>
        <h5 className={styles.text}>{data.text}</h5>
      </a>
    </div>
  );
};

export default SocialCard;
