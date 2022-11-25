const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;  

app.use(cors());
app.use(bodyParser.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb Connection success!");
})

const customerRouter = require("./routes/customers");

app.use("/customer", customerRouter);

const packageRouter = require("./routes/packages");

app.use("/package", packageRouter);

const bookingRouter = require("./routes/bookings");

app.use("/booking", bookingRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number: 8070')
})