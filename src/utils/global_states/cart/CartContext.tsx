/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { createContext, useEffect, useState } from "react";

export const CartContextProvider = createContext({});
const CartContext = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<string>("");

  const handleAddCart: any = (item: any) => {
    const foundData = cart.find((i: any) => i.id === item.id);
    if (!foundData) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateCart = (item: any, increment: boolean) => {
    const qtyProduct = cart.map((i: any) => {
      return item.id === i.id
        ? {
            ...i,
            quantity: i.quantity + (increment ? 1 : -1),
          }
        : i;
    });
    setCart(qtyProduct);
  };
  const removeItem = (item: any) => {
    const cartItem = cart.filter((i: any) => i.id !== item.id);
    setCart(cartItem);
  };
  useEffect(() => {
    const totalPrice = cart?.reduce(
      (acc: any, curr: any) => acc + curr.price * curr.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  return (
    <CartContextProvider.Provider
      value={{ cart, handleAddCart, updateCart, removeItem, total }}
    >
      {children}
    </CartContextProvider.Provider>
  );
};
export default CartContext;
