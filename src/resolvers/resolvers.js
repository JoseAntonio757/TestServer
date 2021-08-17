//Importar la configuracion de la base de datos 
const conectorDB = require('../config/db');



const resolvers = {
    Query: {
        Usuarios: () => {
           return PromesaObtener();           
        }
    },

    Mutation: {
        createUsuario: (_, input) => {
            return PromesaInsert(input);
        }
    }

};

//Obtener los valores de consulta 
const PromesaObtener = async () => {
    return await obtenerUsauarios();    
}
const PromesaInsert = async (input) => {
    return await InsertUsuario(input);    
}

//Crear una promesa 
const obtenerUsauarios = () => {
    return new Promise((resolve, reject) => {
        const consulta = 'SELECT * FROM users_test_JoseAntonioRamirez';
        conectorDB.query(consulta, function (err, result) {
            if (err) return reject(error);
            const respuesta = Object.values(JSON.parse(JSON.stringify(result)));
            return resolve(respuesta);
        });
    })
}

//Crear Usuarios 
const InsertUsuario = (input) => {
    const newUser = input;
    const {nombre, segundonombre, apellidopaterno, apellidomaterno, fechanacimiento, email, telefono} = input
    return new Promise((resolve, reject) => {
        const consulta = `INSERT INTO users_test_JoseAntonioRamirez (id,nombre,segundonombre,apellidopaterno,apellidomaterno, fechanacimiento, email, telefono)
        VALUES (null,'${nombre}','${segundonombre}','${apellidopaterno}','${apellidomaterno}','${fechanacimiento}', '${email}','${telefono}');`;
        conectorDB.query(consulta, function (err) {
            if (err) return reject(error);
            return resolve(newUser);
        });
    });
}


module.exports = resolvers;