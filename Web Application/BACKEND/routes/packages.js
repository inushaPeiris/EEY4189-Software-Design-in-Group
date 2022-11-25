const router = require("express").Router();
let package = require("../models/package");

http://localhost:8070/package/add

router.route("/add").post((req,res)=>{
    
    const name = req.body.name;
    const description = req.body.description;

    const newPackage = new package({

        name,
        description

    })

    newPackage.save().then(()=>{
        res.json("Package Added");
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/package

router.route("/").get((req,res)=>{

    package.find().then((package)=>{
        res.json(package);
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/package/update

router.route("/update/:id").put(async (req, res) => {
    let packageId = req.params.id;
    const {name, description} = req.body;

    const updatePackage = {
        name,
        description
    }

    const update = await package.findByIdAndUpdate(packageId, updatePackage)
    .then(() => {
        res.status(200).send({status: "Package updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating Package!"});
    })
})

http://localhost:8070/package/delete

router.route("/delete/:id").delete(async (req, res) => {
    let packageId = req.params.id;

    await customer.findByIdAndDelete(packageId)
    .then(() => {
        res.status(200).send({status: "Package Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Package", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let packageId = req.params.id;
    const package = await package.findById(packageId)
    .then((package) => {
        res.status(200).send({status: "Package fetctech", package})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Package", error: err.message});
    })
})

module.exports = router;