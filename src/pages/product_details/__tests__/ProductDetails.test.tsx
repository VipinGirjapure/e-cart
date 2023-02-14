import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../../../utils/global_states/cart/CartContext";
import { LogInContextProvider } from "../../../utils/global_states/log_in/LogInContext";
import { ProductContextProvider } from "../../../utils/global_states/products/ProductsContext";
import ProductDetails from "../ProductDetails";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {},
  useNavigate: () => () => {},
  useParams: () => ({ id: "1" }),
}));

describe("Product details test suit", () => {
  test("Product details first test", () => {
    const addItem = jest.fn();
    const products = {
      products: [{ id: "1" }],
    };
    render(
      <CartContext value={{ addItem, products }}>
        <ProductContextProvider.Provider value={{ addItem, products }}>
          <LogInContextProvider.Provider value={{ addItem }}>
            <BrowserRouter>
              <ProductDetails />
            </BrowserRouter>
          </LogInContextProvider.Provider>
        </ProductContextProvider.Provider>
      </CartContext>
    );
    const backBtn = screen.getByTestId("backBtn");
    fireEvent.click(backBtn);
  });
});
