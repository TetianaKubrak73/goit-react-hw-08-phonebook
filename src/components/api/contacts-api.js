// import axios from 'axios';
import authInstance from './auth-api';
// const contactsInstance = axios.create({
//   baseURL: 'https://https://connections-api.herokuapp.com//contacts',
// });

export const requestFetchContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};
export const requestAddContacts = async body => {
  const { data } = await authInstance.post('/contacts', body);
  return data;
};
export const requestDeleteContacts = async id => {
  const { data } = await authInstance.delete(`/contacts${id}`);
  return data;
};
