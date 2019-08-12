const Persona= require('../models/persona');

const personaCtrl= {};
personaCtrl.getPersonas = async (req, res) => {
   const personas = await Persona.find();   
   res.json(personas);
}
personaCtrl.createPersonas = async (req, res) => {
    const persona = new Persona({
        identificacion: req.body.identificacion,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });
    await persona.save();
    res.json({status: 'Un persona ha sido creado'});
}

personaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
}
personaCtrl.editPersona = async (req, res) => {
    const { id } = req.params;
    const persona = {
        identificacion: req.body.identificacion,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    await Persona.findByIdAndUpdate(id,{ $set : persona}, {new : true});
    res.json({'status':"Un persona ha sido Actualizado"});
}

personaCtrl.deletePersona = async (req, res) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({'status':"Un persona ha sido Borrado"});
}

module.exports = personaCtrl;