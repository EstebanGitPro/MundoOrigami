const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var modelImagen = new Schema({
  producto_nombre: {
    type: String
  },
})
const model =mongoose.mode1('ModelImagen', modelImagen);
module.exports = model;
