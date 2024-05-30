const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./routes/user.js");
const { recipeRouter } = require("./routes/recipe.js");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// userRouter
app.use("/api", router);

// recipeRouter
app.use("/api", recipeRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
