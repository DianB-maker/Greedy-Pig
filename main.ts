input.onButtonPressed(Button.A, function () {
    basic.showString("P1")
    for (let index = 0; index < 4; index++) {
        Dice = randint(1, 6)
        basic.pause(500)
        if (Dice == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (Dice == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        } else if (Dice == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
        } else if (Dice == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (Dice == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
    Dice = randint(1, 6)
    if (Dice == 1) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_1 += 1
    } else if (Dice == 2) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_1 += 2
    } else if (Dice == 3) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_1 += 3
    } else if (Dice == 4) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_1 += 4
    } else if (Dice == 5) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_1 += 5
    } else {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.showString("Player 2 Wins!!!")
        control.reset()
    }
    basic.showString("P1 =")
    basic.showString("" + (Player_1))
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("P2")
    for (let index = 0; index < 4; index++) {
        Dice = randint(1, 6)
        basic.pause(500)
        if (Dice == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (Dice == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        } else if (Dice == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
        } else if (Dice == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (Dice == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
    Dice = randint(1, 6)
    if (Dice == 1) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_2 += 1
    } else if (Dice == 2) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_2 += 2
    } else if (Dice == 3) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_2 += 3
    } else if (Dice == 4) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_2 += 4
    } else if (Dice == 5) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        Player_2 += 5
    } else {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.showString("Player 1 Wins!!!")
        control.reset()
    }
    basic.showString("p2 =")
    basic.showString("" + (Player_2))
    basic.pause(200)
    basic.clearScreen()
})
let Dice = 0
let Player_2 = 0
let Player_1 = 0
Player_1 = 0
Player_2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Player 1's score =")
        basic.showString("" + (Player_1))
        basic.showString("Player 2's score =")
        basic.showString("" + (Player_2))
        if (Player_1 < Player_2) {
            basic.showString("Player 2 wins!")
        }
        if (Player_1 > Player_2) {
            basic.showString("Player 1 wins!")
        }
        if (Player_1 == Player_2) {
            basic.showString("Tie!")
        }
        control.reset()
    }
})
