import { ActionTypes } from './actions'

const reducer = (state, action) => {
  switch(action.type) {
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        user: {
          sessionExpired: true,
        }
      }
    }

    case ActionTypes.SIGNUP:
    case ActionTypes.LOGIN: {
      return {
        ...state,
        user: {
          attributes: action.payload,
          sessionStart: new Date(),
          sessionExpired: false,
        }
      }
    }

    case ActionTypes.PRODUCTS_UPDATE: {
      return {
        ...state,
        products: action.payload,
      }
    }

    default:
      return state
  }
}

export default reducer
