import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from '../../redux/selector';
import { fetchContacts } from '../../redux/contacts/contact-operations';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import style from './PhoneBook.module.css';
import Loader from 'components/Loader/Loader';

const PhoneBook = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items && items.length > 0 ? (
        <Filter />
      ) : (
        <div className="style.wrapper">
          Your phonebook is empty. Add first contact!
        </div>
      )}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {items && items.length > 0 && <ContactList />}
    </div>
  );
};

export default PhoneBook;
