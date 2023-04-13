//Créditos Bancarios
function calcularCuotaPersonal(monto,interes,plazo,estrato){
    var valorCuota=0
    switch(estrato){
        case 1: valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.5;break
        case 2: valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.7;break
        case 3: valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.8;break
        default:valorCuota=(monto+ monto*(interes/100)*plazo)/plazo;break
    }
    return valorCuota
}
function calcularCuotaEmpresarial(monto,valorInteres,plazo){
    var valorCuota=(monto+(valorInteres*plazo))/plazo
    return valorCuota
}
function creditoPersonal(){
    console.log("  CREDITO PERSONAL")
    var monto=parseInt(prompt("Monto: "))
    var interes=parseFloat(prompt("(%) Interés mensual: "))
    var plazo=parseInt(prompt("Plazo en meses: "))
    var estrato=parseInt(prompt("Estrato(1,2,3,4,5): "))
    var valorCuota=calcularCuotaPersonal(monto,interes,plazo,estrato)
    console.log("Valor cuota crédito personal: ",valorCuota)
}
function creditoEmpresarial(){
    console.log("  CREDITO EMPRESARIAL")
    var monto=parseInt(prompt("Monto: "))
    var valorInteres=parseFloat(prompt("Valor de Interés mensual: "))
    var plazo=parseInt(prompt("Plazo en meses: "))
    var valorCuota=calcularCuotaEmpresarial(monto,valorInteres,plazo)
    console.log("Valor cuota crédito empresarial: ",valorCuota)
}

var opcion=0
do{
    console.log(("      MENU CREDITOS"))
    console.log("1. Crédito Personal")
    console.log("2. Crédito Empresarial")
    console.log("3. Salir")
    opcion=parseInt(prompt("Ingres Opción: "))
    if(opcion===1){
        creditoPersonal()
    }
    else if(opcion===2){
        creditoEmpresarial()
    }
}while(opcion!==3)
