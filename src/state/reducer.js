import { ActionTypes } from './actions'
import { indexByKey, drillDown } from 'deepdown'

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
      // current products
      const productList = drillDown(state, ['products', 'list']) || []

      // for each new product
      action.payload.forEach(np => {
        // check if we already have that product
        const index = productList.findIndex(p => p.id === np.id)
        if (index !== -1) {
          productList[index] = np
        } else {
          productList.push(np)
        }
      })

      return {
        ...state,
        products: {
          list: productList,
          bySlug: indexByKey(productList, ['slug']),
        }
      }
    }

    case ActionTypes.ADD_TO_CART: {
      const cartItems = drillDown(state, 'cart.items'.split('.')) || []
      cartItems.push(action.payload)
      const itemsByProductId = indexByKey(cartItems, ['id'])
      return {
        ...state,
        cart: {
          items: cartItems,
          itemsByProductId,
        }
      }
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const cartItems = drillDown(state, 'cart.items'.split('.')) || []
      // find first item with matching product ID
      const productIndex = cartItems.findIndex(ci => ci.id === action.payload.id)
      // do not include item with matching product ID
      const remainingItems = [
        ...(cartItems.slice(0, productIndex)),
        ...(cartItems.slice(productIndex + 1)),
      ]
      // re-index remaining items
      const itemsByProductId = indexByKey(remainingItems, ['id'])
      return {
        ...state,
        cart: {
          items: cartItems,
          itemsByProductId,
        }
      }
    }

    case ActionTypes.PAY: {
      return {
        ...state,
        cart: {
          items: [],
          itemsByProductId: {}
        }
      }
    }
    default:
      return state
  }
}

export default reducer
