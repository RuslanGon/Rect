
import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import { carsReducer } from "./cars/carsSlice.js";

export const store = configureStore({
    reducer: {
        mailbox: mailboxReducer,
        cars: carsReducer
    }
})