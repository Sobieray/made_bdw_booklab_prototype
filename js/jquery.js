$(document).ready(function() {
  $('.isMade').fadeIn(2500, function(){
    //Animation complete
  });
});


$('#cd-dropdown3').change(function(){
  var value = $("#cd-dropdown3 option:selected").val(City);
  console.log(this)
});