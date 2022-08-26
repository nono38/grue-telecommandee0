control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(-100)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(100)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P14, PinEventType.Edge)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
pins.setEvents(DigitalPin.P13, PinEventType.Edge)
basic.forever(function () {
	
})
