const todoList= [ 
  {
  name: "make dinner",
  dueDate:"2022-12-22"
},
  {
    name :"read lecture notes",       
  dueDate: '2022-12-22'    
}
];//empty array
renderTodoList();
function renderTodoList () {

  let todoListHTML = '';
  
  todoList.forEach((todoObject, index) => {
   
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    /* using destructuring as the variable name and property name are the same,
    we can write
    const {name, dueDate} =todoObject;
    this takes the name property out of the objects and saves it under the variable name
        */ 
        const html =`
    <div> ${name}</div>
    <div> ${dueDate} </div> 
      <button class= "delete-todo-button js-delete-todo-button">Delete</button>
      `; //generating an HTML
    todoListHTML += html;    
    


  });
  
  
  console.log(todoListHTML);     

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
  document.querySelectorAll ('.js-delete-todo-button')
    .forEach( (deleteButton , index)=> {
      deleteButton.addEventListener ('click', ()=> {
        todoList.splice(index, 1);  
      renderTodoList(); 

      });

    });
}

document.querySelector ('.js-add-todo-button')
.addEventListener('click', ()=>{
  addTodo();  
})

function addTodo(){
 const inputElement = document.querySelector('.js-name-input');   
const name = inputElement.value

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value 

 
todoList.push({name: name,
                dueDate: dueDate
         
});
console.log(todoList);   

//reset textbox when we click add

inputElement.value = '';
//saves the obtained value from the inout into this as another variable on its own  

renderTodoList();


}