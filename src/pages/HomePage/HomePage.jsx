import React from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

// Icons & Images
import { ArrowRightIcon, ProjectCardImg, FramerImg } from "../../assets";

// Constants
import { stacksLists, projectsList } from "../../utils/constants";

// Components
import WorkStatus from "../../components/WorkStatus/WorkStatus";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const HomePage = () => {
  const navigate = useNavigate();

  const redirectToPage = (page, projectId) => {
    navigate(`/${page}`, {
      state: { projectId: projectId },
    });
  };

  const handleButtonClick = (page) => {
    redirectToPage(page);
  };

  const redirectToUrl = (Url) => {
    window.location.href = `https://${Url}`;
  };

  const handleStackClick = (Url) => {
    redirectToUrl(Url);
  };

  const handleProjectCardClick = (page, projectId) => {
    redirectToPage(page, projectId);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroContainer}>
          <WorkStatus />
          <div className={styles.heroDetailsContainer}>
            <span className={styles.heroHeadingTextSpan}>
              Hey there!
              <br />
              I'm Karsan...
            </span>
            <span className={styles.heroDetailsTextSpan}>
              I'm a dedicated full stack developer with a passion for building robust and scalable web applications.
            </span>
          </div>
          <div className={styles.heroButtonContainer}>
            <PrimaryButton
              onClick={() => {
                handleButtonClick("about");
              }}
              label="More About Me"
            />
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectDetailsContainer}>
            <div className={styles.projectHeadingContainer}>
              <span className={styles.projectHeadingTextSpan}>Recent Projects</span>
            </div>
            <div className={styles.projectDetailCardsContainer}>
              {projectsList.length > 0 &&
                projectsList.map((project, index) =>
                  index < 3 ? (
                    <div
                      className={styles.projectCard}
                      key={project.id}
                      onClick={() => handleProjectCardClick("project-details", project.id)}
                    >
                      <div className={styles.projectCardImageContainer}>
                        <img src={project.imgPath} alt="kchavda" className={styles.projectCardImage} />
                      </div>
                      <div className={styles.projectCardDetailsContainer}>
                        <span className={styles.projectCardHeadingTextSpan}>{project.projectType}</span>
                        <span className={styles.projectCardDetailsTextSpan}>{project.projectDescription}</span>
                      </div>
                    </div>
                  ) : null
                )}
            </div>
          </div>
          <div className={styles.heroButtonContainer}>
            <PrimaryButton
              onClick={() => {
                handleButtonClick("projects");
              }}
              label="All Projects"
            />
          </div>
        </div>
        <div className={styles.stacksContainer}>
          <div className={styles.stacksDetailsContainer}>
            <div className={styles.stackDetailsHeadingContainer}>
              <span className={styles.stackDetailsHeadingTextSpan}>Stack</span>
            </div>
            <div className={styles.stackDetailsCardsContainer}>
              {stacksLists.length > 0 &&
                stacksLists.map((stack, index) =>
                  index < 6 ? (
                    <div
                      className={styles.stacksCard}
                      key={`${stack.technology}_${index}`}
                      onClick={() => handleStackClick(stack.url)}
                    >
                      <div className={styles.stackCardIconContainer}>
                        <img src={stack.icon} alt="kchavda" className={styles.stackCardIcon} />
                      </div>
                      <div className={styles.stackCardDetailsContainer}>
                        <span className={styles.stackCardHeadingTextSpan}>{stack.technology}</span>
                        <span className={styles.stackCardDetailTextSpan}>{stack.usedFor}</span>
                      </div>
                    </div>
                  ) : null
                )}
            </div>
          </div>
          <div className={styles.heroButtonContainer}>
            <PrimaryButton
              onClick={() => {
                handleButtonClick("stacks");
              }}
              label="All Stack"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
