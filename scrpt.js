let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newGameBtn=document.querySelector("#New-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn = true;//playerX,playerO
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide")
};


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
       
    }
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
       box.innerText="";
    }
};

const showWinner=(WINNER)=>{
    msg.innerText=`Congratulatuions winner is ${WINNER}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
       
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);
            }

        }
    }

};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);