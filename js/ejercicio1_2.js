let usuario = prompt("Escriba su nombre");
let saldoDeCuenta = 20000;
let montoARetirar = prompt(`Hola ${usuario} ¿Cuanto desea retirar?`);

if(isNaN(montoARetirar) || montoARetirar <= 0){
    alert("Ingrese un numero valido mayor que 0: ");
    
} else if(saldoDeCuenta > montoARetirar){
    let saldoFinal = saldoDeCuenta - montoARetirar;
    alert(usuario + " retiro exitoso su nuevo saldo es de: " + saldoFinal);
} else{
    alert(usuario + " Saldo insuficiente");
}


    