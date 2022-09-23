basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 550) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(1)
    } else if (pins.analogReadPin(AnalogPin.P1) > 550) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showNumber(2)
    }
})
