import { createSlice } from "@reduxjs/toolkit";
import { apiAddNewContacts, apiDeleteContact, apiGetContacts } from "./operations.js";

const INITAL_STATE = {
    contacts: null,
    isLoading: false,  
    isError: false
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITAL_STATE,
    extraReducers: (builder) =>
        builder
    .addCase(apiGetContacts.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.contacts = action.payload
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })


      .addCase(apiAddNewContacts.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiAddNewContacts.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.contacts = [...state.contacts, action.payload]
      })
      .addCase(apiAddNewContacts.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })


      .addCase(apiDeleteContact.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id);
      })
      .addCase(apiDeleteContact.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

   
});

export const contactsReducer = contactsSlice.reducer;