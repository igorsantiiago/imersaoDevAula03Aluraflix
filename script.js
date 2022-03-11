
var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMzg0NzYyNDMtZTkxMS00NmYzLWJkMDAtMmNlYTY1MTRmM2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"];

var listaFilmesUsuario = [];

for (var i = 0; i < listaFilmes.length; i++) {
    document.getElementById("listaFilmesInternos").innerHTML += "<img src=" + listaFilmes[i] + ">";
}


function imprimeLista() {
    document.getElementById("filmesUsuario").innerHTML = "";
    for (var i = 0; i < listaFilmesUsuario.length; i++) {
        document.getElementById("filmesUsuario").innerHTML += "<img src=" + listaFilmesUsuario[i] + ">";
    }
    

}

function adicionarFilme() {
    URL = document.getElementById("filme").value;
    listaFilmesUsuario.push(URL);
    imprimeLista();
    document.getElementById("filme").value = "";
}

imprimeLista();