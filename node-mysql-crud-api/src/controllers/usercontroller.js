import db from '../db.js'; // Import the database connection
import {v4 as uuidv4} from 'uuid';//Import uuid

// Get all users
export const getAllUsers = async (req, res) => { // async function to get all users from the database responsible for handling the request and response
  try {
    const [rows] = await db.execute('SELECT * FROM users'); // Fetch all users from the users table
    res.json(rows);
  } catch (err) {
    console.error(err); // Log the error to the console for debugging purposes
    res.status(500).json({ error: 'Failed to fetch users' });
     // If an error occurs, send a 500 status code with an error message
  }
};

// Create user
export const createUser = async (req, res) => { // async function to create a new user in the database aysnc is used to define an asynchronous function that can use await inside it
  const { username, email } = req.body; // Destructure username and email from the request body 
  const id=uuidv4();// Generate a new UUID
  try {
    const [result] = await db.execute(
      'INSERT INTO users (id, username, email) VALUES (?, ?, ?)',
      [id,username, email]
    );
    res.status(201).json({ id, username, email }); // Send a 201 status code with the created user's ID, username, and email it indicates that a new resource has been created successfully
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params; // Extract the user ID from the request parameters represents a specific user in the database
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' }); // If no user is found, send a 404 status code with an error message
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user
export const updateUser = async (req, res) => { // async function to update an existing user in the database
  const { id } = req.params; // it will use as a condition to find the user  to be updated
  const { username, email } = req.body; // Destructure username and email from the request body to update the user's information, destructuring is used to extract values from objects
  try {
    const [result] = await db.execute(
      'UPDATE users SET username = ?, email = ? WHERE id = ?', // SQL query to update the user's username and email based on the user ID
      [username, email, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' }); // If no rows are affected, it means the user was not found, so send a 404 status code with an error message
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);// we use ? to prevent SQL injection attacks, it is a placeholder for the value of id
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });// res is the response  object that will be sent back to the client, it contains the message that the user has been deleted successfully just like console.log("Data deleted successfully");
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};