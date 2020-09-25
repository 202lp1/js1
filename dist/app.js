
document.getElementById('formTask').addEventListener('submit', hola);

function hola(e) {
    let title = document.getElementsByName('title')[0].value;
    console.log("title="+title);
    document.getElementById("description").innerHTML = "Holaaaa ";
    e.preventDefault();
}

document.getElementById("description").innerHTML = "descripcion ejemplo ";
