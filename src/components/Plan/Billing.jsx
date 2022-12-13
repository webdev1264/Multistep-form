import styles from "../css/Billing.module.css";

const Billing = ({ billingChange, billing }) => {
  const onClickHandler = () => {
    billingChange();
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={
          billing ? `${styles.monthly} ${styles.blue}` : styles.monthly
        }
      >
        Monthly
      </div>
      <div className={styles.switch} onClick={onClickHandler}>
        <div
          className={
            billing ? styles.round : `${styles.round} ${styles.active}`
          }
        ></div>
      </div>
      <div
        className={!billing ? `${styles.yearly} ${styles.blue}` : styles.yearly}
      >
        Yearly
      </div>
    </div>
  );
};

export default Billing;
