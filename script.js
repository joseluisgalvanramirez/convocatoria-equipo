document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    alert("Gracias " + nombre + ", tu CV fue enviado correctamente.");

    document.getElementById("formulario").reset();

    // Archivo listo para futuras funcionalidades
    console.log("Página cargada correctamente");
});
