const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://arrotek:test1234@arrotek.qcicy.mongodb.net/arroDB")

app.use("/", require("./routes/contactRoute"));

app.listen(3001, function() {
    console.log("express is running on 3001");
})