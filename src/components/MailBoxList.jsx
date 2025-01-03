const MailBoxList = ({ user }) => {
    return (
      <div>
        <li>Email: {user.userEmail}</li>
        <li>Name: {user.userName}</li>
      </div>
    );
  };
  
  export default MailBoxList;
  