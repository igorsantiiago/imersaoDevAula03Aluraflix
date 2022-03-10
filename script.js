
var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMzg0NzYyNDMtZTkxMS00NmYzLWJkMDAtMmNlYTY1MTRmM2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"];

for (var i = 0; i < listaFilmes.length; i++) {
    var listaFilmesInternos = document.querySelector("#listaFilmesInternos")
    console.log(listaFilmesInternos)
    var elementoListaFilmesInternos = "<img src=" + listaFilmes[i] + ">";
    listaFilmesInternos.innerHTML = listaFilmesInternos.innerHTML + elementoListaFilmesInternos;
}

function adicionarFilme() {

    var campoFilmeFavorito = document.querySelector("#filme").value;

    if (campoFilmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(campoFilmeFavorito)
    } else {
        alert("Insira um link válido com arquivo em formato .jpg")
    }

    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector("#listaFilmes")
    console.log(listaFilmes);
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
