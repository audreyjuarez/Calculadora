//Declarar variables
let a
let b
//Suma
function suma(){
    a= parseFloat(document.getElementById(`nmbr1`).value); //Llamando al primer input.
    b= parseFloat(document.getElementById(`nmbr2`).value);//Llamando al segundo input.
    document.getElementById(`result`).value= a+b; //Haciendo la operación y pidiendole que el resultado se muestre en el tercer input.
}
//Resta
function resta(){
    a= parseFloat(document.getElementById(`nmbr1`).value);
    b= parseFloat(document.getElementById(`nmbr2`).value);
    document.getElementById(`result`).value = (a-b);
}
//Multiplicación
function multiplica(){
    a= parseFloat(document.getElementById(`nmbr1`).value);
    b= parseFloat(document.getElementById(`nmbr2`).value);
    document.getElementById(`result`).value = (a*b);
}
//División
function divide(){
    a= parseFloat(document.getElementById(`nmbr1`).value);
    b= parseFloat(document.getElementById(`nmbr2`).value);
    document.getElementById(`result`).value = (a/b);
}