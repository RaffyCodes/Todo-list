(function(){   

  //declaring our variables for the todo list application
    const button = document.getElementById("todo-btn");
    const todoList = document.getElementById("todo-ul");
    var removeItem = document.getElementsByClassName("fas fa-trash-alt")

    
    //Clear input box when it's on focus  
document.getElementById("todo-input").onfocus = function() {clearFunction()};

function clearFunction() {
  document.getElementById("todo-input").value = "";
}

    //adding Event Listener to <i> trash can icon to remove a todo item from the list dynamically as well as it's parent <li> element, wrapped in a function
function indexTodos(){
  for (let i = 0; i < removeItem.length; i++) {
  removeItem[i].addEventListener('click', (event) => {
    event.target.parentNode.remove();
});
}   //end of for loop
}
    // call the function to index existing <li> elements
indexTodos();


    //adding Event Listener to the button and creating the addTodo function to run and append a new todo <li> item with the correct class to the list
button.addEventListener('click',function(addTodo) {
    var addItem = document.createElement("li");
    var addIcon = document.createElement("i")
    addTodo.preventDefault()
    todo = document.getElementById("todo-input").value;
    addItem.appendChild(document.createTextNode(todo));
    todoList.appendChild(addItem);
    addItem.appendChild(addIcon);
    addItem.className = "list-group-item";
    addIcon.className = "fas fa-trash-alt";
    

    
  
  //call the index function again for every new item added to the list so it can update it's index of <li> items 
indexTodos();

})

} 
)();
