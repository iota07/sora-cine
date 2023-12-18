// const JwT = require("jsonwebtoken");
// const Modeluser = require("../models/users");
// const dotenv = require("dotenv");
// require("dotenv").config;
// dotenv.config();

// const secretKey = process.env.ACCESS_TOKEN_SECRET;

// exports.postUsers = (req, res) => {
//   const userData = new Modeluser({
//     lastname: req.body.lastname,
//     firstname: req.body.firstname,
//     birthday: req.body.birthday,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   user.save((err, user) => {
//     if (err) {
//       return res.status(400).send(err);
//     }
//     res.status(200).send(user);
//   });

//   // Generate token

//   const token = JwT.sign(userData, secretKey, { expiresIn: "1h" });

//   res.json({ token });
// };
