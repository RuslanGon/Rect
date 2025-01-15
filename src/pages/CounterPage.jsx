import { useEffect, useState } from "react";
// import "./App.css";
import DrinksCounter from "../components/DrinksCounter.jsx";
import DrinksValues from "../components/DrinksValues.jsx";

const initialsDrinks = { beer: 0, whiskey: 0, wine: 0 };

function CounterPage() {
  const [drinks, setDrinks] = useState(() => {
    const stringifyDrinks = localStorage.getItem("drinksKey");
    const parseDrinks = JSON.parse(stringifyDrinks) ?? initialsDrinks;
    return parseDrinks;
  });
  const [isVisibleBar, setIsisibleBar] = useState(true);

  const toggleBar = () => {
    setIsisibleBar(!isVisibleBar);
  };

  const handleLogDrink = (drinkName) => {
    if (drinks[drinkName] === 5 && drinkName === "beer") return;
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const reset = () => {
    setDrinks({ beer: 0, whiskey: 0, wine: 0 });
  };

  const totalDrinks = drinks.beer + drinks.whiskey + drinks.wine;

  useEffect(() => {
    localStorage.setItem("drinksKey", JSON.stringify(drinks));
  }, [drinks]);

  return (
    <div>
      <button onClick={toggleBar}>
        {isVisibleBar ? "Close" : "Show"} miniBar
      </button>
      {isVisibleBar && (
        <div>
          <DrinksValues drinks={drinks} totalDrinks={totalDrinks} />
          <DrinksCounter toggleBar={toggleBar} handleLogDrink={handleLogDrink} reset={reset} totalDrinks={totalDrinks}/>
        </div>
      )}
    </div>
  );
}

export default CounterPage;
