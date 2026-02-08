export const addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  res.status(201).json({
    success: true,
    message: "Item added to cart successfully",
    cartItem: { productId, quantity }
  });
};
