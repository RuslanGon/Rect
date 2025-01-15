// import "./App.css";
import MailBox from "../components/MailBox.jsx";
import meest from "../../meest.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import MailBoxForm from "../components/MailBoxForm.jsx";

function MailBoxPage() {
  const [users, setUsers] = useState(() => {
    const stringifyUsers = localStorage.getItem("usersKey");
    const parseUsers = JSON.parse(stringifyUsers) ?? meest;
    return parseUsers;
  });
  const [filter, setFilter] = useState('')

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

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter(user => {
    // Фильтрация по имени и email
    return (
      user.userEmail.toLowerCase().includes(filter.toLowerCase()) ||
      user.userName.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <MailBoxForm AddUser={AddUser} />
     <section>
      <h2>Search user by name or email</h2>
      <input type="text" name="" placeholder="Search" value={filter} onChange={onChangeFilter} />
     </section>
      <MailBox user={filteredUsers} boxTitle="Meest Express" onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default MailBoxPage;
