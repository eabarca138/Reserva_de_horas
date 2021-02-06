const validar = () => {
  let rut = document.getElementById("rut").value;
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;
  let correo = document.getElementById("email").value;
  let fecha = document.getElementById("fecha").value;
  let especialidad = document.getElementById("especialidad").value;
  let hora = document.getElementById("hora").value;
  let reservar = document.getElementById("reservar");

  expCorreo = /\w+@\w+\.+[a-z]/;
  expRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
  expLetras = /^[A-Z]+$/i;
  expFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

  const reservaExitosa = () => {
    alert(`Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita.
Gracias por preferirnos.`);
  };

  if (rut === "" || nombres === "" || apellidos === "" || edad === "" || correo === "" || fecha === "" || especialidad === "" || hora === "") {
    alert("Todos los campos son obligatorios");
    return false;

  } else if (!expRut.test(rut)) {
    alert("Ingrese Rut con puntos y guión");
    return false;

  } else if (!expLetras.test(nombres)) {
    alert("El campo Nombres solo acepta letras");
    return false;

  } else if (!expLetras.test(apellidos)) {
    alert("El campo Apellidos solo acepta letras");
    return false;

  } else if (isNaN(edad)) {
    alert("El campo Edad solo acepta números");
    return false;

  } else if (!expCorreo.test(correo)) {
    alert("Formato de Email incorrecto");
    return false;

  } else if (!expFecha.test(fecha)) {
    alert("Formato de fecha incorrecto");
    return false;

  } else {
    reservaExitosa();
  }
};
