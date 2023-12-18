const contactModel = require("../models/contact");

//contact/post

exports.postContact = async (req, res) => {
  try {
    const contact = new contactModel(req.body);
    const savedContact = await contact.save();
    res.json({ success: true, message: savedContact });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

//contact/get

exports.getContact = async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.json({ success: true, message: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
