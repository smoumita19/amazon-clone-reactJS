export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket

      // Cloned the basket
      let newBasket = [...state.basket]; // current basket

      // We check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product ( id : ${action.id}) as its not there`
        );
      }

      // Return new state
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;
