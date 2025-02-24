function enviarWhatsApp(event) {
    event.preventDefault();
    

    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;


    const mensajeWhatsApp = `FluenceSoft💡 Web\n` +
                          `¡Hola, mucho gusto! Soy: ${nombre}%0A` +
                          `Soy de la empresa: ${empresa}%0A` +
                          `Mi correo electrónico es:${email}%0A` +
                          `Mi celular es:  ${telefono}%0A` +
                          `Mensaje: ${mensaje}`;


    const numeroWhatsApp = '59170799627';

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeWhatsApp}`;

    window.open(urlWhatsApp, '_blank');

    document.getElementById('contactForm').reset();
}