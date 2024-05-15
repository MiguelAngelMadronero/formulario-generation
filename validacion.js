document
  .getElementById('form')
  .addEventListener('submit', function (event) {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    // var hojaVida = document.getElementById('hoja_vida').files[0];
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Teléfono:', telefono);
    console.log('Mensaje: ', mensaje);
    console.log('Asunto: ', asunto);
  });