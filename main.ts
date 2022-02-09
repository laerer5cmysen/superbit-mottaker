radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
        bitbot.setLedColor(0x80FF00)
        bitbot.goms(BBDirection.Forward, 60, 500)
    } else if (receivedNumber == 1) {
        bitbot.setLedColor(0x00FFFF)
        basic.showNumber(1)
        bitbot.goms(BBDirection.Reverse, 60, 500)
    } else if (receivedNumber == 2) {
        bitbot.setLedColor(0x0000FF)
        basic.showNumber(2)
        bitbot.rotatems(BBRobotDirection.Right, 30, 400)
    } else if (receivedNumber == 3) {
        bitbot.setLedColor(0xFF00FF)
        basic.showNumber(3)
        bitbot.rotatems(BBRobotDirection.Left, 30, 400)
    } else if (receivedNumber == 4) {
        bitbot.setLedColor(0xFFFFFF)
        basic.showNumber(4)
        bitbot.bbSetServo(BBServos.P1, 60)
        bitbot.bbSetServo(BBServos.P2, 120)
    } else if (receivedNumber == 5) {
        bitbot.setLedColor(0xFFFF00)
        basic.showNumber(5)
        bitbot.bbSetServo(BBServos.P1, 120)
        bitbot.bbSetServo(BBServos.P2, 60)
    } else if (receivedNumber == 6) {
        bitbot.setLedColor(0x00FF00)
        basic.showNumber(6)
        bitbot.bbSetServo(BBServos.P1, 90)
        bitbot.bbSetServo(BBServos.P1, 90)
    }
})
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
