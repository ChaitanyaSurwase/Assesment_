# Assesment_
CRUD operation using Node js , Express js , Mongodb
# Assessment: CRUD Operations

Perform CRUD operations using Node.js, Express.js, and MongoDB.

## User Management API

This API allows you to manage users, including operations like registering, logging in, updating, and deleting users.

## Setup & Installation

### Prerequisites:
1. Node.js
2. MongoDB

### Steps:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ChaitanyaSurwase/Assesment_.git

Install Dependencies
``npm install
Run the Application
``npm start


API Routes & Documentation

Visit `http://localhost:4000/` in your browser.

## API Routes & Documentation

### **Register a User**
- Endpoint: `/api/users/register`
- Method: POST
- Body:
```json
{
"Username": "string",
"email": "user@example.com",
"password": "string"
}

Login a User
Endpoint: /api/users/login
Method: POST
Body:{
  "email": "user@example.com",
  "password": "string"
}
Get All Users
Endpoint: /api/users/getAllUsers
Method: GET
Query Params:
page: Page number (default is 1)
limit: Number of users per page (default is 10)
sortBy: Attribute to sort by (e.g., Username)
order: Order of sorting (asc or desc)
Update a User
Endpoint: /api/users/updateUser/:id
Method: PUT
Headers: auth-token: YOUR_JWT_TOKEN
Body:
json
Copy code
{
  "Username": "newUsername",
  "email": "newemail@example.com",
  "password": "newPassword"
}
Delete a User
Endpoint: /api/users/deleteUser/:id
Method: DELETE
Headers: auth-token: YOUR_JWT_TOKEN

{
  "Username": "newUsername",
  "email": "newemail@example.com",
  "password": "newPassword"
}
Note: When using routes that require authentication, ensure you send the JWT token in the auth-token header.

