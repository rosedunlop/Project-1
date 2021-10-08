const rowOne = ['free', 'free', 'free', 'free', 'kennel', 'free', 'free', 'free', 'free', 'free']
const rowTwo = ['free', 'free', 'free', 'puppy-snatcher', 'free', 'free', 'free', 'free', 'free', 'free']
const rowThree = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'puppy-snatcher', 'free', 'free']
const rowFour = ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river']
const rowFive = ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river']
const rowSix = ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river']
const rowSeven = ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river']
const rowEight = ['free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free']
const rowNine = ['obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'free']
const rowTen = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']

const gridMap = rowOne.concat(rowTwo).concat(rowThree).concat(rowFour).concat(rowFive).concat(rowSix).concat(rowSeven).concat(rowEight).concat(rowNine).concat(rowTen)

const cells = document.querySelectorAll('.grid div')
cells.forEach(
    (cell, i) => {
        cell.classList.add(gridMap[i])
    })

// Here I am declaring where the player will start - in a let as it needs to be able to change:
let startingPosition = 95
console.log(startingPosition)
 // Here I have declared a function to add the puppy class to that starting position cell
const addPuppyAtStart = () => {
    cells[startingPosition].classList.add('puppy')
}
addPuppyAtStart()

// Now when a key is pressed and I want the player to move I will create a function where it removes from the old position to new one:
const move = (newIndex) => {
    cells[startingPosition].classList.remove('puppy')
    cells[newIndex].classList.add('puppy')
    startingPosition = newIndex
}
// Here I am creating the move player function which takes in a parameter of the change in Index and adds that to the startingPosition - which then moves it to that cell
const movePlayer = (changeInIndex) => {
    const newIndex = startingPosition + changeInIndex
    move(newIndex)
}
// I would make four functions for each movement:
    const handleArrowUp = () => {
        // This would have a function to check if the player is on the top edge
        // It would then pass the movePlayer function afterwards.
        movePlayer(-10) 
        console.log(handleArrowUp)
    }
    const handleArrowDown = () => {
        // This would have a function to check if the player is on the bottom edge
        // It would then pass the movePlayer function afterwards.
        movePlayer(+10)
        console.log(handleArrowDown)
    }
    const handleArrowRight = () => {
        // This would have a function to check if the player is on the right edge
        // It would then pass the movePlayer function afterwards.
        movePlayer(1)
        console.log(handleArrowRight)
    }
    const handleArrowLeft = () => {
        // This would have a function to check if the player is on the left edge
        // It would then pass the movePlayer function afterwards.
        movePlayer(-1)
        console.log(handleArrowLeft)
    }
    
    // add an event listener to the document to listen for arrow keys:
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                handleArrowUp()
                break
                case 'ArrowLeft':
                    handleArrowLeft()
                    break
                    case 'ArrowDown':
                        handleArrowDown()
                        break
                        case 'ArrowRight':
                            handleArrowRight()
                            break
                        }
    })
