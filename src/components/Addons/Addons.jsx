import Header from "../Header";
import Navigation from "../Navigation/Navigation";
import styles from "./addons.module.css";

const Addons = ({ addons, setAddons, nextStep, prevStep, billing }) => {

  const handleChange = (index) => {
    setAddons(
      addons.map((addon, addonIndex) =>
        index === addonIndex ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  return (
    <div className={styles.container}>
      <Header
        heading="Pick add-ons"
        descr="Add-ons help enhance your gaming experiece."
      />
      <form>
        {addons.map((addon, index) => (
          <label
            key={index}
            className={
              addon.selected
                ? `${styles.wrapper} ${styles.selected}`
                : styles.wrapper
            }
          >
            <input
              type="checkbox"
              onChange={() => handleChange(index)}
              checked={addons[index].selected}
            />
            <span className={styles.checkmark}></span>
            <div className={styles.descrWrapper}>
              <h2 className={styles.header}>{addon.name}</h2>
              <p className={styles.descr}>{addon.descr}</p>
            </div>
            <div className={styles.price}>{`+$${addon.price}/${
              billing ? "month" : "year"
            }`}</div>
          </label>
        ))}
      </form>
      <Navigation nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
};

export default Addons;
