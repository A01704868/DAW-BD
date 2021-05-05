//buscar database en util
const db = require('../util/database');
//Para encryptar contraseñas
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(username, nombre, password) {
        this.username = username;
        this.nombre = nombre;
        this.password = password;
        //this.fecha = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

        //Dentro del método del modelo que crea el usuario
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        return bcrypt.hash(this.password, 12)
            .then( (password) => {
                //signos de interrogacion para prevenir SQL injection
                return db.execute('INSERT INTO usuarios (username, nombre, password) VALUES (?, ?, ?)',
                    [this.username, this.nombre, password]
                );
            }).catch( err => {
                console.log(err);
                throw Error("Nombre de usuario duplicado");
            });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        //ejecuta consulta SQL
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(username){
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
}