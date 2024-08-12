import React, { useEffect, useState } from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

// Components
import { NavigationBar, Footer } from "../../components";

// Utils
import getDeviceType from "../../utils/getDeviceType.js";

const MainLayout = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div
          className={
            isMenuCollapsed || getDeviceType() === "Desktop"
              ? styles.navigationMenuContainer
              : styles.navigationMenuContainerExpanded
          }
        >
          <NavigationBar isMenuCollapsed={isMenuCollapsed} toggleMenu={toggleMenu} getDeviceType={getDeviceType} />
        </div>
        <div className={styles.footerAndOutletContainer}>
          <div className={styles.outletContainer}>
            <Outlet />
          </div>
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
