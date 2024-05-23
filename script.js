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

<<<<<<< Updated upstream
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
=======
/*FIN OCULTAR O MOSTAR REG O INI SESION*/

/*FORMULARIO DE ENVIO(CARRITO) */
>>>>>>> Stashed changes

$(document).ready(function(){
    $("#form-envio").submit(function(event){
        event.preventDefault();

        var nombre = $("#nombre-form-envio").val();
        var apellido = $("#apellido-form-envio").val();
        var nomUsuario = $("#nomUsuario-form-envio").val();
        var email = $("#email-form-envio").val();
        var direccion = $("#direccion-form-envio").val();
        var direccion2 = $("#direccion2-form-envio").val();
        var pais = $("#pais-form-envio").val();
        var ciudad = $("#ciudad-form-envio").val();
        var codigoPostal = $("#codigoPostal-form-envio").val();
        var pago = $("#pago-form-envio").val();
        var nomtarjeta = $("#nomtarjeta-form-envio").val();
        var numtarjeta = $("#numtarjeta-form-envio").val();
        var expiracion = $("#expiracion-form-envio").val();
        var cvv = $("#cvv-form-envio").val();

        // Validate required inputs
        if(nombre.length < 3 || nombre.length > 20){
            alert("El Nombre debe tener entre 3 y 20 caracteres.");
            return;
        }
        if(apellido.length < 3 || apellido.length > 20){
            alert("El Apellido debe tener entre 3 y 20 caracteres.");
            return;
        }
        if(email.length < 3 || email.length > 20){
            alert("El Email debe tener entre 3 y 20 caracteres.");
            return;
        }
        if(direccion.length < 10 || direccion.length > 50){
            alert("La dirección debe tener entre 10 y 50 caracteres.");
            return;
        }
<<<<<<< Updated upstream
        if(pais === ""){
            alert("Seleccione un país.");
            return;
        }
        if(ciudad === ""){
=======
        if(!pais){
            alert("Seleccione un país.");
            return;
        }
        if(!ciudad){
>>>>>>> Stashed changes
            alert("Seleccione una ciudad.");
            return;
        }
        if(codigoPostal.length < 3 || codigoPostal.length > 20){
            alert("El código postal debe tener entre 3 y 20 caracteres.");
            return;
        }
<<<<<<< Updated upstream
        if(pago === ""){
=======
        if(!pago){
>>>>>>> Stashed changes
            alert("Seleccione un método de pago.");
            return;
        }
        if(nomtarjeta.length < 3 || nomtarjeta.length > 20){
            alert("El nombre de la tarjeta debe tener entre 3 y 20 caracteres.");
            return;
        }
        if(numtarjeta.length !== 16){
            alert("El número de tarjeta debe tener 16 caracteres.");
            return;
        }
        if(expiracion.length < 3 || expiracion.length > 5){
            alert("La fecha de expiración debe tener entre 3 y 5 caracteres.");
            return;
        }
        if(cvv.length !== 3){
            alert("El código de seguridad debe tener 3 caracteres.");
            return;
        }

        // Validate optional fields if they are not empty
        if(nomUsuario.length > 0 && (nomUsuario.length < 3 || nomUsuario.length > 20)){
            alert("El Nombre de Usuario debe tener entre 3 y 20 caracteres si está presente.");
            return;
        }
        if(direccion2.length > 0 && (direccion2.length < 3 || direccion2.length > 20)){
            alert("La dirección 2 debe tener entre 3 y 20 caracteres si está presente.");
            return;
        }

        alert("¡Compra exitosa!");

        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
        console.log("Nombre de Usuario: " + nomUsuario);
        console.log("Email: " + email);
        console.log("Dirección: " + direccion);
        console.log("Dirección 2: " + direccion2);
        console.log("País: " + pais);
        console.log("Ciudad: " + ciudad);
        console.log("Código Postal: " + codigoPostal);
        console.log("Método de Pago: " + pago);
        console.log("Nombre de la Tarjeta: " + nomtarjeta);
        console.log("Número de Tarjeta: " + numtarjeta);
        console.log("Fecha de Expiración: " + expiracion);
        console.log("Código de Seguridad: " + cvv);

        // Redirect after successful submission
        window.location.href = "index.html";
    });
});
