function clasificar() {

    let nombre = document.getElementById("nombre").value;
    let colaboradores = Number(document.getElementById("colaboradores").value);
    let capital = document.getElementById("capital").value;
    let fines_lucro = document.getElementById("fines_lucro").value;

    let categoria;

    if (colaboradores <= 10) {
        categoria = "Microempresa";
    } 
    else if (colaboradores <= 50) {
        categoria = "Pequeña empresa";
    } 
    else if (colaboradores <= 250) {
        categoria = "Mediana empresa";
    } 
    else {
        categoria = "Gran empresa";
    }

    document.getElementById("resultado").innerHTML =
        "Empresa: " + nombre + "<br>" +
        "Cantidad de colaboradores: " + colaboradores + "<br>" +
        "Origen del capital: " + capital + "<br>" +
        "Finalidad: " + finalidad + "<br>" +
        "Categoría: " + categoria;
}