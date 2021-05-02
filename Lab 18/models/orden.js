//buscar database en util
const db = require('../util/database');
module.exports = class Orden {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, cantidad, foto) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.foto = foto;
        //this.fecha = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //signos de interrogacion para prevenir SQL injection
        return db.execute('INSERT INTO ordenes (nombre, cantidad, foto) VALUES (?, ?, ?)',
        [this.nombre, this.cantidad, this.foto]
    );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM ordenes');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM ordenes WHERE id = ?', [id]);
    }

    static update(id,cantidad){
        return db.execute('UPDATE ordenes SET cantidad = ? WHERE id = ?', [cantidad,id]);
    }
}