import React from "react";
import styles from "./step.module.css";

interface StepProps {
  id: number;
  text: string;
  step: number;
}

const Step: React.FC<StepProps> = ({ id, text, step = 4 }) => {
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
