import "./App.css";
// import MailBox from "./components/MailBox.jsx";
// import meest from '../meest.json'
// import nova from '../nova.json'
// import ukr from '../ukr.json'
import DrinksCounter from "./components/DrinksCounter.jsx";
import DrinksValues from "./components/DrinksValues.jsx";

function App() {

  const handleLogDrink = (drinkName) => {
    console.log(drinkName);
  };

  return (
    <div>
      <DrinksValues drinks={{beer: 3, whiskey: 5, wine: 1}}/>
      <DrinksCounter handleLogDrink={handleLogDrink} />
      {/* <MailBox boxUsers={meest} boxTitle="Meest Express" count={5}/>
      <MailBox boxUsers={nova} boxTitle="Nova Poshta" count={3}/>
      <MailBox boxUsers={ukr} boxTitle="Ukr Poshta"/> */}
   
    </div>
  );
}

export default App;
