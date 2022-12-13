import styles from "../css/Step.module.css";

const Step = ({ id, text, step=4 }) => {
  return (
    <div className={styles.steps}>
      <div className={`${styles.round} ${step === id ? styles.active : ""}`}>
        {id}
      </div>
      <div>
        <h2 className={styles.heading}>STEP {id}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Step;
