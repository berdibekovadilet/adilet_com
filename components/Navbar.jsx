import { useState } from "react";
import { MdOutlineDarkMode, MdMenu, MdClose } from "react-icons/md";
import { TbArrowUpRight } from "react-icons/tb";
import styles from "/styles/Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const showMenu = () => {
    isOpen && setIsOpen(false);
    !isOpen && setIsOpen(true);
  };

  const styleReactIcon = {
    cursor: "pointer",
    fontSize: "22px",
  };
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <h2>adilet berdibekov</h2>
        </div>
        <nav
          className={`${
            isOpen
              ? styles.menuList
              : `${styles.menuList} ${styles.menuListOpen}`
          } `}
        >
          <div className={styles.contact}>
            <ul className={styles.contactList}>
              <li>
                <a
                  href="https://t.me/adiletberdibekov"
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
                  href="https://hh.ru/resume/a7563438ff09b973490039ed1f69644d64486b"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  HeadHunter
                  <TbArrowUpRight size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adilet-berdibekov/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                  <TbArrowUpRight size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/berdibekovadilet"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                  <TbArrowUpRight size={18} />
                </a>
              </li>
            </ul>
          </div>

          <button
            className={`${styles.navBtn} ${styles.navCloseBtn}`}
            onClick={showMenu}
          >
            <MdClose style={styleReactIcon} />
          </button>
        </nav>
        <button className={styles.navBtn} onClick={showMenu}>
          <MdMenu style={styleReactIcon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
