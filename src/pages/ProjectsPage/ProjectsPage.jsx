import React from "react";
import styles from "./ProjectsPage.module.css";

// Components
import WorkStatus from "../../components/WorkStatus/WorkStatus";

// Constants
import { projectsList } from "../../utils/constants";

// Icons & Images
import { ProjectCardImg } from "../../assets";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const redirectToPage = (page, projectId) => {
    navigate(`/${page}`, {
      state: { projectId: projectId },
    });
  };

  const handleProjectCardClick = (page, projectId) => {
    redirectToPage(page, projectId);
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <WorkStatus />
        <div className={styles.projectCardsAndDetailsContainer}>
          <div className={styles.projectHeadingContainer}>
            <span className={styles.projectHeadingText}>
              Projects:
              <br />
              Showcasing
              <br />
              My Journey
            </span>
          </div>
          <div className={styles.projectCardsContainer}>
            {projectsList.length > 0 &&
              projectsList.map((project) => (
                <div
                  className={styles.projectCard}
                  key={project.id}
                  onClick={() => {
                    handleProjectCardClick("project-details", project.id);
                  }}
                >
                  <div className={styles.projectImgContainer}>
                    <img src={project.imgPath} alt="kchavda" className={styles.ProjectCardImg} />
                  </div>
                  <div className={styles.projectDetailsContainer}>
                    <span className={styles.projectHeadingTextSpan}>{project.projectType}</span>
                    <div className={styles.marqueeTextDiv}>
                      <span className={styles.projectDetailTextSpan}>{project.projectDescription}</span>
                      <span className={styles.projectDetailTextSpanMarqee}>{project.projectDescription}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
