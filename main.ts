/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 29 2024
 * This program counts doen from 0 to 4
*/

// Setting the veribles 
let Leds: neopixel.Strip = null
let loopCounter = 0

// Setting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)


// Setting the neopixel
Leds= neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Setting the lights 
Leds.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
Leds.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
Leds.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
Leds.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
Leds.show()

input.onButtonPressed(Button.A,function(){
    basic.clearScreen()
    loopCounter = 0 

})