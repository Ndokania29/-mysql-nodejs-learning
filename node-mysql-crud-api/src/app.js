//here  I am setuping the express app and connecting all the routes to the app at one place
import express from 'express'; // import express module
import UserRoutes from './routes/UserRoutes.js'; // import user routes from userRoutes.js
const app = express(); // this creates an instance of the express application where we can define our routes and middleware
app.use(express.json()); // middleware to parse JSON request bodies, it allows the application to handle JSON data sent in requests //json DATA is a common format for sending data in web applications, and this middleware ensures that the application can read and process it correctly
app.use('/users', UserRoutes); // use the user routes for all requests to /users, this means that any request made to /users will be handled by the UserRoutes defined in UserRoutes.js
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000"); // start the server and listen on port 3000, this will log a message to the console indicating that the server is running and ready to accept requests
});