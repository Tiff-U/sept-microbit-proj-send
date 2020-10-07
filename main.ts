radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("Temp", input.temperature())
    basic.showNumber(input.temperature())
    basic.pause(100)
    radio.sendValue("Light", input.lightLevel())
    basic.pause(100)
})
