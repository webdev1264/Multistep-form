import Header from "./Header";
import styles from "./thankYou.module.css";
import thankYou from "../data/images/icon-thank-you.svg";
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={thankYou} alt="Check"></img>
      <Header
        heading="Thank you!"
        descr="Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to mail us at
        "
      />
      <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>
    </div>
  );
};

export default ThankYou;
