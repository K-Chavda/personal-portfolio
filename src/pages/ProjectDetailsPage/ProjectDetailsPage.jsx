import React, { useEffect } from "react";
import styles from "./ProjectDetailsPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

// Constants
import { projectsList } from "../../utils/constants";

// Icons & Images
import { ArrowRightIcon, DurationIcon, CategoryIcon } from "../../assets";

const ProjectDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const projectId = state?.projectId || "kchavda#0001";

  useEffect(() => {
    if (projectId) localStorage.setItem("activeTab", "projects");
  }, [projectId]);

  const handleNavigation = (page, state = {}) => {
    navigate(`/${page}`, { state });
  };

  const handleLiveWebsiteButtonClick = (url) => {
    window.location.href = `https://${url}`;
  };

  const handleRecentProjectCardClick = (projectId) => {
    handleNavigation("project-details", { projectId });
  };

  const projectDetails = projectsList.find((project) => project.id === projectId);

  if (!projectDetails) return <p>Project not found</p>;

  const { title, sections, liveWebsite, duration, category } = projectDetails.projects[0];
  console.log(liveWebsite);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectDetailsAndButtonContainer}>
        <div className={styles.backToProjectButtonContainer} onClick={() => handleNavigation("projects")}>
          <ArrowRightIcon className={styles.backToProjectsIcon} />
          <span className={styles.backToProjectsSpan}>Back to Projects</span>
        </div>
        <div className={styles.projectDetailsContainer}>
          <div className={styles.projectDetailsLeftContainer}>
            <div className={styles.projectHeadingContainer}>
              <span className={styles.projectHeadingTextSpan}>{title}</span>
            </div>
            <div className={styles.projectLiveWebsiteButtonContainer}>
              <PrimaryButton
                onClick={() => handleLiveWebsiteButtonClick(liveWebsite || "https://www.example.com")}
                label="Live Website"
              />
            </div>
            <div className={styles.projectLeftDetailsContainer}>
              {sections.length > 0 &&
                sections.map((section, index) => (
                  <div className={styles.projectHeadingAndContentContainer} key={index}>
                    {index > 0 && <br />}
                    <span className={styles.projectDetailsHeadingSpan}>{section.heading}</span>
                    <br />
                    <span className={styles.projectDetailsContentSpan}>{section.content}</span>
                    <br />
                  </div>
                ))}
            </div>
            <div className={styles.projectLiveWebsiteButtonContainer}>
              <PrimaryButton
                onClick={() => handleLiveWebsiteButtonClick(liveWebsite || "https://www.example.com")}
                label="Live Website"
              />
            </div>
          </div>
          <div className={styles.projectDetailsRightContainer}>
            <div className={styles.projectDurationAndCategoryCardContainer}>
              <div className={styles.projectDurationAndCategoryDetailsContainer}>
                <div className={styles.projectDurationIconContainer}>
                  <DurationIcon className={styles.projectDetailsIcon} />
                </div>
                <div className={styles.projectDurationContainer}>
                  <span className={styles.projectDetailsHeadingTextSpan}>Duration</span>
                  <span className={styles.projectDetailsDetailTextSpan}>{duration}</span>
                </div>
              </div>
              <div className={styles.projectDurationAndCategoryDetailsContainer}>
                <div className={styles.projectDurationIconContainer}>
                  <CategoryIcon className={styles.projectDetailsIcon} />
                </div>
                <div className={styles.projectDurationContainer}>
                  <span className={styles.projectDetailsHeadingTextSpan}>Category</span>
                  <span className={styles.projectDetailsDetailTextSpan}>{category}</span>
                </div>
              </div>
            </div>
            <div className={styles.projectImageContainer}>
              <img src={projectDetails.imgPath} alt="kchavda" className={styles.projectImage} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recentProjectsCardsContainer}>
        <div className={styles.recentProjectDetailsContainer}>
          <div className={styles.recentProjectHeadingContainer}>
            <span className={styles.recentProjectHeadingTextSpan}>Recent Projects</span>
          </div>
          <div className={styles.recentProjectDetailCardsContainer}>
            {projectsList.length > 0 &&
              projectsList.map((project, index) =>
                index < 3 ? (
                  <div
                    className={styles.recentProjectCard}
                    key={project.id}
                    onClick={() => {
                      handleRecentProjectCardClick(project.id);
                    }}
                  >
                    <div className={styles.recentProjectCardImageContainer}>
                      <img src={project.imgPath} alt="kchavda" className={styles.recentProjectCardImage} />
                    </div>
                    <div className={styles.recentProjectCardDetailsContainer}>
                      <span className={styles.recentProjectCardHeadingTextSpan}>{project.projectType}</span>
                      <span className={styles.recentProjectCardDetailsTextSpan}>{project.projectDescription}</span>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
        <PrimaryButton onClick={() => handleNavigation("projects")} label="All Projects" />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
