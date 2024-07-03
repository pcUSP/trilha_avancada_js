const words = ['javascript', 'html', 'css', 'react', 'angular', 'vue', 'typescript'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;
const correctLetters = [];
const wrongLetters = [];

const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const finalMessageElement = document.getElementById('final-message');
const hangmanParts = document.querySelectorAll('.figure-container__figure line');

const displayWord = () => {
    wordElement.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `)
            .join('')
        }
    `;
    
    const innerWord = wordElement.innerText.replace(/\n/g, '');
    if (innerWord === selectedWord) {
        finalMessageElement.innerText = 'Parabéns! Você venceu!';
        playable = false;
    }
};

const updateWrongLetters = () => {
    wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Letras erradas:</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    
    hangmanParts.forEach((part, index) => {
        const errors = wrongLetters.length;
        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });
    
    if (wrongLetters.length === hangmanParts.length) {
        finalMessageElement.innerText = 'Você perdeu!';
        playable = false;
    }
};

const showNotification = () => {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
};

const checkLetter = (letter) => {
    if (playable) {
        if (!correctLetters.includes(letter) && !wrongLetters.includes(letter)) {
            if (selectedWord.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
        } else {
            showNotification();
        }
    }
};

const startGame = () => {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    correctLetters.splice(0);
    wrongLetters.splice(0);
    displayWord();
    updateWrongLetters();
    finalMessageElement.innerText = '';
    hangmanParts.forEach(part => part.style.display = 'none');
    playable = true;
};

window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();
        checkLetter(letter);
    }
});

startGame();
