import Button from "./Button";
import styles from "../css/Navigation.module.css";

const Navigation = ({ prevStep, nextStep }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.backBtn} onClick={prevStep}>
        Go Back
      </button>
      <Button nextStep={nextStep} />
    </div>
  );
};

export default Navigation;
