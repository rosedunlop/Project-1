# Project One - Froggy

Table of contents

- Brief
- Project Overview
- Technologies Used
- Approach Taken
- Bugs
- Challenges and Wins
- Future features and improvements
- Key learnings

![](/images/Poppy.png)

# Brief

- Create a grid based game using JavaScript.
- The game must have winning and losing states and it must visually display when the player has either won or lost the game.
- Allow for restarting the game.
- Deploy your game online.

# Project Overview

Frogger is a 1981 arcade action game launched by Sega. The aim of the game is to guide the frogs back to their home, having to cross a busy road and river with multiple hazards along the way.

This was my first Project after three weeks into General Assembly’s immersive software engineering course and was also my first ever project using JavaScript. This was an individual project that I spent one week working on.

I decided to put my own spin on Frogger and based it around saving ‘Poppy the Puppy’, who had to cross a river and other obstacles to get back to her kennel.

Play Save Poppy The Puppy here: https://rosedunlop.github.io/Froggy/

# Technologies Used

- HTML5
- CSS3 with animation
- JavaScript
- Git
- GitHub

# Approach Taken

Key Dates

- Day 1: planning and pseudocode
- Day 6: reach MVP
- Day 7-8: styling, debugging and adding any extra features

### Day 1:

I spent the first day of the project planning the game in as much detail as I possibly could. This included wireframing, writing a detailed list of goals and some pseudocode outlining the basic structure of my HTML, JavaScript and CSS files.

Checklist:

- Create a 10 by 10 grid containing 100 cells.
- Each cell will have a particular class e.g. river, puppy, obstacle
- Create keyboard event listeners for the player to be able to move around the grid
- Ensure that the player cannot move off the grid when it reaches the end of a row/column.
- Start game and restart game logic
- Adding movement to the obstacles on the grid
- Score implementation - having a certain amount of lives.
- Winning and losing states
- Obstacle collision functionality
- Styling

### Day 2-3:

My aim over the next two days of the project was to create a relatively static version of frogger by adding specific classes to each cell to build up where I wanted specific obstacles to live on the grid. To begin with I manually assigned each cell with the aim to later down the line change this when I start to add movement to the obstacles. A typical example of this:

```

//* const rowTen = ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free']

```

Then after manually assigning each row and joining them together into one array, I added each class to each cell accordingly:

```
//* const gridMap = rowOne.concat(rowTwo).concat(rowThree).concat(rowFour).concat(rowFive).concat(rowSix).concat(rowSeven).concat(rowEight).concat(rowNine).concat(rowTen)

const cells = document.querySelectorAll('.grid div')
cells.forEach(
    (cell, i) => {
        cell.classList.add(gridMap[i])
    })

```

After assigning static cell classes I decided to focus on creating the functionality where a player starts in a particular position on the grid and can be moved by the user’s keyboard. I used a switch statement to listen for which key is being pressed and it would carry out a function that would move the player up, left, right or down accordingly:

```
//* document.addEventListener('keydown', function (event) {
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

```

### Day 4-5:

The next two days of the project I spent adding movement to the game. I had multiple obstacles that needed to be moved around the grid. First, I added movement to a puppy snatcher and the kennel poppy needed to return to. An example of this can be shown below:

```
 //* cells[10].classList.add('puppy-snatcher')
    let i = 10
    const moveSnatcher = () => {
        if (i >= 10 && i <= 29){
              if (cells[29].classList.contains('puppy-snatcher')){
                  cells[29].classList.remove('puppy-snatcher')
                  cells[10].classList.add('puppy-snatcher')
                  i = 10
              }else if(cells[i].classList.contains('puppy') && lives !== 0){
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

```

Here I ensured that the obstacle was added in a certain cell at the beginning and then created a function called moveSnatcher which firstly checked that if the cell’s index was between 10 and 29 it would remove the snatcher from its original cell and add it to the next one every half a second. It also ensured that when the snatcher reached the end of the grid it would be re-added to its starting position.

Finally, I added movement to multiple rubber dinghies on the river element of the game. I knew this would be slightly more complex than the other obstacles as I needed to add the functionality to ensure that if the player was on one of the dinghies that it would move with it. For instance:

```
//* const moveDingys =
        (cell) => {
            cell.classList.add('river')
            cell.classList.remove('rubber-dingy')
              let currentIndex = Array.from(cells).indexOf(cell)
              if(cell.classList.contains('puppy')){
                  console.log('rubber dingy encountered')
                  move(currentIndex + 1)
                  if(currentIndex % 10 === 9){
                      if (lives !== 0) {
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
                            restartGame()
                            return
                    }
                    }
                }
                cells[currentIndex + 1].classList.add('rubber-dingy')

```

Inside of this moveDignys function, it made a check to see if the player was in the same cell as a dinghy, it would move the player from its current index plus one and the same with the rubber dinghy. Furthermore, it also ensured that if the rubber dinghy reached the end of the grid, the player would die and lose a life if it had any left.

### Day 6:

After finishing all the obstacle movement in the game, I then focussed on creating winning and losing states, where if the player came into an obstacle or fell off the grid it would lose a life or reached the kennel it would win the game. This can be shown in the example below:

(code here)

Here I added some logic in the movePlayer function which ensured that when an obstacle is encountered and the player has more than zero lives, the player moves back to their starting position and they lose a life. It also ensures that if they have no lives left, the game is lost and restarted accordingly. I also added some start and restart game functionality, which I displayed on the front end as two different buttons.

### Day 7-8:

In the final two days of the project I focussed on styling, animations, small bug fixes and extra features such as audio and a volume bar. I also spent time on the last day trying to tidy up my code and removing console logs.

# Bugs

- There were a few small bugs that I had to iron out throughout the project creation, but I found that focussing on trying to maintain making a simple game throughout and not trying to over complicate my code helped me solve these.
- One of the main bugs I had to solve was based around the score functionality. I had this issue where the player could end up having another go even though they had zero lives left. This delay in the scoring system took some time to solve but I was able to overcome this relatively quickly by testing and methodically checking my code.

# Wins and Challenges

- The biggest challenge for me was getting multiple dinghies to move along the river. However, after figuring out that I could filter each row array for the dinghy and then move each of those up a cell, using the same function, I was able to move past this point.
- The biggest win for me was taking myself out of my comfort zone and building a game which I found quite daunting to begin with. I ended up really learning and consolidating all I had learnt about JavaScript in the first three weeks of the course.

# Future Content and Improvements

- In the future I would like to add multiple levels to add a higher level of complexity to the game.
- I would also like to make the grid bigger in size to add multiple obstacles to increase the game’s difficulty.

# Key Learnings

- One of the key things I took from my first project is really spending a good amount of time planning. I found that by listing every single feature I wanted to be in the game before I even started really prevented me from going off track and adding content which was unnecessary and would merely over complicate my code.
