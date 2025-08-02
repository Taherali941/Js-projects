let count = 0;
let inc = document.getElementById('inc-btn');
let dec = document.getElementById('dec-btn');
let reset = document.getElementById('reset-btn');

inc.addEventListener('click',function(){
    count++;
    document.getElementById('value').textContent = count;
})

dec.addEventListener('click',function(){
    count--;
    document.getElementById('value').textContent = count;
})
reset.addEventListener('click',function(){
    document.body.style.backgroundColor ;
    count=0;
    document.getElementById('value').textContent = count;
})