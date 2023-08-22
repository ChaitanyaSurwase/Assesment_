const User = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const JWT_SECRET = "generic_secret";  // This is for demonstration purposes.

exports.register = async (req, res) => {
  try {
    const { Username, email, password } = req.body;

    if (!Username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the details in order to proceed ahead.",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ message: "User with this email already exists." });
    }

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newUser = await User.create({
      Username,
      email,
      password: hashedPassword,
    });

    newUser.password = undefined;  // Excluding password from response

    return res.status(201).send({
      message: "User created successfully",
      user: newUser
    });
  } catch (err) {
    console.log("Error in user registration:", err);
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "User not found." });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send({ message: "Incorrect password." });
    }

    const token = JWT.sign({ id: user._id }, 'mySuperSecretKey');
    return res.header("auth-token", token).json({ token, user: user._id });
  } catch (err) {
    console.log("Login error:", err);
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  //... (as previously provided, with pagination and sorting)
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.password) {
      const saltRound = 10;
      updates.password = await bcrypt.hash(updates.password, saltRound);
    }

    const user = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    user.password = undefined;  // Excluding password from response

    return res.status(200).send({ message: 'User updated successfully', user });
  } catch (err) {
    console.log("Error updating user:", err);
    return res.status(500).send({ success: false, message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (err) {
    console.log("Error deleting user:", err);
    return res.status(500).send({ success: false, message: 'Internal server error' });
  }
};
