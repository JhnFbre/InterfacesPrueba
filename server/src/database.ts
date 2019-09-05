import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });
////const espol = yield database_1.default.query('select usuario.id, usuario.identificacion, persona.cedula, persona.nombre, persona.apellido from usuario inner join persona on usuario.id_persona=persona.id');
export default pool;