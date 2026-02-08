# 1️⃣ Base image
FROM node:22-alpine

# 2️⃣ Working directory inside container
WORKDIR /app

# 3️⃣ Copy package files first (better caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy rest of backend code
COPY . .

# 6️⃣ Expose backend port
EXPOSE 5000

# 7️⃣ Start server
CMD ["npm", "run", "start"]
