//buscar database en util
const db = require('../util/database');

module.exports = class Incidente {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(tipo, lugar) {
        this.tipo = tipo;
        this.lugar = lugar;
        //this.fecha = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //signos de interrogacion para prevenir SQL injection
        return db.execute('INSERT INTO incidentes (tipoID, lugarID) VALUES (?, ?)',
        [this.tipo, this.lugar]
    );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        //ejecuta consulta SQL
        return db.execute('SELECT * FROM incidentes I, lugares L, tipoincidente T WHERE I.tipoID = T.tipoID AND I.lugarID = L.lugarID');
    }

    static fetchDisponible() {
        return db.execute('SELECT nombreLugar, lugarID FROM lugares L');
    }

}