import Routes from "./components/Routes/Routes";
import CartContext from "./utils/global_states/cart/CartContext";
import LogInContext from "./utils/global_states/log_in/LogInContext";
import ProductsContext from "./utils/global_states/products/ProductsContext";
const App = () => {
  return (
    //@ts-ignore
    <CartContext>
      <ProductsContext>
        <LogInContext>
          <Routes />
        </LogInContext>
      </ProductsContext>
    </CartContext>
  );
};

export default App;
