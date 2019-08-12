const mongoose = require("mongoose");

const { Schema } = mongoose;

const PersonaSchema =  new Schema ({
     identificacion: {type: String, required: true,
          trim: true} ,
     cedula: {type: String, required: true,
          trim: true},
     nombre: {type: String, required: true,
          trim: true},
     apellido: {type: String, required: true,
          trim: true},
});

module.exports = mongoose.model('Persona', PersonaSchema);