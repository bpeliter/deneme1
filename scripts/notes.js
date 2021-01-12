printNotes();
document.querySelectorAll('.delete').forEach(note => {
    note.addEventListener('click', function(ev) {
        var notes = JSON.parse(localStorage.getItem("notes"));
        var id = ev.target.id;
        notes = notes.filter(item => item.id != id);
        localStorage.setItem("notes", JSON.stringify(notes));
        location.reload();
    }, false);
});

function printNotes() {
    var text = "";
    var notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null) {
        return false;
    }
    for (i = 0; i < notes.length; i++) {    
        var note = notes[i];
        text += "<div class='note-container'><div class='title'><div class='date'>" + note.date + "</div><div class='delete' id='" + note.id + "'" + ">\u00D7</div></div><h4>" + note.heading + "</h4><hr class='line'><p>" + note.content + "</p></div>";
    }
    document.getElementById("notes-container").innerHTML = text;
}

function noteSubmit() {
    var content = document.getElementById("content").value;
    if (content == null || content == "") {
        alert("Note must be filled out!")
        return false;
    }
    saveNote();
    return true;
}

function saveNote() {
    var notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null) {
        notes = [];
    }
    var note = {
        "id": Math.floor(Math.random() * 10000000),
        "heading": document.getElementById("heading").value,
        "content": document.getElementById("content").value,
        "date": document.getElementById("date").value
    };
    notes.push(note);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
}