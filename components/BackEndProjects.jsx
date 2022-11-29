import BackProjectCard from "./BackProjectCard";
import { backPortfolioData } from "/data";
import styles from "/styles/MiniProjects.module.scss";

const BackEndProjects = () => {
  return (
    <div className={styles.container}>
      <h2>Back-end проекты</h2>
      <div className={styles.row}>
        {backPortfolioData.map((data) => (
          <BackProjectCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BackEndProjects;
