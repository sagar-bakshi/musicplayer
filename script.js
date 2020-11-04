const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const image = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');

let isPlaying = false;

//play
function songPlay()
{   isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();
}

//pause
function songPause() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play');
    music.pause();
}

//event listner
playBtn.addEventListener('click',()=> (isPlaying ? songPause() : songPlay()));