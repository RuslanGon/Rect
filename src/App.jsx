import "./App.css";
import MailBox from "./components/MailBox.jsx";
import meest from "../meest.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import MailBoxForm from "./components/MailBoxForm.jsx";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifyUsers = localStorage.getItem("usersKey");
    const parseUsers = JSON.parse(stringifyUsers) ?? meest;
    return parseUsers;
  });

  useEffect(() => {
    localStorage.setItem("usersKey", JSON.stringify(users));
  }, [users]);

  const AddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers((prevState) => [...prevState, finalUser]); 
  };

  const onDeleteUser = (userId) => {
    setUsers((prevState) => prevState.filter(user => user.id !== userId));
  };

  return (
    <div>
      <MailBoxForm AddUser={AddUser} />
      <MailBox user={users} boxTitle="Meest Express" onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
