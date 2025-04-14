import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import { selectIsLoading, selectError } from './redux/contactsSlice'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

export default function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Loading...</b>}
      <SearchBox />
      <ContactList />
    </div>
  )
}
