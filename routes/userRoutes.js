const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { logRequests, setHeaders, isAuthenticated } = require('../middleware/user.middleware');


router.use(logRequests);
router.use(setHeaders);

router.post('/register', userController.register); // Register user route
router.post('/login', userController.login); // Login user route
router.get('/getAllUsers', isAuthenticated, userController.getAllUsers); // get All user list route (protected by isAuthenticated)
router.put('/updateUser/:id', isAuthenticated, userController.updateUser);
router.delete('/deleteUser/:id', isAuthenticated, userController.deleteUser);  // Delete user route (protected)

module.exports = router;
