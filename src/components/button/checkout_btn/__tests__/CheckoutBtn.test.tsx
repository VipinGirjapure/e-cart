import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutBtn from "../CheckoutBtn";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {},
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("react-razorpay", () => {
  class MyClass {
    open = jest.fn();
  }
  return () => MyClass;
});
beforeEach(() => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          firstName: "",
          email: "",
          username: "",
          token: "",
        }),
    })
  );
});

describe("checkout btn suit", () => {
  test("checkout btn initial test", () => {
    render(<CheckoutBtn total={1235} />);
    const check = screen.getByTestId("checkBtn");
    fireEvent.click(check);
  });
});
