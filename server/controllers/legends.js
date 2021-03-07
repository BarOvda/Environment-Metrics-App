const legendsConstants = require('../constants/legends.json');

exports.getLegends = async (req, res, next) => {
    res
      .status(200)
      .json({ data: legendsConstants});

};
