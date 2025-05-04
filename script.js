let lights = $('.light'); // LIGHTS ARRAY SELECTED
let direction = 1;
let index = 0;
let interalLight;

function StartLightning(){
    lights.removeClass('active');        // Turn off all lights
    lights.eq(index).addClass('active'); // Turn on current light

    index += direction;                  // Move in the current direction

    if (index === lights.length - 1 || index === 0) {
        direction *= -1;                // Reverse direction at the ends
    }
}


document.getElementById('music').pause();

let start = 0;
document.getElementById('Start').addEventListener('click', function(){
    if(start == 0){
        start = 1;
        interalLight = setInterval(StartLightning, 100);
        document.getElementById('music').play();
    }
})


document.getElementById('Stop').addEventListener('click', function(){
    if(start == 1){
        start = 0;
        clearInterval(interalLight);
        document.getElementById('music').pause();
    }
})