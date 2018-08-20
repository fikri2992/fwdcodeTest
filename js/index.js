// JavaScript Document
$(document).ready(function () {
    let xPlayer = "x";
    let oPlayer = "o";
    let count = 0;
    let oPlayer_score = 0;
    let xPlayer_score = 0;

    $('#game li').click(function () {
        if (isoPlayerWin()) {
            alert('O has won the game. Start a new game');
            $("#reset").click();

        } else if (isxPlayerWin()) {
            alert('X wins has won the game. Start a new game');
            $("#reset").click();

        } else if (isDrawGame()) {
            alert('Its a tie. It will restart.');
            $("#reset").click();

        } else if ($(this).hasClass('disable')) {
            alert('Already selected');
        } else if (checkTurn()) {
            count++;
            $(this).text(oPlayer);
            $(this).addClass('disable o btn-primary');
            if (isoPlayerWin()) {
                alert('O wins');
                count = 0;
                oPlayer_score++;
                $('#o_win').text(oPlayer_score);
            }
        } else { //xPlayer turn
            count++;
            console.log(count);
            $(this).text(xPlayer);
            $(this).addClass('disable x btn-info');
            if (isxPlayerWin()) {
                alert('X wins');
                count = 0;
                xPlayer_score++;
                $('#x_win').text(xPlayer_score);
            }
        }

    });
    $("#reset").click(function () {
        $("#game li").text("+");
        $("#game li").removeClass('disable');
        $("#game li").removeClass('o');
        $("#game li").removeClass('x');
        $("#game li").removeClass('btn-primary');
        $("#game li").removeClass('btn-info');
        count = 0;

    });



    function checkTurn() {
        if (count <= 9) {
            if (count % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    function isoPlayerWin() {
        if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
            // return true;
            return true;
        }
    }

    function isxPlayerWin() {
        if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
            //return true;
            return true;
        }
    }

    function isDrawGame() {
        if (count > 7) {
            alert('Its a tie. It will restart.');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');
            count = 0;
            drawGame = true;
        }
    }
});