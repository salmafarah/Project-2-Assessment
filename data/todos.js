const todolist = []; 

module.exports = {
    create,
    getAll
}

function getAll(){
    return todolist; 
}

function create(todo) {
    todolist.push(todo);
  }