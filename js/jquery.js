$(document).ready(function() {
  $('#made').fadeIn(2200, function(){
    //
  });
});


$('.bike').live('click', function(){
  $('#made').css('display', '');
  $('#city').fadeIn(2000, function(){
    //
  });
  $('#made').addClass('hidden');
});

$('.fancy').live('click', function(){
  $('#city').css('display', '');
  $('#bike_fancy').fadeIn(1500, function(){
    //
  });
  $('#city').addClass('hidden');
});


/* CHANGING FROM BIKES TO WOODS */

$('.woods').live('click', function(){
  $('#city').css('display', '');
  $('#woods').fadeIn(1500, function(){
    //
  });
  $('#city').addClass('hidden');
});

$('.comfortable').live('click', function(){
  $('#woods').css('display', '');
  $('#outdoor_comfy').fadeIn(1500, function(){
    //
  });
  $('#woods').addClass('hidden');
});

/* CHANGING FROM MADE TO WOODS */

$('.woods').live('click', function(){
  $('#made').css('display', '');
  $('#woods').fadeIn(1800, function(){
    //
  });
  $('#made').addClass('hidden');
});