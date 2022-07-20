import SocialCard from "./SocialCard";
import { socialData } from "/data";
import styles from "/styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Всегда на связи</h2>
        <div className={styles.row}>
          {socialData.map((data) => (
            <SocialCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
