let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //2 players will be there playerX and playerO...turnO = true means its playerO turn
let winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame=()=> {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
//add eventlistener for each box(i.e for each button)
boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        console.log("Box was clicked ");
        if(turnO) {
            box.innerText="O";
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; //modifications not allowed after that
        checkWinner();
    });
});

const checkWinner=()=> {
    for(let pattern of winpattern) {
       // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1==pos2 && pos2==pos3) {
                console.log(`${pos1} is winner`);
                alert(`${pos1} is winner`);
                showWinner(pos1);
            }
        }
    }
};
const enableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";   
    }
};

const disableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=true;
    }
};

const showWinner=(winner)=> {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);