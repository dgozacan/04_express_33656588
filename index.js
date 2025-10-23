// Set up express
const express = require("express"); //import express 
const app = express();
const port = 8000; //define port

// Load the route handlers
const mainRoutes = require("./routes/main");  

app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
