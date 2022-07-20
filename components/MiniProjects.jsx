import MiniProjectCard from "./MiniProjectCard";
import { addPortfolioData } from "/data";
import styles from "/styles/MiniProjects.module.scss";

const MiniProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {addPortfolioData.map((data) => (
          <MiniProjectCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
