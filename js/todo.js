const todoClass = document.querySelector('.todo');
const ul = document.querySelector('.todo ul');
const btn2 = document.querySelector('.todo button');

let inputValue = [];
function getTodoValue(e){
    e.preventDefault();
    
    let id = new Date().getMilliseconds();
    inputValue.push({"todo": frm2.todoList.value, "id": id});
    localStorage.setItem("todo", JSON.stringify(inputValue));
    let li = document.createElement('li');
    ul.appendChild(li);
    //li.classList.add('id');
    li.setAttribute('id', id);
    li.innerText = `${frm2.todoList.value}`;
    let btn3 = document.createElement('button');
    li.appendChild(btn3);
    btn3.innerHTML = `<button style="color:red;" onclick=delTodo(${id});>X</button>`;               
}

function getTodoList(){
    let todoList2 = JSON.parse(localStorage.getItem("todo"));
    if(todoList2 != null)
    todoList2.forEach(element => {
        let li = document.createElement('li');
        ul.appendChild(li);
        //li.classList.add('id');
        li.setAttribute('id', element.id);
        li.innerText = element.todo;
        let btn3 = document.createElement('button');
        li.appendChild(btn3);
        btn3.innerHTML = `<button style="color:red;" onclick=delTodo(${element.id});>X</button>`;               
    });    
}


function delTodo(id){
let delLi = document.getElementById(id);
    delLi.remove();
    let todoLocal = JSON.parse(localStorage.getItem("todo"));
    for(var i = 0; i < todoLocal.length; i++){
            if(id == todoLocal[i].id){
                todoLocal.splice(i, 1);
                localStorage.setItem("todo", JSON.stringify(todoLocal));
            }
            
    }
}

getTodoList();
btn2.addEventListener("click", getTodoValue);
