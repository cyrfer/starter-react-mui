
export const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  PRODUCTS_UPDATE: 'PRODUCTS_UPDATE',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  PAY: 'PAY',
}

export const PayAction = (payload) => {
  return {
    type: ActionTypes.PAY,
    payload,
  }
}

export const AddToCart = (payload) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload,
  }
}

export const RemoveFromCart = (payload) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload,
  }
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
