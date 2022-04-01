import { types } from "../types/authentication.type";

const ROOT_URL = 'https://localhost:7163';

export async function authenticate(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    let response = await fetch(`${ ROOT_URL }/Authentication/Authenticate`, requestOptions);
    let data = await response.json();
    if (data.user) {
      dispatch({ type: types.login, payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export function logout(dispatch) {
  dispatch({ type: types.logout });
  localStorage.removeItem('currentUser');
}