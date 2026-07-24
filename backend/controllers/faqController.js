const FAQ = require("../models/FAQ");

exports.getFaq = async (req, res) => {
  try {
    const faq = await FAQ.find();

    res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
