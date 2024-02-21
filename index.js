const text = document.querySelector('#input1');
const addB = document.querySelector('#add');
const ul = document.querySelector('#content');
const p = document.querySelector('p');

let tasks = [];
let str;
addB.addEventListener('click',()=>{
    if((text.value === '') || (text.value === ' '))
        alert("Invalid input");
    else{
        const li = document.createElement('li');
        li.textContent = text.value;
        ul.append(li);
        const span = document.createElement('span');
        span.textContent='\u00d7';
        li.append(span);
        tasks.push(text.value); //maintaining an array to count the total number of tasks.
        console.log(tasks);
        foot();
    }
    text.value='';
})
ul.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        let item = e.target.parentElement;
        item.remove();
        str = item.textContent.substring(0,item.textContent.length-1); //removing last x of span from the text content.
        for(let i=0;i<tasks.length;i++){
            if(tasks[i]=== str){
                tasks.splice(i,1); //removing completed task from the array.
                break;
            }
        }
        foot();
    }
},false)

function foot(){
    p.textContent = `Total Tasks : ${tasks.length}`;
}