$(document).ready(function(event){
  const height= parseInt(prompt("Please enter your height in inches:"));
  $('#below-height').hide();
  if (height < 42) {
    $('#below-height').show();
  } else if (height > 54) {
  alert("The green rides you are too tall for!");
  $('#all-rides').show();
  } else {
    $('#all-rides').show();
  }
});