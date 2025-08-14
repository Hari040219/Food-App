const express = require('express');
const dotenv = require("dotenv").config();
const connectDb = require("./config/db.js");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

connectDb();


app.use("/",require("./routes/userRoutes.js"))
app.use("/recipes", require("./routes/recipeRouter.js"));

app.listen(PORT, () => {
    console.log(` Server is running at http://localhost:${PORT}`);
});
