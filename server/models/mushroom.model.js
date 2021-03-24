const mongoose = require('mongoose');
const MushroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  binomialNomenclature: {
    type: String,
    required: true
  },
  isEdible: {
    type: Boolean,
    required: true
  },
  generalBackground: {
    type: String,
    required: true
  },
  mushroomModel: {
    type: String,
    required: true
  },
  isConsumable: {
    type: Boolean,
    required: true
  }
});
const Mushroom = mongoose.model('Mushroom', MushroomSchema);
module.exports = Mushroom;