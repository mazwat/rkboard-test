//  Basic toggle switch that activates digital pins. Used to test the rkeducation breakout board for Microbit
let Abutton = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Abutton) {
        Abutton = 0
    } else {
        Abutton = 1
    }
    
})
basic.forever(function on_forever() {
    if (Abutton) {
        pins.digitalWritePin(DigitalPin.P9, 1)
        images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        `).showImage(0)
    } else {
        images.createImage(`
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `).showImage(0)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
    
})
