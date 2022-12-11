import styles from "./css/Button.module.css";

const Button = ({ nextStep }) => {
  return (
    <button className={styles.btn} onClick={nextStep} type="submit">
      Next step
    </button>
  );
};

export default Button;
