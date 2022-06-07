basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )))
})
