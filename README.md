# Learning Projects Collection

This repository contains various learning projects and examples I've created while studying different technologies and concepts.

## Projects Included

### 1. MySQL Basics (`mysql-basics/`)
**Learning Focus:** Basic MySQL operations and CRUD with Node.js

**What's included:**
- Database connection setup
- Table creation examples
- INSERT, SELECT, UPDATE, DELETE operations
- Multiple data insertion
- Error handling examples

**Key Learning Points:**
- MySQL2 promise-based connections
- Basic SQL operations
- Database and table management
- Data manipulation

**Files:**
- `app.js` - Complete CRUD operations with detailed comments
- `package.json` - Dependencies and project configuration

### 2. Node.js MySQL CRUD API (`node-mysql-crud-api/`)
**Learning Focus:** Building RESTful APIs with Express.js and MySQL

**What's included:**
- Express.js server setup
- Route organization
- Controller pattern implementation
- Database connection management
- RESTful API endpoints

**Key Learning Points:**
- Express.js framework usage
- Route and controller separation
- API design patterns
- Middleware implementation

**Files:**
- `src/app.js` - Main application setup
- `src/db.js` - Database connection
- `src/routes/` - API route definitions
- `src/controllers/` - Business logic handlers

## Learning Journey

These projects represent my learning progression from basic MySQL operations to building complete RESTful APIs. Each project includes:

- **Detailed comments** explaining concepts
- **Step-by-step examples** for each operation
- **Error handling** demonstrations
- **Best practices** implementation

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL** - Relational database
- **MySQL2** - MySQL client for Node.js
- **UUID** - Unique identifier generation

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MySQL Server
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd learning-projects
```

2. Install dependencies for each project:
```bash
# For MySQL Basics
cd mysql-basics
npm install

# For Node.js MySQL CRUD API
cd ../node-mysql-crud-api
npm install
```

3. Set up your MySQL database and update connection details in the respective `db.js` files.

4. Run the projects:
```bash
# MySQL Basics
cd mysql-basics
node app.js

# Node.js MySQL CRUD API
cd ../node-mysql-crud-api
node src/app.js
```

## Database Setup

### For MySQL Basics
Create a database named `mydb` and the `users` table will be created automatically.

### For Node.js MySQL CRUD API
Update the database connection details in `src/db.js` according to your MySQL setup.

## Learning Outcomes

Through these projects, I've learned:

1. **Database Fundamentals**
   - Understanding relational databases
   - SQL query writing
   - Data manipulation operations

2. **Node.js Development**
   - Asynchronous programming
   - Module system usage
   - Package management

3. **API Development**
   - RESTful API design
   - Route organization
   - Controller pattern
   - Middleware usage

4. **Best Practices**
   - Code organization
   - Error handling
   - Commenting and documentation
   - Version control

## Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement input validation
- [ ] Add unit tests
- [ ] Create frontend interfaces
- [ ] Add more complex database relationships

## Contributing

This is a learning repository, but suggestions and improvements are welcome! Feel free to:

- Report issues
- Suggest improvements
- Share additional learning resources
- Fork and experiment

## License

This project is for educational purposes. Feel free to use and modify for your own learning.

---

**Note:** These projects are created for learning purposes and may contain simplified implementations. For production use, additional security measures, error handling, and best practices should be implemented. 