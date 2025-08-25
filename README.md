School Management
A Node.js + MySQL REST API to add schools and list nearby schools based on user location. Built with Express.js and MySQL.

# Features

Add new schools with name, address, latitude, and longitude.

List schools sorted by proximity to a user’s location.

Input validation via middleware.

Prevents adding duplicate school entries.

# Technologies Used

Node.js 

Express.js

MySQL (using mysql2/promise)

dotenv (for environment variables)

Postman for testing

# Project Structure
school_API/
├─ controllers/       # Request handlers
├─ models/            # Database operations
├─ routes/            # API routes
├─ middlewares/       # Validation middleware
├─ config/            # DB configuration
├─ dbSetup.js         # Optional: create tables
├─ server.js          # Entry point
├─ package.json
└─ .env               # Environment variables


# Environment Variables (.env)
DB_HOST=<mysql-host>
DB_USER=<mysql-user>
DB_PASS=<mysql-password>
DB_NAME=<database-name>
PORT=3000

# API Endpoints
Add School
URL: /api/schools/addSchool
Method: POST

List Schools
URL: /api/schools/listSchools
Method: GET
Query Params: latitude, longitude

# Setup Instructions

1. Clone the repo:

git clone <repo-link>
cd school_API

2. Install dependencies:

npm install

3. Create .env file with your DB credentials.

4. Ensure MySQL database exists and table schools is created.

5. Start the server:

npm start

6. Test the APIs using Postman or any API client.

Deployment

Can be hosted on Render, Heroku, or any Node.js hosting service.

Use environment variables on the hosting platform for database credentials.

# Author

Pritija Ghising