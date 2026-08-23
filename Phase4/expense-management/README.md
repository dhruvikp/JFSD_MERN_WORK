# Expense Management

A server-rendered expense management application built with Node.js, Express, Pug, and MySQL. Authenticated users can add, view, edit, and delete expenses, and optionally upload a receipt with each new expense.

## Features

- **Login and logout**
  - A simple admin login protects the expense pages.
  - Authentication is maintained with a browser cookie.
  - Unauthenticated users are redirected to `/login`.
- **Create expenses**
  - Add an expense title and amount.
  - Optionally upload a receipt file.
  - Uploaded files are stored in the `uploads/` directory.
- **View expenses**
  - Display all expenses in descending ID order, so the newest entries appear first.
- **Edit expenses**
  - Update the title and amount of an existing expense.
- **Delete expenses**
  - Remove an expense from the database.
- **Server-rendered interface**
  - Pages are rendered with Pug templates.
  - Static CSS is served from `public/css/style.css`.

## Technology Used

### Runtime and server

- **Node.js**: JavaScript runtime
- **Express 5**: HTTP server, routing, middleware, and request handling
- **CommonJS**: Module system used by the project

### Views and static assets

- **Pug**: Server-side HTML templating
- **HTML forms**: Used for login and expense operations
- **CSS**: Application styling in `public/css/style.css`

### Data and file handling

- **MySQL**: Relational database for expense records
- **mysql2**: MySQL connection pool and promise-based queries
- **Multer**: Multipart form parsing and receipt uploads
- **cookie-parser**: Reading and clearing the authentication cookie

## Prerequisites

Install the following before running the application:

- Node.js 18 or newer
- npm
- MySQL Server 8 or newer
- A MySQL client such as MySQL Workbench or the `mysql` command-line client

Verify Node.js and npm are available:

```bash
node --version
npm --version
```

## Database Setup

The application expects a MySQL database named `expense_db` and an `expenses` table.

Run the following SQL in MySQL:

```sql
CREATE DATABASE IF NOT EXISTS expense_db;
USE expense_db;

CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    file VARCHAR(255) NULL
);
```

The current database connection is configured in `config/db.js` with:

- Host: `localhost`
- User: `root`
- Password: `admin@123`
- Database: `expense_db`

Update `config/db.js` if your local MySQL credentials are different. For production use, credentials should be moved to environment variables instead of being stored in source code.

## Installation

From the project directory, install the dependencies:

```bash
npm install
```

## Running the Application

Start the server with:

```bash
node server.js
```

The application will be available at:

```text
http://localhost:3000
```

For development, the server can also be started with Nodemon if it is installed or available through `npx`:

```bash
npx nodemon server.js
```

There is currently no `start` script in `package.json`, so use `node server.js` unless you add one.

## Login

Use the credentials currently defined in `controllers/auth.controller.js`:

```text
Username: admin
Password: 123
```

After logging in, the application redirects to `/expenses`.

## Application Routes

| Method | Path | Description | Authentication |
| --- | --- | --- | --- |
| `GET` | `/login` | Display the login page | No |
| `POST` | `/login` | Authenticate the user | No |
| `GET` | `/logout` | Clear the login cookie | No |
| `GET` | `/` | Display the add-expense form | Yes |
| `GET` | `/expenses` | Display all expenses | Yes |
| `POST` | `/expenses` | Create an expense and optionally upload a receipt | Yes |
| `GET` | `/edit/:id` | Display the edit form | Yes |
| `POST` | `/edit/:id` | Update an expense | Yes |
| `GET` | `/delete/:id` | Delete an expense | Yes |

## Project Structure

```text
expense-management/
├── app.js                     # Express app configuration and middleware
├── server.js                  # Application entry point; starts port 3000
├── package.json               # Project metadata and dependencies
├── config/
│   └── db.js                  # MySQL connection pool
├── controllers/
│   ├── auth.controller.js     # Login and logout behavior
│   └── expense.controller.js  # Expense request handlers
├── middleware/
│   └── auth.middleware.js     # Cookie-based route protection
├── models/
│   └── expense.model.js       # Database queries for expenses
├── routes/
│   ├── auth.routes.js          # Authentication routes
│   └── expense.routes.js       # Expense routes and upload middleware
├── public/
│   └── css/style.css           # Static styles
├── uploads/                   # Uploaded receipt files
└── views/                     # Pug templates
```

## Typical Workflow

1. Start MySQL and create the database and table.
2. Confirm the credentials in `config/db.js`.
3. Run `npm install`.
4. Start the application with `node server.js`.
5. Open `http://localhost:3000/login`.
6. Log in with the configured admin credentials.
7. Add, review, edit, or delete expenses.

## Current Limitations and Production Notes

- Authentication uses fixed credentials and a plain cookie. It is intended for a learning or local-development project, not production use.
- Database credentials are currently hard-coded in `config/db.js`.
- Uploaded receipts are stored on disk, but the current UI does not display or download them.
- Receipt type and size validation are not currently configured in Multer.
- The delete operation uses a `GET` request; a production application should normally use a protected `POST` or `DELETE` request with CSRF protection.
- No automated test script is currently defined in `package.json`.
