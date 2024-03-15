const value = document.querySelector('.value');

const reset = document.querySelector('.reset');
const dec = document.querySelector('.dec');
const inc = document.querySelector('.inc');

let val = 0;

inc.addEventListener('click', function(){
    // val = val + 1;
    val += 1;
    value.innerText = val;
})
dec.addEventListener('click', function(){
    // val = val + 1;
    val -= 1;
    value.innerText = val;
})

reset.addEventListener('click', function(){
    val = 0;
    value.innerText = val;
})

