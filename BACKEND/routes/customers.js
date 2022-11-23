const router = require("express").Router();
let customer = require("../models/customer");

http://localhost:8070/customer/add

router.route("/add").post((req,res)=>{
    
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newcustomer = new customer({

        name,
        age,
        gender

    })

    newcustomer.save().then(()=>{
        res.json("customer Added");
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/customer

router.route("/").get((req,res)=>{

    customer.find().then((customer)=>{
        res.json(customer);
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/customer/update

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {name, age, gender} = req.body;

    const updatecustomer = {
        name,
        age,
        gender
    }

    const update = await customer.findByIdAndUpdate(userId, updatecustomer)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

http://localhost:8070/customer/delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await customer.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await customer.findById(userId)
    .then((customer) => {
        res.status(200).send({status: "User fetctech", customer})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;