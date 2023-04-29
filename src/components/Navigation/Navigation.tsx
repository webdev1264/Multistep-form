import { useDispatch } from "react-redux";
import Button from "./Button";
import { prevStep } from "../../features/stepSlice";
import styles from "./navigation.module.css";
import React from "react";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <button className={styles.backBtn} onClick={() => dispatch(prevStep())}>
        Go Back
      </button>
      <Button disable={false} />
    </div>
  );
};

export default Navigation;
