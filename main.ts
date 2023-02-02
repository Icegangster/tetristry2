let Block: game.LedSprite = null
let fallender_Block: game.LedSprite = null
game.setScore(0)
for (let index = 0; index < 4; index++) {
    fallender_Block = game.createSprite(2, 0)
    fallender_Block.turn(Direction.Right, 90)
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        fallender_Block.turn(Direction.Right, 45)
        fallender_Block.move(1)
        fallender_Block.turn(Direction.Left, 45)
    } else if (input.buttonIsPressed(Button.B)) {
        fallender_Block.turn(Direction.Left, 45)
        fallender_Block.move(1)
        fallender_Block.turn(Direction.Right, 45)
    } else {
        fallender_Block.move(1)
    }
    while (game.score() == 0) {
        basic.pause(1000)
        if (fallender_Block.isTouchingEdge()) {
            Block = fallender_Block
            fallender_Block.delete()
            game.addScore(1)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                fallender_Block.turn(Direction.Right, 45)
                fallender_Block.move(1)
                fallender_Block.turn(Direction.Left, 45)
            } else if (input.buttonIsPressed(Button.B)) {
                fallender_Block.turn(Direction.Left, 45)
                fallender_Block.move(1)
                fallender_Block.turn(Direction.Right, 45)
            } else {
                fallender_Block.move(1)
            }
        }
    }
}
