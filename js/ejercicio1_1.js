let usuario = prompt("Escriba su nombre");
let saldoDeCuenta = 1000;
let montoARetirar = prompt("¿Cuanto desea retirar?");

    if(saldoDeCuenta > montoARetirar){
       let saldoFinal = saldoDeCuenta - montoARetirar;
        alert(usuario + " retiro exitoso su nuevo saldo es de: " + saldoFinal);
    } else{
        alert(usuario + " Saldo insuficiente");
    };
    

