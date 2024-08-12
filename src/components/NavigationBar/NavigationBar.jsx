import React, { useEffect, useState } from "react";
import styles from "./NavigationBar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// Icons & Images
import {
  HomeFillIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailFillIcon,
  MailIcon,
  ProfileImg,
  StackFillIcon,
  StackIcon,
  SuitcaseFillIcon,
  SuitcaseIcon,
  TwitterIcon,
  UserFillIcon,
  UserIcon,
} from "../../assets/";

const NavigationBar = ({ isMenuCollapsed, toggleMenu, getDeviceType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "home");

  const handleMenuLinkClick = (activeTab) => {
    setActiveTab(activeTab);
    if (getDeviceType() === "Mobile") toggleMenu();

    navigate(`/${activeTab === "home" ? "" : activeTab}`);

    localStorage.setItem("activeTab", activeTab);
  };

  useEffect(() => {
    if (location.state?.activePage) {
      handleMenuLinkClick(location.state?.activePage);
    }
  }, [location.state?.activePage]);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.profileAndMenuContainer}>
          <div className={styles.profileContainer}>
            <div className={styles.imageContainer}>
              <img src={ProfileImg} alt="kchavda" className={styles.profileImg} />
            </div>
            <div className={styles.nameAndTitleContainer}>
              <span className={styles.nameText}>Karsan Chavda</span>
              <span className={styles.titleText}>Full Stack Developer</span>
            </div>
            <span
              className={isMenuCollapsed ? styles.hamburgerMenuIcon : styles.hamburgerMenuIconExpanded}
              onClick={toggleMenu}
            ></span>
          </div>
          {!isMenuCollapsed || getDeviceType() === "Desktop" || getDeviceType() === "Tablet" ? (
            <div className={styles.menuContainer}>
              <div
                className={styles.navLinkContainer}
                onClick={() => {
                  handleMenuLinkClick("home");
                }}
              >
                <span className={activeTab === "home" ? styles.iconAndTextFill : styles.iconAndText}>
                  {activeTab === "home" ? <HomeFillIcon /> : <HomeIcon className={styles.navlinkIcon} />}
                  <NavLink to="/">Home</NavLink>
                </span>
              </div>
              <div
                className={styles.navLinkContainer}
                onClick={() => {
                  handleMenuLinkClick("about");
                }}
              >
                <span className={activeTab === "about" ? styles.iconAndTextFill : styles.iconAndText}>
                  {activeTab === "about" ? <UserFillIcon /> : <UserIcon />}
                  <NavLink to="/about">About</NavLink>
                </span>
              </div>
              <div
                className={styles.navLinkContainer}
                onClick={() => {
                  handleMenuLinkClick("projects");
                }}
              >
                <span className={activeTab === "projects" ? styles.iconAndTextFill : styles.iconAndText}>
                  {activeTab === "projects" ? <SuitcaseFillIcon /> : <SuitcaseIcon />}
                  <NavLink to="/projects">Projects</NavLink>
                </span>
              </div>
              <div
                className={styles.navLinkContainer}
                onClick={() => {
                  handleMenuLinkClick("stacks");
                }}
              >
                <span className={activeTab === "stacks" ? styles.iconAndTextFill : styles.iconAndText}>
                  {activeTab === "stacks" ? <StackFillIcon /> : <StackIcon />}
                  <NavLink to="/stacks">Stacks</NavLink>
                </span>
              </div>
              <div
                className={styles.navLinkContainer}
                onClick={() => {
                  handleMenuLinkClick("contact");
                }}
              >
                <span className={activeTab === "contact" ? styles.iconAndTextFill : styles.iconAndText}>
                  {activeTab === "contact" ? <MailFillIcon /> : <MailIcon />}
                  <NavLink to="/contact">Contact</NavLink>
                </span>
              </div>
            </div>
          ) : null}
        </div>
        {!isMenuCollapsed || getDeviceType() === "Desktop" || getDeviceType() === "Tablet" ? (
          <div className={styles.socialLinksContainer}>
            <div className={styles.socialIconContainer}>
              <TwitterIcon />
            </div>
            <div className={styles.socialIconContainer}>
              <InstagramIcon />
            </div>
            <div className={styles.socialIconContainer}>
              <LinkedinIcon />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavigationBar;
