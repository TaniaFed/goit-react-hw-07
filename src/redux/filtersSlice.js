import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
        filteredItems: [],   
        isLoading: false,
        error: null,
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    },
});

export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filtersSlice.actions;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export default filtersSlice.reducer
