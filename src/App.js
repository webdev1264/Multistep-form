import { useState } from "react";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import "./App.css";
import ThankYou from "./components/ThankYou";

function App() {
  const [isValidated, setIsValidated] = useState({
    name: true,
    email: true,
    tel: true,
  });

  const [step, setStep] = useState(1);

  const [billing, setBilling] = useState(true);

  const [selection, setSelection] = useState(0);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const [plans, setPlans] = useState([
    {
      name: "Arcade",
      price: 9,
    },
    {
      name: "Advanced",
      price: 12,
    },
    {
      name: "Pro",
      price: 15,
    },
  ]);

  const [addons, setAddons] = useState([
    {
      name: "Online service",
      descr: "Access to multiplayer games",
      price: 1,
      selected: true,
    },
    {
      name: "Larger storage",
      descr: "Extra 1TB of cloud save",
      price: 2,
      selected: true,
    },
    {
      name: "Customizable Profile",
      descr: "Custom theme on your profile",
      price: 2,
      selected: false,
    },
  ]);

  const validation = ({ name, email, tel }) => {
    if (!name) {
      name = false;
    }
    if (!email.includes("@")) {
      email = false;
    }
    if (!tel) {
      tel = false;
    }
    return { name, email, tel };
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const checkValidationHandler = (event) => {
    event.preventDefault();
    const validationResult = validation(info);
    setIsValidated(validationResult);
    if (!Object.values(validationResult).includes(false)) {
      nextStep();
    }
  };

  const billingChangeHandler = () => {
    setBilling(!billing);
    if (billing) {
      setPlans(
        plans.map((plan) => ({
          ...plan,
          price: plan.price * 10,
        }))
      );
      setAddons(
        addons.map((addon) => ({
          ...addon,
          price: addon.price * 10,
        }))
      );
      return;
    }
    setPlans(
      plans.map((plan) => ({
        ...plan,
        price: plan.price / 10,
      }))
    );
    setAddons(
      addons.map((addon) => ({
        ...addon,
        price: addon.price / 10,
      }))
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Menu step={step} />
        {step === 1 ? (
          <Info
            info={info}
            setInfo={setInfo}
            isValidated={isValidated}
            checkValidation={checkValidationHandler}
          />
        ) : step === 2 ? (
          <Plan
            nextStep={nextStep}
            prevStep={prevStep}
            billing={billing}
            setBilling={setBilling}
            selection={selection}
            setSelection={setSelection}
            plans={plans}
            billingChange={billingChangeHandler}
          />
        ) : step === 3 ? (
          <Addons
            addons={addons}
            setAddons={setAddons}
            nextStep={nextStep}
            prevStep={prevStep}
            billing={billing}
          />
        ) : step === 4 ? (
          <Summary
            plans={plans}
            billing={billing}
            selection={selection}
            addons={addons}
            prevStep={prevStep}
            nextStep={nextStep}
            billingChange={billingChangeHandler}
            setStep={setStep}
          />
        ) : (
          <ThankYou />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
