
const MailBoxFilter = ({filter, onChangeFilter}) => {
  return (
    <div>
    <h2>Search user by name or email</h2>
    <input type="text" name="" placeholder="Search" value={filter} onChange={onChangeFilter} />
   </div>
  )
}

export default MailBoxFilter