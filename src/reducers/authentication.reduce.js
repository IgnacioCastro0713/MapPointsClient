import React from 'react'
import { AuthenticationTypes } from '../types/authentication.type'

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : ''
let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).token
  : ''

export const initialState = () => ({
  user: '' || user,
  token: '' || token,
  logged: !!user,
})

export const AuthenticationReduce = (state = {}, action) => {
  switch (action.type) {
    case AuthenticationTypes.LOGIN:
      return {
        user: { ...action.payload.user },
        token: action.payload.token,
        logged: true,
      }
    case AuthenticationTypes.LOGOUT:
      return {
        token: '',
        logged: false,
      }
    default:
      throw new Error(`Unhandled action type: ${ action.type }`)
  }
}