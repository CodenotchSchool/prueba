
for (let i=0; i<5; i++)
{
    console.log("Bienvenido a Codenotch!" + i);
}

let nombres = ["Pepe", "Juan", "Alfredo", "Ana", "Javier", "Maria", "Sonia"];

let texto = "Los cinco primeros son: ";
for (let i=0; i < 5; i++)
{
    if (i<4)
        texto += nombres[i] + ", ";
    else
        texto += nombres[i] + ".";

    console.log(texto);
}
console.log(texto);

texto = "Los cinco primeros son: ";
let i=0;
while(i<5)
{
    if (i<4)
        texto += nombres[i] + ", ";
    else
        texto += nombres[i] + ".";

    console.log(texto);
    i++;
}

texto = "Los cinco primeros son: ";
i=0;
do
{
    if (i<4)
        texto += nombres[i] + ", ";
    else
        texto += nombres[i] + ".";

    console.log(texto);
    i++;
}while(i<5)


texto = "";
for (let nombre of nombres)
{
    texto += nombre + ", ";
    console.log(texto);
}
console.log(texto);

let miObject = {"nombre": "Ana", 
                "apellido1": "Gonzalez",
                "apellido2":"Garcia",
                "edad": 26}

let propiedad = "nombre"; 
console.log(miObject.nombre);
console.log(miObject[propiedad]);

texto="";
for (let clave in miObject)
{
    texto += "La clave " + clave + " tiene el valor " + miObject[clave] + "\n"
}

console.log(texto)