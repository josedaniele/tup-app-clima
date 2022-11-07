

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('gVV-1kJhrETQYpHg8');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        let $cargando = document.getElementById("carga");
        $cargando.style.display = 'block'
        setTimeout(() => {
            $cargando.style.display= "none";
          }, 2000)

        emailjs.sendForm('service_bh4khip', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("alerta1").style.display= "block";
          setTimeout(() => {
            document.getElementById("alerta1").style.display= "none";
          }, 2000)
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}