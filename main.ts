radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.goms(BBDirection.Forward, 60, 1000)
    } else if (receivedNumber == 1) {
        bitbot.goms(BBDirection.Reverse, 60, 500)
    } else if (receivedNumber == 2) {
        bitbot.rotatems(BBRobotDirection.Right, 30, 400)
    } else if (receivedNumber == 3) {
        bitbot.rotatems(BBRobotDirection.Left, 30, 400)
    } else if (receivedNumber == 4) {
        bitbot.bbSetServo(BBServos.P1, 0)
        bitbot.bbSetServo(BBServos.P2, 180)
    } else if (receivedNumber == 5) {
        bitbot.bbSetServo(BBServos.P1, 180)
        bitbot.bbSetServo(BBServos.P2, 0)
    } else if (receivedNumber == 6) {
        bitbot.bbSetServo(BBServos.P1, 90)
        bitbot.bbSetServo(BBServos.P1, 90)
    }
})
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
