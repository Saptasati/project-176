let words = [
    {
        "inputs":5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs":6,
        "category": "European Country Name",
        "word": "France"
    }
]
var gameOver = false;

 function fillBlanks() {
    $(".clickable").click(function() {
        var correctGuess = false;
    var gameOver = false;
    let id = $(this).attr("id");
    var life = parseInt$(("#life").text());
    for(var i = 0; i < randomWord.word.length; i++) {
        if(random.word.charAt(i).toLowerCase() === id) {
            if(life > 0 && ($(".fill_blanks").eq(i).html() === "_" || $(".fill_blanks").eq(i).html() === id)) {
                $(".fill_blanks").eq(i).html(id)
                correctGuess = true;

                if($("#blanks").text() === randomWord.word.toLowerCase()) {
                    $("#result").text("You Win!!")
                    correctGuess = true;
                    gameOver = true;
                }

            }
        }
    }
    if(correctGuess === false && gameOver == false) {
        life = life-1
    }
    })
    
}
$(document).ready(function () {
    fillBlanks();
})