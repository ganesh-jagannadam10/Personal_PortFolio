import styles from './ProjectsStyles.module.css';
import attendEase from '../../assets/AttendEase.jpeg';
import STB from '../../assets/Scan The Bags.jpeg';
import NBP from '../../assets/Near By Places.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={attendEase}
          link="https://github.com/ganeshjagannadam/QR-Attendance/tree/master"
          h3="AttendEase"
          p="Attendance Management System App"
        />
        <ProjectCard
          src={STB}
          link="https://github.com/ganeshjagannadam/Scan-The-Bags"
          h3="Scan The Bags"
          p="Product Recomendation website"
        />
        <ProjectCard
          src={NBP}
          link="https://github.com/ganeshjagannadam/Near-By-Places"
          h3="Near-By-Places"
          p="Shows the near by places in the map"
        />
      </div>
    </section>
  );
}

export default Projects;
