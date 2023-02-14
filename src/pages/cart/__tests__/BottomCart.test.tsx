import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../../../utils/global_states/cart/CartContext";
import LogInContext from "../../../utils/global_states/log_in/LogInContext";
import ProductsContext from "../../../utils/global_states/products/ProductsContext";
import BottomCart from "../bottom_cart/BottomCart";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {},
  useNavigate: () => () => {},
  useParams: () => {},
}));
describe("bottom cart test suit", () => {
  test("first test bottom cart", () => {
    render(
      <CartContext>
        <ProductsContext>
          <LogInContext>
            <BrowserRouter>
              <BottomCart />
            </BrowserRouter>
          </LogInContext>
        </ProductsContext>
      </CartContext>
    );
  });
});
