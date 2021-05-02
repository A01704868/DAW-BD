const mascotas = [
    {
        nombre: 'Punky',
        descripcion: 'Con punky aprendi a frenar los patines',
        imagen: 'https://t2.uc.ltmcdn.com/images/7/5/5/img_como_cuidar_de_un_cocker_spaniel_5557_orig.jpg',
        fecha: ''
    },
    {
        nombre: 'Pinky',
        descripcion: 'Conquistamos al mundo',
        imagen: 'https://www.tonica.la/__export/1586036185703/sites/debate/img/2020/04/04/pinky-y-cerebro.jpg_423682103.jpg',
        fecha: ''
    },
    {
        nombre: 'Maquina',
        descripcion: 'Revoluciono la industria',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Escudo_del_Cruz_Azul_AC.svg/1200px-Escudo_del_Cruz_Azul_AC.svg.png',
        fecha: ''
    },
    {
        nombre: 'Alacran',
        descripcion: 'Se comio parte de mi carro y ahora uso moto',
        imagen: 'https://www.gaceta.unam.mx/wp-content/uploads/2019/10/190930-aca3-des-f1-escorpion.jpg',
        fecha: ''
    }
];

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, descripcion, imagen, fecha) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fecha = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        mascotas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mascotas;
    }

}