import Header from "../Header";
import Navigation from "../Navigation/Navigation";
import PlanOption from "./PlanOption";
import Billing from "./Billing";
import styles from "./plan.module.css";

const Plan = ({
  nextStep,
  prevStep,
  billing,
  setBilling,
  selection,
  changePlan,
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
        {plans.map((plan) => (
          <PlanOption
            key={plan.id}
            {...plan}
            selection={selection}
            changePlan={changePlan}
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
