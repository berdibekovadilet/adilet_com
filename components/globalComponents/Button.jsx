import styles from "/styles/Button.module.scss";

const Button = ({ children }) => {
  return <button className={styles.container}>{children}</button>;
};

export default Button;
