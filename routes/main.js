// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send("<h1>Contact me at: dgoza001@gold.ac.uk</h1>")); // Route for the Contact page ('/contact').

router.get("/date", (req, res) => res.send(`<h1>Today's date: ${new Date()}</h1>`)); // Route for the Date page ('/date'). new Date() gets the current date and time on the server,




// Export the router object so index.js can access it
module.exports = router;
