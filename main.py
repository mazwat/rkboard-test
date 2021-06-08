# Basic toggle switch that activates digital pins. Used to test the rkeducation breakout board for Microbit
Abutton = 0
def on_button_pressed_a():
    global Abutton
    if Abutton:       
        Abutton = 0
    else :
        Abutton = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if Abutton:
        pins.digital_write_pin(DigitalPin.P9, 1)
        images.create_image("""
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        """).show_image(0)
    else:
        images.create_image("""
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        """).show_image(0)
        pins.digital_write_pin(DigitalPin.P9, 0)
basic.forever(on_forever)