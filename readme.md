# Todo Application Documentation

This document provides details on the user registration, login, and Todo functionalities in the Todo application.

## User Registration and Login

### Register/Login Endpoint

To register a new user or log in, send a `POST` request to the `/auth` endpoint with the following parameters:

- **Username:** The desired username for the new user.
- **Email:** The email address of the user.
- **Password:** The password for the user.

#### Example Registration Request:

```json
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "secure_password"
}
```

#### Example Response:

```
{
  "registration": "Successful",
  "message": "User registered successfully"
}

```

# User Login

## Login Endpoint

To log in, send a POST request to the `/login` endpoint with the following parameters:

- **Email:** The email address of the user.
- **Password:** The password for the user.

### Example Request:

```json
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "secure_password"
}

```

### Example Response:

```
{
  "login": "Successful",
  "token": "your_generated_token_here"
}

```

## Todo

### Todo Endpoint

- Create Todo: POST /todo/create
- Read Todos: GET /todo/read
- Update Todo: PUT /todo/update/:id
- Delete Todo: DELETE /todo/delete/:id
- To perform CRUD operations on Todo items, use the /todo endpoint with appropriate HTTP methods:

#### Example Create Todo Request:

```
Content-Type: application/json
Authorization: your_generated_token_here

{
  "task": "Do something",
  "status": "Pending",
  "completionDate": "optional_date_here"
}

```

#### Example Create Todo Response:

```
{
  "message": "Todo created successfully",
  "todo": {
    "user": "user_id_here",
    "task": "Do something",
    "status": "Pending",
    "completionDate": "optional_date_here"
  }
}
```

#### Example Read Todos Response:

```
{
  "message": "Todos retrieved successfully",
  "todos": [
    {
      "user": "user_id_here",
      "task": "Do something",
      "status": "Pending",
      "completionDate": "optional_date_here"
    },
    // Additional todos...
  ]
}

```

#### Example Update Todo Request:

```
Content-Type: application/json
Authorization: your_generated_token_here

{
  "status": "Completed"
}
```

#### Example Update Todo Response:

```
{
  "message": "Todo updated successfully",
  "todo": {
    "user": "user_id_here",
    "task": "Do something",
    "status": "Completed",
    "completionDate": "optional_date_here"
  }
}

```

#### Example Delete Todo Response:

```
{
  "message": "Todo deleted successfully",
  "todo": {
    "user": "user_id_here",
    "task": "Do something",
    "status": "Completed",
    "completionDate": "optional_date_here"
  }
}

```

## Installation Guide for Node.js Project

To integrate the provided Node.js project into your environment, follow these steps:

1. **Clone the Repository:**

   - Clone the Git repository containing the Node.js project using the following command:

     ```bash
     git clone https://github.com/hariomfw21/GuruCool-URLShortener.git
     ```

2. **Navigate to the Project:**

   - Change into the project directory:

     ```bash
     cd charitism-todos
     ```

3. **Install Dependencies:**

   - Make sure you have Node.js installed on your machine. If not, download and install it from [Node.js](https://nodejs.org/).
   - Run the following command to install project dependencies:

     ```bash
     npm install
     ```

4. **Configure the Project:**

   - Open the Node.js file or configuration files in a text editor of your choice.
   - Review and update any configuration settings, such as API endpoints, credentials, or other relevant parameters.

5. **Run the Application:**

   - Execute the following command to run the Node.js application:

     ```bash
     node index.js
     ```

6. **Customization (Optional):**
   - Feel free to customize the Node.js files to meet your specific implementation and requirements.

# Thank You!

Thank you for choosing our Todo application and API documentation template. If you have any questions or need assistance, feel free to reach out to our support team.
