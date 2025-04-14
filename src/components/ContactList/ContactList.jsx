import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'
import styles from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  )
}
