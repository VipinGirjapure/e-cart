import { createContext, useEffect, useState } from "react";
export const ProductContextProvider = createContext({});
const ProductsContext = ({ children }: any) => {
  const [products, setProducts] = useState<any>([]);
  //store id and qty seperately for better calculation
  // const [quantity, setQuantity] = useState<any>([{
  //   id: 12,
  //   qty: 2,
  // }, {
  //   id: 2,
  //   qty: 1,
  // }]);
  const handleApi = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleApi();
  }, []);

  return (
    <ProductContextProvider.Provider value={{ products, handleApi }}>
      {children}
    </ProductContextProvider.Provider>
  );
};
export default ProductsContext;
