import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const SECRET_KEY = "mySuperSecretKey";

// 1. Login Route: Authenticates user and generates a JWT
app.post('/login', (req, res) => {
    // Mock user data (normally fetched from a database)
    const user = { id: 1, username: "student_coder" };

    // Generate token valid for 1 hour
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    
    res.json({ 
        message: "Login successful!", 
        token: token 
    });
});

// 2. Middleware Function: Verifies the JWT
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token after "Bearer"

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    jwt.verify(token, SECRET_KEY, (err, decodedUser) => {
        if (err) {
            return res.status(403).json({ error: "Invalid or expired token." });
        }
        req.user = decodedUser; // Attach user info to request object
        next(); // Move to the actual route handler
    });
};

// 3. Protected Route: Requires the middleware to pass
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ 
        message: "Welcome to the protected dashboard!", 
        user: req.user 
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});