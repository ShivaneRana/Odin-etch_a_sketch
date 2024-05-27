const clear = document.querySelector("#clear"); 
const resize = document.querySelector("#resize");
const rgb = document.querySelector("#rgb");
const center = document.querySelector("#center");

//this is used to find width and height of the center div
const computedWidth = center.offsetWidth; 
const computedHeight = center.offsetHeight; 

//this is used to change color of div
const color = "black";

//default grid size
for(let i = 0;i<(12*12);i++){
    if(i === 1){    
    console.log("current grid size is set to default:  "+12);
    }
    const div = document.createElement("div");
    div.style.width = `${computedWidth/12-0.01}px`;
    div.style.height = `${computedHeight/12-0.01}px`;
    div.style.backgroundColor = "purple";
    div.style.border = "0.05px black solid";
    
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
    console.log("custom grid size:  "+gridSize);   
    for(let i = 0;i<(gridSize*gridSize);i++){
        const div = document.createElement("div");
        div.style.width = `${computedWidth/gridSize-0.01}px`;
        div.style.height = `${computedHeight/gridSize-0.01}px`;
        div.style.backgroundColor = "purple";
        div.style.border = "0.05px black solid";

        //this is for changing the color of the div when mouse hover on it
        div.addEventListener("mouseover",() =>{
            div.style.backgroundColor = color;
        })
        center.append(div);
    }
}