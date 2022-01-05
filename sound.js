/* Songs  navigation start 14.12.2021 */
let currentSoung = 0

const Music = document.querySelector('#audio-source')
const volumeProgress = document.querySelector('.volume-progress')
const songName = document.querySelector('.songs-name')
const playBtn = document.querySelectorAll('.sound_png')
const icon = document.querySelector('.sound_png img')
const songSeekBar = document.querySelector('.song-seek-bar')
const songRepeat = document.querySelector('.repeat')

/* play click event function */
playBtn.forEach(element => {
    element.addEventListener('click', function () {
        Playlist()
    })
});

function Playlist() {
    const testActive = icon.classList.contains('active')
    console.log(testActive);
    if (testActive) {
        Music.pause()
        icon.classList.remove('active')
        playBtn.innerHTML = `
        <img class="play-songs " src="./assets/images/icon/images/—Pngtree—start-and-play-icons.png" alt="" />
        `
        console.log('Qo`shiq to`xtadi');
    } else {
        playBtn.innerHTML = `
        <img class="play-songs active" src="./assets/images/icon/images/—Pngtree—start-and-pause-icons_5468929_05.png" alt="">
        `
        Music.play()
        icon.classList.add('active')
        console.log('Qo`shiq qo`yildi');
        Music.addEventListener('ended', () => {
            console.log('Qaytarish funksiyasi ishlamoqda');
            playBtn.innerHTML = `
            <img class="play-songs active" src="./assets/images/icon/images/—Pngtree—start-and-pause-icons_5468929_05.png" alt="">
            `
            Music.play()
        })
    }
}

const setSong = (i) => {
    // songSeekBar.value = 0;
    console.log(i);
    let song = songs[i];
    songName.innerHTML = song.name
    currentSoung = i;

    Music.src = song.path


    // setTimeout(() => {
    //     songSeekBar.max = Music.duration
    // }, 300)
}
for (var i = 0; i <= setSong.length; i++) {
    console.log(setSong);
}

// format duration

// const formatTime = (time) => {
//     let min = Math.floor(time / 60)
//     if (min < 10) {
//         min = `0` + min
//     }

//     let sec = Math.floor(time % 60)
//     if (sec < 10) {
//         sec = `0` + sec
//     }

//     return `${min}: ${sec}`
// }



volumeProgress.addEventListener('input', () => {
    Music.volume = volumeProgress.value
})