let pdt = (document.getElementsByClassName('clock'))[0];
let pat = document.createElement('p');
pat.classList.add('timeview')
pdt.appendChild(pat);

function changeTime(){
    let ctime= (new Date()).toLocaleTimeString();
    pat.innerText=ctime;
}

changeTime();

setInterval(changeTime,1000);
