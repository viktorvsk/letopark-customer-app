const initialState = {
    comment: '',
    items: []
};
export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_CART': {
      return action.cart || state;
    }
    case 'CART_ADD_PRODUCT': {
      const itemToAdd = state.items.filter(item => item.product.id === action.product.id)[0];

      if (itemToAdd) {
        itemToAdd.qty += 1;
      } else {
        state.items.push({ qty: 1, product: action.product });
      }
      return {
        ...state,
        items: [...state.items]
      };
    }
    case 'CART_REMOVE_PRODUCT': {
      const itemToRemove = state.items.filter(item => item.product.id === action.product.id)[0];

      if (itemToRemove) {
        if (itemToRemove.qty === 1) {
          return {
            ...state,
            items: [...state.items.filter(item => item.product.id !== itemToRemove.product.id)]
          };
        } 
          itemToRemove.qty -= 1;
        
      } else {
        // state.items.push({ qty: 1, product: action.product })
      }
      return {
        ...state,
        items: [...state.items]
      };
    }
    case 'RESET_CART': {
      return {
        ...state,
        items: [],
        comment: ''
      };
    }
    case 'CART_COMMENT': {
      return {
        ...state,
        comment: action.comment
      };
    }
    case 'CART_SUBMIT_ORDER': {
      return {
        ...state,
        items: [],
        comment: ''
      };
    }
    default: {
      return state;
    }
  }
}
