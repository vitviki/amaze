# Amazon clone - Amaze - Full Stack Application

This is a full-stack eCommerce application inspired by Amazon.com, built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. It includes user authentication, product listing, cart functionality

![Screenshot 2024-09-22 160634](./Screenshot.png)

## Features

- **User Authentication**: Signup, login, and logout functionalities using JWT.
- **Product Management**: Browse and search products with detailed product pages.
- **Cart Management**: Add, remove, and manage products in the shopping cart.
- **Responsive Design**: Frontend built with Tailwind CSS, ensuring a smooth experience across devices.
- **Secure API Endpoints**: JWT-based authentication for secure user access.

## Tech Stack

### Frontend

- **React.js**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend.
- **Vite**: Frontend build tool for faster development.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing product, user, and order information.
- **Mongoose**: ODM library for MongoDB.
- **JWT (JSON Web Token)**: For user authentication and authorization.

## Installation

## 1. Backend setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vitviki/amaze
   ```

2. Navigate into the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=8080
   MONGO_URI=<your_mongo_db_connection_string>
   JWT_SECRET_KEY=<your_jwt_secret>
   CORS_ORIGIN="Your Frontend link "
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## 2. Frontend setup

2. Navigate into the backend directory:

   ```bash
   cd client
   ```

3. **Install dependencies:**

   ```bash
   npm install

   ```

4. **Run the application using vite :**

   ```bash
   npm run dev
   ```
