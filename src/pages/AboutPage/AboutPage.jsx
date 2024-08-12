import React from "react";
import styles from "./AboutPage.module.css";

// Components
import WorkStatus from "../../components/WorkStatus/WorkStatus";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

// Constants
import { experienceList } from "../../utils/constants";

// Icons & Images
import { ProfileImg, ArrowRightIcon, DesktopIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const redirectToPage = (page) => {
    navigate(`/${page}`, {
      state: { activePage: page },
    });
  };

  const handleButtonClick = (page) => {
    redirectToPage(page);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.aboutMeContainer}>
          <div className={styles.aboutMeDetailsContainer}>
            <WorkStatus />
            <div className={styles.aboutMeHeadingAndDetailsContainer}>
              <div className={styles.aboutMeHeadingTextContainer}>
                <span className={styles.AboutMeHeadingTextSpan}>
                  About Me:
                  <br />
                  Crafting Digital
                  <br />
                  Excellence
                </span>
              </div>
              <div className={styles.aboutMeDetailsTextContainer}>
                <span className={styles.AboutMeDetailsTextSpan}>
                  I'm a dedicated full stack developer with a passion for building robust and scalable web applications.
                  I excel at turning complex requirements into efficient, high-performance solutions while staying
                  current with the latest technologies and industry best practices.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.aboutMeImageContainer}>
            <img src={ProfileImg} alt="kchavda" className={styles.aboutMeImage} />
          </div>
        </div>
        <div className={styles.educationAndStacksContainer}>
          <div className={styles.educationAndStacks}>
            <div className={styles.educationAndStacksCard}>
              <span className={styles.educationAndStacksHeadingTextSpan}>Education</span>
              <span className={styles.educationAndStacksDetailsTextSpan}>
                I earned my Master's degree in Masters in Computer Applications from LDRP University Gandhinagar, where
                I honed my skills in Application Development, user experience, and front-end development. My education
                provided a solid foundation for my career in Full Stack Development.
              </span>
              <PrimaryButton
                onClick={() => {
                  handleButtonClick("projects");
                }}
                label="View Projects"
              />
            </div>
            <div className={styles.educationAndStacksCard}>
              <span className={styles.educationAndStacksHeadingTextSpan}>Stack</span>
              <span className={styles.educationAndStacksDetailsTextSpan}>
                My technical toolkit includes expertise in the MERN stack: MongoDB, Express.js, React, and Node.js. I
                specialize in building full-stack applications that are both scalable and responsive, ensuring seamless
                user experiences across various devices. I'm also adept at integrating APIs and managing databases to
                create robust, dynamic web applications.
              </span>
              <PrimaryButton
                onClick={() => {
                  handleButtonClick("stacks");
                }}
                label="View Stacks"
              />
            </div>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceDetailsContainer}>
            <div className={styles.experienceHeadingTextContainer}>
              <span className={styles.experienceHeadingTextSpan}>Experience</span>
            </div>
            <div className={styles.experienceListsContainer}>
              {experienceList.length > 0 &&
                experienceList.map((experience, index) => (
                  <div className={styles.experienceCardContainer} key={`${experience.position}_${index}`}>
                    <div className={styles.projectIconAndTitleContainer}>
                      <div className={styles.projectIconContainer}>
                        <experience.icon className={styles.projectIcon} />
                      </div>
                      <div className={styles.projectTitleAndTimelineContainer}>
                        <span className={styles.projectHeadingTextSpan}>{experience.position}</span>
                        <span className={styles.projectCompanyNameTextSpan}>{experience.company}</span>
                        <span className={styles.projectTimelineTextSpan}>{experience.duration}</span>
                      </div>
                    </div>
                    <div className={styles.projectDetailsContainer}>
                      <span className={styles.projectDetailsTextSpan}>{experience.description}</span>
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.experienceContactButtonContainer}>
              <PrimaryButton
                onClick={() => {
                  handleButtonClick("contact");
                }}
                label="Contact Me"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
