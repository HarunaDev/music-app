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
  audio.play()
}

// pause song function
function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  audio.pause()
}

// prev song function
function prevSong() {
  songIndex--

  if(songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])
  playSong()
}

// next song function
function nextSong() {
  songIndex++

  if(songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])
  playSong()
}

// update progress function 
function updateProgress(e) {
// console.log(e.srcElement.currentTime)
const {duration, currentTime} = e.srcElement
const progressPercent = (currentTime / duration) * 100
progress.style.width = `${progressPercent}%`
}

// set progress function
function setProgress(e) {
  const width = this.clientWidth 
  // console.log(width)
  const clickX = e.offsetX
  // console.log(clickX)
  // grab duration
  const duration = audio.duration

// set audio time to point clicked in progress bar
  audio.currentTime = (clickX / width) * duration
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

// change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)