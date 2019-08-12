const express = require ('express');
const morgan = require ('morgan');
const cors= require('cors');
const app = express();

const { mongoose } = require ('./database');

//Settings
app.set('port', process.env.PORT || 6100);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/personas',require('./routes/persona.routes'));

//Iniciando el servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor corriendo en el puerto  " +app.get('port'));
});