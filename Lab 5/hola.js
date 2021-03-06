console.log('hola mundo');
//const precio = 22;

{
	//let a = 4;
	var c = 12;
}
console.log(a);

let persona = "lalo";

let descuento = 0;

if(a > 6 && persona==="Lalo"){
	descuento = 0.1 * (cantidad_tacos * precio);
}

const por_pagar = cantidad_tacos * precio;
console.info('se te hizo un descuento de $' + descuento);

const clientes = [];

clientes.push("lalo");

for (let i = 0; i < clientes.length; i++){
	console.log(clientes[i]);
}

for(let cliente of clientes){
	console.log(cliente);
}

const menu = [];
menu.push({nombre: 'El Paisa', precio: 22});
menu.push({nombre: 'El Tacoshino', precio: 29});

console.log(menu);

function calcular_cuenta(tacos, precio){
	return tacos * 22;
}

const calcular = (tacos) =>{
	return tacos * 22;
}

const funcion_nueva = (tacos) => tacos * 22;

window.alert("bienvenido a tacoshinos");

if(ordenar){
	const tacos = window.prompt('Cuantos tacos vas a querer?');
	window.alert("bienvenido a tacoshinos");
	const ah = window.confirm();
}

console.log("La cuenta es de: $",calcular_cuenta(7));

document.write();

console.assert(calcular_cuenta(1)===22);
