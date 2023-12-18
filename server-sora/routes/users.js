const modelUser = require("../models/users")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
bodyParser.json()

//user/post

exports.postUser = async (req, res) => {
  let userEmail // Declare a variable to store the email

  try {
    const { password, ...userData } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new modelUser({
      ...userData,
      password: hashedPassword,
    })
    const savedUser = await user.save()

    userEmail = user.email // Assign the email value to the variable

    res.json({ success: true, message: savedUser })
    sendWelcomeEmail(userEmail) // Use the variable in the function
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message })
    } else {
      res.status(500).json({ success: false, message: error.message })
    }
  }
}

//user/get

exports.getAllUsers = async (req, res) => {
  try {
    const user = await modelUser.find()
    res.json({ success: true, message: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/get

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id) // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId") // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" })
    }

    const user = await modelUser.findById(id)

    if (!user) {
      console.log("User not found") // Ajoutez ceci pour déboguer
      return res.status(404).json({ success: false, message: "User not found" })
    }

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error) // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/delete

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id) // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId") // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" })
    }

    const user = await modelUser.findByIdAndDelete(id)

    if (!user) {
      console.log("User not found") // Ajoutez ceci pour déboguer
      return res.status(404).json({ success: false, message: "User not found" })
    }

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error) // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/put

exports.putUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id)

    let user = await modelUser.findById(id)

    if (!user) {
      console.log("User not found")
      return res.status(404).json({ success: false, message: "User not found" })
    }

    // Mettez à jour les propriétés du document utilisateur avec les nouvelles données de la requête
    user = await modelUser.findByIdAndUpdate(id, req.body, { new: true })

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ success: false, message: error.message })
  }
}

async function sendWelcomeEmail(email) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "soracine.service@gmail.com",
        pass: "wywc gtrb elkw deew", // Remplacez par le mot de passe d'application généré
      },
    })

    const mailOptions = {
      from: "soracine.service@gmail.com",
      to: email,
      subject: "Bienvenue sur Sora Cine !",
      text: "Bienvenue sur Sora Cine depuis Node",
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("E-mail envoyé :", info.response)
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error)
  }
}
