import React, { useState } from "react";
import styles from "./WorkStatus.module.css";

const WorkStatus = () => {
  const [workStatus, setWorkStatus] = useState(true);

  const {
    workStatusContainer,
    unavailableStatusBg,
    workStatusIconSpan,
    unavailableStatusIcon,
    workStatusTextSpan,
    unavailableStatusText,
  } = styles;

  return (
    <div
      className={
        workStatus
          ? workStatusContainer
          : `${workStatusContainer} ${unavailableStatusBg}`
      }
    >
      <span
        className={
          workStatus
            ? workStatusIconSpan
            : `${workStatusIconSpan} ${unavailableStatusIcon}`
        }
      ></span>
      <span
        className={
          workStatus
            ? workStatusTextSpan
            : `${workStatusTextSpan} ${unavailableStatusText}`
        }
      >
        {workStatus ? "Available for Work" : "Not Available"}
      </span>
    </div>
  );
};

export default WorkStatus;
