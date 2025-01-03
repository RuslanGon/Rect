const MailBoxForm = ({ AddUser }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const userEmail = event.currentTarget.elements.userEmail.value;
      const userName = event.currentTarget.elements.userName.value;

      AddUser({ userEmail, userName });
  
      event.currentTarget.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add new user</h2>
        <label>
          <span>User Email</span>
          <br />
          <input type="email" name="userEmail" required placeholder="email" />
        </label>
        <br />
        <label>
          <span>User Name</span>
          <br />
          <input type="text" name="userName" required placeholder="name" />
        </label>
        <br />
        <button type="submit">Add user</button>
      </form>
    );
  };
  
  export default MailBoxForm;
  