function cambiarTexto(){
    var elemento=document.getElementById("texto")
    elemento.innerHTML="Texto cambiado"
}
function cambia(){
    alert("Hola")
    var animal=document.getElementsByClassName("animal")
    alert(animal.length)
    for(var i=0;i<animal.length;i++){
        console.log(animal[i].textContent.toLocaleUpperCase())
        alert(animal[i].textContent.toLocaleUpperCase())
        
    }
    
}
function query(){
    const etiqueta=document.querySelector('p')
    const clase=document.querySelector('.clase')
    const id=document.querySelector('#id')
    console.log(etiqueta.textContent)
    console.log(clase.textContent)
    console.log(id.textContent)
}
function queryAll(){
    var etiqueta=document.querySelectorAll('p')
    var clase=document.querySelectorAll('.clase')
    for(var i=0;i<etiqueta.length;i++){
        console.log(etiqueta[i].textContent)
    }
    for(var i=0;i<clase.length;i++){
        console.log(clase[i].textContent)
    }
}