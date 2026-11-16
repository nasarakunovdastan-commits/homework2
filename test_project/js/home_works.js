// 1.1

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (gmailRegex.test(gmailInput.value)) {
    gmailResult.textContent = "Gmail правильный!";
    gmailResult.style.color = "green";
  } else {
    gmailResult.textContent = "Gmail неправильный!";
    gmailResult.style.color = "red";
  }
};

// 1.2

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let direction = 'right';

setInterval(() => {
    const maxX = parentBlock.clientWidth - childBlock.offsetWidth;
    const maxY = parentBlock.clientHeight - childBlock.offsetHeight;

    if (direction === 'right') {
        positionX++;

        if (positionX >= maxX) {
            direction = 'down';
        }
    } 

    else if (direction === 'down') {
        positionY++;

        if (positionY >= maxY) {
            direction = 'left';
        }
    } 

    else if (direction === 'left') {
        positionX--;

        if (positionX <= 0) {
            direction = 'up';
        }
    } 

    else if (direction === 'up') {
        positionY--;

        if (positionY <= 0) {
            direction = 'right';
        }
    }

    childBlock.style.left = positionX + 'px';
    childBlock.style.top = positionY + 'px';

}, 10);

// 2

const seconds = document.querySelector('#seconds');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let counter = 0;
let interval = null;

start.addEventListener('click', () => {
    if (interval === null) {
        interval = setInterval(() => {
            counter++;
            seconds.textContent = counter;
        }, 1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;

    counter = 0;
    seconds.textContent = counter;
});