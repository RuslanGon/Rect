import css from "./MailBox.module.css";

const MailBox = ({ boxTitle, count = 0, boxUsers }) => {
  return (
    <div className={css.div}>
      <h2 className={css.text}>{boxTitle}</h2>
      {count === 0 ? (
        <p>Сейчас нет активных отделений</p>
      ) : (
        <p>Количество активных отделений: {count}</p>
      )}
      <ul>
        {boxUsers.map((user) => {
          return (
            <div key={user.id}>
              <li>Email: {user.userEmail}</li>
              <li>Name: {user.userName}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MailBox;
