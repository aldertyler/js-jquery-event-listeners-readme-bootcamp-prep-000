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
  $('form').on('keydown', function(key) {
    if (key.which == 'g') {
      alert('You have preseed the g key.');
      return;
    }
  })
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
