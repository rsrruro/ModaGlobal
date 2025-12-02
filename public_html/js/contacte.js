document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('contactoForm');

    formulario.addEventListener('submit', function(evento) {

        evento.preventDefault();

        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const missatge = document.getElementById('missatge').value;

        console.log('--- Datos del Formulario ---');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        alert('¡Formulario enviado con éxito! Revisa la consola para ver los datos.');

        formulario.reset();
    });
});

