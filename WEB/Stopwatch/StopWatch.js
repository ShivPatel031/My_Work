let buttonc = (document.getElementsByClassName("buttonContainer"))[0];
let pat=(document.getElementsByClassName('vtime'))[0];
let sct = (document.getElementsByClassName('stopContainer'))[0];

var count=0;
pat.innerText=count;

buttonc.addEventListener('click',(event)=>{

    let value = event.target.innerText;
    
    switch(value){

        case "Start":
            startCounter();
            break;

        case "Stop":
            stopCounter();
            break;

        case "Reset":
            resetCounter();
            break;

        case "GetTime":
            getCounter();
            break;

        case "Clear":
            clearCounter();
            break;
    }
});

var startWatch =null;
var flag =0;

function startCounter(){

    if (flag ==0){

    count++;
    pat.innerText=count;
    
    startWatch=setInterval(()=>{
        
        count++;
        pat.innerText=count;
        
    },1000);
    flag=1;
    }
    
}

function stopCounter(){
    if(flag==1){
    clearInterval(startWatch);
    flag=0;
    }
}

function resetCounter() {
    count = 0;
    pat.innerText=0;
    stopCounter();
    flag=0;
}

function getCounter(){

    let val="Stop at "+pat.innerText;
    let npt = document.createElement('p');
    npt.innerText=val;
    npt.classList.add('stopContainerText');

    sct.appendChild(npt);


}

function clearCounter(){
    let containerData = document.getElementsByClassName('stopContainerText');
    for(let n=containerData.length-1;n>=0;n--){
        containerData[n].remove();
    }
}