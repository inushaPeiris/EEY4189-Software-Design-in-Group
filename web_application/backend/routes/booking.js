const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();
router.use(express.json());

// Create booking
router.post('/booking/save', async (req, res) => {
    try {
        let newBooking = new Booking(req.body);
        await newBooking.save();
        return res.status(200).json({
            success: "Booking saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        return res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get booking by ID
router.get('/booking/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                error: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: booking
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Update booking by ID
router.put('/booking/update/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({
                error: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedBooking,
            message: "Booking updated successfully"
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Delete booking by ID
router.delete('/booking/delete/:id', async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

        if (!deletedBooking) {
            return res.status(404).json({
                error: "Booking not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: deletedBooking,
            message: "Booking deleted successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

module.exports = router;
