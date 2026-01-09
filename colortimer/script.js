const backgroundColors = [
    'red',
     'blue',
      'green',
       'yellow',
        'purple',
         'black',
          'pink',
           'orange'
        ];

const colorCircle = document.querySelector('.theColor');
const buttons = document.querySelectorAll('.color-button');
const scoreElement = document.getElementById('score');

let score = 0;
let timeLeft = 3;
let timerInterval = null;

let currentColor = '';


function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

function newGame() {
    const shuffleColors = shuffleArray(backgroundColors);
    currentColor = shuffleColors[0];
    colorCircle.style.backgroundColor = currentColor;

    const buttonColors = shuffleArray(backgroundColors);
    const buttonText = shuffleArray(backgroundColors);

    buttons.forEach((btn, index) => {
        btn.style.backgroundColor = buttonColors[index];
        btn.innerText = buttonText[index];
    })

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 3;
    document.getElementById('time').innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            score = 0;
            scoreElement.innerText = score;
            alert('Времето изтече!');
            newRound();
            startTimer();
        }
    }, 1000);
}


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(timerInterval);
        const clickedColor = btn.innerText;
        if (clickedColor === currentColor) {
            score++;
        } else {
            alert('Грешно! Опитайте пак.');
            score = 0;
        }
        scoreElement.innerText = score;
        newGame();
    });
});

newGame();


//function randomColor() {
//    const index = Math.floor(Math.random() * backgroundColors.length)
//    return backgroundColors[index];
//}
//
//function randomButtonsText() {
//    const index = Math.floor(Math.random() * backgroundColors.length)
//    return backgroundColors[index];
//}
//
//
//buttons.addEventListener('click', () => {
//    document.querySelector('.theColor').style.backgroundColor = randomColor();
//    buttons.innerText = randomButtonsText();
//    
//    
//})







