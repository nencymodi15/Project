// Import express
const express = require("express");
const path = require("path");
// Import mongoose
const mongoose = require("mongoose");
// Import passport library
const passport = require("passport");
// Import session
const session = require("express-session");
// Import CORS
const cors = require("cors");
// MongoDB Config
const config = require("./config/database");

// Import book routes
var book_routes = require("./routes/books");
// Import user routes
var user_routes = require("./routes/users");

// Set constant for port
const PORT = process.env.PORT || 8000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
