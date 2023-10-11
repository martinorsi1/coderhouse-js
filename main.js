/* 
Mi proyecto consiste En un catalago de productos de Zapatillas. El cuál ofresco al cliente mediante un alert.
Luego con el switch brindo las opciones para que seleccione la opción deseada. 
Uso el bucle while para que en caso de ingresar una opción incorrecta, pida nuevamente al ususario ingresar la correcta.
*/

alert("Bienvenido a Zapas An! La mejor Tienda online de Zapatillas del Uruguay");
alert("Te presento nuestro catalogo de Zapas, a tan solo $3000 UYU c/u: 1-Nike, 2-Adidas, 3-Puma");


let marca = Number(prompt("Elija el Numero correspondiente a la zapatilla que desee: 1-Nike, 2-Adidas, 3-Puma"));

while (marca != 1 && marca != 2 && marca != 3) {
    alert("Por favor ingrese el Numero correcto de la opcion deseada");
    marca = Number(prompt("Elija el Numero correspondiente a la zapatilla que desee: 1-Nike, 2-Adidas, 3-Puma"));
}

switch (marca) {
    case 1:
        alert("Genial! Elegiste las Zapas Nike");
        break;

    case 2:
        alert("Genial! Elegiste las Zapas Adidas");
        break;

    case 3:
        alert("Genial! Elegiste las Zapas Puma");
        break;
}

/* 
function aumenteo(num1, num2, num3) {
    precioAumento = num1 + num2 * num3 
    return precioAumento
}


const aumenteo = (num1, num2, num3) => {
    precioAumento = num1 + num2 * num3 
    return precioAumento
}
*/

/* 
El claculo del aumento del produco lo realice mediante una funcion flecha.
La cuál suma el precio del producto con el valor del aumento.
Este ultimo se genera multiplicando el valor del producto, por el porcentaje de aumento.
*/

const aumenteo = (num1, num2, num3) => precioAumento = num1 + num2 * num3;

let precioZapas = 3000;
let aumenteo1 = 0.05;
let aumenteo2 = 0.10;
let aumenteo3 = 0.15;
let aumenteo4 = 0.20;

/* 
Lo siguiente es el metodo de pago, que aplico la misma lógica anteriormente mencionada.
Un switch dentro de otro para creear un sub menu que contenga el numero de cuotas, y uso while por si ingresa una opción invalida.
*/

alert("A continuacion elija el Metodo de Pago para realizar la compra");

let metodoDePago = Number(prompt("Metodo de Pago:1-Transferencia Bancaria 2-Trarjeta de Credito"));

while (metodoDePago != 1 && metodoDePago != 2) {
    alert("Por favor Ingrese el Numero correcto de la opcion deseada");
    metodoDePago = Number(prompt("Metodo de Pago:1-Tranferencia Bancaria 2-Trarjeta de Credito"));
}

switch (metodoDePago) {
    case 1:
        alert(`Haz elegido la opcion Tranferencia bancaria. El precio final es de $${precioZapas} UYU`);
        break;

    case 2:
        alert("Haz elegido la opcion Tarjeta de Credito, lo cual genera un aumenteo del precio final de las Zapas!");

        let numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));

        while (numeroCuotas != 2 && numeroCuotas != 4 && numeroCuotas != 6 && numeroCuotas != 10) {
            alert("Por favor elija la cantidad correcta de cuotas");
            numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));
        }
        switch (numeroCuotas) {
            case 2:
                aumenteo(precioZapas, precioZapas, aumenteo1);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 4:
                aumenteo(precioZapas, precioZapas, aumenteo2);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 6:
                aumenteo(precioZapas, precioZapas, aumenteo3);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;

            case 10:
                aumenteo(precioZapas, precioZapas, aumenteo4);
                alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
                break;
        }
        break;
}