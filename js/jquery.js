$(document).ready(function() {
  $('#made').fadeIn(2200, function(){
    //
  });
});


$('.bike').live('click', function(){
  $('#made').css('display', '');
  $('#city').fadeIn(1800, function(){
    //
  });
  $('#made').addClass('hidden');
});


$('.woods').live('click', function(){
  $('#city').css('display', '');
  $('#woods').fadeIn(1800, function(){
    //
  });
  $('#city').addClass('hidden');
});