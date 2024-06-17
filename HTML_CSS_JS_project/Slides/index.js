let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click',()=>{
    let items = document.querySelectorAll('.items');
    document.querySelector('.slides').appendChild(items[0]);
});

prev.addEventListener('click',()=>{
    let items = document.querySelectorAll('.items');
    document.querySelector('.slides').prepend(items[items.length -1]);
})