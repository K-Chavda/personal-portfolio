import React, { useEffect, useState } from "react";
import styles from "./ContactPage.module.css";
import emailjs from "emailjs-com";

// Icons & Images
import { ContactMailIcon, InstagramIcon, LinkedinIcon, PhoneIcon, TwitterIcon } from "../../assets/";

// Components
import WorkStatus from "../../components/WorkStatus/WorkStatus";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [submitButtonLabel, setSubmitButtonLabel] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSocialLinkClick = (link) => {
    window.location.href = `https://${link}`;
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter a name";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) {
      setTimeout(() => {
        setErrors({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }

    return valid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitButtonLabel("Sending Message...");

    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
          setSubmitButtonLabel("Send Message");
        }, 3000);
      })
      .catch((err) => {
        setMessageSent(false);
        setSubmitButtonLabel("Send Message");
      });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <WorkStatus />
        <div className={styles.contactHeaderTextContainer}>
          <span className={styles.contactHeadingTextSpan}>Let's Connect!</span>
          <span className={styles.contactDetailsTextSpan}>
            Feel free to reach out with your projects, questions, or to connect. I'll respond promptly, and we can
            explore opportunities together.
          </span>
        </div>
        <div className={styles.contactFormAndDetailsContainer}>
          <div className={styles.contactFormAndHeadingContainer}>
            {!messageSent ? (
              <>
                <span className={styles.contactFormHeadingText}>Get in Touch</span>
                <form action="" onSubmit={sendEmail} className={styles.contactFormContainer}>
                  <div className={styles.nameAndEmailInputContainer}>
                    <input
                      type="text"
                      name="name"
                      className={errors.name ? `${styles.inputFieldError} ${styles.inputField}` : styles.inputField}
                      placeholder={errors.name || "Name"}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      className={errors.email ? `${styles.inputFieldError} ${styles.inputField}` : styles.inputField}
                      placeholder={errors.email || "Email"}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    name="message"
                    className={
                      errors.message ? `${styles.inputAreaFieldError} ${styles.inputAreaField}` : styles.inputAreaField
                    }
                    placeholder={errors.message || "Write a message..."}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <PrimaryButton label={submitButtonLabel} customClass={styles.contactFormSubmitButton} />
                </form>
              </>
            ) : (
              <div className={styles.contactMessageSuccessContainer}>
                <span className={styles.contactMessageSuccessHeadingText}>Your message has been sent!</span>
                <span className={styles.contactMessageSuccessGreetingText}>
                  We appreciate your contact and will get back to you as soon as possible.
                </span>
              </div>
            )}
          </div>
          <div className={styles.contactDetailsContainer}>
            <div className={styles.contactEmailAndPhoneContainer}>
              <span className={styles.headingText}>Contact</span>
              <div className={styles.contactDetails}>
                <div className={styles.contactTextAndIconContainer}>
                  <ContactMailIcon className={styles.contactIcon} />
                  <span className={styles.contactTextSpan}>k.chavda6859@gmail.com</span>
                </div>
                <div className={styles.contactTextAndIconContainer}>
                  <PhoneIcon className={styles.contactIcon} />
                  <span className={styles.contactTextSpan}>+91 7990718207</span>
                </div>
              </div>
            </div>
            <div className={styles.socialLinkContainer}>
              <span className={styles.headingText}>Social</span>
              <div className={styles.socialLinksContainer}>
                <div
                  className={styles.socialLinkIconTextContainer}
                  onClick={() => handleSocialLinkClick("twitter.com")}
                >
                  <TwitterIcon className={styles.socialLinkIcon} />
                  <a className={styles.socialLinkText}>Twitter</a>
                </div>
                <div
                  className={styles.socialLinkIconTextContainer}
                  onClick={() => handleSocialLinkClick("instagram.com")}
                >
                  <InstagramIcon className={styles.socialLinkIcon} />
                  <a className={styles.socialLinkText}>Instagram</a>
                </div>
                <div
                  className={styles.socialLinkIconTextContainer}
                  onClick={() => handleSocialLinkClick("www.linkedin.com/in/karsan-chavda-a2574b210/")}
                >
                  <LinkedinIcon className={styles.socialLinkIcon} />
                  <a className={styles.socialLinkText}>LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
