function agregarStorage(){
    var nombre=prompt("Nombre: ")
    var salario=parseInt(prompt("Salario: "))
    localStorage.setItem("nombre",nombre)
    localStorage.setItem("Salario",salario)
}
function tomarStorage(){
    var nombre=localStorage.getItem("nombre")
    var salario=localStorage.getItem("Salario")
    alert("Nombre: "+nombre)
    alert("salario: "+salario)
}
function eliminarStorage(){
    localStorage.removeItem("Salario")  
    
}
function limpiarStorage(){
    localStorage.clear()
    
}