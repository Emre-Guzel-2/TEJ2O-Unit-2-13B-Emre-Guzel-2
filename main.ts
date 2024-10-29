/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 29 2024
 * This program counts dwon from 0 to 4
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
    loopCounter = 4 
    // Setting the loop 
    while (loopCounter >= 0 ){
        Leds.setPixelColor(0, neopixel.colors(NeoPixelColors.Black));
        Leds.setPixelColor(1, neopixel.colors(NeoPixelColors.Black));
        Leds.setPixelColor(2, neopixel.colors(NeoPixelColors.Black));
        Leds.setPixelColor(3, neopixel.colors(NeoPixelColors.Black));
        if (loopCounter > 0) {
            Leds.setPixelColor(0, neopixel.colors(NeoPixelColors.Green));
        }
        if (loopCounter > 1) {
            Leds.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue));
        }
        if(loopCounter > 2){
            Leds.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple));
        }
        if (loopCounter > 3){
            Leds.setPixelColor(3, neopixel.colors(NeoPixelColors.Red));
        }
        Leds.show()
        basic.showNumber(loopCounter)  
        loopCounter--
        basic.pause(1000)
    }
})
