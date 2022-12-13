import Header from "../Header";
import styles from "../css/Summary.module.css";

const Summary = ({
  prevStep,
  nextStep,
  plans,
  billing,
  selection,
  addons,
  setStep,
}) => {
  const totalSum = () =>
    plans[selection].price +
    addons.reduce(
      (acc, addon, _) => (addon.selected ? (acc += addon.price) : acc),
      0
    );
  return (
    <div className={styles.container}>
      <Header
        heading="Finishing up"
        descr="Double-check everything looks OK before confirming."
      />
      <div className={styles.wrapper}>
        <div className={styles.planWrapper}>
          <div>
            <p className={styles.heading}>{`${plans[selection].name}(${
              billing ? "Monthly" : "Yearly"
            })`}</p>
            <button className={styles.btn} onClick={() => setStep(2)}>
              Change
            </button>
          </div>
          <p className={styles.price}>{`$${plans[selection].price}/${
            billing ? "month" : "year"
          }`}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.addonsWrapper}>
          <div>
            {addons.map((addon, index) =>
              addon.selected ? (
                <p key={index} className={styles.addonName}>
                  {addon.name}
                </p>
              ) : (
                ""
              )
            )}
          </div>
          <div>
            {addons.map((addon, index) =>
              addon.selected ? (
                <p key={index} className={styles.addonPrice}>{`+$${
                  addon.price
                }/${billing ? "month" : "year"}`}</p>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.totalWrapper}>
        <p className={styles.totalName}>{`Total(per ${
          billing ? "month" : "year"
        })`}</p>
        <p className={styles.totalPrice}>{`$${totalSum()}`}</p>
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
