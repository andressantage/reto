/*
Dado el nombre y estrato de un usuario de servicio agua
se pide hallar el valor tarifa básica, con base en:
Estrato    Tarifa Básica
  1         10000
  2         15000
  3         30000
  4         50000
  5         75000
  Imprimir el valor de la tarifa básica
*/
var nombre,estrato,tarifaBasica=0
nombre=prompt("Nombre usaurio: ")
estrato=parseInt(prompt("Estrato(1,2,3,4,5): "))
switch (estrato){
    case 1:tarifaBasica=10000;break
    case 2: tarifaBasica=15000;break
    case 3: tarifaBasica=30000;break
    case 4: tarifaBasica=50000;break
    case 5: tarifaBasica=75000;break
}
alert("Tarifa Básica: "+tarifaBasica)