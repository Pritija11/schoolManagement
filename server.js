import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';
import db from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/schools", schoolRoutes);

// Health check endpoint for Docker
app.get("/health", (req, res) => {
    res.status(200).json({ 
        status: "OK", 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// default route
app.get("/", (req, res) => {
    res.send("Welcome to the School API");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
