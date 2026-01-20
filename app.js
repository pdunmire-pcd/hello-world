//Import the express module
import express from 'express';

//define a port number where the server will listen for requests
const PORT = 3000;
//Create an instance of an express application
const app = express();

//Define "root" path
app.get('/', (req, res) => {

    // Send a message to the client
    res.send('Hello, World!');
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}   );