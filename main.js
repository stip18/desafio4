//funciones
let resultado = 0;
function sumar (arroz, Aceite, azucar){
    resultado = arroz + Aceite + azucar;
}
function mostrar (mensaje){
    console.log(mensaje);
}
sumar (3, 7, 4);
mostrar(resultado);

//sin parametros
newFunction();

function newFunction() {
    let saludo = () => {
        let miNombre = prompt("Ingresa tu Nombre");
        alert("Espero que tengas un lindo día " + miNombre);
    };
    saludo();
}

//opcion con parametros
function saludo2(unNombre) {
    alert("Que descanses bien " + unNombre);
}
//1
saludo2("stip");
//2
let nomb = prompt("Ingresa tu nombre");
saludo2(nomb);
//3
saludo2(prompt("Quien eres?"))
