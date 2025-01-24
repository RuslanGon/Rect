
import MailBox from "../components/MailBox.jsx";
import { useEffect} from "react";
import { nanoid } from "nanoid";
import MailBoxForm from "../components/MailBoxForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, setFilter } from "../redux/mailbox/mailboxReducer.js";
import { selectorFilter, selectorUsers } from "../redux/mailbox/selectors.js";
import MailBoxFilter from "../components/MailBoxFilter.jsx";

function MailBoxPage() {
const dispatch = useDispatch()
const users = useSelector(selectorUsers);
const filter = useSelector(selectorFilter);

  useEffect(() => {
    localStorage.setItem("usersKey", JSON.stringify(users));
  }, [users]);

  const AddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addUser(finalUser));
  };

  const onDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const onChangeFilter = (event) => {

    dispatch(setFilter(event.target.value));
  };

  const filteredUsers = users.filter(user => {
    return (
      user.userEmail.toLowerCase().includes(filter.toLowerCase()) ||
      user.userName.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <MailBoxForm AddUser={AddUser} />
   <MailBoxFilter filter={filter} onChangeFilter={onChangeFilter}/>
      <MailBox user={filteredUsers} boxTitle="Meest Express" onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default MailBoxPage;
