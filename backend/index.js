import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/frendent")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error ", err));


app.get("/", (req, res) => {
  res.send("API Running 🚀");
});


const uploadPath = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

app.use("/uploads", express.static(uploadPath));


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  rating: Number,
  profile: String
});

const Product = mongoose.model("Product", productSchema);


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });



//  REGISTER
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    const user = new User({ email, password });
    await user.save();

    res.json({ message: "Register successful ✅" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials ❌" });
    }

    res.json({
      message: "Login successful ✅",
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



//  ADD PRODUCT
app.post("/products", upload.single("profile"), async (req, res) => {
  try {
    const { name, price, category, rating } = req.body;

    const product = new Product({
      name,
      price,
      category: category ? category.toLowerCase() : "",
      rating,
      profile: req.file ? req.file.filename : ""
    });

    await product.save();
    res.json(product);

  } catch (err) {
    console.log("ADD ERROR ", err);
    res.status(500).json({ error: err.message });
  }
});

// GET ALL PRODUCTS
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    const updated = products.map(p => ({
      ...p._doc,
      image: `http://localhost:5000/uploads/${p.profile}`
    }));

    res.json(updated);

  } catch (err) {
    console.log("GET ERROR ", err);
    res.status(500).json({ error: "Fetch failed" });
  }
});

//  GET SINGLE PRODUCT
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID ❌" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Not Found ❌" });
    }

    res.json({
      ...product._doc,
      image: `http://localhost:5000/uploads/${product.profile}`
    });

  } catch (err) {
    console.log("SINGLE ERROR 👉", err);
    res.status(500).json({ error: "Server Error" });
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});