import styles from "./button.module.css";

const Button = ({ nextStep }) => {
  return (
    <button className={styles.btn} onClick={nextStep} type="submit">
      Next step
    </button>
  );
};

export default Button;
