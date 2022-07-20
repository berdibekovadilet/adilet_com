import ProjectCard from "./ProjectCard";
import { mainPortfolioData } from "/data";
import styles from "/styles/Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Мои проекты</h3>
        <div className={styles.row}>
          {mainPortfolioData.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
