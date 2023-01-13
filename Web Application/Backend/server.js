const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;


  mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log('MongoDB Connection Success!!!')
  })

  const packageRouter = require("./Routes/package.routes");
  const feedbackRouter = require("./Routes/feedback.routes");
  const customerRouter = require("./Routes/Customer.routes");
  const orderRouter = require("./Routes/Order.routes");
  const paymentRouter = require("./Routes/payment.routes");

  app.use("/user", require("./routes/userRoutes"));
  app.use("/package", packageRouter);
  app.use("/feedback", feedbackRouter);
  app.use("/customer", customerRouter);
app.use("/order", orderRouter);
  app.use("/payment", paymentRouter);

  
  app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })
  