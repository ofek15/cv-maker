
const express = require("express");
const app = express();
const PORT = 5000;
const userRoutes = require("./routes/userRoutes");
const infoRoutes = require("./routes/infoRoutes");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config();

mongoose
  .connect(
    "mongodb+srv://Ofeksegal:Ofeksegal15@cluster0.ewhtuvp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Successfully connected to mongodb!"))
  .catch((err) => console.log(err.message));

  app.use(cors())

app.get("/", (req, res) => {
  res.json({ name: "or" });
});

app.use(express.json());
app.use("/user", userRoutes);
app.use("/info", infoRoutes )

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
