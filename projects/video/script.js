const loader = document.querySelector('#loader');
const switchbox = document.querySelector('.switch');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');

const video = document.querySelector('#video-background');

video.addEventListener('loadeddata', () => {
    console.log("loaded")
    loader.style.display = 'none'; // Hide loader
});

switchbox.addEventListener('click', () => {
    if (play.classList.contains('active')) {
        play.classList.toggle('active');
        pause.classList.toggle('active');
        video.pause();
        console.log("pause");
    } else {
        play.classList.toggle('active');
        pause.classList.toggle('active');
        video.play();
        console.log("play");
    }
});