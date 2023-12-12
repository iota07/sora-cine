const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const { fetchTrendingTvShows } = require("./controllers/api");
require("dotenv").config();
const fs = require("fs").promises;

app.use(express.json());
const port = 3200;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", err => {
    console.error("MongoDB connection error:", err);
  });
  db.once("open", () => {
    console.log("MongoDB connected successfully");
  });
  db.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
  process.on("SIGINT", () => {
    db.close(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
}

const userSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ajoutez ceci pour définir l'attribut email comme unique
      validate: {
        validator: value => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

const loginSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "logins" }
);

const userModel = mongoose.model("User", userSchema);
const loginModel = mongoose.model("Login", loginSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user

app.post("/user", async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      ...userData,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    res.json({ success: true, message: savedUser });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

//user

app.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json({ success: true, message: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//user/:id/get

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id); // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId"); // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" });
    }

    const user = await userModel.findById(id);

    if (!user) {
      console.log("User not found"); // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: user });
  } catch (error) {
    console.error("Error:", error); // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message });
  }
});

//user/:id/delete

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id); // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId"); // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" });
    }

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      console.log("User not found"); // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: user });
  } catch (error) {
    console.error("Error:", error); // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message });
  }
});

//user/:id/put

app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id);

    let user = await userModel.findById(id);

    if (!user) {
      console.log("User not found");
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Mettez à jour les propriétés du document utilisateur avec les nouvelles données de la requête
    user = await userModel.findByIdAndUpdate(id, req.body, { new: true });

    res.json({ success: true, message: user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

//logins/get

app.get("/logins", async (req, res) => {
  try {
    const logins = await loginModel.find();
    res.json({ success: true, message: logins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//logins/post

app.post("/logins", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Étape 1: Vérifier si l'email existe dans la collection "users"
    const user = await userModel.findOne({ email });

    if (!user) {
      // Email non trouvé
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Étape 2: Vérifier si le mot de passe est correct
    if (!validPassword) {
      // Mot de passe incorrect
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Étape 3: Ajouter l'enregistrement dans la collection "logins"
    const login = new loginModel({ email, password });

    const savedLogin = await login.save();

    res.json({
      success: true,
      message: "Login successful!",
      login: savedLogin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//VideoModel

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    synopsis: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "series" }
);

const videoModel = mongoose.model("series", videoSchema);

//post

app.get("/movies", async (req, res) => {
  try {
    const video = new videoModel(req.body);
    const savedVideo = await video.save();
    res.json({ success: true, message: savedVideo });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

// seriesmodel

const seriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    synopsis: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "series" }
);

app.post("/movies", async (req, res, next) => {
  try {
    const { page } = req.query;
    const data = await fetchTrendingTvShows(page);
    const seriesdata = data.map(series => {
      return {
        title: series.name,
        category: series.category,
        age: series.age,
        synopsis: series.synopsis,
        url: series.url,
        duration: series.duration,
        poster: series.poster,
      };
    });
    try {
      const savedSeries = await seriesSchema.insertMany(seriesdata);
      res.json({ success: true, message: savedSeries });
      if (data && data.length !== undefined) {
        return res.status(200).json({
          status: 200,
          message: `${data.length} movies found`,
          data,
        });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Error retrieving movies data",
        });
      }
    } catch (err) {
      // Gérer spécifiquement l'erreur 401 (Unauthorized)
      if (err.response && err.response.status === 401) {
        return res.status(401).json({
          status: 401,
          message: "Unauthorized - Check your API key or permissions",
        });
      }

      // Gérer les autres erreurs
      return next(err);
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

//contact form

//contactSchema

const contactSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "contacts" }
);

const contactModel = mongoose.model("Contact", contactSchema);

//contact/post

app.post("/contact", async (req, res) => {
  try {
    const contact = new contactModel(req.body);
    const savedContact = await contact.save();
    res.json({ success: true, message: savedContact });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

//contact/get

app.get("/contact", async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.json({ success: true, message: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
