const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 과 같은 방법!
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];  //빈 배열을 만들어 주고 let으로 바꾼 이유는 form을 submit할 때만다 새로고침 후 배열을 빈값으로 만듬

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 출력 type : string
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //우리가 원하는 li.id 빼고 새로운 배열 만들기. 원본배열은 그대로 남아있음!
    //input값은 String
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    saveToDos(); // 다시 localStorage에 업로드 해주기
}

function paintToDo(newTodo) {

    //html ul태그 안에 js에서 만든 li태그(리스트)넣기
    //createElement로 li / span 만들어 주고 appendChild로 html에 객체 추가하기
    //<li>안에 다시<span>으로 리스트를 만드는 이유는 toDo를 삭제하는 Button을 만들 때 어떤 li인지 알기 위해!
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "☑️";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    li.appendChild(span);  //span을 li안에 넣음
    toDoList.appendChild(li); //li를 toDoList안에 넣음

}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;  //<--input의 현재 값을 새로운 변수에 복사하고
    toDoInput.value = "";             //<--js 순차적 진행을 통해 input안에 값을 빈칸으로 해줌
    //newTodo = "";이렇게 할수 없음 상수는 값변경 불가 but, 상수의 내용은 추가, 수정, 삭제 가능 
    //object와 property를 잘 이해해야함!

    //배열을 id를 부여받은 objext로 만들기 위해 
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObject); //localStorage에 newTodo값을 저장하기 위해! <-현재 toDos는 빈배열
    paintToDo(newTodoObject);
    saveToDos(); //toDos array를 localStorage에 저장하는 함수실행
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에 저장한 값을 화면에 불러옴
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);  // JSON.parse() -> 배열로 변환
    toDos = parsedToDos;  // 전에 있던 parsedToDos 복원
    parsedToDos.forEach(paintToDo); //forEach() : 배열안에 있는 각 값에 대해 function을 실행
}
