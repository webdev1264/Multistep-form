import { useDispatch } from "react-redux";
import Header from "../Header";
import { prevStep, setStep } from "../../features/stepSlice";
import styles from "./summary.module.css";

const Summary = ({ billing, selection, plans, addons }) => {
  const dispatch = useDispatch();
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
            <button className={styles.btn} onClick={() => dispatch(setStep(2))}>
              Change
            </button>
          </div>
          <p className={styles.price}>
            {`$${plans[planId - 1].price}/${billing ? "month" : "year"}`}
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.addonsWrapper}>
          {addonIds.map((addonId) => (
            <div className={styles.addon}>
              <p className={styles.addonName}>{addons[addonId - 1].name}</p>
              <p className={styles.addonPrice}>{`+$${
                addons[addonId - 1].price
              }/${billing ? "month" : "year"}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.totalWrapper}>
        <p className={styles.totalName}>{`Total(per ${
          billing ? "month" : "year"
        })`}</p>
        <p className={styles.totalPrice}>{`$${totalSum}`}</p>
        <div className={styles.navigation}>
          <button
            className={styles.prevBtn}
            onClick={() => dispatch(prevStep())}
          >
            Go Back
          </button>
          <button
            className={styles.nextBtn}
            onClick={() => dispatch(setStep(5))}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
