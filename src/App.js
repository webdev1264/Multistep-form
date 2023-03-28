import { useState, useMemo } from "react";
import Menu from "./components/Menu/Menu";
import Info from "./components/Info/Info";
import Plan from "./components/Plan/Plan";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou";
import { initialPlans, initialAddons } from "./data/bundle";
import "./App.css";

const initialSelection = {
  planId: 1,
  addonIds: [1],
};

function App() {
  // data from form inputs
  const [info, setInfo] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [step, setStep] = useState(1);
  //yearly or monthly billing
  const [billing, setBilling] = useState(true);
  // selection of plan and plans
  const [selection, setSelection] = useState(initialSelection);

  const [plans, addons] = useMemo(() => {
    if (!billing) {
      return [calcPrice(initialPlans, 10), calcPrice(initialAddons, 10)];
    }
    return [initialPlans, initialAddons];
  }, [billing]);

  function calcPrice(addons, mult) {
    return addons.map((addon) => ({
      ...addon,
      price: addon.price * mult,
    }));
  }

  const handleChangePlan = (planId) => {
    setSelection((prev) => ({ ...prev, planId }));
  };

  const handleAddAddon = (addon) => {
    const addonId = [...selection.addonIds];
    addonId.push(addon);
    setSelection((prev) => ({ ...prev, addonIds: addonId }));
  };

  const handleRemoveAddon = (addon) => {
    const addonId = selection.addonIds.filter((addonId) => addonId !== addon);
    setSelection((prev) => ({
      ...prev,
      addonIds: addonId,
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const billingChangeHandler = () => {
    setBilling(!billing);
  };

  return (
    <main className="App">
      <div className="container">
        <Menu step={step} />
        {step === 1 ? (
          <Info info={info} setInfo={setInfo} nextStep={nextStep} />
        ) : step === 2 ? (
          <Plan
            nextStep={nextStep}
            prevStep={prevStep}
            billing={billing}
            setBilling={setBilling}
            selection={selection}
            changePlan={handleChangePlan}
            plans={plans}
            billingChange={billingChangeHandler}
          />
        ) : step === 3 ? (
          <Addons
            addons={addons}
            nextStep={nextStep}
            prevStep={prevStep}
            billing={billing}
            addAddon={handleAddAddon}
            removeAddon={handleRemoveAddon}
            selection={selection}
          />
        ) : step === 4 ? (
          <Summary
            billing={billing}
            selection={selection}
            prevStep={prevStep}
            setStep={setStep}
            plans={plans}
            addons={addons}
          />
        ) : (
          <ThankYou />
        )}
      </div>
      <div className="mobileNavigation"></div>
    </main>
  );
}

export default App;
