/*  Author: Dmitriy Usov.
Last changes: 12.06.2020.
*/

//** inicialization constants
const start = document.querySelector('.start-cube'),
      startName = document.querySelector('.name-for-start-button'),
      gamePage = document.querySelector('.game-page'),
      gamePageForCube = document.querySelector('.game-page-for-cube');
       

//* inicialization lets
let incrementPoints = 0,
    points = document.querySelector('.points'), 
    globalTime = document.querySelector('#time'),
    results = document.querySelector('.results');
    
//* start game function
start.addEventListener("click", function(){
    start.classList.add('hidden');
    startName.classList.add('hidden');

    //* function (GenerationCube)
    generationCube();

    //* function (startTheTime)
    startTheTime();
});


function startTheTime() {

    //* set interval 
    let interval = setInterval(function(){
        let time = parseInt(globalTime.textContent);
        if(time <= 0){
            clearInterval(interval);
            endGame();
        } else {
            globalTime.textContent = (time - 1);
        }
    }, 100);
}

//* function end game
function endGame(){
    gamePageForCube.innerHTML = '';
    start.classList.remove('hidden');
    startName.classList.remove('hidden');
    results.textContent = points.textContent;
    globalTime.textContent = 10;
}

//* function (GenerationCube)
function generationCube() {

    //* deleted old cube to generate a new cube 
    gamePageForCube.innerHTML = '';
    
    //* get size 
    let width = gamePage.clientWidth - 40,
        height = gamePage.clientHeight - 40;

    //* create a box
    let cube = document.createElement('div');
    cube.style.position = 'absolute';
    cube.style.width = random(70, 150) + 'px';
    cube.style.height = random(30, 130) + 'px';
    cube.style.left = random(0, width) + 'px';
    cube.style.top = random(0, height) + 'px';
    cube.style.cursor = 'pointer';
    cube.style.backgroundColor = '#4D5C5E';
    cube.style.border = 2 + 'px' + ' solid' + ' #000000';
    cube.setAttribute('data-name', 'box');

    //* append a box
    gamePageForCube.appendChild(cube);

    //* add the class 'hidden'
    gamePage.style.overflow = 'hidden';
}

//* add event to check dataset
gamePage.addEventListener('click', function(event){

    //* add point if you hit the cube
    if(event.target.dataset.name){
        incrementPoints++;
        points.textContent = incrementPoints;
        generationCube();
    }
});

//* add random function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }