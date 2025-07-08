let usuarioIngresado = prompt('ingrese nombre de usuario');
let claveIngresada = prompt('ingrese clave');

const usuario = "carlos23";
const clave = "carlitos22";

for(let i = 0; i<2; i++){
    if(usuarioIngresado == usuario && claveIngresada == clave){
        console.log('acceso correcto');
    } else{
        console.log ('acceso denegado');
    }
}

function saludarUsuario (nombre){
    for(let i = 0; i<2; i++){
        if(usuarioIngresado == usuario)
            alert('bienvenido ' + nombre);
}
}

saludarUsuario(usuario)

let cantidadDePrendas = parseInt(prompt('¿Cuantas prendas desea comprar?'))
let precioPrendas = 8000;
let totalCompra = cantidadDePrendas * precioPrendas
const cuotasPagables = parseInt(prompt('cantidad de cuotas a abonar'));

function calcularCompra(interes,cuotas){
    let pagoTotal = totalCompra + (totalCompra * interes / 100);
    return pagoTotal / cuotas;
}

let totalAdeudado = calcularCompra(17, cuotasPagables)
console.log('el total a pagar es de $' + totalCompra + ', en ' + cuotasPagables + ' cuotas con interes de $' + totalAdeudado + '.')

let stockTalles = ['XL','L','M'];
let buscarTalle = stockTalles.includes('S');
console.log(buscarTalle);

stockTalles.push('S');
console.log(stockTalles);
