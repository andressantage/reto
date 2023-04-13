function pruebaVariables(){
    var x=10
    y=5
    alert(x)
}
//Ejecución de la función
/*pruebaVariables()
alert(y)
alert(x)*/

//Práctica de vartiables locales
function pruebaLocal(){
    let x=50
    if (true){
        let x=98
        alert(x)
    }
    alert(x)
}
//Ejecutar función
pruebaLocal()