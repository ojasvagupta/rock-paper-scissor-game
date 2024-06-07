let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

const genCompChoice=()=> {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("Game Was Draw");
    let message=document.querySelector("#msg");
        message.innerText="DRAW";

};

const showWinner=(userWin)=> {
    if (userWin)
    {
        console.log("you win!");
        let message=document.querySelector("#msg");
        message.innerText=`you won userChoice beats compChoice`;
        message.style.backgroundColor="Green";
        userscore++;
        let youscr=document.querySelector("#user-score");
        youscr.innerText=userscore;

    }
    else{
        console.log("you Lose!");
        let message=document.querySelector("#msg");
        message.innerText=`you lose compChoice beats userChoice`;
        message.style.backgroundColor="red";
        compscore++;
        let compscr=document.querySelector("#comp-score");
        compscr.innerText=compscore;
        
    }
};

const playGame=(userchoice)=> {
    console.log("user choice=",userchoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userchoice===compChoice){
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userchoice==="rock")
        {
            userWin=compChoice ==="paper" ? false : true ;
        }
        else if(userchoice==="paper")
        {
            userWin=compChoice==="scissors"? false : true ;
        }
        else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});