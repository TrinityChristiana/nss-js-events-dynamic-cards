let getInputText = () => {
    return document.getElementById("textInput").value;
};


let cardNum = 0;
let getCardHTML = (cardText, cardNum) => {

    return `
        <p>${cardText}</p>
        <button id="${cardNum}" class="cardButton">delete</button>
    `
};


let createCard = () => {
    cardNum++;
    let text = getInputText();
    if (text !== "") {
        let cardContainer = document.querySelector(".card-container");
        let card = document.createElement("div");
        card.id = `card-${cardNum}`;
        card.classList.add(`card`);
        card.innerHTML = getCardHTML(text, cardNum);
        cardContainer.appendChild(card);
    }

};

let deleteCard = (num) => {
    console.log("Here's button", num);
    document.getElementById(`card-${num}`).remove();
};

let clearTextBox = () => {
    let textInput = document.getElementByName("cardInputForm");
    document.forms.cardInputForm.reset();
}

document.getElementById("createBtn").addEventListener("click", (e) => {
    let input = document.getElementById("textInput").value;
    if (!(/\S/.test(input))) {
        e.preventDefault();
    } else if (input !== "") {
        createCard();
        document.forms.cardInputForm.reset();
        e.preventDefault();
    }

});

document.addEventListener('click', function (e) {
    if (e.target && e.target.className == 'cardButton') {
        deleteCard(e.target.id);
    }
});