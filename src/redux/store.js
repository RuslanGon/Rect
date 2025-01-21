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


const mailboxPersistConfig = {
  key: "mailbox",
  storage,
  whitelist: ["users"], 
};


const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["carDetails"]
};


const persisMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);
const persisCarsReducer = persistReducer(carsPersistConfig, carsReducer);


export const store = configureStore({
  reducer: {
    mailbox: persisMailboxReducer,
    cars: persisCarsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
