
import "./App.css";
import MailBox from "./components/MailBox.jsx";
import meest from '../meest.json'

function App() {
  return (
    <div>
      <MailBox user={meest} boxTitle="Meest Express"/>
    </div>
  );
}

export default App;
