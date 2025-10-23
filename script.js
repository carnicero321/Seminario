const formulario = document.querySelector("#contacto")

if (formulario) {
    formulario.addEventListener("submit",
        (event) => {
            event.preventDefault()
            alert("Formulario enviado")
            const nombre = document.getElementById("name").value;
            const numero = document.getElementById("cell").value;
            const email = document.getElementById("email").value;
            const nacionalidad = document.getElementById("nacionalidad").value;

            console.log("Nombre:", nombre);
            console.log("Número de celular:", numero);
            console.log("Email:", email);
            console.log("Nacionalidad:", nacionalidad);

            alert(`Gracias ${nombre}\ntu  correo es: ${email}\nsos de: ${nacionalidad}`);
        })
}else{
    console.log("El formulario no se encontró en el DOM.");
}