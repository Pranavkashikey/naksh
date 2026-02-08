import express from "express";
import cors from "cors";

import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Naksh Jewels Backend Running ✅");
});

export default app;
