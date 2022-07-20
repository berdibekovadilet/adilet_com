import styles from "/styles/Chips.module.scss";

const Chips = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Chips;
