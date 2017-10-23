const uniqueIdGen = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

let idFactory = uniqueIdGen();

const createCardBtnEl = document.getElementById("createCardBtn");

let createCard = function(event) {
    // console.log(event);
    let cardsEl = document.getElementById("cards");
    let currentCardId = idFactory.next().value;
    let cardContent = document.getElementById("card-content");
    console.log(cardContent)
    cardsEl.innerHTML += `
        <article class="card" id="article_${currentCardId}">
            <p>${cardContent.value}</p>
            <button id="button_${currentCardId}">Delete Me</button>
        </article>
        `
    cardContent.value = "";    
}

createCardBtnEl.addEventListener("click", createCard)

const cardsEl = document.getElementById("cards")

let deleteCard = function(event) {
    console.log("deleteCard event: ", event);
    // console.log("btnId: ", event.target.id.split("_")[1]);
    const cardsEl = document.getElementById("cards");
    const btnId = event.target.id
    const btnIdNum = btnId.split("_")[1];

    if (btnId.startsWith("button_")) {
        // console.log("yes it starts with button_")
        let cardToRemove = document.getElementById("article_" + btnIdNum)
        cardsEl.removeChild(cardToRemove)

        
    }
}



cardsEl.addEventListener("click", deleteCard)
