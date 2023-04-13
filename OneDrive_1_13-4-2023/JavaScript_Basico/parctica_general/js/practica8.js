/*
 Liquidación de honorarios para N docentes de cátedra
 Información docente:
 - Nombre
 - Categoría (1,2,3)
 - Horas laboradas en el mes

 Se pide valor a pagar por honorarios al docente y el valor total
 a pagar
 Categoria    Valor Hora
    1           40000
    2           70000
    3           90000
*/
function calcularHonorarios(categoria,horas){
    var honorarios=0
    switch(categoria){
        case 1:honorarios=horas*40000;break
        case 2:honorarios=horas*70000;break
        case 3:honorarios=horas*90000;break
    }
    return honorarios
}
//Programa principal
var honorarios=0,nombre,categoria,horas,totalHonorarios=0
var n=parseInt(prompt("Cantidad de docentes: "))
for(var i=0;i<n;i++){
    nombre=prompt("Nombre docente: ")
    categoria=parseInt(prompt("Categoria/1,2,3): "))
    horas=parseInt(prompt("Horas laboradas: "))
    honorarios=calcularHonorarios(categoria,horas)
    totalHonorarios+=honorarios
    alert("Honorarios: "+honorarios)
}
alert("Total Honorarios: "+totalHonorarios)




