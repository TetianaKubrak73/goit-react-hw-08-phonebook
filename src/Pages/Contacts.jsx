import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contact-operations';
import { selectIsLoading } from '../redux/selector';
import Loader from '../components/Loader/Loader';
import PhoneBook from 'components/PhoneBook/PhoneBook';

// Компонент Tasks відповідає за відображення списку контактів та їх форми
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <div>{isLoading && <Loader />}</div> <PhoneBook />
    </>
  );
}
