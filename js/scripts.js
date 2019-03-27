$(function() {
  $('#payment-method').change(function(){
    if($('#payment-method').val() === 'credit'){
      $('#credit-form').slideDown();
      $('#paypal-form').slideUp();
    } else if($('#payment-method').val() === 'paypal'){
      $('#paypal-form').slideDown();
      $('#credit-form').slideUp();
    } else if($('#payment-method').val() === 'blankmethod'){
      $('#credit-form').slideUp();
      $('#paypal-form').slideUp();
    };
  });




});
