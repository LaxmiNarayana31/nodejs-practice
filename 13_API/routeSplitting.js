/* Route splitting in Node.js and Express refers to breaking up your application's routes into multiple smaller modules or files rather than defining all routes in a single file. This practice helps organize your codebase, improves maintainability, and makes it easier to collaborate on larger projects. 

Instead of defining all routes in a single file (usually app.js or index.js), create separate modules for different sets of routes. 

Each route module should export its router object. Express's Router class allows you to create modular, mountable route handlers.
*/

// usersRoutes.js
const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  // Handle GET request for users
});

router.post("/", (req, res) => {
  // Handle POST request for users
});

// Export router
module.exports = router;

/* Routes: In your main application file (app.js or index.js), import these route modules and mount them at specific paths using app.use().
javascript */

const express = require("express");
const app = express();

// Import route modules
const usersRoutes = require("./usersRoutes");
const productsRoutes = require("./productsRoutes");

// Mount routes
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Note : try to make separate folder of routes, models and controllers this is calles MVC(model view controller)
