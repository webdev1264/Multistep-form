import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Menu from "./components/Menu/Menu";
import Info from "./components/Info/Info";
import Plan from "./components/Plan/Plan";
import Addons from "./components/Addons/Addons";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou";
import { initialPlans, initialAddons } from "./data/bundles";
import {
  InitialPlanInterface,
  InitialAddonInterface,
  InitialInfoInterface,
  InitialSelectionInterface,
} from "./types/interfaces";
import { RootStateType } from "./features/rootReducer";
import "./App.css";

const App: React.FC = () => {
  // data from form inputs
  const [info, setInfo] = useState<InitialInfoInterface>({
    name: "",
    email: "",
    tel: "",
  });
  const step = useSelector<RootStateType, number>((state) => state.steps.step);
  //yearly or monthly billing
  const [billing, setBilling] = useState<boolean>(true);
  // selection of plan and addons
  const selection = useSelector<RootStateType, InitialSelectionInterface>(
    (state) => state.selection
  );

  const [plans, addons] = useMemo(() => {
    if (!billing) {
      return [calcPrice(initialPlans, 10), calcPrice(initialAddons, 10)];
    }
    return [initialPlans, initialAddons];
  }, [billing]);

  function calcPrice(
    addons: InitialPlanInterface[] | InitialAddonInterface[],
    mult: number
  ) {
    return addons.map((addon) => ({
      ...addon,
      price: addon.price * mult,
    }));
  }

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const billingChangeHandler = () => {
    setBilling(!billing);
  };

  return (
    <main className="App">
      <div className="container">
        <Menu step={step} />
        {step === 1 ? (
          <Info info={info} infoChange={handleInfoChange} />
        ) : step === 2 ? (
          <Plan
            billing={billing}
            plans={plans}
            billingChange={billingChangeHandler}
          />
        ) : step === 3 ? (
          <Addons
            addons={addons as InitialAddonInterface[]}
            billing={billing}
          />
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
};

export default App;
