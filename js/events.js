//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function() {
    if (e.key == 'g') {
      alert('You have preseed the g key.');
    }
  })
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
