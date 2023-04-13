/*
Dado el nombre y la califcación cuantitativa (0-100), se pide hallar la 
calificación cualitativa, de acuerdo con:
    rango       Nota Cualitativa
    0-59          D
    60-79         C
    80-89         B
    90-100        A
    Imprimir la nota cualitativa
*/
var nombre,cuantitativa,cualitativa=""
nombre=prompt("Nombre estudiante: ")
cuantitativa=parseInt(prompt("Nota Cuantitativa(0-100): "))
if(cuantitativa<=59){
    cualitativa="D"
}
else if(cuantitativa<=79){
    cualitativa="C"
}
else if(cuantitativa<=89){
    cuantitativa="B"
}
else{
    cualitativa="A"
}
alert("Nota Cualitativa: "+cualitativa)