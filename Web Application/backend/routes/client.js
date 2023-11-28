const express = require('express');
const Client = require('../models/client');
const router = express.Router();
router.use(express.json());

// Create client
router.post('/client/save', async (req, res) => {
    try {
        let newClient = new Client(req.body);
        await newClient.save();
        return res.status(200).json({
            success: "Client saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get all clients
router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        return res.status(200).json({
            success: true,
            data: clients
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

// Get client by ID
router.get('/client/:id', async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);

        if (!client) {
            return res.status(404).json({
                error: "Client not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: client
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Update client by ID
router.put('/client/update/:id', async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedClient) {
            return res.status(404).json({
                error: "Client not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedClient,
            message: "Client updated successfully"
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message
        });
    }
});

// Delete client by ID
router.delete('/client/delete/:id', async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);

        if (!deletedClient) {
            return res.status(404).json({
                error: "Client not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: deletedClient,
            message: "Client deleted successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

module.exports = router;
