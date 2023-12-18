const loginModel = require("../models/login");
const modelUser = require("../models/users");
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//login
//logins/get
exports.getLogin = async (req, res) => {
  try {
    const logins = await loginModel.find();
    if (req.session.authorized) {
      res.render("profile", user);
    } else {
      res.render("login");
    }
    res.json({ success: true, message: logins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//logins/post
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Étape 1: Vérifier si l'email existe dans la collection "users"
    const user = await modelUser.findOne({ email });

    if (!user) {
      // Email non trouvé
      return res.status(401).json({ success: false, message: "Invalid email" });
    }

    // const validPassword = await bcrypt.compare(req.body.password, user.password)
    //const validPassword = req.body.password == user.password;
    // const validPassword = req.body.password == user.password;
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // Étape 2: Vérifier si le mot de passe est correct
    if (!validPassword) {
      // Mot de passe incorrect
      return res
        .status(401)
        .json({ success: false, message: "Invalid password." });
    }

    // Étape 3: Ajouter l'enregistrement dans la collection "logins"

    const myToken = jwt.sign({ userMail: email }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "24h",
    });

    res.cookie("token", myToken, {
      httpOnly: true,
      secure: true,
      maxAge: 2 * 60 * 60 * 1000,
    }); //2h de durée

    const login = new loginModel({ email, password });
    const savedLogin = await login.save();

    res.json({
      success: true,
      message: "Login successful!",
      login: savedLogin,
      token: myToken,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
