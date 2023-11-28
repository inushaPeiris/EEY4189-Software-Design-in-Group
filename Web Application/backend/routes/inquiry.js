const express = require('express');
const Inquiries = require('../models/inquiry');

const router = express.Router();

router.use(express.json());

// Create inquiry
router.post('/inquiry/save', async (req, res) => {
    try {
        let newInquiry = new Inquiries(req.body);
        await newInquiry.save();
        return res.status(200).json({
            success: 'Inquiry saved successfully'
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get all inquiries
router.get('/inquiries', async (req, res) => {
    try {
        const inquiries = await Inquiries.find();
        return res.status(200).json({
            success: true,
            data: inquiries
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get inquiry by ID
router.get('/inquiry/:id', async (req, res) => {
    try {
        const inquiry = await Inquiries.findById(req.params.id);

        if (!inquiry) {
            return res.status(404).json({
                error: 'Inquiry not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: inquiry
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Update inquiry by ID
router.put('/inquiry/update/:id', async (req, res) => {
    try {
        const updatedInquiry = await Inquiries.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedInquiry) {
            return res.status(404).json({
                error: 'Inquiry not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedInquiry,
            message: 'Inquiry updated successfully'
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Delete inquiry by ID
router.delete('/inquiry/delete/:id', async (req, res) => {
    try {
        const deletedInquiry = await Inquiries.findByIdAndDelete(req.params.id);

        if (!deletedInquiry) {
            return res.status(404).json({
                error: 'Inquiry not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: deletedInquiry,
            message: 'Inquiry deleted successfully'
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

module.exports = router;
