const ordenes = [
    {
        nombre: 'pollo',
        cantidad: 3,
        foto: 'https://tacos10.com/wp-content/uploads/2018/12/tacos-mexicanos-de-pollo.jpg',
        fecha: ''
    },
    {
        nombre: 'pastor',
        cantidad: 5,
        foto: 'https://cdn.kiwilimon.com/recetaimagen/13996/6330.jpg',
        fecha: ''
    },
    {
        nombre: 'pastor',
        cantidad: 3,
        foto: 'https://cdn.kiwilimon.com/recetaimagen/13996/6330.jpg',
        fecha: ''
    },
    {
        nombre: 'pollo',
        cantidad: 9,
        foto: 'https://tacos10.com/wp-content/uploads/2018/12/tacos-mexicanos-de-pollo.jpg',
        fecha: ''
    }
];

module.exports = class Orden {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, cantidad, foto) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.foto = foto;
        this.fecha = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        ordenes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return ordenes;
    }

}