const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "contacts" }
);

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
