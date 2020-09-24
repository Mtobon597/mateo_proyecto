
const resistor = ['negro', 'rojo', 'verde'];
let entero;
let decimal;
let multiplicador;

function valorColor (color) {
    switch(color){
        case 'negro':
           return 0;
        case 'rojo':
            return 2;
        case 'verde':
            return 5
        default:
            console.log("no existe");
            break;
    }
}

entero = valorColor(resistor[0]);
decimal = valorColor(resistor[1])/10;
multiplicador = Math.pow(10, valorColor(resistor[2]))

let valor = (entero + decimal) * multiplicador

console.log(valor)

