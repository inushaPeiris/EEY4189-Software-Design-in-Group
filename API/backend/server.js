const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// import routes
const adminRoutes = require("./routes/admin");
const clientRoutes = require("./routes/client");
const inquiryRoutes = require("./routes/inquiry");
const travelPackageRouter = require('./routes/travelPackage');
const bookingRoutes = require('./routes/booking')

// app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(adminRoutes);
app.use(clientRoutes);
app.use(inquiryRoutes);
app.use(travelPackageRouter);
app.use(bookingRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = 8000;
const DB_URL = 'mongodb+srv://travelit:eHBu8pL1q4qHAdGv@cluster0.sul9fgc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected Successfully');
})
.catch((err)=>console.log('DB Connection Error',err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

