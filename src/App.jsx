import "./App.css";
import MailBox from "./components/MailBox.jsx";

function App() {
  return (
    <div>
      <MailBox boxTitle="Meest Express" count={5}/>
      <MailBox boxTitle="Nova Poshta" count={3}/>
      <MailBox boxTitle="Ukr Poshta"/>
    </div>
  );
}

export default App;
