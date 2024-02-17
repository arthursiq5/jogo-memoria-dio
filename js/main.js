(function() {
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
    ];
    let openCards = [];
    (function() {
        let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
        const tabuleiroHtml = shuffleEmojis.map(emoji => `<div class="item">${emoji}</div>`)
        document.getElementById('game').innerHTML = tabuleiroHtml.join('')
        document.querySelectorAll('.item').forEach((item) => item.addEventListener('click', handleClick))
    })();
    
    function handleClick() {
        if (openCards.length < 2) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }
    
        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
        }
    }
    
    function checkVictory() {
        if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            alert("Você venceu !");
        }
    }
    
    function checkMatch() {
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            openCards[0].classList.add("boxMatch");
            openCards[1].classList.add("boxMatch");
            checkVictory()
            openCards = [];
            return;
        }
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        openCards = [];
    }
})()
