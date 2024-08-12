import React from "react";
import styles from "./PrimaryButton.module.css";

// Icons & Images
import { ArrowRightIcon } from "../../assets";

const PrimaryButton = ({ onClick = () => {}, label = "Submit", type = "submit", customClass = "" }) => {
  return (
    <>
      <button className={`${styles.primaryButton} ${customClass}`} onClick={onClick} type={type}>
        <span className={styles.primaryButtonText}>{label}</span>
        <ArrowRightIcon className={styles.arrowRightIcon} />
      </button>
    </>
  );
};

export default PrimaryButton;
