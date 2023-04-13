/*Dado el nombre y salario de un empleado
calcular subsidio de transporte
Si el salario es menor igual a $100000 el subsidios es de $140000
si no no hay subsidico*/
//Delcaración de variables
var nombre,salario,subsidio=0
nombre=prompt("Nombre empleado: ")
salario=parseInt(prompt("Salario: "))
if(salario<=1000000){
    subsidio=140000
}
else{
    subsidio=0
}
alert("Subsidio de transporte: "+subsidio)
