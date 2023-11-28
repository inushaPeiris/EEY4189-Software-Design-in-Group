const express = require('express');
const Admin = require('../models/admin');

const router = express.Router();

router.use(express.json());

// Create admin
router.post('/admin/save', async (req, res) => {
    try {
        const { email, username, password,rePassword } = req.body;
        const newAdmin = new Admin({ email, username, password,rePassword });
        await newAdmin.save();
        return res.status(200).json({
            success: "Admin saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get all admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await Admin.find();
        return res.status(200).json({
            success: true,
            data: admins
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Get admin by ID
router.get('/admin/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);

        if (!admin) {
            return res.status(404).json({
                error: "Admin not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: admin
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Update admin by ID
router.put('/admin/update/:id', async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({
                error: "Admin not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedAdmin,
            message: "Admin updated successfully"
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Delete admin by ID
router.delete('/admin/delete/:id', async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);

        if (!deletedAdmin) {
            return res.status(404).json({
                error: "Admin not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: deletedAdmin,
            message: "Admin deleted successfully"
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;
