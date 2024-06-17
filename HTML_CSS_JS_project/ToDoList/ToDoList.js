// get necessary tag
let userinput = document.getElementById('userinput');
let addaction = document.getElementById('addaction');
let addcontainer = document.getElementsByClassName('addcontainer')[0];

//load data
var ld=JSON.parse(localStorage.getItem('ld'));

//check if data exist or not if not then create
if (ld == null){

    let localData = {data:[]};
    let jsonstring = JSON.stringify(localData);
    localStorage.setItem("ld",jsonstring);
    var ld=JSON.parse(localStorage.getItem('ld'));
}
// localStorage.removeItem('ld');

//load data
function loadData(){
    
    for ( let value of ld.data){
        additems(value);
    } 
}
loadData();

//add in list container
function additems(value){

    let lit = document.createElement('li');
    let divt = document.createElement('div');
    let pt = document.createElement('p');
    let buttont = document.createElement('button');

    pt.innerText=value;

    buttont.innerText="Delete";
    buttont.classList.add("deletebutton");

    divt.appendChild(pt);
    divt.appendChild(buttont);
    divt.classList.add('ToDoitems');

    lit.appendChild(divt);

    addcontainer.append(lit);

}


//store data
function saveData(ld){

    let jsonstring = JSON.stringify(ld);
    localStorage.setItem("ld",jsonstring);

}

//add button event
addaction.addEventListener("click",()=>{

    ld.data.push(userinput.value);

    additems(userinput.value);

    userinput.value="";

    saveData(ld);
   
});

//delete button event
addcontainer.addEventListener('click',(event)=>{

    let i =ld.data.indexOf(event.target.previousSibling.innerText);
    ld.data.splice(i,1);

    saveData(ld);

    event.target.parentElement.parentElement.remove();

});


