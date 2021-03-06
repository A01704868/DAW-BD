function lab51(input){
    var table = document.createElement('table');
    table.setAttribute('border','1');

    //let input = prompt("Un numero de prueba");
    for(let i = 0; i<input; i++){
        var tRow = document.createElement('tr');

        for(let j = 0; j<3; j++){
            var tData = document.createElement('td');

            if(j === 0){
                tData.textContent = i+1;
            }
            if(j === 1){
                tData.textContent = (i+1)*(i+1);
            }
            if(j === 2){
                tData.textContent = (i+1)*(i+1)*(i+1);
            }

            tRow.appendChild(tData);
        }
        table.appendChild(tRow);
    }
    document.body.appendChild(table);
}
document.write("Pruebas de 1");
lab51(3);
document.write("<br>");
lab51(4);
document.write("<br>");

function lab52(){
    let a = Math.floor(Math.random() * 20);;
    let b = Math.floor(Math.random() * 20);;

    let c = a + b;
    const t0 = performance.now();
    let input = prompt("Cual es la suma de: "+a+" y "+b);

    const t1 = performance.now();

    if(Number.parseInt(input) === c){
        document.write("<h2>Correcto!!</h2><p> Tardaste "+ (t1-t0)+ " milisegundos en responder</p>");
    }else{
        document.write("<h2>Incorrecto!!</h2><p> Tardaste "+ (t1-t0)+ " milisegundos en responder</p>");
    }
}
document.write("Pruebas del 2");
lab52();
document.write("<br>");

function contador(input){
    let negativo = 0;
    let zero = 0;
    let positivo = 0;

    for(let i = 0; i< input.length;i++){
        if(input[i]<0){
            negativo++;
        }
        if(input[i]===0){
            zero++;
        }
        if(input[i]>0){
            positivo++;
        }
    }
    document.write("<h4>Hay "+negativo+" numeros negativos, "+zero+" ceros, "+positivo+" numeros positivos</h4>");
}
const a = [-1, 0, 0, -4];
const b = [1, 0, 0, 4,-5];
document.write("Pruebas del 3");
document.write("<br>");
document.write(a);
contador(a);
document.write(b);
contador(b);

document.write("<br>");

function promedios(input){
    const promedio = [];
    for(let i of input){
        var aux = 0;
        for(let j of i){
            aux = aux + j;
        }
        promedio.push(aux/i.length);
    }
    return promedio;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10,11,12]
  ];
const matrix2 = [
    [12, 2, 33],
    [4, 52, 6],
    [7, 85, 93],
    [10,11,120]
  ];

const promedio = promedios(matrix);
const promedio2 = promedios(matrix2);
document.write("Pruebas del 4");
document.write("<br>");
document.write(matrix);
document.write("<br>");
document.write(promedio);
document.write("<br>");
document.write(matrix2);
document.write("<br>");
document.write(promedio2);
document.write("<br>");

function inverso(input){

    var n = input;
    var digitos = (""+n).split("");

    for(let i = 0; i<digitos.length;i++){
        digitos[i] = +digitos[i];
    }
    digitos.reverse();

    var aux = digitos.join('');

    let numeroInverso = parseInt(aux);

    return numeroInverso;
}

let inverse = inverso(123456789);
let inverse2 = inverso(0987654);
document.write("Pruebas del 5");
document.write("<br>");
document.write(inverse);
document.write("<br>");
document.write(inverse2);
document.write("<br>");

class triangulo{

    constructor(angulo, lado1, lado2){
        this.angulo = angulo;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return (this.lado1*this.lado2*0.5)*Math.sin(this.angulo);
    }

    get lado3(){
        return this.leyCoseno();
    }
    
    leyCoseno(){
        return Math.sqrt(Math.pow(this.lado1,2)+Math.pow(this.lado2,2)-(2*this.lado1*this.lado2*Math.cos(this.angulo)));
    }

    get angulo2(){
        return this.leySeno();
    }

    leySeno(){
        return Math.asin((Math.sin(this.angulo)*lado2)/this.leyCoseno());
    }

}

document.write("<p>El problema que elegi resolver para 6 es uno en el que creas un objeto triangulo y le das un angulo y dos lados. Despue utiliza estos para casi completar el triangulo con la ley del coseno y seno. Aparte tambien calcula el area de cualquier triangulo.</p>");

document.write("<br>");

const triangulo1 = new triangulo(20,30,20);
const triangulo2 = new triangulo(15,10,30);

document.write("Con lados de 30 y 20 con un angulo de 20 radianes, Area es: "+triangulo1.area);
document.write("<br>");

document.write("Con lados de 30 y 10 con un angulo de 15 radianes, Area es: "+triangulo2.area);