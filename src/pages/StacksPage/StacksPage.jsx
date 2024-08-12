import React from "react";
import styles from "./StacksPage.module.css";

// Components
import WorkStatus from "../../components/WorkStatus/WorkStatus";

// Constants
import { stacksLists } from "../../utils/constants";

const StacksPage = () => {
  const redirectToUrl = (Url) => {
    window.location.href = `https://${Url}`;
  };

  const handleStackClick = (Url) => {
    redirectToUrl(Url);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <WorkStatus />
        <div className={styles.stacksContainer}>
          <div className={styles.stackHeadingTextContainer}>
            <span className={styles.stackHeadingText}>
              My Skill Stack:
              <br />
              Crafting Digital
              <br />
              Solutions
            </span>
          </div>
          <div className={styles.stackCardsContainer}>
            {stacksLists.length > 0 &&
              stacksLists.map((stack, index) => (
                <div
                  className={styles.stackCard}
                  key={`${stack.technology}_${index}`}
                  onClick={() => handleStackClick(stack.url)}
                >
                  <div className={styles.stackCardHeadingAndIconContainer}>
                    <div className={styles.stackCardIconContainer}>
                      <img src={stack.icon} alt="kchavda" className={styles.stackCardIcon} />
                    </div>
                    <div className={styles.stackCardHeadingTextContainer}>
                      <span className={styles.stackHeadingTextSpan}>{stack.technology}</span>
                      <span className={styles.stackDetailTextSpan}>{stack.usedFor}</span>
                    </div>
                  </div>
                  <div className={styles.stackCardDetailsContainer}>
                    <span className={styles.stackCardDetailsTextSpan}>{stack.details}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StacksPage;
