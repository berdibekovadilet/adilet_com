import ProjectCard from "./ProjectCard";
import styles from "/styles/Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Мои проекты</h3>
        <div className={styles.row}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
