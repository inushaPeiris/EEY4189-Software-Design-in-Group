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

// app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(adminRoutes);
app.use(clientRoutes);
app.use(inquiryRoutes);
app.use(travelPackageRouter)


const PORT = 8000;
const DB_URL = 'mongodb+srv://gavindumaleesha01:gavindu123@mernapp.ebynfmh.mongodb.net/';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected Successfully');
})
.catch((err)=>console.log('DB Connection Error',err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

