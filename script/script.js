/* 
* Author: Dmitriy Usov.
* Last changes: 12.06.2020.
*/

//** inicialization constants
const start = document.querySelector('.start-cube'),
      startName = document.querySelector('.name-for-start-button'),
      gamePage = document.querySelector('.game-page'),
      gamePageForCube = document.querySelector('.game-page-for-cube');
       

//* inicialization lets
let incrementPoints = 0,
    points = document.querySelector('.points'), 
    time = document.querySelector('#time'),
    results = document.querySelector('.results'),
    colors = ['#78281F', '#FFF333', '#00E4FF'];

//* start game function
start.addEventListener("click", function(){

    if (time.value <= 0 || time.value == "") {
        start.setAttribute("disabled", 'true');
    } else {
        startName.classList.add('hidden');
        start.classList.add('hidden');
        start.removeAttribute("disabled");

//* restart
        results.textContent = 0;
        points.textContent = 0;
        incrementPoints = 0;

//* function (GenerationCube)
        generationCube();

//* function (startTheTime)
        startTheTime();
    }
});


function startTheTime() {

//* set interval 
    let interval = setInterval(function(){
        let time1 = parseFloat(time.value);
        if(time.value <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.value = (time1 - 0.1).toFixed(1);
        }
    }, 100);
}

//* function end game
function endGame(){
    gamePageForCube.innerHTML = '';
    start.classList.remove('hidden');
    startName.classList.remove('hidden');
    results.textContent = points.textContent;
}

//* function (GenerationCube)
function generationCube() {

//* deleted old cube to generate a new cube 
    gamePageForCube.innerHTML = '';
    

//* get size 
    let width = gamePage.clientWidth,
        height = gamePage.clientHeight;


//* create a box
    let cube = document.createElement('div');
    cube.style.position = 'absolute';
    cube.style.width = random(110, 170) + 'px';
    cube.style.height = random(90, 150) + 'px';
    cube.style.left = random(0, width) + 'px';
    cube.style.top = random(0, height) + 'px';
    cube.style.cursor = 'pointer';

    if(parseInt(points.textContent) >= 5 && parseInt(points.textContent) <= 10) {
        cube.style.backgroundColor = colors[0];
    } else if (parseInt(points.textContent) >= 11 && parseInt(points.textContent) <= 20 ) {
        cube.style.backgroundColor = colors[1];
    } else if (parseInt(points.textContent) >= 21 && parseInt(points.textContent) <= 30) {
        cube.style.backgroundColor = colors[2];
    } else {
        cube.style.backgroundColor = '#4D5C5E';
    }

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
        points.textContent = ++incrementPoints;
        generationCube();
    } else {
        
    }
});

//* add random function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }



//** inicialization constants
const start = document.querySelector('.start-cube'),
      startName = document.querySelector('.name-for-start-button'),
      gamePage = document.querySelector('.game-page'),
      gamePageForCube = document.querySelector('.game-page-for-cube');
       

//* inicialization lets
let incrementPoints = 0,
    points = document.querySelector('.points'), 
    time = document.querySelector('#time'),
    results = document.querySelector('.results'),
    colors = ['#78281F', '#FFF333', '#00E4FF'];

//* start game function
start.addEventListener("click", function(){

    if (time.value <= 0 || time.value == "") {
        start.setAttribute("disabled", 'true');
    } else {
        startName.classList.add('hidden');
        start.classList.add('hidden');
        start.removeAttribute("disabled");

//* restart
        results.textContent = 0;
        points.textContent = 0;
        incrementPoints = 0;

//* function (GenerationCube)
        generationCube();

//* function (startTheTime)
        startTheTime();
    }
});


function startTheTime() {

//* set interval 
    let interval = setInterval(function(){
        let time1 = parseFloat(time.value);
        if(time.value <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.value = (time1 - 0.1).toFixed(1);
        }
    }, 100);
}

//* function end game
function endGame(){
    gamePageForCube.innerHTML = '';
    start.classList.remove('hidden');
    startName.classList.remove('hidden');
    results.textContent = points.textContent;
}

//* function (GenerationCube)
function generationCube() {

//* deleted old cube to generate a new cube 
    gamePageForCube.innerHTML = '';
    

//* get size 
    let width = gamePage.clientWidth,
        height = gamePage.clientHeight;


//* create a box
    let cube = document.createElement('div');
    cube.style.position = 'absolute';
    cube.style.width = random(110, 170) + 'px';
    cube.style.height = random(90, 150) + 'px';
    cube.style.left = random(0, width) + 'px';
    cube.style.top = random(0, height) + 'px';
    cube.style.cursor = 'pointer';

    if(parseInt(points.textContent) >= 5 && parseInt(points.textContent) <= 10) {
        cube.style.backgroundColor = colors[0];
    } else if (parseInt(points.textContent) >= 11 && parseInt(points.textContent) <= 20 ) {
        cube.style.backgroundColor = colors[1];
    } else if (parseInt(points.textContent) >= 21 && parseInt(points.textContent) <= 30) {
        cube.style.backgroundColor = colors[2];
    } else {
        cube.style.backgroundColor = '#4D5C5E';
    }

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
        points.textContent = ++incrementPoints;
        generationCube();
    } else {
        
    }
});

//* add random function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }

//** inicialization constants
const start = document.querySelector('.start-cube'),
      startName = document.querySelector('.name-for-start-button'),
      gamePage = document.querySelector('.game-page'),
      gamePageForCube = document.querySelector('.game-page-for-cube');
       

//* inicialization lets
let incrementPoints = 0,
    points = document.querySelector('.points'), 
    time = document.querySelector('#time'),
    results = document.querySelector('.results'),
    colors = ['#78281F', '#FFF333', '#00E4FF'];

//* start game function
start.addEventListener("click", function(){

    if (time.value <= 0 || time.value == "") {
        start.setAttribute("disabled", 'true');
    } else {
        startName.classList.add('hidden');
        start.classList.add('hidden');
        start.removeAttribute("disabled");

//* restart
        results.textContent = 0;
        points.textContent = 0;
        incrementPoints = 0;

//* function (GenerationCube)
        generationCube();

//* function (startTheTime)
        startTheTime();
    }
});


function startTheTime() {

//* set interval 
    let interval = setInterval(function(){
        let time1 = parseFloat(time.value);
        if(time.value <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.value = (time1 - 0.1).toFixed(1);
        }
    }, 100);
}

//* function end game
function endGame(){
    gamePageForCube.innerHTML = '';
    start.classList.remove('hidden');
    startName.classList.remove('hidden');
    results.textContent = points.textContent;
}

//* function (GenerationCube)
function generationCube() {

//* deleted old cube to generate a new cube 
    gamePageForCube.innerHTML = '';
    

//* get size 
    let width = gamePage.clientWidth,
        height = gamePage.clientHeight;


//* create a box
    let cube = document.createElement('div');
    cube.style.position = 'absolute';
    cube.style.width = random(110, 170) + 'px';
    cube.style.height = random(90, 150) + 'px';
    cube.style.left = random(0, width) + 'px';
    cube.style.top = random(0, height) + 'px';
    cube.style.cursor = 'pointer';

    if(parseInt(points.textContent) >= 5 && parseInt(points.textContent) <= 10) {
        cube.style.backgroundColor = colors[0];
    } else if (parseInt(points.textContent) >= 11 && parseInt(points.textContent) <= 20 ) {
        cube.style.backgroundColor = colors[1];
    } else if (parseInt(points.textContent) >= 21 && parseInt(points.textContent) <= 30) {
        cube.style.backgroundColor = colors[2];
    } else {
        cube.style.backgroundColor = '#4D5C5E';
    }

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
        points.textContent = ++incrementPoints;
        generationCube();
    } else {
        
    }
});

//* add random function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }
