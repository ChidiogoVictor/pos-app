const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      require: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: "Email must be in valid format!",
      },
    },

    phone: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: "Phone number must be a 10-digit number!",
      },
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
