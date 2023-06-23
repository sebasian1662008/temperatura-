input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 1; index++) {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 C5 ", 251), music.PlaybackMode.UntilDone)
    }
})
let termometro = 100
termometro += 100
basic.showNumber(input.temperature())
