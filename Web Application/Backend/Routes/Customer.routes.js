const router = require("express").Router();
const { response } = require("express");
let Customer = require("../Models/Customer.model");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;

  const newCustomer = new Customer({
    name,
    contact,
    email,
    address,
    password,
  });

  newCustomer
    .save()
    .then(() => {
      res.json("New Customer Details Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// fetch data
router.route("/").get((req, res) => {
  Customer.find()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      console.log(err);
    });
});


//update method
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, contact, email, address, password } = req.body;

  const updateCustomer = {
    name,
    contact,
    email,
    address,
    password,
  };

  const update = await Customer.findByIdAndUpdate(userId, updateCustomer)
    .then(() => {
      res.status(200).send({ status: "Customer is Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//delete method
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Customer.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Customer Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete  Customer!", error: err.message });
    });
});

//get one  data
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const Customerdata = await Customer.findById(userId)
    .then((customer) => {
      res.status(200).send({ status: "customer details fetched", customer });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get details!", error: err.message });
    });
});

module.exports = router;
