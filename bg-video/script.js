const switchBtn = document.querySelector('.switch');
const video = document.querySelector('#video');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

switchBtn.addEventListener('click', (e)=>{
    if (play.classList.contains('active')) {
        play.classList.remove('active');
        pause.classList.add('active');
        video.pause();
    }else if(pause.classList.contains('active')){
        pause.classList.remove('active');
        play.classList.add('active');
        video.play();
    }
})