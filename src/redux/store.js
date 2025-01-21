
import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";

export const store = configureStore({
    reducer: {
        mailbox: mailboxReducer
    }
})