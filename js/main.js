const emojis = [
    "🐱",
    "🐱",
    "🐼",
    "🐼",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🦬",
    "🦬",
    "🦓",
    "🦓",
    "🐖",
    "🐖",
    "🐯",
    "🐯",
]
let openCards = []
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))
for (let i = 0; i < emojis.length; i++) {

    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);

}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
        return;
    }

    if (openCards.length == 2) {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        openCards = []
    }
}
