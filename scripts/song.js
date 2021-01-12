printSongs();
document.querySelectorAll('.close').forEach(song => {
    song.addEventListener('click', function(ev) {
        var songs = JSON.parse(localStorage.getItem("songs"));
        var id = ev.target.id;
        songs = songs.filter(item => item.id != id);
        localStorage.setItem("songs", JSON.stringify(songs));
        location.reload();
    }, false);
});

function printSongs() {
    var text = "";
    var songs = JSON.parse(localStorage.getItem("songs"));
    if (songs == null) {
        return false;
    }
    for (i = 0; i < songs.length; i++) {    
        var song = songs[i];
        text += "<li class='song-container'><div class='close' id='" + song.id + "'" + ">\u00D7</div><h4>" + song.name + "</h4><p>" + song.artist + "</p></li>";
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


function songSubmit() {
    var name = document.getElementById("song-name").value;
    if (name == null || name == "") {
        alert("Song name must be filled out!")
        return false;
    }
    saveSong();
    return true;
}

function saveSong() {
    var songs = JSON.parse(localStorage.getItem("songs"));
    if (songs == null) {
        songs = [];
    }
    var song = {
        "id": Math.floor(Math.random() * 10000000),
        "name": document.getElementById("song-name").value,
        "artist": document.getElementById("song-artist").value,
    };
    songs.push(song);
    console.log(songs);
    localStorage.setItem("songs", JSON.stringify(songs));
}