
import "./App.css";
import MailBox from "./components/MailBox.jsx";
import meest from '../meest.json'
import nova from '../nova.json'
import ukr from '../ukr.json'


function App() {
  return (
    <div>
      <MailBox boxUsers={meest} boxTitle="Meest Express" count={5}/>
      <MailBox boxUsers={nova} boxTitle="Nova Poshta" count={3}/>
      <MailBox boxUsers={ukr} boxTitle="Ukr Poshta"/>
    </div>
  );
}

export default App;
