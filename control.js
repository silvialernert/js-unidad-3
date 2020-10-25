document.getElementById("btnIngresar").addEventListener("click", function () {
  let msgError = "";
  if ( !document.getElementById('usuario').value.includes("@") )  
    msgError += "El email es incorrecto \n";

  if ( document.getElementById('password').value.length < 1)  
    msgError += "La contraseña no puede estar vacía";

  if(msgError != ""){
    alert(msgError);
  } else {
    alert("Formulario válido");
    document.getElementById("formulario").submit();
  }
});