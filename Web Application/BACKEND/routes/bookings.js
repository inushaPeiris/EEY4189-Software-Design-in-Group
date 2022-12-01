const router = require("express").Router();
let booking = require("../models/booking");

http://localhost:8070/booking/add

router.route("/add").post((req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const date = req.body.date;
    const participents = Number(req.body.participents);
    const location = req.body.location;

    const newbooking = new booking({

        name,
        email,
        date,
        participents,
        location

    })

    newbooking.save().then(()=>{
        res.json("booking Added");
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/booking

router.route("/").get((req,res)=>{

    booking.find().then((booking)=>{
        res.json(booking);
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/booking/update

router.route("/update/:id").put(async (req, res) => {
    let bookingId = req.params.id;
    const {name, email, date, participents, location} = req.body;

    const updatebooking = {
        name,
        email,
        date,
        participents,
        location
    }

    const update = await booking.findByIdAndUpdate(bookingId, updatebooking)
    .then(() => {
        res.status(200).send({status: "Booking updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

http://localhost:8070/booking/delete

router.route("/delete/:id").delete(async (req, res) => {
    let bookingId = req.params.id;

    await booking.findByIdAndDelete(bookingId)
    .then(() => {
        res.status(200).send({status: "Booking Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete booking", error: err.message});
    })
})

// get by id
http://localhost:8070/package/get
router.route("/get/:id").get(async (req, res) => {
    let bookingId = req.params.id;
    const x = await booking.findById(bookingId)
    .then((booking) => {
        res.status(200).send({status: "booking fetctech", booking})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get booking", error: err.message});
    })
})

module.exports = router;