// grab dom elements
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// song titles array
const songs = ['Heroes', 'Sentimental-Lady', 'Eileen'];

// keep track of songs

let songIndex = 2

// initially load songs into dom
loadSong(songs[songIndex]);


// update song details
function loadSong(song) {
  title.innerText = song 
  audio.src = `music/${song}.m4a`;
  cover.src = `img/${song}.png`;
}

// play song function
function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
}

// pause song function
function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
}

// event listeners
playBtn.addEventListener('click', () => {
  // check if music  container has class of play
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})