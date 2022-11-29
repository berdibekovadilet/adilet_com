import MiniProjectCard from "./MiniProjectCard";
import { miniPortfolioData } from "/data";
import styles from "/styles/MiniProjects.module.scss";

const MiniProjects = () => {
  return (
    <div className={styles.container}>
       <h2>Мини проекты</h2>
      <div className={styles.row}>
        {miniPortfolioData.map((data) => (
          <MiniProjectCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
