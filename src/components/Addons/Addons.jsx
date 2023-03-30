import Header from "../Header";
import Navigation from "../Navigation/Navigation";
import Addon from "./Addon";
import styles from "./addons.module.css";

const Addons = ({ addons, nextStep, prevStep, billing }) => {
  return (
    <div className={styles.container}>
      <Header
        heading="Pick add-ons"
        descr="Add-ons help enhance your gaming experience."
      />
      <form>
        {addons.map((addon) => (
          <Addon key={addon.id} id={addon.id} addon={addon} billing={billing} />
        ))}
      </form>
      <Navigation />
    </div>
  );
};

export default Addons;
