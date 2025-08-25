import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';
import db from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/schools", schoolRoutes);

// default route
app.get("/", (req, res) => {
    res.send("Welcome to the School API");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
