const API_BASE_URL = "http://localhost:5000";

export const getProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products`);
  return res.json();
};

export const addToCart = async (data) => {
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};
