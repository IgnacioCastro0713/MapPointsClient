import { alertTypes } from '../types/alert.type'

const success = message => ({ type: alertTypes.SUCCESS, message })
const error = message => ({ type: alertTypes.ERROR, message })
const clear = () => ({ type: alertTypes.CLEAR })

export const alertActions = {
  success,
  error,
  clear
};
