const router = require("express").Router();
const { response } = require("express");
let Feedback = require("../Models/Feedback.model");

//http://Localhost:8070/feedback/add
router.route("/add").post((req, res) =>{
    
    const topic = req.body.topic;
    const name = req.body.name;
    const contact =  req.body.contact;
    const email = req.body.email;
    const message = req.body.message;
    
    const newFeedback = new Feedback ({
        topic,
        name,
        contact,
        email,
        message,
    })

    newFeedback.save().then(()=> {
        res.json("New Feedback Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data
router.route("/").get((req, res) => {

    Feedback.find().then((feedback)=>{
        res.json(feedback)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { 
        topic,
        name,
        contact,
        email,
        message,
    } = req.body;

    const updateFeedback = {
        topic,
        name,
        contact,
        email,
        message,
    }

    const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(() => {

        res.status(200).send({status: "Feedback is Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Feedback.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Feedback Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Feedback!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const Feedbackdata = await Feedback.findById(userId).then((feedback) => {
        res.status(200).send({status: "Feedback details fetched", feedback});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})

module.exports = router;
