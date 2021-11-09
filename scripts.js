
let turn = 0; // 1 is X and 0 is O
let inputCount = 0; //for checking draw
let winStatus = 0;  // 1 means there's a winner
let highlightPos = new Array();//to show which order of arrangement of X or O won the game

let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let emptyPos = document.querySelectorAll('.box');
let resultBox = document.querySelector('.result');
let restart = document.querySelector('.reload');


//UPDATES X and 0 in the board and returns status if updated
function update(pos){
    let a = turn ? 'X':'O';
    if(!winStatus){
        board[pos[0]][pos[1]] = a;
        inputCount +=1;
        return true;
    }
    return false;
}

//checking winstatus
function checkWin(){
    //main diagonal check
    if(board[0][0] == board[1][1] && board[1][1]==board[2][2]){
        highlightPos = [
            [0,0],
            [1,1],
            [2,2]
        ]
        return true;
    } 
    // other diagonal check
    if(board[0][2] == board[1][1] && board[1][1] ==board[2][0]){
        highlightPos = [
            [0,2],
            [1,1],
            [2,0]
        ]
        return true;
       
    } 
    //row and column check
    for(let i = 0; i<3;i++){
        if(board[i][0] == board[i][1] && board[i][1] ==board[i][2]){
            highlightPos = [
                [i,0],
                [i,1],
                [i,2]
            ]
            return true;
           
        } 
        
        if(board[0][i] == board[1][i] && board[1][i]==board[2][i]){
            highlightPos = [
                [0,i],
                [1,i],
                [2,i]
            ]
            return true;
        } 
    }
    return false;
}

function highlightWin(){
    let count = 0;
    for(let i=0; i<3; i++){
        for(let j =0; j<3; j++){
            for(let k=0; k<3;k++){
                if(JSON.stringify([i,j])==JSON.stringify(highlightPos[k])){
                    emptyPos[count].classList.add('win');
                }
            }
            count++;
        }
    }
}



emptyPos.forEach(emptyPos =>{
    emptyPos.addEventListener('click',function(){
        var pos = emptyPos.firstChild.textContent;

        //checking if X or O has already been assigned to the position
        if(pos.length != 1 && winStatus != 1){
            if(update(pos)){
                let a = turn ? 'X':'O';
                emptyPos.firstChild.textContent = a;
                emptyPos.firstChild.style.visibility = "visible";
                turn = turn ? 0:1;
            }

            //checking win and draw condition
            if(inputCount >= 5){
                if(checkWin()){
                    winStatus = 1;
                    turn = turn ? 0:1;
                    let a = turn ? 'X':'O';

                    highlightWin();

                    resultBox.innerHTML = a + " WON !! ";
                    resultBox.style.visibility= "visible";
                    resultBox.classList.add('win');
                    
                }else if(inputCount == 9){
                    resultBox.innerHTML = "DRAW";
                    resultBox.style.visibility= "visible";
                    resultBox.classList.add('draw');
                }
            }
            
        }
    })
    
});

//reset everything to beginning
restart.addEventListener("click",function(){
    
    turn = 0; 
    inputCount = 0; 
    winStatus = 0; 
    board = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    let count = 0;
    for(let i=0; i<3; i++){
        for(let j =0; j<3; j++){
            emptyPos[count].firstChild.innerHTML = i.toString() + j.toString();
            emptyPos[count].firstChild.style.visibility = "hidden";
            emptyPos[count].classList.remove('win');
            count++;
        }
    }
    resultBox.style.visibility= "hidden";
    
});



