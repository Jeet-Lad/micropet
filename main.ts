let Hunger = 0
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 225)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
basic.forever(function () {
    basic.showString("Meimu!")
    music.playMelody("E D G F B A C5 B ", 120)
    Hunger = 5
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    if (Hunger == 0) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 225)
        }
    }
})
loops.everyInterval(3600000, function () {
    Hunger += Hunger - 1
})
