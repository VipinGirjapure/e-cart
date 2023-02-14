// export const CartReducer = (state: any, action: any) => {
//   const { shoppingCart, totalPrice, qty } = state;
//   console.log(state, "____state");
//   let product;
//   let index;
//   let updatedPrice;
//   let updatedQty;
//   let filtered;
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const check = shoppingCart.find((cart: any) => cart.id === action.id);
//       if (check) {
//         return state;
//       } else {
//         product = action.product;
//         product["qty"] = 1;
//         updatedQty = totalPrice + product.price;
//         return {
//           shoppingCart: [product, ...shoppingCart],
//           totalPrice: updatedPrice,
//           qty: updatedQty,
//         };
//       }
//     case "INCREMENT":
//       product = shoppingCart.find((product: any) => product.id === action.id);
//       index = shoppingCart.findIndex(
//         (product: any) => product.id === action.id
//       );
//       product.qty = qty + 1;
//       shoppingCart[index] = product;
//       return {
//         shoppingCart: [...shoppingCart],
//         totalPrice: updatedPrice,
//         qty: updatedQty,
//       };
//     case "DECREMENT":
//       product = shoppingCart.find((product: any) => product.id === action.id);
//       index = shoppingCart.findIndex(
//         (product: any) => product.id === action.id
//       );
//       if (product.qty > 1) {
//         product.qty = totalPrice - product.price;
//         updatedQty = qty - 1;
//         shoppingCart[index] = product;
//         return {
//           shoppingCart: [...shoppingCart],
//           totalPrice: updatedPrice,
//           qty: updatedQty,
//         };
//       } else {
//         return {
//           shoppingCart: [...shoppingCart],
//           totalPrice: totalPrice,
//           qty: qty,
//         };
//       }
//     case "DELETE_PRODUCT":
//       console.log("Delete");
//       filtered = shoppingCart.filter((cart: any) => cart.id !== action.id);
//       product = shoppingCart.find((cart: any) => cart.id === action.id);
//       updatedPrice = totalPrice - product.price * product.qty;
//       updatedQty = qty - product.qty;
//       return {
//         shoppingCart: [...filtered],
//         totalPrice: updatedPrice,
//         qty: updatedQty,
//       };
//     default:
//       return state;
//   }
// };
export {};
