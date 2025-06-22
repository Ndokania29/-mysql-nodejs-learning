import mysql from "mysql2/promise";
const db=await mysql.createConnection({// create a connection to the database , await is used to wait for the connection to be established
    host:"localhost",
    user:"root",
    password:"ypur_passsword",
    database:"mydb" // specify the database name
});
console.log("Mysql connected successfully")

// we need to create a database if it does not exist
await db.execute(`create database mydb`);// create a database named mydb
// use the database
// now we will check if the database exists and use it
console.log(await db.execute("show databases"));// show all the databases
//await is a JavaScript keyword used with asynchronous functions (functions declared with async). It pauses the execution of the function until the Promise on its right side settles (either resolves or rejects), then returns the resolved value.

await db.execute(`
    CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE);
    `); 
   // create a table named users with id, username and email fields
console.log("Table created successfully");

// !insert data into the table
 await db.execute(`
    insert into users(username,email) values('Nivesh','nivesh@example.com')
    `); // insert a row into the users table
 console.log("Data inserted successfully");
 await db.execute(`
    insert into users(username,email) values('John','john@example.com')
    `); // insert a row into the users table
console.log("Data inserted successfully");

// insertion of multiple data at once
const values=[
    ['Piyush','piyush@example.com'],
    ['Amit','amit@example.com'],
    ['Sita','sita@example.com']
]
await db.query("insert into users(username,email) values ?", [values]); // insert multiple rows into the users table here we are using query method instead of execute method
console.log("Multiple data inserted successfully");

//! Read data from the table
const [rows]=await db.execute(`select* from users`) //! select all rows from the users table
console.log(rows); //! rows is an array of objects, each object represents a row in the table

const [rows]=await db.execute(`select* from users`) // !select all rows from the users table
console.log(rows); //! rows is an array of objects, each object represents a row in the table

//! Update data in the table
 const n_e_w = await db.execute(`
    UPDATE users SET username='Nivesh Dokania' WHERE email='nivesh@example.com'
`);
console.log("Data updated successfully");
console.log(n_e_w); //! n_e_w is an array, first element is the result of the query, second element is the fields affected by the query

//! Delete data from the table
try{
    const dele=await db.execute(`
        DELETE FROM users WHERE username='Sita'`);
    console.log("Data deleted successfully");
    console.log(dele); //! dele is an array, first element is the result of the query, second element is the fields affected by the query   


// }catch(error){
//     console.error(error)
// }
