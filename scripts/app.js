
const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");
const topic1 = document.getElementById("topic1");
const topic1text = document.getElementById("topic1-text");
const topic2 = document.getElementById("topic2");
const topic2text = document.getElementById("topic2-text");
const changeTitleBtn = document.getElementById("change-title-btn");
const changeSubtitleBtn = document.getElementById("change-subtitle-btn");
const changeTopic1Btn = document.getElementById("change-topic-1-btn");
const genTopic1TextBtn = document.getElementById("gen-text-topic-1-btn");
const colorBtn = document.getElementById("change-bg-color-btn");
const addCardBtn = document.getElementById("add-card-btn");
const clearCardsBtn = document.getElementById("clear-cards-btn");
const addCustomCardBtn = document.getElementById("add-custom-card-btn");
const customTextInput = document.getElementById("custom-text");
const cardsContainer = document.getElementById("cards-container");
const changeFontBtn = document.getElementById("change-font-btn");
const DoNotClickBtn = document.getElementById("do-not-click-btn");
const bodyText = document.getElementById("myText");

// change title text //
changeTitleBtn.addEventListener("click", () => {
    if (pageTitle.innerText === "This is my Title") {
        pageTitle.innerText = "Cats: An Essay";
    }
    else {
        pageTitle.innerText = "This is my Title";
    }
})

// change subtitle text //
changeSubtitleBtn.addEventListener("click", () => {
    if (subtitle.innerText === "This is my subtitle") {
        subtitle.innerText = "How furry felines are cat-purring the hearts of a nation";
    }
    else {
        subtitle.innerText = "This is my subtitle";
    }
})

// change topic 1 //
changeTopic1Btn.addEventListener("click", () => {
    if (topic1.innerText === "This is a topic") {
        topic1.innerText = "Point A: They're very cute";
    }
    else {
        topic1.innerText = "This is a topic";
    }
})

// change topic 1 text //
genTopic1TextBtn.addEventListener("click", () => {
    if (topic1text.innerText === "Generate this text with a button click.") {
        topic1text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora in iusto corrupti fugiat ipsum, nisi minus soluta labore rem, ratione ut eius eos, molestias repellat provident. Voluptates, eaque doloribus.";
    }
    else {
        topic1text.innerText = "Generate this text with a button click.";
    }
})


// change background color to random color
colorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
})

function createCard(text) {
    const card = document.createElement("div");
    card.className = 'card';
    const content = document.createElement("p");
    content.innerText = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Card";

    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;

}

//add card functionality //

addCardBtn.addEventListener("click", () => {
    const card = createCard("Surprise, this is also about cats");
    cardsContainer.appendChild(card);
})

//create a custom card

addCustomCardBtn.addEventListener("click", () => {
    const value = customTextInput.value.trim();
    if(!value) return;

    const card = createCard(value);
    cardsContainer.appendChild(card);

    customTextInput.value = "";
})


// clear all cards
clearCardsBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
})

//change font (googled this because I wanted to know how)//
changeFontBtn.addEventListener("click", () => {
    if (myText.style.fontFamily != "Georgia")
    {myText.style.fontFamily = "Georgia";}
    else {
        myText.style.fontFamily = "serif";
    }
    })

// alert on click

DoNotClickBtn.addEventListener("click", () => {
alert("Oh no! You weren't supposed to click this!")
    })