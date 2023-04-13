/*
Se ingresan letras hasta que la letra ingresada sea FIN y se almacenan
en un arreglo
Una vez se tenga el arreglo, se pide calcular la cantidad de letras a que 
se encuentran en el arreglo
*/
/*
Métodos para agregar o eliminar elemsntos de una arreglo
push: agregar al final
unshift:agregar al inicio
pop: elimina útlimo
delete: Eliminar por posición
*/
var letra,listaLetras=new Array(),contador=0
letra=prompt("Letra: ")
while(letra!=="FIN"){
    listaLetras.push(letra)
    letra=prompt("Letra: ")
}
/*
for(var i=0;i<listaLetras.length;i++){
    if(listaLetras[i]==="a"){
        contador++
    }
}
*/
for(var x of listaLetras){
    if(x==="a"){
        contador++
    }
}

alert("Cantidad de letras a: "+contador)