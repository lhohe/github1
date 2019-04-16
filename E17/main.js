$(document).ready(function() {
    coffeeGuess();
});

function coffeeGuess() {
    var coffeeArray = ["Mocha","Pikes Place","Iced Coffee","Cloud Macchioto","Americano", "Cold Brew"];
    var randomNumber = Math.floor(Math.random() * coffeeArray.length);
    var stripped = coffeeArray[randomNumber].toLowerCase();
    console.log(coffeeArray[randomNumber]);
    console.log(stripped);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == coffeeArray[randomNumber]) {
            $('h1').text(guess + ' is Correct!');
            $('input').val('');
            $('.button h2').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
        else  {
            $('h1').text(guess + ' is Wrong');
            $('input').val('');
            $('.button h2').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
