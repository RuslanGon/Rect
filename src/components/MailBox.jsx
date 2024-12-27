import css from './MailBox.module.css'

const MailBox = ({boxTitle, count = 0}) => {
  return (
    <div className={css.div}>
        <h2 className={css.text}>{boxTitle}</h2>
        {count === 0 ? (
        <p>Сейчас нет активных отделений</p>
      ) : (
        <p>Количество активных отделений: {count}</p>
      )}
        <ul>
            <li>Ruslan@jmail.com</li>
            <li>Lena@jmail.com</li>
            <li>Igor@jmail.com</li>
        </ul>
    </div>
  )
}

export default MailBox