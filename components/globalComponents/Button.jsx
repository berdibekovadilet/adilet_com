import styles from "/styles/Button.module.scss";

export const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export const ButtonWhite = ({ children }) => {
  return <button className={styles.buttonWhite}>{children}</button>;
};
