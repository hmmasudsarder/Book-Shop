#  Book Store API - Assignment 2

This project is a RESTful API built with **Express** and **TypeScript** to manage a bike store. It uses **MongoDB** with Mongoose for data storage and retrieval.

---

## ✨ Features

### CRUD Operations for Bikes:

- ➕ **Create new bikes**
- 📋 **Get a list of all bikes**
- 🔍 **Get a specific bike by ID**
- ✏️ **Update an existing bike**
- ❌ **Delete a bike**

### Order Management:

- 🛒 **Place orders for bikes**
- 📦 **Inventory Management**  
  Updates quantity and stock status
- 🚨 **Handles insufficient stock scenarios**
- 💰 **Order Revenue Calculation**  
  Calculates total revenue from all orders

---

## 🚀 Getting Started

This project requires **Node.js** and **npm** to be installed on your system.

1. Clone this repository:

   ```bash
   git clone https://github.com/asadsuzan/bike-store-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bike-store-api-assignment-2
   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a `.env` file in the root directory and configure the following variables:

   ```json
   PORT=5000
   DB_URI=<Your MongoDB Connection URI>

   ```

### ▶️ Running the API

Start the development server:

```bash
npm run dev
```

This will start the server on port 5000 by default.

Check the server status at:
http://localhost:5000/health

### 🌐 Deployment

The Bike Store API is deployed and live on Vercel, making it accessible for testing and integration.

**Base URL:**  
🌍 [https://bike-store-api-assingment02.vercel.app](https://bike-store-api-assingment02.vercel.app)

#### 🔎 Live API Endpoints

**Health Check**

- **Endpoint:** `/health`
- **Method:** `GET`

**Example Request:**

```bash
curl https://bike-store-api-assingment02.vercel.app/health
```

Response:

```javascript
{
    "message": "Server is up and running!",
    "success": true
}
```

### 📚 API Documentation

The API uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) for CRUD operations. Below is the detailed documentation of the endpoints.

---

## 🚴 Inventory

### ➕ Create a Bike

- **Endpoint**: `/api/products`
- **Method**: `POST`

**Request Body:**

```json
{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

**Response:**

```json
{
  "message": "Bike created successfully",
  "success": true,
  "data": {
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true
  }
}
```

### 📋 Get All Bikes

- **Endpoint:** `/api/products`
- **Method:** `GET`

**Response:**

```json
{
  "message": "Bikes retrieved successfully",
  "success": true,
  "data": [
    {
      "name": "Xtreme Mountain Bike",
      "brand": "Giant",
      "price": 1200,
      "category": "Mountain",
      "description": "A high-performance bike built for tough terrains.",
      "quantity": 50,
      "inStock": true
    }
  ]
}
```

### 🔍 Get a Specific Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`
- **Path Param:** productId (string) - ID of the bike

**Response:**

```json
{
  "message": "Bike retrieved successfully",
  "success": true,
  "data": {
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true
  }
}
```

### ✏️ Update a Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Path Param:** productId (string) - ID of the bike

**Request Body:**

```json
{
  "name": "Performance Road Bike",
  "brand": "Cervelo"
}
```

**Response:**

```json
{
  "message": "Bike updated successfully",
  "success": true,
  "data": {
    "name": "Performance Road Bike",
    "brand": "Cervelo",
    "price": 1500,
    "category": "Road",
    "description": "Built for speed on paved roads."
  }
}
```

### ❌ Delete a Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`
- **Path Param:** productId (string) - ID of the bike

**Response:**

```json
{
  "message": "Bike deleted successfully",
  "success": true
}
```

## 🛒 Orders

### ➕ Place an Order

- **Endpoint**: `/api/orders`
- **Method**: `POST`

**Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "674346a891ea4f89e9cf5230",
  "quantity": 2,
  "totalPrice": 5000
}
```

**Response:**

```json
{
  "message": "Order created successfully",
  "success": true,
  "data": {
    "email": "customer@example.com",
    "product": "674346a891ea4f89e9cf5230",
    "quantity": 2,
    "totalPrice": 5000
  }
}
```

### 💰 Calculate Revenue

- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`

**Response:**

```json
{
  "message": "Revenue calculated successfully",
  "success": true,
  "data": {
    "totalRevenue": 5000
  }
}
```

⚠️ Error Handling
The API uses standard HTTP status codes to indicate success or failure. In case of errors, the response includes an error message and details about the issue.

🛠️ Development

- Fork the repository and clone it locally.
- Follow the steps under Getting Started.
- Open a pull request for feature updates or bug fixes.
