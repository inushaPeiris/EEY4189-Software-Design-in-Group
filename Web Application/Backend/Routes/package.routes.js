const router = require("express").Router();
const { response } = require("express");
let Package = require("../Models/Package.model");

//http://Localhost:8070/package/add
router.route("/add").post((req, res) =>{
    
    const name = req.body.name;
    const category = req.body.category;
    const price =  req.body.price;
    const description = req.body.description;
    const rich_description = req.body.rich_description;
    const create_date = req.body.create_date;
    
    const newPackage = new Package ({
        name,
        category,
        price,
        description,
        rich_description,
        create_date
        
    })

    newPackage.save().then(()=> {
        res.json("New Package Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data
router.route("/").get((req, res) => {

    Package.find().then((package)=>{
        res.json(package)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { 
        name,
        category,
        price,
        description,
        rich_description,
        create_date
    } = req.body;

    const updatePackage = {
        name,
        category,
        price,
        description,
        rich_description,
        create_date
    }

    const update = await Package.findByIdAndUpdate(userId, updatePackage).then(() => {

        res.status(200).send({status: "Package Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Package.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Package Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Package!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const packagedata = await Package.findById(userId).then((package) => {
        res.status(200).send({status: "package details fetched", package});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})

module.exports = router;
