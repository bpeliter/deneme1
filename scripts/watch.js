printMovies();
document.querySelectorAll('.close').forEach(movie => {
    movie.addEventListener('click', function(ev) {
        var movies = JSON.parse(localStorage.getItem("movies"));
        var id = ev.target.id;
        movies = movies.filter(item => item.id != id);
        localStorage.setItem("movies", JSON.stringify(movies));
        location.reload();
    }, false);
});

function printMovies() {
    var text = "";
    var movies = JSON.parse(localStorage.getItem("movies"));
    if (movies == null) {
        return false;
    }
    for (i = 0; i < movies.length; i++) {    
        var movie = movies[i];
        //change text
        text += "<li class='movie-container'><div class='close' id='" + movie.id + "'" + ">\u00D7</div><h4>" + movie.name + "</h4><p>" +"Director name: " + movie.director + "</p><p>"+"Genre: " + movie.genre +"</p><p>"+"Description: " + movie.content +"</p><p>"+ "Year: " + movie.year +"</p><p>"+ "Rate: " + movie.rate +"</p></li>";
        
    }
    document.getElementById("myUL").innerHTML = text;
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function movieSubmit() {
    var name = document.getElementById("movie-name").value;
    if (name == null || name == "") {
        alert("Movie name must be filled out!")
        return false;
    }
    saveMovie();
    return true;
}

function saveMovie() {
    var movies = JSON.parse(localStorage.getItem("movies"));
    if (movies == null) {
        movies = [];
    }
    var movie = {
        "id": Math.floor(Math.random() * 10000000),
        "name": document.getElementById("movie-name").value,
        "director": document.getElementById("director-name").value,
        "genre": document.getElementById("movie-genre").value,
        "content": document.getElementById("movie-content").value,
        "year": document.getElementById("movie-year").value,
        "rate": document.getElementById("movie-rate").value
    };
    movies.push(movie);
    console.log(movies);
    localStorage.setItem("movies", JSON.stringify(movies));
}
