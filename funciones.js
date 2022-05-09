// Declaración de funciones
// Fichero modificado.
function saludo()
{
    console.log("Hola");
}

function suma(x,y)
{
    let resultado = x+y;
    console.log(resultado);
}

function producto(x=0,y=1)
{
    let resultado = x*y;
    //console.log(resultado);
    return resultado;
}

let producto2 = (x,y) => x*y;
let saludo2 = () => {console.log("Hola")}

// Main
// console.log(producto(3,4));
// console.log(producto2(3,4));
// saludo2();

//saludo();
// suma(3,4);
// let a = 5;
// let b = 10;
// suma(a,b);
// let prod = producto(5,2);
// console.log(prod);
// console.log(producto(5,2));

// let op = producto(3,3) + 6;

// console.log(op);

// console.log(producto(4,5).length)

let myArray = [2,3,4,5];
let myArray2= [];

myArray.forEach((value, index, arr) => 
                {
                    console.log(value*2);
                    myArray2[index] = value *2;
                });

let myArrayDoble = myArray.map((value, index) => value * 2);
console.log(myArrayDoble);

let myArrayString = ["mesa", "silla", "balcon", "cisterna", "lavadora"];

let filtrado = myArrayString.filter((value, index) => value.length > 5);
console.log(filtrado);

let productoArray = myArray.reduce((accumulate, value, index) => accumulate * value);
console.log(productoArray);

console.log(producto(3,2))
console.log(producto(10));
console.log(producto());





