
import MailBox from "../components/MailBox.jsx";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import MailBoxForm from "../components/MailBoxForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/mailbox/mailboxReducer.js";
import { selectFilterUser, selectorUsers } from "../redux/mailbox/selectors.js";
import MailBoxFilter from "../components/MailBoxFilter.jsx";

function MailBoxPage() {
const dispatch = useDispatch()
const users = useSelector(selectorUsers);
const filteredUser = useSelector(selectFilterUser)

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


  // const filteredUsers = useMemo(() => {
  //   return users.filter((user) => {
  //     return (
  //       user.userEmail.toLowerCase().includes(filter.toLowerCase()) ||
  //       user.userName.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   });
  // }, [users, filter]);


  return (
    <div>
      <MailBoxForm AddUser={AddUser} />
      <MailBoxFilter />
      <MailBox user={filteredUser} boxTitle="Meest Express" onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default MailBoxPage;
