import styles from "/styles/Navbar.module.scss";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <h2>adilet berdibekov</h2>
        </div>
        <div className={styles.contact}>
          <ul className={styles.contactList}>
            <li>
              <a
                href="https://t.me/+79309306674"
                target="_blank"
                rel="noreferrer noopener"
              >
                telegram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+79309306674"
                target="_blank"
                rel="noreferrer noopener"
              >
                whatsapp
              </a>
            </li>
            <li>
              <a
                href="mailto:berdibekovadilet@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                email
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <ul className={styles.socialList}>
            <li>
              <a
                href="https://t.me/+79309306674"
                target="_blank"
                rel="noreferrer noopener"
              >
                HeadHunter
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+79309306674"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+79309306674"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.darkTheme}>
          <MdOutlineDarkMode size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
