var todoList = require ('../data/todos'); 


module.exports = {
    index,
    create
}; 

function index(req,res){
    res.render('index',{
        title: 'Unit 2 Assesment',
        todos: todoList.getAll()
    });
}

function create(req,res){
    req.body.done = false; 
    todoList.create(req.body);
    console.log(req.body)
    res.redirect('/');
}