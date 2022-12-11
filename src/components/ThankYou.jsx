import styles from "./css/ThankYou.module.css";
import thankYou from "../data/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src={thankYou} alt="Check"></img>
      <h1>Thank you!</h1>
      <p>
        Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to main us at
        {"  "}
        <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>
      </p>
    </div>
  );
};

export default ThankYou;
