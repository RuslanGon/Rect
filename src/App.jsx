import { useState } from "react";
import "./App.css";
// import MailBox from "./components/MailBox.jsx";
// import meest from '../meest.json'
// import nova from '../nova.json'
// import ukr from '../ukr.json'
import DrinksCounter from "./components/DrinksCounter.jsx";
import DrinksValues from "./components/DrinksValues.jsx";

function App() {
  const [drinks, setDrinks] = useState({ beer: 0, whiskey: 0, wine: 0 });

  const handleLogDrink = (drinkName) => {
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
    console.log(drinkName);
  };

  const reset = () => {
    setDrinks({ beer: 0, whiskey: 0, wine: 0 });
  };

  return (
    <div>
      <DrinksValues drinks={drinks} />
      <DrinksCounter handleLogDrink={handleLogDrink} />
      <button onClick={reset}>Recet</button>
      {/* <MailBox boxUsers={meest} boxTitle="Meest Express" count={5}/>
      <MailBox boxUsers={nova} boxTitle="Nova Poshta" count={3}/>
      <MailBox boxUsers={ukr} boxTitle="Ukr Poshta"/> */}
    </div>
  );
}

export default App;
