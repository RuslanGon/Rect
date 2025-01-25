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
import { authReducer } from "./auth/authSlice.js";

const mailboxPersistConfig = {
  key: "mailbox",
  storage,
  whitelist: ["users"], 
};

const authPersistConfig = {
  key: "auth", 
  storage,
  whitelist: ["token"], 
};

const persisMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);
const persisAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    mailbox: persisMailboxReducer,
    cars: carsReducer,
    productDetails: productDetailsReducer,
    auth: persisAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
