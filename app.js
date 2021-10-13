const rowOne = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']
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

const grabButton = document.querySelector('.start-button')
const grabResetButton = document.querySelector('.restart-button')
const startAudio = document.querySelector('audio')

function playAudio(){
    startAudio.play()
}

const changeAudio = (input) => {
    let noise = volume.value / 10
    startAudio.volume = noise
}


function startGame (){
    
    const moveDingys = 
        (cell) => {
            cell.classList.add('river')
            cell.classList.remove('rubber-dingy')
              // if it contains player - move with the dingy when it does move
              let currentIndex = Array.from(cells).indexOf(cell)
              // If the cell contains the player - remove it from the current cell and add it along 1. 
              if(cell.classList.contains('puppy')){
                  console.log('rubber dingy encountered')
                  move(currentIndex + 1)
                  // If dingy reaches end of the row, player dies/loses a life
                  if(currentIndex % 10 === 9){
                      if (lives > 0) {
                          lives -= 1
                          grabLives.textContent = `${lives}`
                          grabResult.textContent = `You lost a life! You have ${lives} lives left.`
                          cells[currentIndex].classList.remove('puppy')
                          cells[95].classList.add('puppy')
                          move(95)
                          return
                     }else if (lives === 0){
                            grabResult.textContent = 'Game Over.'
                            cells[currentIndex].classList.remove('puppy')
                            move(95)
                            alert('Game Over.')
                            cells[95].classList.remove('puppy')      
                            return   
                    }       
                    }
                } 
                cells[currentIndex + 1].classList.add('rubber-dingy')
                // Add the rubber dingy plus one along the row too 
                // if dingy reaches end of row need to add dingy at start of that row again to keep regenerating them 
                if (currentIndex === 39 ){
                    cells[30].classList.add('rubber-dingy')
                }else if(currentIndex === 49){
                    cells[40].classList.add('rubber-dingy')
                }else if(currentIndex === 59){
                    cells[50].classList.add('rubber-dingy')
                }else if(currentIndex === 69){
                    cells[60].classList.add('rubber-dingy')
                }        
            }   
        
    
    const isADingy = (cell) => {
        return cell.classList.contains('rubber-dingy')
    }  
    const moveDingysOnRow = (row) => {
        Array.from(row).filter(isADingy).forEach(moveDingys)
    }
    
    const changeFourthRow = setInterval(() => {
        moveDingysOnRow(fourthRow) 
    }, 2000)
    
    const changeFifthRow = setInterval(() => {
        moveDingysOnRow(fifthRow)  
    }, 1500)
    
    const changeSixthRow = setInterval(() => {
        moveDingysOnRow(sixthRow)  
    }, 750)
    
    const changeSeventhRow = setInterval(() => {
        moveDingysOnRow(seventhRow)               
    }, 2500)
    
    let startingPosition = 95
    console.log(startingPosition)
     // Here I have declared a function to add the puppy class to that starting position cell
    const addPuppyAtStart = () => {
        cells[startingPosition].classList.add('puppy')
    }
    addPuppyAtStart()
    
    cells[10].classList.add('puppy-snatcher')
    let i = 10
    const moveSnatcher = () => {
        if (i >= 10 && i <= 29){
              if (cells[29].classList.contains('puppy-snatcher')){
                  cells[29].classList.remove('puppy-snatcher')
                  cells[10].classList.add('puppy-snatcher')
                  i = 10
              }else if(cells[i].classList.contains('puppy') && lives > 0){
                  lives -= 1
                  grabLives.textContent = `${lives}`
                  grabResult.textContent = `You lost a life! You have ${lives} lives left.`
                  cells[i].classList.remove('puppy')
                  cells[95].classList.add('puppy')
                  move(95)
                  return
              } else if(cells[i].classList.contains('puppy') && lives === 0){
                cells[i].classList.remove('puppy')
                grabResult.textContent = 'Game Over.'
                alert('Game Over.')
                restartGame()
                return
              }
              else{
                  cells[i].classList.remove('puppy-snatcher')
                  i += 1
                  cells[i].classList.add('puppy-snatcher')
              }
        } 
    }
    setInterval(moveSnatcher, 500)
    
    cells[4].classList.add('kennel')
    let index = 4
    const moveKennel = () => {
         if(index >= 0 && index <= 9){
             if(cells[9].classList.contains('kennel')){
                 cells[9].classList.remove('kennel')
                 cells[0].classList.add('kennel')
                 index = 0
             }else{
                cells[index].classList.remove('kennel')
                 index += 1
                 cells[index].classList.add('kennel')
            }
     }
     if(cells[index].classList.contains('puppy') && cells[index].classList.contains('kennel')){
         cells[index].classList.remove('puppy')
         alert('You win! Poppy has been safely returned to her kennel.')
         grabResult.textContent = 'You Win! Poppy has been safely returned to her kennel.'
         restartGame()
         return
     }
     }
    setInterval(moveKennel, 2000)
    
    
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
              move(95)
            } else if(lives === 0) {
                grabResult.textContent = 'Game over.'
                alert('Game Over!')
                restartGame()
            }
            return
        }else if(newCell.classList.contains('river') && !newCell.classList.contains('rubber-dingy')){
            console.log('river encountered')
            if(lives > 0){
               lives -= 1
               grabLives.textContent = `${lives}`
               grabResult.textContent = `You lost a life! You have ${lives} lives left.`
               move(95)
            } else if (lives === 0) {
                grabResult.textContent = 'Game over.'
                alert('Game Over!')
                restartGame()
            }
            return
        } else if (newCell.classList.contains('puppy-snatcher')){
            console.log('puppy snatcher encountered')
            if (lives > 0){
               lives -= 1
               grabLives.textContent = `${lives}` 
               grabResult.textContent = `You lost a life! You have ${lives} lives left.`
               move(95)
            } else if (lives === 0) {
                grabResult.textContent = 'Game Over.'
                alert('Game Over!')
                restartGame()
            }
            return
        }else if(newCell.classList.contains('kennel') && lives > 0){
            grabResult.textContent = 'You Win! Poppy has been safely returned to her Kennel'
            newCell.classList.remove('puppy')
            alert('You win! Poppy has been safely returned to her kennel')
            restartGame()
            return
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
        document.addEventListener('keydown', function (event) {
        // add an event listener to the document to listen for arrow keys:
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
    }
    
    grabButton.addEventListener('click', startGame)
    grabButton.addEventListener('click', playAudio)

    volume.addEventListener('input', changeAudio)

    function restartGame (){
    window.location.reload();
    return false
    }

    grabResetButton.addEventListener('click', restartGame)



    
