
document.getElementById('formTask').addEventListener('submit', hola);

function hola(e) {
    let title = document.getElementById('title').value;
    document.getElementById('title').value="";
    let description = document.getElementById('description').value;
    console.log("title="+title);
    document.getElementById("description").innerHTML = description;
    e.preventDefault();
}

//document.getElementById("description").innerHTML = "hi ";
