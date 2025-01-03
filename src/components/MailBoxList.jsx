const MailBoxList = ({ user, onDeleteUser }) => {
  return (
    <li>

        <p>Email: {user.userEmail}</p>
        <p>Name: {user.userName}</p>
        <button onClick={() => onDeleteUser(user.id)}>Delete user</button>

    </li>
  );
};

export default MailBoxList;
