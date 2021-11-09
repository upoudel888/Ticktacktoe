
let turn = 0; // 1 is X and 0 is O
let inputCount = 0; //for checking draw
let winStatus = 0;  // 1 means there's a winner
let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


//UPDATES X and 0 in the board and returns status if updated
function update(pos = [0,0]){
    let a = turn ? 'X':'O';
    console.log(a);
    if(!winStatus){
        board[pos[0]][pos[1]] = a;
        inputCount +=1;
        console.log(board);
        return true;
    }
    return false;
}

//checking winstatus
function checkWin(){
    //main diagonal check
    if(board[0][0] == board[1][1] && board[1][1]==board[2][2]){
        console.log('main');
        return true;
    } 
    // other diagonal check
    if(board[0][2] == board[1][1] && board[1][1] ==board[2][0]){
        console.log('other');
        return true;
       
    } 

    //row and column check
    for(let i = 0; i<3;i++){
        if(board[i][0] == board[i][1] && board[i][1] ==board[i][2]){
            console.log('row',i);
            return true;
           
        } 
        
        if(board[0][i] == board[1][i] && board[1][i]==board[2][i]){
            console.log('column',i);
            return true;
        } 
    }
    return false;
}


let emptyPos = document.querySelectorAll('td');
emptyPos.forEach(emptyPos =>{
    emptyPos.addEventListener('click',function(){
        var pos = emptyPos.textContent;
        //checking if X or O has already been assigned to the position
        if(pos.length != 1){
            
            if(update(pos)){
                let a = turn ? 'X':'O';
                emptyPos.textContent = a;
                emptyPos.style.display = "box";
                turn = turn ? 0:1;
            }
            if(inputCount >= 5){
                if(checkWin()){
                    winStatus = 1;
                    turn = turn ? 0:1;
                    let a = turn ? 'X':'O';

                    alert(a + " has won the game");
                    location.reload();
                }

            }
        }
    })
})



