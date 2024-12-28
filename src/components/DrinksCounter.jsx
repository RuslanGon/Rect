import { useEffect } from "react";

const DrinksCounter = ({ handleLogDrink, toggleBar }) => {
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
    </div>
  );
};

export default DrinksCounter;
