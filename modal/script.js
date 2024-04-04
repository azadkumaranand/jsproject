const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close-btn');


modalBtn.addEventListener('click', ()=>{
    // modal.style.opacity = 1;
    modal.classList.remove('modal');
    modal.classList.add('modal2');
});

closeBtn.addEventListener('click', ()=>{
    // modal.style.opacity = 0;
    modal.classList.add('modal');
    modal.classList.remove('modal2');
})