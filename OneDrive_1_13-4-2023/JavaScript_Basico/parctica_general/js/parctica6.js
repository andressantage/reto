/*
Dada la información de ls N vendedores:
- Documento
- Nombre
- Tipo de vendedor (1: Puerta a puerta, 2:Telemercadeo,3:Ejecutivo de ventas)
Valor ventas del mes
Se pide:
- Valor a pagar a  cada vendedor por comisiones
- Valor total a pagar
Tabla liquidación de comisiones
Tipo        (%) aplica al valor de las ventas
1               25%
2               15%
3               20%
*/
var N,documento,nombre,tipo,ventas,valorPagar=0,totalPagar=0
N=parseInt(prompt("Cantidad de vendedores: "))
for(var i=0;i<N;i++){
    documento=parseInt(prompt("Documento vendedor: "))
    nombre=prompt("Nombre: ")
    tipo=parseInt(prompt("Tipo vendedor(1,2,3): "))
    ventas=parseInt(prompt("Ventas del mes: "))
    switch(tipo){
        case 1: valorPagar=ventas*0.25;break
        case 2: valorPagar=ventas*0.15;break
        case 3: valorPagar=ventas*0.20;break
    }
    alert("Valor comisión vendedor: "+valorPagar)
    totalPagar+=valorPagar
}
alert("Total a pagar por comisiones: "+totalPagar)