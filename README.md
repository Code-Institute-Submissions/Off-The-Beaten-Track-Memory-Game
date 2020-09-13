<!--IMAGE HERE-->

## **Table of Contents**

### **1. UX**
       - 1.1 Overview
       - 1.2 Goals
       - 1.3 User Stories
       - 1.4 Design Process
                * Colour Palette
                * Images
                * Typography
                * Amimations
                * Footers
                * Wireframes
                * Development Process

### **2. Features**
       - 2.1 Existing Features
       - 2.2 Future Features To Implement

### **3. Technologies Used**
       - 3.1 Languages
       - 3.2 Libraries
       - 3.3 Tools
       - 3.4 Resources

### **4. Testing**
      - 4.1 Automatic Testing
      - 4.2 Manual Testing

### **5. Bugs and Solutions**
      - 5.1 Resolved Bugs
      - 5.2 Still Existing

### **6. Deployment**
      - 6.1 GitHub Pages
      - 6.2 Locally

### **7. Credits**
      - 7.1 Content
      - 7.2 Media
      - 7.3 Code
      - 7.4 Acknowledgements

### **8. Disclaimer**
---

## **1. UX** 
### **1.1 Overview**
This interactive memory game was designed to highlight the natural beauty of 
Ireland in an entertaining and engaging way. 
It is suitable for all ages.


### **1.2 Project Goals**
The aim of this project was to create a visually attractive, 
interactive and fun card matching memory game. In doing so 
gain a deeper understanding of interactive web applications and develop 
my javascript skills. 

      - To build a game that: 
                 - users would enjoy playing
                 - that was challenging
                 - that was visually appealing
                 - help improve memory skills

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
I wanted to design a game that looked fun, vibrant and visually 
appealing while still maintaining readability and cohesion throughout.
I wanted each of the elements to be clearly visible and immediately 
identifiable.  
I kept the amount of elements on each page to a minimum as I wanted to achieve an uncluttered
and clean aesthetic.

#### Colour Palette
I wanted the colour scheme to be bright and vibrant without becoming 
overpowering and garish.   
I wanted to incorporate green into the design since it is a colour 
commonly associated with Ireland.   

##### **Primary Colour Palette**
![Imgur](https://i.imgur.com/qeHIShi.png)

 I chose lime green and magenta for my primary colour palette. 
 I felt they complemented each other well and were fun, bright and vibrant 
 colours in keeping with the aesthetic I was aiming for.  
 These colours were used for the main elements of the application.  

    - Home Page  
       - #00ff00 stood out against the background and was used for the title, 
       subtitle, footer and button backgrounds  
       - #ff00ff was used to the button and footer text  
    - Game Page  
       - #00ff00 was used as a border for the cards and footer text
       - #ff00ff was used for the timer, flip counter and footer
    - Win Overlay 
       - #00ff00 was used for the text, animations and button background
       - #ff00ff was used to the button text
    - Lose Overlay 
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
I used gradients for the background colours as I felt a block colour would be look 
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
I chose images that I felt highlighted the beauty of Ireland. 

#### **Typography**
I chose [Boogaloo](https://fonts.google.com/specimen/Boogaloo?query=boo)
for the main/subtitles, timer, flip counter and button text. 
I felt it was a fun font in keeping with the aesthetic I was going for, while still maintaining good readability.  
For the body, I chose [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mo). I felt it worked well with 
the Boogaloo font.

#### **Animations**
I decided to add animations to the modal to hightlight the title and the instructions. I felt that the 
star animations were more fun than traditional bullet points for the unordered list.
I added animated smiley/sad faces to the win/lose overlay as I felt they were a fun addition while also 
enforcing the win/lose message.

#### **Footers**
I used alternating colours on the footers on each page to balance the background colours.

#### **Wireframes**
I used [Balsamiq](https://balsamiq.com/wireframes/) to create the wireframes for my project.
I create 3 sets of wireframes for Desktop, Tablet and Mobile.
To view the wireframes please click the links below:

**Desktop**  
 - [index.html](https://i.imgur.com/zvdoQrP.png)  
 - [game.html](https://i.imgur.com/6AwZnbu.png)  
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

---

## **2. Features**
### **2.1 Existing Features**  
 #### **index.html**
    - **_Game Title_** - identifys the name and type of game
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
    - both overlays contain animations
        - smiley faces on the **_win overlay_** to emphasize the win message
        - sad faces pn the **_lose overlay_** to emphasize the lose message

### **2.2 Future Features**
 - Add difficulty levels for the user to choose from:  
       - Easy   
       - Medium  
       - Hard
- Add card decks with images for different countries that the user can choose to play
- Add an interactive map with markers identifying the locations in the images used in the game

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
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - to test responsiveness and diagnose problems
- [Am I Responsive](http://ami.responsivedesign.is/) - to test responsiveness on various devices
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)  -to test the performace of the application
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) - to check for overflow


### **3.4 Resources**
- [w3schools](https://www.w3schools.com/) 
- [Stack Overflow](https://stackoverflow.com/)
- [CSS Tricks](https://css-tricks.com/)

---

## **4. Testing**
### **4.1 Automatic Testing** 
- [W3C Markup Validation](https://validator.w3.org/#validate_by_input) - to validate HTML
        - no errors found
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) - to vaildate CSS Code
        - no errors found
- [JShint](https://jshint.com/) - to validate Javascript code
        - no major errors found
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - to identify any overflow issues






