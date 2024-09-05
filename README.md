# FitGear Hub Back

## Introduction

FitGear Hub Back is the backend service for the FitGear Hub web application, designed to manage and process data related to fitness equipments and accessories.

## Project Description

FitGear Hub Back serves as the core backend system for the FitGear Hub web application. This project is focused on providing a robust and scalable backend solution to support the FitGear Hub ecosystem. It handles data storage, processing, and provides APIs for managing fitness equipments and accessories. The backend is built using Node.js and Express.js, with MongoDB as the database. The project aims to offer a seamless and efficient way to manage fitness gear data , ensuring high performance and reliability.

The main goals of FitGear Hub Back are:

- To provide a comprehensive API for managing fitness gear data.
- To enable efficient tracking and management of user activities.
- To ensure data integrity and consistency through robust validation and error handling mechanisms.
- To support scalability and maintainability through a well-structured codebase and use of modern technologies.

## Features

- CRUD operations for fitness equipments and accessories
- Activity tracking and management
- API endpoints for frontend integration
- Data validation and error handling

## Technology Stack

- Node.js
- Express.js
- MongoDB
- TypeScript
- Mongoose

## Installation Guideline

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/suaib022/FitGear-Hub-Back.git
   cd FitGear-Hub-Back
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

## Configuration

Create a `.env` file in the root directory of the project and add the necessary configuration variables. Example:

```env
   PORT=3000
   DATABASE_URL=your_db_connection_uri
   NODE_ENV=development
```

Ensure you replace `DATABASE_URL` with your actual database connection URI.

## Usage

To use the FitGear Hub Back, follow these steps:

1. Ensure the server is running by executing `npm run start:dev`.
2. Use the provided API endpoints to interact with the backend. You can use tools like Postman to test the endpoints.
3. Integrate the backend with the FitGear Hub frontend application to enable full functionality.

# API Endpoints

## 1. Create Product

**Route**: **`/api/products`** (POST)

**Request Body**:

```json
{
  "name": "Adjustable Dumbbells",
  "price": 99.99,
  "description": "A pair of adjustable dumbbells with a weight range of 5-52.5 lbs. Ideal for versatile strength training.",
  "image": "https://example.com/images/adjustable-dumbbells.jpg",
  "category": "Strength",
  "quantity": 150
}
```

**Response**:

```json
{
  "success": true,
  "message": "Product Created successfully !",
  "data": {
    "name": "Adjustable Dumbbells",
    "price": 99.99,
    "description": "A pair of adjustable dumbbells with a weight range of 5-52.5 lbs. Ideal for versatile strength training.",
    "image": "https://example.com/images/adjustable-dumbbells.jpg",
    "category": "Strength",
    "quantity": 150,
    "inStock": true,
    "_id": "66d9f1439a6530b4a4ad72ee",
    "createdAt": "2024-09-05T17:58:27.311Z",
    "updatedAt": "2024-09-05T17:58:27.311Z",
    "__v": 0
  }
}
```

## 2. Get a Product

**Route**: **`/api/products/:productId`** (GET)

**Response** :

```json
{
  "success": true,
  "message": "Adjustable Dumbbells retrieved successfully !",
  "data": {
    "_id": "66d9f1439a6530b4a4ad72ee",
    "name": "Adjustable Dumbbells",
    "price": 99.99,
    "description": "A pair of adjustable dumbbells with a weight range of 5-52.5 lbs. Ideal for versatile strength training.",
    "image": "https://example.com/images/adjustable-dumbbells.jpg",
    "category": "Strength",
    "quantity": 150,
    "inStock": true,
    "createdAt": "2024-09-05T17:58:27.311Z",
    "updatedAt": "2024-09-05T17:58:27.311Z",
    "__v": 0
  }
}
```

## 3. Get all Products

**Route**: **`/api/products`** (GET)

**Response** :

```json
{
  "success": true,
  "message": "Products retrieved successfully !",
  "data": [
    {
      "_id": "66cd998d5fe63c8d0fab8700",
      "name": "Treadmill",
      "price": 2199,
      "description": "High-performance treadmills designed for serious runners and casual users alike. They feature multiple incline levels, advanced cushioning systems, and interactive touchscreens for streaming workouts.",
      "image": "https://i.ibb.co/yykqNz3/Stock-Cake-Modern-Treadmill-Design-1724742141.jpg",
      "category": "Cardio",
      "quantity": 0,
      "inStock": false,
      "createdAt": "2024-08-27T09:17:01.947Z",
      "updatedAt": "2024-09-01T11:56:33.449Z",
      "**v": 0
    },
    {
      "_id": "66cd9ca05fe63c8d0fab8729",
      "name": "Elliptical Trainer",
      "price": 1499,
      "description": "Smooth, low-impact elliptical machines that provide a full-body workout. Equipped with adjustable resistance levels and pre-programmed workouts, ideal for all fitness levels.",
      "image": "https://i.ibb.co/LhczCCh/3d-gym-equipment.jpg",
      "category": "Cardio",
      "quantity": 0,
      "inStock": false,
      "createdAt": "2024-08-27T09:30:08.361Z",
      "updatedAt": "2024-09-01T11:56:34.274Z",
      "**v": 0
    }
  ]
}
```

## 4. Update a Product

**Route**: **`/api/products/:productId`** (PUT)

**Request Body**:

```json
{
  "price": 1000
}
```

**Response** :

```json
{
  "success": true,
  "message": "Adjustable Dumbbells updated successfully !",
  "data": {
    "_id": "66d9f1439a6530b4a4ad72ee",
    "name": "Adjustable Dumbbells",
    "price": 1000,
    "description": "A pair of adjustable dumbbells with a weight range of 5-52.5 lbs. Ideal for versatile strength training.",
    "image": "https://example.com/images/adjustable-dumbbells.jpg",
    "category": "Strength",
    "quantity": 150,
    "inStock": true,
    "createdAt": "2024-09-05T17:58:27.311Z",
    "updatedAt": "2024-09-05T18:02:32.961Z",
    "__v": 0
  }
}
```

## 5. Delete a Product

**Route**: **`/api/products/delete?productId=66d9f1439a6530b4a4ad72ee`** (DELETE)

**Response** :

```json
{
  "success": true,
  "message": "Adjustable Dumbbells deleted successfully !",
  "data": {
    "_id": "66d9f1439a6530b4a4ad72ee",
    "name": "Adjustable Dumbbells",
    "price": 1000,
    "description": "A pair of adjustable dumbbells with a weight range of 5-52.5 lbs. Ideal for versatile strength training.",
    "image": "https://example.com/images/adjustable-dumbbells.jpg",
    "category": "Strength",
    "quantity": 150,
    "inStock": true,
    "createdAt": "2024-09-05T17:58:27.311Z",
    "updatedAt": "2024-09-05T18:02:32.961Z",
    "__v": 0
  }
}
```

## 5. Delete Multiple Products

**Route**: **`/api/products/delete`** (DELETE)

**Request Body**:

```json
{
  "ids": [
    "66d9f2ff9a6530b4a4ad72fc",
    "66d9f2fe9a6530b4a4ad72fa",
    "66d9f2fd9a6530b4a4ad72f8"
  ]
}
```

**Response** :

```json
{
  "success": true,
  "message": "Selected products deleted successfully !",
  "data": {
    "acknowledged": true,
    "deletedCount": 3
  }
}
```

---

Feel free to review and let me know if there's anything else you'd like to adjust or add!
