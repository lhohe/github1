$(document).ready(function() {
    coffeeGuess();
});

function coffeeGuess() {
    var coffeeArray = ["Mocha","Pikes Place","Iced Coffee","Cloud Macchioto","Americano", "Cold Brew"];
    var randomNumber = Math.floor(Math.random() * coffeeArray.length);
    var stripped = coffeeArray[randomNumber].toLowerCase();
    console.log(coffeeArray[randomNumber]);
    console.log(stripped);
    $('body').css('background-color', coffeeArray[randomNumber]);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == coffeeArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
        else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
