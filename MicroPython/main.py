"""
Created by: Emre Guzel
Created on: Oct 29 2024 
This module is a Micro:bit MicroPython program counts dwon from 4 to 0
"""

from microbit import *
import neopixel

# Setting the loop_counter varible
loop_counter = 0

# Setting up the screen
display.clear()
display.show(Image.HAPPY)

# Setting up the LEDs
leds = neopixel.NeoPixel(pin16, 4)
leds[0] = (0, 0, 0)
leds[1] = (0, 0, 0)
leds[2] = (0, 0, 0)
leds[3]  =(0, 0, 0)
leds.show()

# Setting a button
while True:
    if button_a.is_pressed():
        display.clear()
        loop_counter = 4
        # Setting the loop counter 
        while loop_counter >= 0:
            leds[0] = (0, 0, 0)
            leds[1] = (0, 0, 0)
            leds[2] = (0, 0, 0)
            leds[3] = (0, 0, 0)
            
            if loop_counter >0:
                leds[0] = (255, 215, 0)
            
            if loop_counter >1:
                leds[1] = (218, 112, 114)
            
            if loop_counter >2:
                leds[2] = (0, 255, 0)
            
            if loop_counter >3:
                leds[3] = (224, 255, 255)
        
            leds.show()
            display.show(loop_counter)
                
            loop_counter -= 1
            sleep(1000)    
