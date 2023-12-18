const seriesModel = require("../models/series");

//get animation series

exports.getSeries = async (req, res) => {
  try {
    const series = await seriesModel.find();
    res.json({ success: true, message: series });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//get animation series by id

exports.getSeriesById = async (req, res) => {
  try {
    const series = await seriesModel.findById(req.params.id);
    res.json({ success: true, message: series });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
