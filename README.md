# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > My logic is stored in the Kids.js module. The Document.AddEventListener "click" is looking for a click. That event is stored in itemsClicked. i then gets the data from the Dataset, that was assigned in the html on line 21 and assigns that data to ChildName and ChildWish. after i check ItemsClicked to make sure I have the correct element by confirming the data-type. if that is true it will window alert 

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > It has to be invoked inside because while the kids array is being looped you can loop the celebritys array and match the Id's so that they will render correctly in the HTML 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The addEventListener stores the element that has been clicked on and assigns it to clickedItem. the celebritySport recieves the value of data-sport="" that sport is depending on each celebrity is clicked. The sport is then returned in a window alert.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > first I import each required function from their respective modules. Then I use document.querySelector to select the ID i want from the 
   html  and assign it to mainContainer. in applicationHTML  I write the HTML I want to use, along with invoking the imported functions to render content on the screen. Finally I use mainContainer.innerHTML = applicationHTML to set the string of HTML elements to the mainContainer allowing it to be rendered on the webpage.


