const express = require("express");
const Client = require("../models/client");
const router = express.Router();
router.use(express.json());

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Create client
router.post("/client/save", async (req, res) => {
  try {
    let newClient = new Client(req.body);

    //generate and store the verification token
    newClient.verificationToken = crypto.randomBytes(20).toString("hex");

    await newClient.save();

    //send the verification email to the user
    sendVerificationEmail(newClient.email, newClient.verificationToken);

    return res.status(200).json({
      success: "Client saved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "teamjustnerds@gmail.com",
      pass: "miptnxktvnjlgcla",
    },
  });

  //compose the email message
  const mailOptions = {
    from: "Travelit.com",
    to: email,
    subject: "Email Verification",
    text: `please click the following link to verify your email http://localhost:8000/client/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending email", error);
  }
};

router.get("/client/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await Client.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.log("error getting token", error);
    res.status(500).json({ message: "Email verification failed" });
  }
});

// Get all clients
router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.find();
    return res.status(200).json({
      success: true,
      data: clients,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Get client by ID
router.get("/client/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({
        error: "Client not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: client,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

// Update client by ID
router.put("/client/update/:id", async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedClient) {
      return res.status(404).json({
        error: "Client not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedClient,
      message: "Client updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

// Delete client by ID
router.delete("/client/delete/:id", async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);

    if (!deletedClient) {
      return res.status(404).json({
        error: "Client not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: deletedClient,
      message: "Client deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

router.post("/client/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Client.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

router.get("/client/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await Client.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error while getting the profile" });
  }
});

const generateResetToken = () => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  return resetToken;
};

// Reset password
router.post("/client/password-reset", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Client.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = generateResetToken();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

    await user.save();

    // Send reset password email
    sendResetPasswordEmail(user.email, resetToken);

    res.status(200).json({resetToken, message: "Password reset request successful" });
  } catch (error) {
    console.log("Error requesting password reset", error);
    res.status(500).json({ message: "Error requesting password reset" });
  }
});

const sendResetPasswordEmail = async (email, resetToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "teamjustnerds@gmail.com",
      pass: "miptnxktvnjlgcla",
    },
  });

  const mailOptions = {
    from: "teamjustnerds@gmail.com",
    to: email,
    subject: "Password Reset",
    text: `Click the following link to reset your password: http://localhost:8000/client/reset/${resetToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending email", error);
  }
};

// email link path
router.get("/client/reset/:token", async (req, res) => {
  try {
    const token = req.params.token; 
    
    // check the user token is valid
    const user = await Client.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid or expired reset token" });
    }
    
    //sending new token 
    res.status(200).json({token, message: "This is your OTP" });
  } catch (error) {
    console.log("Error handling reset token", error);
    res.status(500).json({ message: "Error handling reset token" });
  }
});

router.post("/client/reset/:token", async (req, res) => {
  try {
    const { password } = req.body;
    const token = req.params.token;

    const user = await Client.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid or expired reset token" });
    }

    // Update the password and clear the reset token fields
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.log("Error resetting password", error);
    res.status(500).json({ message: "Error resetting password" });
  }
});

module.exports = router;
