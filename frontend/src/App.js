import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;
