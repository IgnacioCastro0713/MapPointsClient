import { alertTypes } from '../types/alert.type';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertTypes.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertTypes.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertTypes.CLEAR:
      return {};
    default:
      throw new Error(`Unhandled action type: ${ action.type }`)
  }
}