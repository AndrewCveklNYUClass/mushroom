const Mushroom = require('../models/mushroom.model');

exports.get = function (req, res) {
  Mushroom.findById(req.params.id)
    .then(function (post) {
      return res.status(200).json({
        status: 200,
        data: post,
        message: "Success"
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}