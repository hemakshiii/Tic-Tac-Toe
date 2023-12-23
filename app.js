let boxes=document.querySelectorAll(".box")
let reBtn = document.querySelector(".reset")
let newBtn = document.querySelector("#new")
let winner = document.querySelector("#winner")
let msg=document.querySelector(".msg")

let turn0=true;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//reset button
const resetGame=()=>{
    turn0=true;
    enablebox();
    msg.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
box.disabled=true;
checkWinner();
    });
});

let showwinner=(winne)=>{
winner.innerText=`Congratulations Winner is ${winne}`
msg.classList.remove("hide")
}

const disablebox=()=>{
    for(let box of boxes)
    { 
      box.disabled=true;  
    }
}

let checkWinner=()=>{
    for(let winning of win)
    {
       let pos1=boxes[winning[0]].innerText
       let pos2=boxes[winning[1]].innerText
       let pos3=boxes[winning[2]].innerText

       if(pos1 != "" && pos2 != "" && pos3 != "")
       {
         if(pos1===pos2 && pos2===pos3 && pos1===pos3)
         {
            console.log("winner", pos1)
            disablebox();
            showwinner(pos1);
         }
       }
    }
}

const enablebox=()=>{
    for(let box of boxes)
    { 
      box.disabled=false;  
      box.innerText="";
    }
}

newBtn.addEventListener("click",resetGame);
reBtn.addEventListener("click",resetGame);