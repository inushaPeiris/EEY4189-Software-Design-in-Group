const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const app = express();
const port = 9000;
const cors = require("cors");
app.use(cors());

//to access the request's data easily
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://travelit:eHBu8pL1q4qHAdGv@cluster0.sul9fgc.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("server is running on port 9000");
});

const User = require("./models/user");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({ name, email, password });

    //generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the  user to the database
    await newUser.save();

    //send the verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
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
    text: `please click the following link to verify your email http://localhost:9000/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending email", error);
  }
};

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
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

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
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

app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

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
app.post("/password-reset", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
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
    text: `Click the following link to reset your password: http://localhost:9000/reset/${resetToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending email", error);
  }
};

// email link path
app.get("/reset/:token", async (req, res) => {
  try {
    const token = req.params.token; 
    
    // check the user token is valid
    const user = await User.findOne({
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

app.post("/reset/:token", async (req, res) => {
  try {
    const { password } = req.body;
    const token = req.params.token;

    const user = await User.findOne({
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
