
const initialize = () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  createCards(cards);

  document.getElementById("btn--sort").onclick = () => {
    cards = sortArrData(cards);
  };
  document.getElementById("btn--shuffle").onclick = () => {
    cards = shuffleCards(cards);
  };
};

const createCards = (cardsArr) => {
  let cards = document.getElementById("card-board");
  cards.innerHTML = "";

  cardsArr.map((element)=> {
    let div = document.createElement("DIV");
    div.className = "card";
    div.innerText = element;
    cards.appendChild(div);
  });
};

const sortArrData = (cards) => {
  cards.sort((a, b) => a - b);
  createCards(cards);
  return cards;
};

const shuffleCards = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[k];
    cards[k] = temp;
  }
  createCards(cards);
  return cards;
};

initialize();