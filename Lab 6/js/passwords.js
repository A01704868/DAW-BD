const password = document.getElementById("password");
const verificar = document.getElementById("verificar");
const formato = document.getElementById("form");

const error = document.getElementById("error");

formato.addEventListener("submit", (e)=>{
    let errores = []

    if(password.value === '' || password.value == null){
        errores.push("Password esta vacio");
    }

    if(password.value.length <=6 ){
        errores.push("Password tiene que ser mas larga que 6 caracteres");
    }

    if(password.value !== verificar.value){
        errores.push("Ambos passwords tienen que ser identicos");
    }
    if(errores.length>0){
        e.preventDefault();
        error.innerText = errores.join(", ");
    }
});