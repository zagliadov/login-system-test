import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { QueryTypes } from 'sequelize';
import { sequelize } from '../sequelize/sequelize.js';

export const registration = async (req, res) => {
    const { email, password } = req.body;
    try {
        await sequelize.query(`
       INSERT INTO "Users"(email, password, "createdAt", "updatedAt")
            VALUES('${email}', '${password}', '${date}', '${date}')
       `);
        res.status(201).json({ message: 'User create' });
    } catch (error) {
        console.log(error)
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await sequelize.query(`
            SELECT email, password FROM "Users"
            WHERE email = '${email}'
        `, { type: QueryTypes.SELECT });

        if (!user[0]) return
        if (password !== user[0].password) return res.json({ message: 'Login or password is incorrect' })

        const token = jwt.sign({
            email: user[0].email,
        }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN  })
        res.status(200).json(token);

    } catch (error) {
        console.log(error)
    }
};

export const verifyToken = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    try {
        if (!token) return
        jwt.verify(String(token), process.env.JWT_SECRET, (err, result) => {
            if (err) return
            res.status(200).json(result);
        })
    } catch (error) {
        console.log(error)
    }

}