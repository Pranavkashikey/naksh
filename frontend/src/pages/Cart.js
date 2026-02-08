import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
