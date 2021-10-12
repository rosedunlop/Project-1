const rowOne = ['free', 'free', 'free', 'free', 'kennel', 'free', 'free', 'free', 'free', 'free']
const rowTwo = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']
const rowThree = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']
let rowFour = []
let rowFive = []
let rowSix = []
let rowSeven = []
const rowEight = ['free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free']
const rowNine = ['obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'obstacle', 'free', 'free', 'free']
const rowTen = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']


const changingRows = Array.from({length: 10}).fill('river')
console.log(changingRows)

rowFour = changingRows.map((element, index) =>{
    if(index % 2 === 0){
        return 'river'
    }
    return 'rubber-dingy'
})
console.log(rowFour)

rowFive = changingRows.map((element, index) =>{
    if(index % 2 === 0){
        return 'rubber-dingy'
    }
    return 'river'
})
console.log(rowFive)

rowSix = changingRows.map((element, index) =>{
    if(index % 2 === 0){
        return 'river'
    }
    return 'rubber-dingy'
})
console.log(rowSix)

rowSeven = changingRows.map((element, index) =>{
    if(index % 2 === 0){
        return 'rubber-dingy'
    }
    return 'river'
})
console.log(rowSeven)


        
const gridMap = rowOne.concat(rowTwo).concat(rowThree).concat(rowFour).concat(rowFive).concat(rowSix).concat(rowSeven).concat(rowEight).concat(rowNine).concat(rowTen)

const cells = document.querySelectorAll('.grid div')
cells.forEach(
    (cell, i) => {
        cell.classList.add(gridMap[i])
    })


const fourthRow = document.querySelectorAll('.row-four')
const fifthRow = document.querySelectorAll('.row-five')
const sixthRow = document.querySelectorAll('.row-six')
const seventhRow = document.querySelectorAll('.row-seven')

const changeFourthRow = setInterval(() => {
    fourthRow.forEach(
        (cell) => {
            if(cell.classList.contains('rubber-dingy')){
                cell.classList.remove('rubber-dingy')
                cell.classList.add('river')
            }else if(cell.classList.contains('river')){
                cell.classList.remove('river')
                cell.classList.add('rubber-dingy')
            }
        }   
    )  
}, 2000)

const changeFifthRow = setInterval(() => {
    fifthRow.forEach(
        (cell) => {
            if(cell.classList.contains('rubber-dingy')){
                cell.classList.remove('rubber-dingy')
                cell.classList.add('river')
            }else if(cell.classList.contains('river')){
                cell.classList.remove('river')
                cell.classList.add('rubber-dingy')
            }
        }   
    )  
}, 1500)

const changeSixthRow = setInterval(() => {
    sixthRow.forEach(
        (cell) => {
            if(cell.classList.contains('rubber-dingy')){
                cell.classList.remove('rubber-dingy')
                cell.classList.add('river')
            }else if(cell.classList.contains('river')){
                cell.classList.remove('river')
                cell.classList.add('rubber-dingy')
            }
        }   
    )  
}, 750)

let index = 30 
const changeSeventhRow = setInterval(() => {
            // if(index > 29 && index <= 39){
            //     if(cells[39].classList.contains('rubber-dingy')){
            //         cells[39].classList.remove('rubber-dingy')
            //         cells[39].classList.add('river')
            //         cells[30].classList.add('rubber-dingy')
            //         index = 30
            //     }else if(cells[index].classList.contains('rubber-dingy')){
            //         cells[index].classList.remove('rubber-dingy')
            //         index += 1
            //         cells[index].classList.add('rubber-dingy')
            //     }
            // }

            seventhRow.forEach(
                (cell) => {
                    if(cell.classList.contains('rubber-dingy')){
                        cell.classList.remove('rubber-dingy')
                        cell.classList.add('river')
                    }else if(cell.classList.contains('river')){
                        cell.classList.remove('river')
                        cell.classList.add('rubber-dingy')
                    }

                }
            )                 
}, 2500)


cells[10].classList.add('puppy-snatcher')
let i = 10
const moveSnatcher = () => {
    if (i >= 10 && i <= 29){
          if (cells[29].classList.contains('puppy-snatcher')){
              cells[29].classList.remove('puppy-snatcher')
              cells[10].classList.add('puppy-snatcher')
              i = 10
          }else{
              cells[i].classList.remove('puppy-snatcher')
              i += 1
              cells[i].classList.add('puppy-snatcher')
              console.log(i)
          }
    } 
}
setInterval(moveSnatcher, 500)


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
// Here we are storing the new cell and checking if it contains an obstacle or puppy snatcher

let lives = 3
const grabLives = document.querySelector('span')
grabLives.textContent = `${lives}`
const grabResult = document.querySelector('.result')

const movePlayer = (changeInIndex, isIndexAtLimit) => {
    const newIndex = startingPosition + changeInIndex
    if(isIndexAtLimit(startingPosition)){
        console.log('cannot move that way - end of column/row')
        return
    }
    const newCell = cells[newIndex]
    
    // Obstacles that stop player from moving
    if(newCell.classList.contains('obstacle')){
        console.log('obstacle encountered')
        if(lives > 0){
          lives -= 1
          grabLives.textContent = `${lives}`
          grabResult.textContent = `You lost a life! You have ${lives} lives left.` 
        } else {
            grabResult.textContent = 'Game over.'
            alert('Game Over!')
        }
        return
    }else if(newCell.classList.contains('river')){
        console.log('river encountered')
        if(lives > 0){
           lives -= 1
           grabLives.textContent = `${lives}`
           grabResult.textContent = `You lost a life! You have ${lives} lives left.`
        } else {
            grabResult.textContent = 'Game over.'
            alert('Game Over!')
        }
        return
    } else if (newCell.classList.contains('puppy-snatcher')){
        console.log('puppy snatcher encountered')
        if (lives > 0){
           lives -= 1
           grabLives.textContent = `${lives}` 
           grabResult.textContent = `You lost a life! You have ${lives} lives left.`
        } else {
            grabResult.textContent = 'Game Over.'
            alert('Game Over!')
        }
        return
    } else if (newCell.classList.contains('rubber-dingy')){
        console.log('rubber dingy encountered')
        move(newIndex + 2)
        console.log(newIndex)
    }

    console.log(startingPosition, newIndex)
    move(newIndex)
}

// I would make four functions for each movement:
    const handleArrowUp = () => {
        // This would have a function to check if the player is on the top edge
        // It would then pass the movePlayer function afterwards.
        const playerCannotMoveUp = (startingPosition) => startingPosition < 10 
        movePlayer(-10, playerCannotMoveUp) 
        console.log('handleArrowUp')
    }
    const handleArrowDown = () => {
        // This would have a function to check if the player is on the bottom edge
        // It would then pass the movePlayer function afterwards.
        const playerCannotMoveDown = (startingPosition) => startingPosition > 89
        movePlayer(+10, playerCannotMoveDown)
        console.log('handleArrowDown')
        
    }
    const handleArrowRight = () => {
        // This would have a function to check if the player is on the right edge
        // It would then pass the movePlayer function afterwards.
        const playerCannotMoveRight = (startingPosition) => (startingPosition + 1) % 10 === 0
        movePlayer(1, playerCannotMoveRight)
        console.log('handleArrowRight')
        
    }
    const handleArrowLeft = () => {
        // This would have a function to check if the player is on the left edge
        // It would then pass the movePlayer function afterwards.
        const playerCannotMoveLeft = (startingPosition) => startingPosition % 10 === 0
        movePlayer(-1, playerCannotMoveLeft)
        console.log('handleArrowLeft')
        
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

