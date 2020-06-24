$(document).ready(function(){
    var n =0;
    var clickstatus = 0;


    var array = [
    [5,4,3],
    [5,3,3],
    [5,4,3]
    ]
    // function to update the array
    function update(i,j,usr){
        array[i][j]= usr;
        console.log(array)
    }
// function to find out whether x or y turn it is
    function user(n){
        if(n%2===0){
            return "X";
        }
        else{
            return "O";
        }
    }
// function to check whether a user has won or not
function check(){
    var flag =0;
    if(array[0][0]==array[1][1] && array[1][1]==array[2][2]){
        flag =1;
    }else if(array[0][2]==array[1][1] && array[1][1]==array[2][0]){
        flag =1;
    }else{
        for(var i =0;i<3;i++){
            if(array[i][0]==array[i][1] && array[i][1]==array[i][2]){
                var flag =1;
            }else if(array[0][i]==array[1][i] && array[1][i]==array[2][i]){
                var flag =1;
            }
        }
    }
    return flag;
}
$("td").on({
    "click":function(){
            if(n>=9){
                alert("DRAW. Re-fresh to play");
            }
                n+=1;
                clickstatus+=1;
                console.log(n);
                var a =$(this).children().text();
                $(this).children().text(user(n)).css("display","inline");
                console.log(a);
                update(Number(a[1]),Number(a[3]),user(n));
                if(n>=5){
                    if(check()){
                        alert(user(n)+" has won"+"\n refresh to play again");
                    }
                }
        }
    // "mouseenter": function(){
    //     $(this).children().text(user(n)).css("display","inline");

    // },
    // "mouseleave": function(){
    //     if(n!==clickstatus){
    //         $(this).children().text(user(n)).css("display","none");
    //     }
    });

});
