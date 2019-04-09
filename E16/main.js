$(document).ready(function() {
  $('#color-1').click(function() {
    $('#color-1').css('color', 'orange');
    $('#color-1').toggleClass('black');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'goldenrod');
  });
});

$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');
  // added a message to the console, helpful in debugging
  console.log('added white');
  $('body').toggleClass('bodyBG');
});
