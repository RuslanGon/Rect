import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiDeleteContact, apiGetContacts } from "../redux/contacts/operations.js"
import { selectPhoneBookContacts, selectPhoneBookIsError, selectPhoneBookIsLoading } from "../redux/contacts/selector.js"
import Loader from "../components/Loader.jsx"
import Error from "../components/Error.jsx"
import AddContactForm from "../components/AddContactForm.jsx"


const ContactsPage = () => {

  const contacts = useSelector(selectPhoneBookContacts)
  const isLoading = useSelector(selectPhoneBookIsLoading)
  const isError = useSelector(selectPhoneBookIsError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(apiGetContacts())
  },[dispatch])

  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
    console.log(contactId);
  };

  return (
    <div>
      <AddContactForm />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
        {Array.isArray(contacts) && contacts.length === 0 && 
          <li>You dont have any added contacts yet! </li>
        }
        {Array.isArray(contacts) &&
          contacts.map(item => 
            <li key={item.id}>
              <h3>name: <b>{item.name}</b></h3>
              <p>number: <b>{item.number}</b></p>
              <button type="button" onClick={() => onDeleteContact(item.id)}>delete contact 🎈</button>
            </li>
          )}
      </ul>
    </div>
  );
}

export default ContactsPage