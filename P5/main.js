$(document).ready(function() {
  $('#pink').click(function() {
    $('#pink').css('color', 'white');
    $('#pink').toggleClass('orange');
  });
  $('#red').click(function() {
    // $('#number4').css('color', 'goldenrod');
    $('#red').toggleClass('text-color-to-white');
    console.log('color change')
  });
});
