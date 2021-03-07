const numeroTacos = document.getElementById("tacos");
const numeroTamales = document.getElementById("tamales");
const pesoBarbacoa = document.getElementById("barbacoa");
const formato = document.getElementById("form");
const preciototal = document.getElementById("precioTotal");
const IVA = document.getElementById("iva");

formato.onsubmit = function(event){
    event.preventDefault();
    var precioTotal = (numeroTacos.value*10)+(numeroTamales.value*20)+(pesoBarbacoa.value*50);
    var iva = precioTotal * 0.15;
    preciototal.innerHTML = "El precio total de su orden es: " + precioTotal;
    IVA.innerHTML = "El valor del IVA es de: " + iva;
    formato.reset();
};