const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const image = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEL = document.getElementById('current-time');
const durationEL = document.getElementById('duration');

const songs = [
    {
        name : 'jacinto-1',
        displayName : 'Electric Chill Machine',
        artist : 'Jacinto Design'
    },
    {
        name : 'jacinto-2',
        displayName : 'Seven Nation Army(Remix)',
        artist : 'Jacinto Design'
    },
    {
        name : 'jacinto-3',
        displayName : 'Good night, Queen',
        artist : 'Jacinto Design'
    },
    {
        name : 'metric-1',
        displayName : 'front Row(Remix)',
        artist : 'Metric/Jacinto Design'
    }
];

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

//load song

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

loadSong(songs[songIndex]);

//prev song
function preSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length-1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    songPlay();
}

//next song
function nextSong(){
    songIndex++;
    if (songIndex > songs.length-1){
        songIndex = 0;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    songPlay();
}

function updateProgressBar(e){
    const {duration, currentTime} = e.srcElement;
    let progressPercent = currentTime/duration*100;
    progress.style.width = `${progressPercent}%`;

    //song duration
    //duration in minuts
    let durationMinuts = Math.floor(duration / 60);
    // duration in secound =
    let durationSecound = Math.floor(duration % 60);

    if (durationSecound < 10){
        durationSecound = `0${durationSecound}`;
    }
    if (duration){
        durationEL.textContent = `${durationMinuts}:${durationSecound}`;
    }

    ///song current duration
    let currentMinuts = Math.floor(currentTime / 60);
    // duration in secound =
    let currentSecound = Math.floor(currentTime % 60);

    if (currentSecound < 10){
        currentSecound = `0${currentSecound}`;
    }
    if (currentTime){
        currentTimeEL.textContent = `${currentMinuts}:${currentSecound}`;
    }

}
//set progress bar

function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}



//event listners
prevBtn.addEventListener('click', preSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate',updateProgressBar);
progressContainer.addEventListener('click',setProgressBar);