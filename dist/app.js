
document.getElementById('formTask').addEventListener('submit', savet);
let tasks = [];
function savet(e) {
    let title = document.getElementById('title').value;
    document.getElementById('title').value = "";
    let description = document.getElementById('description').value;
    document.getElementById('description').value = "";
    console.log("title=" + title);
    //document.getElementById("description").innerHTML = description;

    let task = {
        "title": title,
        "description": description
    };    
    tasks.push(task);
    console.log("tasks=" + JSON.stringify(tasks));
    
    //document.getElementById("tasksv").innerHTML = JSON.stringify(tasks);
    getTasks();
    e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  getTasks();
}

function getTasks() {
  let tasksView = document.getElementById('tasksv');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    //console.log("getTasks.title=" + title);
    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
           <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
   
  }
}

getTasks();