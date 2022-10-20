import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import { sequelize } from './sequelize/sequelize.js';
const app = express(),
    PORT = String(9001);
app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);

sequelize.sync().then(() => {
    app.listen(PORT, async () => {
        console.log(`Server run on: ${PORT}`)
    });
});