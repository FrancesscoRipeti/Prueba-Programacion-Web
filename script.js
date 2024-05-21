/* inicio sesion */
const btnSingIn = document.getElementById('btn-sing-in');
const btnSingUP = document.getElementById('btn-sing-up');
const contSingIn = document.getElementById('welcome-sing-in');
const contSingUp = document.getElementById('welcome-sing-up');
const container1 = document.querySelector("#container-ini-reg");
contSingIn.style.display = 'block';
contSingUp.style.display = 'none';

btnSingIn.addEventListener('click', () => {
    container1.classList.toggle('toggle');
    contSingIn.style.display = 'none';
    contSingUp.style.display = 'block';
}
);
btnSingUP.addEventListener('click', () => {
    container1.classList.toggle('toggle');
    contSingIn.style.display = 'block';
    contSingUp.style.display = 'none';
}
);

/*INICIO OCULTAR O MOSTAR REG O INI SESION*/
/* INICIAR SECION */ 

/*REGISTRO*/

$(document).ready(function(){
    $("#sing-up").submit(function(event){

    event.preventDefault();
    
    var nombre = $("#nombreSUP").val();
    var email = $("#emailSUP").val();
    var password = $("#passwordSUP").val();
    

    if(nombre.length < 3 || nombre.length > 20){
        alert("El Nombre debe tener entre 3 y 20 caracteres.");
        return;
    }

    if(email.length < 3 || email.length > 20){
        alert("El Email debe tener entre 3 y 20 caracteres.");
        return;
    }

    if(password.length < 3 || password.length > 20){
        alert("La contraseña debe tener entre 3 y 20 caracteres.");
        return;
    }

    alert("¡Registro exitoso!");

    

    console.log("Name: " + nombre);
    console.log("Email: " + email);
    console.log("Password: " + password);

    });
});

