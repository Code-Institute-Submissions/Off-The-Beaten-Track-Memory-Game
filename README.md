<div align="center">  

<img src="https://i.imgur.com/6eP9WUK.png">

# **A Card Matching Memory Game**

#### **_An interactive card matching game built using vanilla Javascript for my Interactive Frontend Project_** 

</div>

---

![mock up](https://i.imgur.com/UoKH5DY.png)

## [**Table of Contents**](#table-of-contents)

[**1. UX**](#1-ux)
- [1.1 Overview](#11-overview)
- [1.2 Project Goals](#12-project-goals)
- [1.3 User Stories](#13-user-stories)
- [1.4 Design Process](#14-design-process)
    * [Colour Palette](#colour-palette)
    * [Images](#images)
    * [Typography](#typography)
    * [Amimations](#animations)
    * [Footers](#footers)
    * [Wireframes](#wireframes)
    * [Development Process](#development-process)

[**2. Features**](#2-features)
- [2.1 Existing Features](#21-existing-features)
- [2.2 Future Features](#22-future-features)

[**3. Technologies Used**](#3-technologies-used)
- [3.1 Languages](#31-languages)
- [3.2 Libraries](#32-libraries)
- [3.3 Tools](#33-tools)
- [3.4 Resources](#34-resources)

[**4. Testing**](#4-testing)
- [4.1 Automatic Testing](#41-automatic-testing)
- [4.2 Manual Testing](#42-manual-testing)

[**5. Bugs and Solutions**](#5-bugs-and-solutions)
- [5.1 Resolved Bugs](#51-resolved-bugs)
- [5.2 Still Existing](#52-still-existing)

[**6. Deployment**](#6-deployment)
- [6.1 GitHub Pages](#61-github-pages)
- [6.2 Locally](#62-locally)

[**7. Credits**](#7-credits)
- [7.1 Content](#71-content)
- [7.2 Media](#72-media)
- [7.3 Code](#73-code)
- [7.4 Acknowledgements](#74-acknowledgements)

[**8. Disclaimer**](#8-disclaimer)

---

## **1. UX** 
### **1.1 Overview**
This interactive memory game was designed to highlight the natural beauty of 
Ireland in an entertaining and engaging way. It can also be used to practice and improve memory skills
It is suitable for all ages.

### **1.2 Project Goals**
The aim of this project was to create a visually attractive, 
interactive and fun card matching memory game. In doing so 
gain a deeper understanding of interactive web applications and develop 
my javascript skills. 

- As an owner my goals were to build a game that: 
    - users would enjoy playing
    - that was challenging
    - that was visually appealing
    - help improve memory skills
    - that would improve my javascript skills and understanding

### **1.3 User Stories**
*"As a user, I want a game that is fun to play."*  
*"As a user, I want a game that is challenging."*  
*"As a user, I want to be able to track my progress."*  
*"As a user, I want to a game where I can practice my memory skills."*  
*"As a user, I want a game that is easy to navigate."*
*"As a user, I want a game that is visually appealing."*  
*"As a user, I want to be able to easily find out how to play."* 
*"As a user, I want to be able to restart the game at any point."*  
*"As a user, I want a game that is intuitive."*  

### **1.4 Design Process**
- I wanted to design a game that looked fun, vibrant and visually 
appealing while still maintaining readability and cohesion throughout.
- I wanted each of the elements to be clearly visible and immediately 
identifiable.  
- I kept the amount of elements on each page to a minimum as I wanted to achieve an uncluttered
and clean aesthetic.  
- I used [Bootstrap 4](https://getbootstrap.com/) for the layout on the home page.  
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) for the layout on the game page as I felt it was better for 
constructing the game board.
- This application was primarily designed to be used on Desktop and as such while it is responsive on mobile/tablet for potrait orientation, 
it is not yet responsive at landscape orientation. 

#### Colour Palette
- I wanted the colour scheme to be bright and vibrant without becoming 
overpowering and garish.   
- I wanted to incorporate green into the design since it is a colour 
commonly associated with Ireland.   

##### **Primary Colour Palette**
![Imgur](https://i.imgur.com/qeHIShi.png)

I chose green and magenta for my primary colour palette. I felt they complemented each other well and were fun, bright and vibrant 
 colours in keeping with the aesthetic I was aiming for. These colours were used for the main elements of the application.  

- Home Page:  
    - #00ff00 stood out against the background and was used for the title, 
       subtitle, footer and button backgrounds  
    - #ff00ff was used to the button and footer text  
- Game Page:  
    - #00ff00 was used as a border for the cards and footer text
    - #ff00ff was used for the timer, flip counter and footer
- Win Overlay:
    - #00ff00 was used for the text, animations and button background
    - #ff00ff was used to the button text
- Lose Overlay: 
    - #00ff00 was used for the button text
    - #ff00ff was used for the text, animations and button background
   
##### **Secondary Colour Palette**
 ![Imgur](https://i.imgur.com/0rWBIho.png)

I chose these colours as they worked well with my primary colour palette but 
were more subdued. 

- #260026 was used for the welcome text on the home page  
- #800080 was used for the shadow on the animated stars in the modal title 
- #cc00cc was used for the modal title, instruction stars and button background  
- #004c00 was used for the main title shadow  
- #32ff32 was used for font awesome icons on game page buttons  

##### **Background Colours**
I used gradients for the background colours as I felt it would be look 
better than a block colour.

![Imgur](https://i.imgur.com/DfnJsGE.png)

#ffccff and #ff4cff were used to create a radial gradient on the home page. I felt they enchanced 
the primary colours and fit well with the overall colour scheme. 

![Imgur](https://i.imgur.com/3470WdI.png)

#e0f3e0 and #98e070 were used to create a radial gradient on the game page. 

##### **Shadowing**
I used shadowing on the main/subtitles and buttons on the home page to make them stand out 
from the page and give a 3d effect.

#### **Images**   
I chose images that I felt were interesting and a good reflection of the Irish landscape. 

#### **Typography**
- I chose [Boogaloo](https://fonts.google.com/specimen/Boogaloo?query=boo)
for the main/subtitles, timer, flip counter and button text. 
- I felt it was a fun font in keeping with the aesthetic I was going for, while still maintaining good readability.  
For the body, I chose [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mo). I felt it worked well with 
the Boogaloo font.

#### **Animations**
- I decided to add animations to the modal to hightlight the title and the instructions. I felt that the 
star animations were more fun than traditional bullet points for the unordered list.
- I added animated smiley/sad faces to the win/lose overlay as I felt they were a fun addition while also 
emphasizing the win/lose message.

#### **Footers**
I used alternating colours on the footers on each page to balance the background colours.

#### **Wireframes**
- I used [Balsamiq](https://balsamiq.com/wireframes/) to create the wireframes for my project.
- I create 3 sets of wireframes for Desktop, Tablet and Mobile.
- To view the wireframes please click the links below:

**Desktop**  
 - [index.html](https://i.imgur.com/zvdoQrP.png)  
 - [game.html](https://i.imgur.com/EReqe9b.png)  
 - [win/lose overlays](https://i.imgur.com/VyOANbZ.png)  

**Tablet**  
 - [index.html](https://i.imgur.com/NaHrzSX.png)
 - [game.html](https://i.imgur.com/L5Tgjf3.png) 
 - [win/lose overlays](https://i.imgur.com/mEEVwkU.png)  

 **Mobile**
 - [index.html](https://i.imgur.com/Sjawkjj.png) 
 - [game.html](https://i.imgur.com/xd6PcdP.png)  
 - [win/lose overlays](https://i.imgur.com/MVssHvs.png) 

 #### **Development Process**
 To help me manage my project I broke the development process down into the below stages:
  - Create basic structure of index.html and game.html 
  - Create elements needed for functionality 
  - Build the logic and functionality
  - Add modal  
  - Add styling 

##### [Back to Table of Contents](#table-of-contents)
---

## **2. Features**
### **2.1 Existing Features**  
 #### **index.html**
 - **_Game Title_** - identifies the name and type of game
 - **_Welcome Text_** - Information about the game
 - **_How to Play_** button - triggers modal with game instructions  
 - **_Start Game_** button - loads game page  
 - **_Footer_** - contains copyright information
 #### **game.html**  
 - **_Home_** button - indicated by [FontAwesome](https://fontawesome.com/icons/home?style=solid) *Home* 
    icon will bring the user back to the home page when clicked  
 - **_Reset_** button - indicated by [FontAwesome](https://fontawesome.com/icons/redo?style=solid) *Redo* 
    icon will reset the game board, timer and flip counter
 - **_Flip Counter_** - counts the number of flips a user has made, allowing them to track their progress
 - **_Timer_** - displays the time remaining for the user to complete the game
 - **_Game Board_** - displays the games cards face down ready to be clicked 
 - **_Game Cards_** - images to be matched by the user to win the game 
 - **_Footer_** - contains copyright information
#### **win/lose overlays**
 - **_Win Overlay_** - triggered when the user wins the game by finding all the matching pairs
    within the alloted time and flips
 - **_Lose Overlay_** - triggered when the user loses the game
 - both overlays contain 2 buttons:  
     - **_Play Again_** button - will reload the game so the user can play again  
     - **_Home_** button - will return the user to the home page
 - both overlays contain animations:  
     - smiley faces on the **_win overlay_** to emphasize the win message
     - sad faces pn the **_lose overlay_** to emphasize the lose message

### **2.2 Future Features**
- Add difficulty levels for the user to choose from:  
       - Easy   
       - Medium  
       - Hard
- Add card decks with images for different countries that the user can choose to play
- Add an interactive map with markers identifying the locations in the images used in the game

##### [Back to Table of Contents](#table-of-contents)
---

## **3. Technologies Used**
### **3.1 Languages**
- **HTML** - used to create the structure of the application
- **CSS** - used to position and style the application  and create animations
- **JavaScript** - used to write the functionality and logic of the application

### **3.2 Libraries**
- [Bootstrap 4](https://getbootstrap.com/)  To simplify the structure of the landing page
- [Google Fonts](https://fonts.google.com/) - [Boogaloo](https://fonts.google.com/specimen/Boogaloo?query=boo) and
 [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mo) fonts
- [Font Awesome](https://fontawesome.com/) - for icons
- [jQuery](https://code.jquery.com/) - for modal
- [Popper.js](https://popper.js.org/) - for modal
- [hover.css](https://ianlunn.github.io/Hover/) - for pulse effect on buttons

### **3.3 Tools**
- [Git](https://git-scm.com/) - for version control
- [Gitpod](https://gitpod.io/) - IDE for local development
- [Github](https://github.com/) - to host the repository
- [Github Pages](https://pages.github.com/) - for deployment of the website
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - to test responsive design and diagnose problems
- [Am I Responsive](http://ami.responsivedesign.is/) - to test responsive design on various devices
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)  - to test the performace of the application
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) - to check for overflow
- [Favicon](https://favicon.io/favicon-converter/) - to create favicon
- [Autoprefixer](https://autoprefixer.github.io/) - to enusre vendor prefixes were added
- [Imgur](https://imgur.com/) - to store external images for README.md

### **3.4 Resources**
- [cdnjs](https://cdnjs.com/)
- [w3schools](https://www.w3schools.com/) 
- [Stack Overflow](https://stackoverflow.com/)
- [CSS Tricks](https://css-tricks.com/)

##### [Back to Table of Contents](#table-of-contents)
---

## **4. Testing**
### **4.1 Automatic Testing** 
- [W3C Markup Validation](https://validator.w3.org/#validate_by_input) - to validate HTML
    - no errors found
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) - to vaildate CSS Code
    - no errors found
- [JShint](https://jshint.com/) - to validate Javascript code
    - no major errors found
    - below metrics provided:  

![jshint](https://i.imgur.com/YOzIU5N.png)

- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - to identify any overflow issues
    - no overflow issues

- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)  - to test the performace of the application
Lighthouse was used to test the performance of each page on mobile and Desktop.
The following reports were generated:
  
#### **index.html - Desktop**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/lHdachO.png) Report   
  - [Accessibility](https://i.imgur.com/EkqqvG3.png) Report 
  - [Best Practices & SEO](https://i.imgur.com/1Zfn2za.png) Report 
 
#### **game.html - Desktop**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/vic64QN.png) Report 
  - [Accessibility](https://i.imgur.com/0uQNViX.png) Report
     - Lost points on accessibility due to poor contrast between background and text colour on the footer.
     - I didn't address this issue as I felt that since the only information contained in the footer was 
     copyright information it was not necessary as it did not effect the playability of the game.  
  ![imgur](https://i.imgur.com/sbtkXaN.png)  
     - Lost points due to alt attributes not present on images
     - I did not address this issue as the images were created from a javascript array  
  ![imgur](https://i.imgur.com/pR5HFJb.png)  
  - [Best Practices & SEO](https://i.imgur.com/Z8Bfwnx.png) Report 
     - Lost points due to alt attributes not present on images  
  ![imgur](https://i.imgur.com/qQeWdPa.png)

#### **index.html - Mobile**
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/CvpvaDm.png) Report
  - [Accessibility](https://i.imgur.com/B9xyM7z.png) Report    
  - [Best Practices & SEO](https://i.imgur.com/DQFFVqZ.png) Report  

#### **game.html - Mobile** 
- Please click the below links to view the reports:
  - [Performance](https://i.imgur.com/LPaeg43.png) Report 
  - [Accessibility](https://i.imgur.com/K96FaZo.png) Report
     - lost points due to alt attributes missing from images  
  - [Best Practices & SEO](https://i.imgur.com/G7UKgSU.png) Report  

- [GT Metrix](https://gtmetrix.com/) - to test loading speed
 ![GTmetrix](https://i.imgur.com/Ul9R4pg.png)

### **4.2 Manual Testing**
 Each element was tested to ensure it was working correctly.  
 Testing on functionality was carried out throughout the build using 
 [DevTools](https://developers.google.com/web/tools/chrome-devtools) to ensure everything worked as it should and to identify
 issues/bugs.

#### **index.html**
 - **_How to Play_** Button 
    - clicked to ensure modal is triggered  
 - **_Modal_** 
    - *close* button clicked to ensure modal closes
    - *Let's Play* button takes user to game page when clicked

#### **game.html**
- **_Home_** Button 
    - returns user to home page when clicked  
- **_Restart_** Button 
    - resets game board, timer and flip counter when clicked  
- **_Flip Counter_** 
    - decrements with each card click    
    - triggers lose modal when it reaches zero
- **_Timer_** 
    - timer starts on first card click
    - counts down in seconds  
    - triggers lose modal when timer reaches zero 
- **_Game Board_**
    - displays correctly on load
    - only clicks on the cards trigger flip counter
- **_Cards_**
    - 3d flip when clicked to reveal face
    - 3d flip to return cards to starting position when not a match
    - images are displayed correctly

#### **Overlays**
- **_Win Overlay_**
    - triggered when winning conditions are met
    - *Play Again* Button resets the gameboard, timer and flip counter and hides overlay when clicked
    - *Home* Button returns user to the home screen when clicked
    - *Animations* begin as soon as overlay is visible

- **_Lose Overlay_**
    - triggered when losing conditions are met
    - *Play Again* Button resets the gameboard, timer and flip counter and hides overlay when clicked
    - *Home* Button returns user to the home screen when clicked
    - *Animations* begin as soon as overlay is visible

#### **Game Functionality**
Played the game repeatedly to test functionality
- board locks and cards cannot be clicked while check for match function is running
    - tried clicking on other cards while active cards are face up
- matching pairs stay face up
- flipped cards that are not a match are returned to starting position
    - other cards cannot be clicked until cards are flipped back  
- all pairs found with alotted time and flips triggers *Win Overlay*
- timer stops when game is won
- time/flips running out before all pairs are found triggers *Lose Overlay*
- cards stay face up long enough for user to see images
- game is winable within the alotted time and flips
- clicks anywhere outside of the game board are not counted by flip counter
- repeated clicks on cards when only one card was face up does not effect flip counter
- repeated clicks on matching pairs does not effect click counter and are only counted as one match
- matched pairs are disabled and cannot be clicked on again

#### **Responsive Design**
- Responsive design was tested throughout the build using [DevTools](https://developers.google.com/web/tools/chrome-devtools)
and [Am I Responsive](http://ami.responsivedesign.is/)
- It was also tested physically on various devices  

#### **User Stories**
- *"As a user, I want a game that is fun to play."*  
  - Bright, vibrant colour palette, interesting images and animations, while not being too easy 
  contribute in making this a fun game to play
- *"As a user, I want a game that is challenging."* 
  - The amount of cards, time limit and flip limit add difficulty to the game 
- *"As a user, I want to be able to track my progress."*
  - The timer and flip counter allow users to track their progress throughout the game  
- *"As a user, I want to a game where I can practice my memory skills."* 
  - playing card matching games can help improve memory skills 
- *"As a user, I want a game that is easy to navigate."*
  - All button immediately identifiable, and purpose is clearly definable 
- *"As a user, I want a game that is visually appealing."*  
  - The colour palette and images give a visually appealing aesthetic
- *"As a user, I want to be able to easily find out how to play."* 
  - The *How to Play* button is clearly visible and the triggered *modal* explains clearly how to play the game
- *"As a user, I want to be able to restart the game at any point."* 
  - The reset button allows the user to reset the game at any time 
- *"As a user, I want a game that is intuitive."*  
  - Navigation throughout the application is clearly defined, how to play the 
  game would be quickly discernible without reading the instructions 

##### [Back to Table of Contents](#table-of-contents)
  ---

## **5. Bugs and Solutions**
### **5.1 Resolved Bugs**
- Game timer restarting when it got to zero 
   - changed `setInterval()` to a variable
   - added a `clearTimeout()` with the `setInterval()` variable as an argument 
   ```javascript
    timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
                loseGame(timer);
                timer = duration;
                clearTimeout(timerId);
            }
    ```
- `onclick` attribute of `gameBoard` not removing after first click and 
 causing timer to restart with every subsequent click
    - created new gobal variable `firstClick` and incremented it
    - used `removeAttribute` to remove `onclick` while `(firstClick < 2)`
    ```javascript
     let gameBoard = document.querySelector('.board');
     gameBoard.onclick = (function() {
        firstClick++
         if (parseInt(firstClick) < 2) {
            gameBoard.removeAttribute('onclick');
            timeRemaining = 60 * 2,
                display = document.querySelector('#timer');
            gameTimer(timeRemaining, display);
        }
    });
    ```
- Win and Lose overlays not displaying when correct conditions were met    
   - was using `getElementByClassName` without supplying index
   - added `[0]` to end of `getElementByClassName`
 ```javascript
    document.getElementsByClassName('win-overlay')[0].style.display = 'block';
    document.getElementsByClassName('lose-overlay')[0].style.display = 'block';
```
- Flip counter not counting card clicks
   - created new global variable `clickCounter` and decremented it
   - created new local variable `clickCount`, added `textContent` attribute and set it as the value of `clickCounter`
  ```javascript
     function flipCount() {
        clickCounter--;
        let clickCount = document.querySelector('#flip-counter');
        clickCount.textContent = clickCounter;
    }
    ```
- 3d flip not working on `unFlip()`
   - removed `card-back`, `card-front` and `flip` classes from `previousCard` and `currentCard` variables
   ```javascript
    previousCard.classList.remove('card-back', 'card-front', 'flip');
    currentCard.classList.remove('card-back', 'card-front', 'flip');
    ```
- Win game condition `matchedCards.length === gameCards.length` never being met 
   - changed condition to `matchedCards.length === (gameCards.length / 2)`

- Game board not locking when 2 cards had been flipped
   - added `if` condition to `createBoard()`
   ```javascript
    if (flipCounter < 2) {
        flipCard(this);
        flipCount();
    }
    ```
- Game board not reseting in `resetGame()`
   - created new local variable
   ```javascript
   let node = document.getElementById('grid');
   node.innerHTML = '';
   ```
- Flip Counter not reseting in `resetGame()`
   - reset `textContent` of `clickCount` variable
   ```javascript
   let clickCount = document.querySelector('#flip-counter');
    clickCount.textContent = 98;
    ```
- Timer not reseting in `resetGame()`
   - reset `textContent` of `timer` variable and added `clearInterval(timerId)`
   ```javascript
    let timer = document.querySelector('#timer');
        timer.textContent = '00:00';
        clearInterval(timerId);
    ```
- Repeated clicks on a matching pair could trigger win conditions and were counted as legitimate clicks by click counter
  - created `disableCards()` to disable matched pairs so they cannot be 
  clicked on once they have been matched and called it in `checkForMatch()`
  ```javascript
  function disableCards(card) {
        card.classList.add('disable-card');
        card.src = card.getAttribute('data-path');
    }
  ```
- Repeated clicks on the first card flipped were counted by click counter and also broke the functionality by 
staying face up regardless of whether it was a match or not
  - added `.disable-card` to `card` in `flipCard()` to stop illegal clicks effecting game functionality
  ```javascript
  function flipCard(card) {
       card.classList.add('flip', 'card-front', 'card-back', 'disable-card');
       card.src = card.getAttribute('data-path');
       setTimeout(checkForMatch(card), 500);
    }
  ```
  - removed `.disable-card` from `previousCard` and `currentCard` in `unFlip()` so unmatched cards were back in play
  ```javascript
        previousCard.classList.remove('card-back', 'card-front', 'flip', 'disable-card');
        currentCard.classList.remove('card-back', 'card-front', 'flip', 'disable-card'); 
  ```

### **5.2 Still Existing**
- **_How to Play_** button on home page
  - pulse effect not stopping after button has been clicked or when *modal* is closed with *x*

- **_Layout_**
  - layout not responsive in landscape position on mobile/tablet devices 

- **_Delay on image displaying on card flip_**
   - slight delay on image being displayed after card is clicked
   - this is not a constant problem and is more of an issue on mobile devices
   - I compressed the images which reduced the delay slightly
   - further investigation is needed into this issue

##### [Back to Table of Contents](#table-of-contents)
---

## **6. Deployment**
### **6.1 GitHub Pages**
The live version of this site is hosted using [Github Pages](https://pages.github.com/).

To deploy **_Off The Beaten Track_** from its 
[GitHub repository](https://github.com/aineon/Off-The-Beaten-Track-Memory-Game), follow the below steps:
1. Log in to **Github**  
2. Select **aineon/Off-The-Beaten-Track-Memory-Game** from the list of repositories
3. From the menu items near the top of the page, select **Settings**
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

### **6.2 Locally**
To run this project locally, follow the below steps:

To clone this project from GitHub:
1. Click the link to the [Off The Beaten Track repository](https://github.com/aineon/Off-The-Beaten-Track-Memory-Game)
2. Under the repository name, click **Code** button
3. In the **_Clone with HTTPs_** section, copy the clone URL for the repository
4. In your local IDE open **_Git Bash_**
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone` and then paste the URL you copied in Step 3.
```console
git clone https://github.com/aineon/Off-The-Beaten-Track-Memory-Game.git
```
7. Press Enter. Your local clone will be created
8. To remove the origin link from your IDE type `git remote rm origin`

- Alternatively you can download the **ZIP folder** of this project by clicking the **Code** button *(as you did in step 2)*
and selecting **_Download ZIP_**
- It can then be unpacked into your desired location
- Open the **index.html** file to run the project locally

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

##### [Back to Table of Contents](#table-of-contents)
---

## **7. Credits**
### **7.1 Content**
- All content was created by the developer

### **7.2 Media**
**Images**
- Card face images were obtained from the below sources:
  - [Unsplash](https://unsplash.com/)
  - [Scopio](https://scop.io/)
  - [Pixabay](https://pixabay.com/)
  - [Pexels](https://www.pexels.com/)
  - Developers own photos
  - Ireland from space image on back of card was taken from 
[Pinterest](https://www.pinterest.com/pin/214835844710473737/)

### **7.3 Code**
- **`shuffleCards()`** taken from [Stack Overflow](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
- **`gameTimer()`** taken from [Stack Overflow](https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer)
and edited to suit my needs
- **`createBoard()`** and **`unFlip()`** inspired by 
[Ania Kubow YouTube Tutorial](https://www.youtube.com/watch?v=tjyDOHzKN0w)
- **Animations and Background Gradient** inspired by 
[Web Dev Simplified YouTube Tutorial](https://www.youtube.com/watch?v=28VfzEiJgy4)
- **Vendor prefixes** were added based on [Autoprefixer](https://autoprefixer.github.io/)

### **7.4 Acknowledgements**
I would like to say a massve thank you to my mentor [Adegbenga Adeye](https://github.com/deye9) without whom this project would never have gotten finished!

I would also like to thank the CI community on the Code Institute Slack channel - 
in particular [@stevo](https://code-institute-room.slack.com/team/UM6CCB90T), [@Deborah_alumni](https://code-institute-room.slack.com/team/UC0HYGN4E), [@Ryan Guest](https://code-institute-room.slack.com/team/U016FFAFHE2) and
[@Kirsty C](https://code-institute-room.slack.com/team/U014813LKTR) for their feedback of my project in 
[#peer-code-review channel](https://code-institute-room.slack.com/archives/CGWQJQKC5)

##### [Back to Table of Contents](#table-of-contents)
---

## **8. Disclaimer**
All images and content on this website is for educational purposes only.

##### [Back to Table of Contents](#table-of-contents)
---
