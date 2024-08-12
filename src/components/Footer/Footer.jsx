import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.footerContantContainer}>
          <span className={styles.footerCopyRightText}>
            © Copyright 2023. All rights Reserved.
          </span>
          <span className={styles.footerAuthorText}>
            Made by <span className={styles.authorName}>KChavda</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
