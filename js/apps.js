let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    label.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});


function validar(){
  var nombre, correo, asunto;

  nombre = document.getElementById("nombre").value;
  correo = document.getElementById("correo").value;
  asunto = document.getElementById("asunto").value;
  
  expresion=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if(nombre==="" || correo==="" || asunto===""){
    alert ("Todos los campos son obligatorios");
    return false;
  }else if(nombre.length>30){
    alert ("Nombre extenso");
    return false;
  }else if(correo.length>100){
    alert ("Correo extenso");
    return false;
  }else if(asunto.length>250){
    alert ("Asunto extenso");
    return false;
  }else if(!expresion.test(correo)){
    alert ("Email invalido")
    return false;
  }

}