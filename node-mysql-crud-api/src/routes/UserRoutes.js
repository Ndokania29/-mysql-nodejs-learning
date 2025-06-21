// Description: This file defines the routes for user-related operations in the application.
// If the user is found, send a success message
// route is used to define the endpoints for the user-related operations, in lyman's terms, it is a way to define the URLs that the application will respond to for user-related actions like getting all users, creating a user, getting a user by ID, updating a user, and deleting a user.
import express from 'express';// import express module
import {// import all functions from UserController
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/usercontroller.js'; // import the user controller functions 

const router = express.Router(); // create a new router instance from express
//give us urls to the user controller functions

// these are like connection to backend functions that will handle the requests made to these endpoints

router.get('/', getAllUsers); // GET /users - Get all users
router.post('/', createUser); // POST /users - Create a new user
router.get('/:id',getUserById); // GET /users/:id-get user by id used get method to fetch a specific user by their id
router.put('/:id',updateUser); // PUT /users/:id - Update user by id used put method to update a specific user by their id
router.delete('/:id',deleteUser); // DELETE /users/:id - Delete user by id used delete method to delete a specific user by their id

export default router; // export the router so that it can be used in other files mainly in app.js to define the routes for user-related operations