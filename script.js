const clear = document.querySelector("#clear"); 
const resize = document.querySelector("#resize");
const rgb = document.querySelector("#rgb");
const center = document.querySelector("#center");
const outline = document.querySelector("#outline");

//this is used to find width and height of the center div
const computedWidth = center.offsetWidth; 
const computedHeight = center.offsetHeight; 

//this is used to change color of div
let red = 0;
let green = 0;
let blue = 0;
let color = `rgb(${red},${green},${blue})`;

//default grid size
for(let i = 0;i<(12*12);i++){

    //display that current grid is default
    if(i === 1){    
    console.log("current grid size is set to default:  "+12);
    }

    const div = document.createElement("div");
    div.style.width = `${computedWidth/12}px`;
    div.style.height = `${computedHeight/12}px`;
    div.style.backgroundColor = "purple";
    div.style.outline = "0.01px black solid";
    
    //this is for changing the color of the div when mouse hover on it
    div.addEventListener("mouseover",() =>{
        div.style.backgroundColor = color;
    })
    
    center.append(div);
}

//generate grid size on clicking resize
resize.addEventListener("click",() => {
    let ask = prompt("What size do you want?")
    if(ask === undefined || ask === null || ask === ""){
        alert("Input not registered");
    }else if(ask >100){
        alert("value over 100 are not allowed");
    }else if(ask <=100){
        center.textContent = "";
        changeGridSize(ask);
    }else{
        alert(`${typeof ask} not allowed`);
    }
})

//clear grid when clear button is clicked
clear.addEventListener("click",() =>{
    center.textContent = "";
})

//this function change the size of the grid
function changeGridSize(gridSize){
    console.log("Current custom grid size:  "+gridSize);
    for(let i = 0;i<(gridSize*gridSize);i++){
        const div = document.createElement("div");
        div.style.width = `${computedWidth/gridSize}px`;
        div.style.height = `${computedHeight/gridSize}px`;
        div.style.backgroundColor = "purple";
        div.style.outline = "0.01px black solid";

        //this is for changing the color of the div when mouse hover on it
        div.addEventListener("mouseover",() =>{
            div.style.backgroundColor = color;
        })
        center.append(div);
    }
}



rgb.addEventListener("click",changeColor);

//function for changing color
function changeColor(){
    let red1 = Math.floor(prompt("Enter rgb value for red","Enter value from 0-255"));
    let green1 = Math.floor(prompt("Enter rgb value for green","Enter value from 0-255"));
    let blue1 = Math.floor(prompt("Enter rgb value for blue","Enter value from 0-255"));
    red = red1;
    green = green1;
    blue = blue1;
    color = `rgb(${red},${green},${blue})`;
}

//

outline.addEventListener("click",() =>{
    if(outline.textContent === "Outline:On"){
        outline.textContent = "Outline:Off";
        outlineToggle = "";
    }else if(outline.textContent === "Outline:Off"){
        outline.textContent = "Outline:On";
        outlineToggle = "0.01px black solid";
    }
})

//function for toogling outline
