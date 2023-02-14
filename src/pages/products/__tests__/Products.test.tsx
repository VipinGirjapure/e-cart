/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-wait-for-side-effects */
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
import Products from "../Products";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {},
  useNavigate: () => () => {},
  useParams: () => {},
}));

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [{ id: "1", title: "abcd", price: "30" }],
        }),
    })
  );
});
// global.fetch = jest
//   .fn()
//   .mockImplementationOnce(() => Promise.reject("rejected"));
describe("product page test suit", () => {
  test("products page initial test", async () => {
    await act(async () => {
      render(
        <CartContext>
          <ProductsContext>
            <LogInContext>
              <BrowserRouter>
                <Products />
              </BrowserRouter>
            </LogInContext>
          </ProductsContext>
        </CartContext>
      );
    });

    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("addCartBtn")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("incrQty")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("decrQty")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("decrQty")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("addCartBtn")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("incrQty")));
    });
    await act(async () => {
      await waitFor(() => fireEvent.click(screen.getByTestId("details")));
    });
  });
});
