const Faq = require("../models/Faq");

exports.getFaq = async (req, res) => {
  try {
    const faq = await Faq.find();

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
