import styles from "./planOption.module.css";
import arcade from "../../data/images/icon-arcade.svg";
import advanced from "../../data/images/icon-advanced.svg";
import pro from "../../data/images/icon-pro.svg";

const PlanOption = ({ id, name, billing, price, selection, changePlan }) => {
  return (
    <div
      className={
        selection.planId === id
          ? `${styles.option} ${styles.active}`
          : styles.option
      }
      onClick={() => {
        changePlan(id);
      }}
    >
      <div>
        <img
          src={id === 1 ? arcade : id === 2 ? advanced : pro}
          alt={name}
        ></img>
      </div>
      <div>
        <h2>{name}</h2>
        <p className={styles.descr}>
          {`$${price}/${billing ? "month" : "year"}`}
        </p>
        {!billing ? <p className={styles.optionalDescr}>2 months free</p> : ""}
      </div>
    </div>
  );
};

export default PlanOption;
