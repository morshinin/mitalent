// Video controls
const video = document.querySelector('.slider__video')
// create play button
const playBtn = document.querySelector('.slider__play-btn')

playBtn.addEventListener('click', e => {
	e.preventDefault()

	if (video.paused == true) {
		video.play()
	} else {
		video.pause()
	}
})