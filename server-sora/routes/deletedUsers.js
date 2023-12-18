const userModel = require("../models/users");

exports.postDeletedUsers = async (req, res) => {
  try {
    const deletedUsers = await userModel.find();
    res.json({ success: true, message: deletedUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
