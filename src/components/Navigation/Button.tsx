import { useDispatch } from "react-redux";
import { nextStep } from "../../features/stepSlice";
import styles from "./button.module.css";
import React from "react";

interface ButtonProps {
  disable: boolean;
}

const Button: React.FC<ButtonProps> = ({ disable = false }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.btn}
      onClick={() => !disable && dispatch(nextStep())}
      type="submit"
    >
      Next step
    </button>
  );
};

export default Button;
