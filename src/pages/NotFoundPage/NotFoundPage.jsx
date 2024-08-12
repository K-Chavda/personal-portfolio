import React from "react";
import styles from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

// Components
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBackHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageNotFoundContainer}>
          <div className={styles.pageNotFoundContentContainer}>
            <span className={styles.pageNotFoundTextHeading}>404</span>
            <span className={styles.pageNotFoundText}>
              OOPS! <br />
              The page you are looking for wasn't found!
            </span>
          </div>
          <div className={styles.pageNotFoundButtonContainer}>
            <PrimaryButton onClick={handleGoBackHome} label="Go Back Home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
