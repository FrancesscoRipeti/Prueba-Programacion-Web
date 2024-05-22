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
/* INICIAR SESION */ 
$(document).ready(function(){
    $("#sing-in").submit(function(event){

    event.preventDefault();
    
    var email = $("#email-sing-in").val();
    var password = $("#password-sing-in").val();
    
    if(email.length < 3 || email.length > 20){
        alert("El Email debe tener entre 3 y 20 caracteres.");
        return;
    }
    

    if(password.length < 3 || password.length > 20){
        alert("La contraseña debe tener entre 3 y 20 caracteres.");
        return;
    }

    alert("¡Inicio exitoso!");
   
    console.log("Email: " + email);
    console.log("Password: " + password);
    window.location.href="index.html";
    });
});

/*REGISTRO*/

$(document).ready(function(){
    $("#sing-up").submit(function(event){

    event.preventDefault();
    
    var nombre = $("#nombre-sing-up").val();
    var email = $("#email-sing-up").val();
    var password = $("#password-sing-up").val();
    

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
    window.location.href="index.html";

    });
});

/*Expande de manera automatica el campo de mensaje, ademas de verificar que los caracteres no sobrepasen los 300,
bloquendo el boton de enviar y dar un aviso*/
function autoExpand(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight);
    var counter = document.getElementById("counter");
    var limitemsg= document.getElementById("aviso-limite-msg");
    if (element.value.length > 600) {
        counter.style.color = "red";
        counter.innerHTML = element.value.length + "/600";
        document.getElementById("enviar").disabled = true;
        limitemsg.style.display = "block";
    } else {
        counter.style.color = "black";
        counter.innerHTML = element.value.length + "/600";
        document.getElementById("enviar").disabled = false;
        limitemsg.style.display = "none";
    }
};