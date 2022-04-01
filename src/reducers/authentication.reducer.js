import React from 'react';
import { types } from "../types/authentication.type";

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : '';
let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).token
  : '';

export const initialState = () => ({
  user: '' || user,
  token: '' || token,
  logged: false,
});

export const AuthenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload.user,
        token: action.payload.token,
        logged: true,
      }
    case types.logout:
      return {
        token: '',
        logged: true,
      }
    default:
      throw new Error(`Unhandled action type: ${ action.type }`);
  }
};