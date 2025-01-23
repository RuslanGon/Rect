import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import { carsReducer } from "./cars/carsSlice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { productDetailsReducer } from "./productDetails/productDetailslSlice.js";

const mailboxPersistConfig = {
  key: "mailbox",
  storage,
  whitelist: ["users"], 
};

const persisMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);

export const store = configureStore({
  reducer: {
    mailbox: persisMailboxReducer,
    cars: carsReducer,
    productDetails: productDetailsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
