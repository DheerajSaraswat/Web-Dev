
    var p1Name = prompt("Enter Player 1 name: ");
    var p2Name = prompt("Enter Player 2 name: ");

$("#p1").text(p1Name);
$("#p2").text(p2Name);

$("#pa").click(function(){
    rollDice();
});

function rollDice(){
    var diceNumber1 = Math.floor((Math.random()*6+1));
        $(".img1 img").attr("src","images/dice"+diceNumber1+".png");
    var diceNumber2 = Math.floor((Math.random()*6+1));
        $(".img2 img").attr("src","images/dice"+diceNumber2+".png");
    if(diceNumber1===diceNumber2){
        $("h1").text("Draw 🤝");
    }else if(diceNumber1 > diceNumber2){
        $("h1").text(p1Name+" Wins!");
    }else{
        $("h1").text(p2Name+" Wins!");
    }
}
$("#re").click(function(){
    location.reload();
});