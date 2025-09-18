const LabUser = require("../model/userModel");
const register = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    const userExist = await LabUser.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const newUser = await LabUser.create({
      username,
      password,
      email,
      address,
    });

    res.status(200).json({
      message: "User Created Successfully",
      // user: {
      //   id: newUser._id,
      //   name: newUser.username,
      //   email: newUser.email,
      //   address: newUser.address,
      // },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await LabUser.find();
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No User Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await LabUser.findById(id);
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await LabUser.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    res.status(200).json({
      message: "User Updated Successfully",
    });
    // return res.status(200).json({user})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await LabUser.findById(id);
    if (!userExist) {
      return res.status(400).json({ message: "No user found" });
    }
    await LabUser.findByIdAndDelete(id);
    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { register, allUsers, getUserById, updateUser, deleteUser };
