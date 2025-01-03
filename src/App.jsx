import "./App.css";
import MailBox from "./components/MailBox.jsx";
import meest from "../meest.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import MailBoxForm from "./components/MailBoxForm.jsx";

function App() {
  const [users, setUsers] = useState(meest);

  const AddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers((prevState) => [...prevState, finalUser]); 
  };

  return (
    <div>
      <MailBoxForm AddUser={AddUser} />
      <MailBox user={users} boxTitle="Meest Express" />
    </div>
  );
}

export default App;
