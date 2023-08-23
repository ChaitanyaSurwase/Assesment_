const JWT = require("jsonwebtoken");

// Logging middleware
function logRequests(req, res, next) {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next();
}

// Set Headers middleware
function setHeaders(req, res, next) {
    console.log(`Setting headers for ${req.url}`);
    res.header('Content-Type', 'application/json');
    next();
}

// Auth Check middleware
function isAuthenticated(req, res, next) {
    console.log(`Authenticating request for ${req.url}`);
    const token = req.header('auth-token');
    console.log("Received token:", token);

    if (!token) return res.status(401).send('Access Denied: No Token Provided');

    try {
        const verified = JWT.verify(token, 'mySuperSecretKey');
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}




module.exports = {
    logRequests,
    setHeaders,
    isAuthenticated
};
