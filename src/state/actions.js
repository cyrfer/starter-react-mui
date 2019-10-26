
export const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  PRODUCTS_UPDATE: 'PRODUCTS_UPDATE',
}

export const Logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  }
}

export const Login =  (payload) => {
  return {
    type: ActionTypes.LOGIN,
    payload,
  }
}

export const Signup = (payload) => {
  return {
    type: ActionTypes.SIGNUP,
    payload,
  }
}

export const UpdateProducts = (payload) => {
  return {
    type: ActionTypes.PRODUCTS_UPDATE,
    payload,
  }
}
