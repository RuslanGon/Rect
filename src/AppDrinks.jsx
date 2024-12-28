import { useState } from "react";
import "./App.css";
import DrinksCounter from "./components/DrinksCounter.jsx";
import DrinksValues from "./components/DrinksValues.jsx";

function AppDrinks() {
  const [drinks, setDrinks] = useState({ beer: 0, whiskey: 0, wine: 0 });
  const [isVisibleBar, setIsisibleBar] = useState(false);

  const toggleBar = () => {
    setIsisibleBar(!isVisibleBar)
  }

  const handleLogDrink = (drinkName) => {
    if (drinks[drinkName] === 5 && drinkName === "beer") return;
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const reset = () => {
    setDrinks({ beer: 0, whiskey: 0, wine: 0 });
  };

  const totalDrinks = drinks.beer + drinks.whiskey + drinks.wine;

  return (
    <div>
      <button onClick={toggleBar}>{isVisibleBar ? "Close" : "Show"} miniBar</button>
      {isVisibleBar && (
        <div>
          <DrinksValues drinks={drinks} totalDrinks={totalDrinks} />
          <DrinksCounter handleLogDrink={handleLogDrink} />
          <button onClick={reset}>Recet drinks</button>
        </div>
      )}
    </div>
  );
}

export default AppDrinks;
