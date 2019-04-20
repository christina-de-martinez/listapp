// Select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("typeditem");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "linethrough";

// Variables
let LIST = []
  , id = 0;

// Show today's dateElement
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to-do function
function addTodo(todo, id, done, trash){

  if (trash){ return; }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `<li class="item">
                  <i class="far ${DONE}" job="complete" id="${id}"></i>
                  <p class="text ${LINE}"> ${todo} </p>
                  <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
  console.log('Item added to the list')
}

$('#typeditem').on('input', function() {
console.log('New text added');
});


// Add the item to the list when the user hits enter
document.addEventListener("keyup", function(event){
  if (event.keyCode == 13){
    console.log('Enter key pressed')
    console.log(input.value);
    const todo = input.value;
    // Check whether the input is empty
//    if (todo){
      addTodo(todo, id, false, false);

      LIST.push({
        name: todo,
        id: id,
        done: false,
        trash: false
      });
      console.log('LIST function ran');
      id++;
//    }
//    input.value = "";
  }
});

document.getElementById("button-submit").addEventListener('click',function(){
  console.log('Button clicked');
})

// addTodo("Coffee", 1, false, false);
// addTodo("Something else", 2, false, false);



  /*
  if (event.keyCode == 13){
    const todo = input.value;

    // Check whether the input is empty
    if (todo){
      addTodo(todo);
    }
  }
  */

/*

function addTodo(todo, id, done, trash){

if(trash){return};

const COMPLETED = done ? CHECK:UNCHECK;
const STRIKETHROUGH = done ? LINE_THROUGH: "";

const text = `<li class="item">
                <i class="far ${COMPLETED}" job="complete" id="${id}"></i>
                <p class="text ${STRIKETHROUGH}"> ${todo} </p>
                <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
              </li>`

const position = "beforeend";

list.insertAdjacentHTML(position, text);

localStorage.setItem("TODO", JSON.stringify(LIST));
let data = localStorage.getItem("TODO");
if (data){
  LIST = JSON.parse(data);
  loadTodo(LIST);
  id = LIST.length;
} else {
  LIST = [];
  id = 0;
}

function loadTodo(array){
  array.forEach(function(item){
    addTodo(item.name, item.id, item.done, item.trash);
  })
}
}












clear.addEventListener('mouseOver',function(){
  $(this).addClass('swing');
})
clear.addEventListener('click',function(){
  localStorage.clear();
  location.reload();
});







let LIST = [];
let id = 0;



document.addEventListener("keyup",function(event){
  if (event.keyCode == 13){
    const todo = christina.value;
    if (todo){
      addTodo(todo,id,false,false);
      LIST.push(
        {
          name: todo,
          id: id,
          done: false,
          trash: false
        }
      );
      input.value = "";
      id++;
    }
  }
});

function completeTodo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done ? false : true;
}

function removeTodo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
  list.addEventListener("click", function(event){
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;
    if (elementJOB == "complete") {
      completeTodo(element);
    } else if (elementJOB == "delete"){
      removeTodo(element);
    }
  });
}

*/
