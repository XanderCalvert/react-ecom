export const initialState = {
  cart: ["chicken"],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding to the basket
      return {
        ...state,
        cart: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing from the basket
      return { state };
    default:
      return state;
  }
};

export default reducer;

// export const initialState = {
//   cart: [],
//   user: null,
// };

// export const getTotal = (cart) =>
//   cart?.reduce((amount, item) => item.price + amount, 0);
// {
//   /* selector */
// }

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.item],
//       };
//     case "REMOVE_FROM_CART":
//       let newCart = [...state.cart];
//       const index = state.cart.findIndex(
//         (cartItem) => cartItem.id === action.id
//       );
//       if (index >= 0) {
//         newCart.splice(index, 1);
//       } else {
//         console.warn(`Cannot remove product (id: ${action.id})`);
//       }
//       return { ...state, cart: newCart };
//     default:
//       return state;
//   }
// };

// export default reducer;
