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
    let cardContainer = document.querySelector(".card-container");
    let card = document.createElement("div");
    card.id = `card-${cardNum}`;
    card.innerHTML = getCardHTML(text, cardNum);  
    cardContainer.appendChild(card);
};

let deleteCard = (num) => {
    console.log("Here's button", num);
    document.getElementById(`card-${num}`).remove();
};


document.getElementById("createBtn").addEventListener("click", () => createCard());

document.addEventListener('click',function(e){
    if(e.target && e.target.className=='cardButton'){
          deleteCard(e.target.id);
    }
});
  

