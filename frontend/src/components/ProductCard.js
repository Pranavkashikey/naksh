import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <img
  src={product.image}
  alt={product.name}
  width="150"
  onError={(e) => {
    e.target.src = "https://picsum.photos/200";
  }}
/>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addItem(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
