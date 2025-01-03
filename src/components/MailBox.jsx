import css from "./MailBox.module.css";
import MailBoxList from "./MailBoxList.jsx";

const MailBox = ({ boxTitle, user, onDeleteUser }) => {
  return (
    <div className={css.div}>
      <h2 className={css.text}>{boxTitle}</h2>
      <ul>
        {user.map((user) => (
          <MailBoxList key={user.id} user={user} onDeleteUser={onDeleteUser} />
        ))}
      </ul>
    </div>
  );
};

export default MailBox;
