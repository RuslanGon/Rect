import { createSelector } from "@reduxjs/toolkit"

export const selectorUsers = state => state.mailbox.users
export const selectorFilter = state => state.mailbox.filter

export const selectFilterUser = createSelector(
  [selectorUsers, selectorFilter],
  (users, filter) => {
    return users.filter((user) => {
      return (
        user.userEmail.toLowerCase().includes(filter.toLowerCase()) ||
        user.userName.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
);