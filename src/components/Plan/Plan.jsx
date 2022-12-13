import Header from "../Header";
import Navigation from "../Navigation/Navigation";
import PlanOption from "./PlanOption";
import Billing from "./Billing";
import styles from "./plan.module.css";

const Plan = ({
  nextStep,
  prevStep,
  addPlan,
  billing,
  setBilling,
  selection,
  setSelection,
  plans,
  billingChange,
}) => {
  return (
    <div className={styles.container}>
      <Header
        heading="Select your plan"
        descr="You have the option of monthly or yearly billing."
      />
      <div className={styles.wrapper}>
        {plans.map((option, index) => (
          <PlanOption
            key={index}
            id={index}
            {...option}
            selection={selection}
            setSelection={setSelection}
            billing={billing}
          />
        ))}
      </div>
      <Billing
        billingChange={billingChange}
        billing={billing}
        setBilling={setBilling}
      />
      <Navigation prevStep={prevStep} nextStep={nextStep} />
    </div>
  );
};

export default Plan;
