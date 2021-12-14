/* Songs  navigation start 14.12.2021 */
let currentSoung = 0

const song = document.querySelector('#audio-source')
const volumeProgress = document.querySelector('.volume-progress')
const songName = document.querySelector('.songs-name')
const playBtn = document.querySelector('.sound_png')
const icon = document.querySelector('.sound_png img')
// const pauseIcon = document.querySelector('.pause-songs')

/* play click event function */
playBtn.addEventListener('click', () => {
    const testActive = icon.classList.contains('active')
    console.log(testActive);
    if (testActive) {
        icon.classList.remove('active')
        playBtn.innerHTML = `
        <img class="play-songs " src="./assets/images/icon/images/—Pngtree—start-and-play-icons.png" alt="" />
        `
    } else {
        playBtn.innerHTML = `
        <img class="play-songs active" src="./assets/images/icon/images/—Pngtree—start-and-pause-icons_5468929_05.png" alt="">
        `
        icon.classList.add('active')
    }
})