import Header from "../Header";
import styles from "./summary.module.css";

const Summary = ({ prevStep, billing, selection, setStep, plans, addons }) => {
  const { planId, addonIds } = selection;
  const totalSum =
    plans[planId - 1].price +
    addonIds.reduce((acc, addonId) => acc + addons[addonId - 1].price, 0);
  return (
    <div className={styles.container}>
      <Header
        heading="Finishing up"
        descr="Double-check everything looks OK before confirming."
      />
      <div className={styles.wrapper}>
        <div className={styles.planWrapper}>
          <div>
            <p className={styles.heading}>{`${plans[planId - 1].name} (${
              billing ? "Monthly" : "Yearly"
            })`}</p>
            <button className={styles.btn} onClick={() => setStep(2)}>
              Change
            </button>
          </div>
          <p className={styles.price}>
            {`$${plans[planId - 1].price}/${billing ? "month" : "year"}`}
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.addonsWrapper}>
          <div>
            {addonIds.map((addonId) => (
              <p className={styles.addonName}>{addons[addonId - 1].name}</p>
            ))}
          </div>
          <div>
            {addonIds.map((addonId) => (
              <p className={styles.addonPrice}>{`+$${
                addons[addonId - 1].price
              }/${billing ? "month" : "year"}`}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.totalWrapper}>
        <p className={styles.totalName}>{`Total(per ${
          billing ? "month" : "year"
        })`}</p>
        <p className={styles.totalPrice}>{`$${totalSum}`}</p>
        <div className={styles.navigation}>
          <button className={styles.prevBtn} onClick={prevStep}>
            Go Back
          </button>
          <button className={styles.nextBtn} onClick={() => setStep()}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
