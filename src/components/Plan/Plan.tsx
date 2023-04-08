import Header from "../Header";
import Navigation from "../Navigation/Navigation";
import PlanOption from "./PlanOption";
import Billing from "./Billing";
import styles from "./plan.module.css";
import { InitialPlan } from "../../types/interfaces";

interface PlanProps {
  billing: boolean;
  plans: InitialPlan[];
  billingChange: () => void;
}

const Plan: React.FC<PlanProps> = ({ billing, plans, billingChange }) => {
  return (
    <div className={styles.container}>
      <Header
        heading="Select your plan"
        descr="You have the option of monthly or yearly billing."
      />
      <div className={styles.wrapper}>
        {plans.map((plan) => (
          <PlanOption key={plan.id} {...plan} billing={billing} />
        ))}
      </div>
      <Billing billingChange={billingChange} billing={billing} />
      <Navigation />
    </div>
  );
};

export default Plan;
