var gamePattern=[];
var userClickedPattern = [];
var level=0;
// var started = 0;
const buttonColours = ["red" , "blue" , "green" , "yellow"];
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
   
}

$(".btn").click(handler);
    function handler(){
        var userChosenColour=$(this).attr("id");
        
         userClickedPattern.push(userChosenColour);

         playSound(userChosenColour);
         animatePress(userChosenColour);
         checkAnswer(userClickedPattern.length-1);
    }  

function checkAnswer(currentLevel){
    

if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    // console.log("worked");
    if(gamePattern.length===userClickedPattern.length){
    setTimeout(function(){
           nextSequence();
    }, 1000);
}

}
else{
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press enter Key to Restart");
    level=[];
    userClickedPattern=[];
    gamePattern=[];
    playSound("wrong");
    // console.log("failed");
}
}

function playSound(name){
     var audio = new Audio("sounds/"+name+".mp3");
            audio.play();
         
}

function animatePress(currentColour){
            $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed");            
            }, 100);
        }

$(document).on("keydown",function(event){
        
    if(event.key==="Enter"){
        
        nextSequence();
        
        }
        
});