const MAX_Attempts = 5;
const qwertyDiv = $('#qwerty');
const overlay = $('#overlay');
const phraseList = $('#phrase_list');
const btnReset = $('.btn__reset');

overlay.append('<button id="play">Play again</button>');

let playAgain = $("#play");
playAgain.hide();

playAgain.click(() => {
    restartGame();
});

let missed = 0;
let phrases = [
    "Space is cool",
    "Mangos are the best",
    "Electric cars are great",
    "Float like a butterfly sting like a bee",
    "Basketball is a great sport"
];


btnReset.click(() => {
    restartGame();
});

qwertyDiv.on('click',(event) => {
    const element = event.target;

    if (element.tagName === 'BUTTON' && element.className !== "selected") {
        const letter = element.textContent;
        const letterFound = checkLetter(letter);
        const allLetters = $(".letter");
        const allShown = $(".show");

        if (!letterFound) {
            missed++;
            updateHeart(false);
        }
        if (missed >= MAX_Attempts) {
            updateOverlay('lose');
        } else if (allShown.length >= allLetters.length) {
            updateOverlay('win');
        }
        element.className = "selected";
    }
});

function removeKeyboard() {
    while (qwerty.firstChild) {
        qwerty.removeChild(qwerty.firstChild);
    }
}

function restartGame() {
    overlay.hide();
    updateHeart(true)
    missed = 0;
    removeKeyboard();
    qwertyDiv.append(
        '<div class="keyrow">\n' +
        '          <button>q</button><button>w</button><button>e</button><button>r</button><button>t</button><button>y</button><button>u</button><button>i</button><button>o</button><button>p</button>\n' +
        '        </div>\n' +
        '        <div class="keyrow">\n' +
        '          <button>a</button><button>s</button><button>d</button><button>f</button><button>g</button><button>h</button><button>j</button><button>k</button><button>l</button>\n' +
        '        </div>\n' +
        '        <div class="keyrow">\n' +
        '          <button>z</button><button>x</button><button>c</button><button>v</button><button>b</button><button>n</button><button>m</button>\n' +
        '        </div>');

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
}

function updateOverlay(className) {
    overlay.removeClass('start');
    overlay.addClass(className);
    overlay.show();

    removeKeyboard();
    playAgain.show();
}

function updateHeart(reset) {
    if (!reset) {
        const tries = $(".tries");
        if (tries.length > 0) {
            const parent = tries[0];
            const child = parent.firstChild;
            parent.className = "lost";
            child.setAttribute("src", "images/lostHeart.png");
        }
    } else {
        const tries = $(".lost");
        for (let i = 0; i < tries.length; i++) {
            const parent = tries[i];
            const child = parent.firstChild;
            parent.className = "tries";
            child.setAttribute("src", "images/liveHeart.png");
        }
    }
}

function getRandomPhraseAsArray(arr) {
    if (arr) {
        const randomPos = Math.floor(Math.random() * arr.length);
        const phrase = arr[randomPos];
        return phrase.split("");
    }
    return ""
}

function addPhraseToDisplay(arr) {
    const phraseList = $('#phrase_list');
    const letters = $('.letter');
    const space = $('.space');
    for (let i = 0; i < letters.length; i++) {
        letters[i].remove();
    }

    for (let i = 0; i < space.length; i++) {
        space[i].remove();
    }

    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            const letter = arr[i];
            if (letter !== " ") {
                phraseList.append("<li class='letter'>" + letter + "</li>");
            } else {
                phraseList.append("<li class='space'>" + " " + "</li>");
            }
        }
    }
}

function checkLetter(selectedLetter) {
    const allLetters = $(".letter");
    let matchingLetter = null;
    for (let i = 0; i < allLetters.length; i++) {
        const element = allLetters[i];
        if (element.textContent.toLocaleLowerCase() === selectedLetter.toLocaleLowerCase()) {
            element.className += " show";
            matchingLetter = selectedLetter;
        }
    }
    console.log(matchingLetter);
    return matchingLetter;
}