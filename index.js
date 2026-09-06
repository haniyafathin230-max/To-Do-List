let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
DisplayTasks();

function addTasks(){
    let input = document.querySelector('#input');
    let inputDate = document.querySelector('#to-do-date');
    let itemElements = input.value;
    let date = inputDate.value.split('-').reverse().join('/');
    toDoList.push({item : itemElements,dueDate : date});
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    input.value = '';
    inputDate.value = '';
    DisplayTasks();
}

function DisplayTasks(){
    let Displayitems = document.querySelector('.container');
    let newHTML ='';

    for(let i=0;i<toDoList.length;i++){
        let{item,dueDate} = toDoList[i];
        newHTML += `
       
         <span>${item}</span>
         <span>${dueDate}</span>
         <button class="delete" onclick="toDoList.splice(${i},1);
         localStorage.setItem('toDoList',JSON.stringify(toDoList));
         DisplayTasks();">Remove</button>
       `;
    }
    Displayitems.innerHTML = newHTML;
}