# Froggy

Save Poppy The Puppy: This is my first project from the General Assembly Course SEI-59

To begin with I planned out my pseudo code for the HTML, JavaScript and CSS.

HTML Layout:

The layout of the HTML was quite basic, it has a header, a main containing two divs - one for the game specifics which is on the left hand side of the page and the game content which is situated on the right.
The game content is where the 10 by 10 grid is kept - where I made 100 divs in the HTML document itself.
The game specifics section contains two buttons, one to start the game and one to restart the game, it also contains a div containing the game rules.
Finally, it contains a footer containing two divs where the lives and the result of the game are kept.

JavaScript:

1. Assigning classes to the cells:
   To begin with I manually assigned the every cell with an individual class - which were either 'free', 'obstacle', 'river', 'puppy-snatcher' or 'puppy'.
   I wanted to make the game static to begin with and then once the arrow keys were functioning I would then go onto involving movement into the game.
   I then concatted each row array together and then mapped them into each div using their index value.

2. Adding the player to its starting position:
   To begin with I assign the value of starting position with a let variable of 95.
   I then created a function called addPuppyAtStart which adds the puppy at the cell with the index of starting position.
   I then call that function - to ensure the puppy is added there at the start of the game.

3. Creating a move function:
   I created a move function passing the parameter of newIndex.
   I then within that function I removed the class of puppy from the starting position index of cells.
   I then added the class of puppy to the newIndex of cells.
   Finally, I then reassigned starting position to equal newIndex - this would ensure that the player can be moved multiple times when this function is called.

4. Creating a move player function:
   Here I created a function which passed in the parameters of changeInIndex and isIndexAtLimit. This will then when called enable the player to be moved to different cells and also check if it is at the edge of grid and stop it from moving.

5. I then decided to add event key listeners in order for the user to affect the player's position:
   I used document.addEventListener - 'keydown', then added a function to take place when the event occur.
   I used a switch(event.key) - which had a case for each arrow when pressed.
   I then passed four separate functions: handleArrowUp, handleArrowLeft, handleArrowDown, handleArrowRight - which I would then create.

6.
