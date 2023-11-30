const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const TravelPackage = require('../models/travelPackage');
const { exec } = require('child_process');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route to get all travel packages
router.get('/packages', async (req, res) => {
  try {
    const allPackages = await TravelPackage.find().exec();

    return res.status(200).json({
      success: true,
      existingPackages: allPackages
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

// Route to create a new travel package
router.post('/package/save', upload.single('coverImage'), async (req, res) => {
  const travelPackage = new TravelPackage({
    packageName: req.body.packageName,
    description: req.body.packageDescription, 
    placesToVisit: req.body.placesToVisit.split(',').map((place) => place.trim()),
    cabServices: req.body.cabService.split(',').map((service) => service.trim()), 
    hotel: req.body.hotel,
    numberOfDays: req.body.numberOfDays,
    price: req.body.price,
    coverImage: req.file.filename,
  });

  try {
    const newTravelPackage = await travelPackage.save();
    res.status(201).json(newTravelPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get a travel package by ID
router.get('/package/:id', async (req, res) => {
  try {
    const travelPackage = await TravelPackage.findById(req.params.id);

    if (!travelPackage) {
      return res.status(404).json({
        error: "Travel package not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: travelPackage
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

// Route to update a travel package by ID
router.put('/package/update/:id', async (req, res) => {
  try {
    const updatedTravelPackage = await TravelPackage.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedTravelPackage) {
      return res.status(404).json({
        error: "Travel package not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedTravelPackage,
      message: "Travel package updated successfully"
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

// Route to delete a travel package by ID
router.delete('/package/delete/:id', async (req, res) => {
  try {
    const deletedTravelPackage = await TravelPackage.findByIdAndDelete(req.params.id);

    if (!deletedTravelPackage) {
      return res.status(404).json({
        error: "Travel package not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: deletedTravelPackage,
      message: "Travel package deleted successfully"
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;
