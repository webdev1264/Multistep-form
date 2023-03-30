import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Menu from "./components/Menu/Menu";
import Info from "./components/Info/Info";
import Plan from "./components/Plan/Plan";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou";
import { initialPlans, initialAddons } from "./data/bundles";
import "./App.css";

function App() {
  // data from form inputs
  const [info, setInfo] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const step = useSelector((state) => state.steps.step);
  //yearly or monthly billing
  const [billing, setBilling] = useState(true);
  // selection of plan and addons
  const selection = useSelector((state) => state.selection);

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

  const billingChangeHandler = () => {
    setBilling(!billing);
  };

  return (
    <main className="App">
      <div className="container">
        <Menu step={step} />
        {step === 1 ? (
          <Info info={info} setInfo={setInfo} />
        ) : step === 2 ? (
          <Plan
            billing={billing}
            setBilling={setBilling}
            plans={plans}
            billingChange={billingChangeHandler}
          />
        ) : step === 3 ? (
          <Addons addons={addons} billing={billing} />
        ) : step === 4 ? (
          <Summary
            billing={billing}
            selection={selection}
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
