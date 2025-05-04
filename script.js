const colorD = "red";
const colorL = "rgb(255, 125, 125)";

let domArray = document.getElementsByClassName("div");

setInterval(runLight,10000);

function runLight(){
    for(let i = 1; i < domArray.length-1; i++){
        domArray[i].style.backgroundColor = colorD;
        domArray[i+1].style.backgroundColor = colorL;
        domArray[i-1].style.backgroundColor = colorL;
    }

    
    // domArray.reverse();
}