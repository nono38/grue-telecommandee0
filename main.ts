control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MES_DPAD_BUTTON_B_UP, function () {
    radio.sendNumber(0)
    basic.showString("up")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MES_DPAD_BUTTON_A_UP, function () {
    radio.sendNumber(0)
    basic.showString("up")
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MES_DPAD_BUTTON_B_DOWN, function () {
    radio.sendNumber(100)
    basic.showString("down")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MES_DPAD_BUTTON_A_DOWN, function () {
    radio.sendNumber(-100)
    basic.showString("down")
})
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
	
})
