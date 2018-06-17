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
  $(document.body.form).on('keypress', function(key) {
    if (key.which === 'g') {
      alert('You have preseed the g key.');
    }
  })
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
