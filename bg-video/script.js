const switchBtn = document.querySelector('.switch');
const video = document.querySelector('#video');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const active = document.querySelector('.active');


//making slide button using background color change

// switchBtn.addEventListener('click', (e)=>{
//     if (play.classList.contains('active')) {
//         play.classList.remove('active');
//         pause.classList.add('active');
//         video.pause();
//     }else if(pause.classList.contains('active')){
//         pause.classList.remove('active');
//         play.classList.add('active');
//         video.play();
//     }
// })

//slide button

switchBtn.addEventListener("click", ()=>{
    if (play.classList.contains('action')) {
        play.classList.remove('action');
        pause.classList.add('action');
        active.style.transform = 'translateX(50px)';
        video.pause();
    }else if(pause.classList.contains('action')){
        pause.classList.remove('action');
        play.classList.add('action');
        active.style.transform = 'translateX(0px)';
        video.play();
    }
})