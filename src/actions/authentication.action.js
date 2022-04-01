import { AuthenticationTypes } from "../types/authentication.type";

const ROOT_URL = 'https://localhost:7163';

export async function authenticate(dispatch, payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  try {
    let response = await fetch(`${ ROOT_URL }/Authentication/Authenticate`, requestOptions);
    let data = await response.json();
    if (data.user) {
      dispatch({ type: AuthenticationTypes.LOGIN, payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
    }
    return data;
  } catch (error) {
    throw error
  }
}

export function logout(dispatch) {
  dispatch({ type: AuthenticationTypes.LOGOUT });
  localStorage.removeItem('currentUser');
}