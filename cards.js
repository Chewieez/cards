// create generator function to make a unique Id for section and button ids
const uniqueIdGen = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
// store an instance of id generator in a variable
let idFactory = uniqueIdGen();

// get control of dom element (button) that user will click to create a card
const createCardBtnEl = document.getElementById("createCardBtn");

/* create function to create a new card to be inserted into the DOM. Card should be created when
 user clicks the "Create" button. This card should include a delete button. Each card created
 should include a unique id for the entire card and for the delete button. */
let createCard = function(event) {
    // console.log(event);
    // get control of the part of the DOM where the cards will be placed.
    let cardsEl = document.getElementById("cards");
    // create a unique id to use in article & button tags and assign to variable
    let currentCardId = idFactory.next().value;
    // pull text input from the textarea DOM element that the user submitted and assign to variable
    let cardContent = document.getElementById("card-content");
    // place the html code to create the card into the DOM using .innerHTML
    cardsEl.innerHTML += `
        <article class="card" id="article_${currentCardId}">
            <p>${cardContent.value}</p>
            <button id="button_${currentCardId}">Delete</button>
        </article>
        `
    // clear the contents of the textarea after the "Create" button has been clicked and the new card has been created    
    cardContent.value = "";    
}

// create event listener to listen for the click of the "Create" button and run function to create a new card
createCardBtnEl.addEventListener("click", createCard)


// get control of DOM parent element that user will click to delete a card
const cardsEl = document.getElementById("cards")

// create a function to delete the card that the user clicked the "delete" button on. 
let deleteCard = function(event) {
    // console.log event to see what was targeted
    console.log("deleteCard event: ", event);
    // console.log("btnId: ", event.target.id.split("_")[1]);

    // get the ID of the event that was clicked on
    const btnId = event.target.id
    // parse out the number in the ID of the event that was clicked
    const btnIdNum = btnId.split("_")[1];

    // check if the ID of event that was clicked starts with "button_". If so, then remove that card
    if (btnId.startsWith("button_")) {
        // first console log a message to see if the "if statement" is working
        // console.log("yes it starts with button_")
        // assign the id of the card to be deleted to a variable by using document.getElementById
        // and the "article_" + the button Id number that was stored in a variable earlier. (btnIdNum) 
        let cardToRemove = document.getElementById("article_" + btnIdNum)
        // use .removeChild functionality to remove the card by referencing the parent container 
        cardsEl.removeChild(cardToRemove)

    }
}

// add event listener to listen for a click on the delete card button, and run the function to delete card
cardsEl.addEventListener("click", deleteCard)
