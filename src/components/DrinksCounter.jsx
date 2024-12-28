import { useEffect } from "react";

const DrinksCounter = ({ handleLogDrink, toggleBar , reset, totalDrinks}) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleBar();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [toggleBar]);

  return (
    <div>
      <button onClick={() => handleLogDrink("beer")}>🍺 Beer</button>
      <button onClick={() => handleLogDrink("whiskey")}>🥃 Whiskey</button>
      <button onClick={() => handleLogDrink("wine")}>🍷 Wine</button>
      <br />
      {totalDrinks > 0 && <button onClick={reset}>Recet drinks</button>}
    </div>
  );
};

export default DrinksCounter;
