(function () {
'use strict';}());

/* initialization main */

let $startButton = document.querySelector("#start-button"),
    $gamePage = document.querySelector("#game-page"),
    $result = document.querySelector("#result-counter-result"),
    $timeScore = document.querySelector("#time-score"),
    $areaForCube = document.querySelector("#area-for-cube"),
    $setTime = document.querySelector("#set-time-input");

/* initialization other */
let isGameStarted = false,
    score = 0;

/* Add events */
$startButton.addEventListener("click", startTheGame);
$gamePage.addEventListener("click", checkDataBox);
$setTime.addEventListener('input', setGameTime);

/* Main function */

function startTheGame() {

    score = 0;

    isGameStarted = true;
    $startButton.classList.add("hide");

    setGameTime();

    $setTime.setAttribute("disabled", "true");
    var interval = setInterval(function () {
        var time = parseFloat($timeScore.textContent);


        if ($timeScore.textContent <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $timeScore.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);
    generationCube();
}

/* Generation cubes */

function generationCube() {

    $areaForCube.innerHTML = "";
    var gamePageSize = $gamePage.getBoundingClientRect();
    var gamePageSizeLeft = gamePageSize.width - random(60, 150);
    var gamePageSizeTop = gamePageSize.height - random(60, 150);

    var box = document.createElement("div");

    box.style.width = random(80, 150) + "px";
    box.style.height = 100 + "%";
    box.style.backgroundImage = "url(images/giphy.gif)";
    box.style.backgroundSize = 50 + "%";
    box.style.backgroundRepeat = "no-repeat";
    box.style.position = "absolute";
    box.style.left = random(0, gamePageSizeLeft) + "px";
    box.style.top = random(0, gamePageSizeTop) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-name", "box");
    $areaForCube.insertAdjacentElement("afterbegin", box);
}

/* Check element */

function checkDataBox(event) {
    if (event.target.dataset.name) {
        setGameScore();
        generationCube();
    }
}

/* Math random */

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setGameScore() {
    score++;
    $result.textContent = score;
}

/* Time */

function endGame() {
    isGameStarted = false;
    console.log("Конец игры");
    isGameStarted = false;
    $startButton.classList.remove("hide");
    $areaForCube.innerHTML = "";
    $setTime.removeAttribute("disabled", "true");
}

/* Set game time */

function setGameTime() {
    var setTime = parseInt($setTime.value);
    $timeScore.textContent = setTime.toFixed(1);
    if (setTime.toFixed(1) < 0 || setTime.toFixed(1) > 15 || setTime == "") {
        $startButton.setAttribute("disabled", "true");
        throw new Error("Введенное вами число меньше 0 или больше 15");
    } else {
        $startButton.removeAttribute("disabled", "true");
    }
}


/* Make mistake */
