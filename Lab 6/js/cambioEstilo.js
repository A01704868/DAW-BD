let doc = document.getElementById("main");
let zinedine = document.getElementById("frenchi");
const ayuda = document.getElementById("ayuda");

doc.addEventListener("mouseenter", function(event){
    event.target.style.fontFamily = "Helvetica";

    setTimeout(function(){
        event.target.style.fontFamily = "serif";
    },10000);
});

zinedine.addEventListener("mouseenter", function(event){
    ayuda.innerText = "Este es el jugador Zinedine Zidane y a lo largo de su carrera gano el mundial, la euro, la champions league y el balon de oro"

    setTimeout(function(){
        ayuda.innerText = "";
    },10000);
});