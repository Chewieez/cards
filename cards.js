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
    console.log(event);
    let cardsEl = document.getElementById("cards");
    let currentCardId = idFactory.next().value;

    cardsEl.innerHTML += `
        <article class="card" id="article_${currentCardId}">
            <p>I'm a new card</p>
            <button id="button_${currentCardId}">Delete Me</button>
        </article>
        `
        
}



createCardBtnEl.addEventListener("click", createCard)