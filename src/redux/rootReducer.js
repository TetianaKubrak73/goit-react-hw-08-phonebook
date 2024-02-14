import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contact-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
