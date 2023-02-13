let Hunger = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # # # . .
        . . . . .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . # # #
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # . . . #
        . . . . .
        `)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 225)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Hunger >= 5) {
        basic.showString("Full!")
    } else {
        Hunger += 1
    }
})
basic.forever(function () {
    if (Hunger == 0) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 225)
        }
        led.setBrightness(0)
    }
    if (input.temperature() < 16) {
        basic.showString("Brr!")
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        . . . . .
        `)
})
loops.everyInterval(3600000, function () {
    Hunger += Hunger - 1
})
