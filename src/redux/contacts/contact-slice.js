import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contact-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContacts.pending, pending)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(payload)) {
          state.items = payload; // Если сервер возвращает обновленный список контактов
        } else {
          state.items.push(payload);
        }
      })

      .addCase(deleteContacts.pending, pending)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContacts.rejected, rejected);
  },
});

export default contactSlice.reducer;
