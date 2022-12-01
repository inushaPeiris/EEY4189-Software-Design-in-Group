const router = require("express").Router();
let feedback = require("../models/feedback");

http://localhost:8070/feedback/add

router.route("/add").post((req,res)=>{
    
    const topic = req.body.topic;
    const description = req.body.description;


    const newfeedback = new feedback({
        topic,
        description

    })

    newfeedback.save().then(()=>{
        res.json("feedback Added");
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/feedback

router.route("/").get((req,res)=>{

    feedback.find().then((feedback)=>{
        res.json(feedback);
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/feedback/update

router.route("/update/:id").put(async (req, res) => {
    let feedbackId = req.params.id;
    const {topic, description} = req.body;

    const updatefeedback = {
        topic,
        description
    }

    const update = await feedback.findByIdAndUpdate(feedbackId, updatefeedback)
    .then(() => {
        res.status(200).send({status: "feedback updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

http://localhost:8070/feedback/delete

router.route("/delete/:id").delete(async (req, res) => {
    let feedbackId = req.params.id;

    await feedback.findByIdAndDelete(feedbackId)
    .then(() => {
        res.status(200).send({status: "feedback Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete feedback", error: err.message});
    })
})

// get by id
http://localhost:8070/package/get
router.route("/get/:id").get(async (req, res) => {
    let feedbackId = req.params.id;
    const x = await feedback.findById(feedbackId)
    .then((feedback) => {
        res.status(200).send({status: "feedback fetctech", feedback})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get feedback", error: err.message});
    })
})

module.exports = router;