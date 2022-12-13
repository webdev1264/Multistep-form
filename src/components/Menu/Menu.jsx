import Step from "./Step";
import styles from "./menu.module.css";

const Menu = ({ step }) => {
  return (
    <div className={styles.menu}>
      <Step id={1} step={step} text="your info" />
      <Step id={2} step={step} text="select plan" />
      <Step id={3} step={step} text="add-ons" />
      <Step id={4} step={step} text="summary" />
    </div>
  );
};

export default Menu;
