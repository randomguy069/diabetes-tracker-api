require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const recordsRouter = require("./routes/Record");
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("Connected");
});
// app.use('/',(req,res)=>{
//     res.send({message:'Welcome to the API. Use appropriate routers'})
// })
app.use("/records", recordsRouter);
app.listen(port, () => {
  console.log(`Server running ${port}`);
});
