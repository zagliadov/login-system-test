import pool from "../db/db";
import jwt from "jsonwebtoken";

export const registration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await pool.query(`
            INSERT INTO users (email, password)
            VALUES('${email}', '${password}')
        `);
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
};

export const verify = async (res, req, next) => {
  try {
    console.log(req.headers);
    const authHeader = req.headers["authorization"];
    const token = String(authHeader) && String(authHeader).split(" ")[1];
    if (token === null) return res.status(401);
    jwt.verify(token, "secret", (err, user) => {
      if (err) return res.send(403);
      req.user = user;
    });

    next();
  } catch (error) {
    console.log(error);
  }
};

export const login = async (res, req) => {
  try {
    const { email, password } = req.body;
    const user = await pool
      .query(
        `
            SELECT email, password FROM users
            WHERE email = '${email}'
        `
      )
      .then((result) => result.rows[0]);
    if (!user) return res.status(200).json({ message: "Email incorrect" });
    if (password !== user.password)
      return res.status(200).json({ message: "Password incorrect" });

    const token = jwt.sign(
      {
        email: user.email,
      },
      "secret"
    );
    res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
  };
};
