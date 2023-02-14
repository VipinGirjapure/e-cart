/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../../../utils/global_states/cart/CartContext";
import LogInContext from "../../../utils/global_states/log_in/LogInContext";
import ProductsContext from "../../../utils/global_states/products/ProductsContext";
import LogIn from "../LogIn";
global.alert = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {},
  useNavigate: () => () => {},
  useParams: jest.fn(),
}));
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: "",
          email: "",
          username: "",
          token: "",
        }),
    })
  );
});
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(undefined),
    })
  );
});
describe("Log in page test", () => {
  test("password input field", async () => {
    await act(async () => {
      render(
        <CartContext>
          <ProductsContext>
            <LogInContext>
              <BrowserRouter>
                <LogIn />
              </BrowserRouter>
            </LogInContext>
          </ProductsContext>
        </CartContext>
      );
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("submitBtn")));
    });
  });
});
