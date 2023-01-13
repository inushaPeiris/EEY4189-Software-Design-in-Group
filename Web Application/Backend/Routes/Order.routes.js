const router = require("express").Router();
const { response } = require("express");
let Order = require("../Models/Order.model");

//http://Localhost:8070/driver/add
router.route("/add").post((req, res) => {
  const cusName = req.body.cusName;
  const order_item = req.body.order_item;
  const email = req.body.email;
    const placeStart = req.body.placeStart;
    const totalPrice = req.body.totalPrice;
    const orderDate = req.body.orderDate;
  const status = req.body.status;

  const newOrder = new Order({
    cusName,
    order_item,
    email,
    placeStart,
    totalPrice,
    orderDate,
    status,
  });

  newOrder
    .save()
    .then(() => {
      res.json("New Order Details Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// fetch data

router.route("/").get((req, res) => {
  Order.find()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  //d structure
  const {
    cusName,
    order_item,
    email,
    placeStart,
    totalPrice,
    orderDate,
    status,
  } = req.body;

  const updateOrder = {
    cusName,
    order_item,
    email,
    placeStart,
    totalPrice,
    orderDate,
    status,
  };

  const update = await Order.findByIdAndUpdate(userId, updateOrder)
    .then(() => {
      res.status(200).send({ status: "Order is Updated" });
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

  await Order.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Order Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete  Order!", error: err.message });
    });
});

//get one  data
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const Orderdata = await Order.findById(userId)
    .then((order) => {
      res.status(200).send({ status: "Order details fetched", order });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get details!", error: err.message });
    });
});

module.exports = router;
