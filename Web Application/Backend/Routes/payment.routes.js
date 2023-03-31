const router = require("express").Router();
const { response } = require("express");
let Payment = require("../Models/Payment.Model");

//http://Localhost:8070/payment/add
router.route("/add").post((req, res) => {
  const cardType = req.body.cardType;
  const number = req.body.number;
  const expDate = req.body.expDate;
  const name = req.body.name;
  const code = req.body.code;
  const payment = req.body.payment;

  const newPayment = new Payment({
    cardType,
    number,
    expDate,
    name,
    code,
    payment,
  });

  newPayment
    .save()
    .then(() => {
      res.json("Payment Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// fetch data
router.route("/").get((req, res) => {
  Payment.find()
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { cardType, number, expDate, name, code, payment } = req.body;
  const updatePayment = {
    cardType,
    number,
    expDate,
    name,
    code,
    payment,
  };

  const update = await Payment.findByIdAndUpdate(userId, updatePayment)
    .then(() => {
      res.status(200).send({ status: "Payment Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//delete
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Payment.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Payment Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete  Payment!", error: err.message });
    });
});

//get one  data
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const paymentdata = await Payment.findById(userId)
    .then((payment) => {
      res.status(200).send({ status: "payment details fetched", payment });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get details!", error: err.message });
    });
});

module.exports = router;
