import { useDispatch, useSelector } from "react-redux";
import { selectorFilter } from "../redux/mailbox/selectors.js";
import { setFilter } from "../redux/mailbox/mailboxReducer.js";

const MailBoxFilter = () => {
  const dispatch = useDispatch(); 
  const filter = useSelector(selectorFilter); 

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value)); 
  };

  return (
    <div>
    <h2>Search user by name or email</h2>
    <input type="text" name="" placeholder="Search" value={filter} onChange={onChangeFilter} />
   </div>
  )
}

export default MailBoxFilter