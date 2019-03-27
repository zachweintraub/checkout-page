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

  $('#sameaddress').change(function(){
    if($('#sameaddress').is(":checked")) {
      $('#shippingaddress1').val($('#address1').val());
      $('#shippingaddress2').val($('#address2').val());
      $('#shippingcity').val($('#city').val());
      $('#shippingstates').val($('#states').val());
      $('#shippingzip').val($('#zip').val());
      $('#shippingaddress1').attr('disabled', 'disabled');
      $('#shippingaddress2').attr('disabled', 'disabled');
      $('#shippingcity').attr('disabled', 'disabled');
      $('#shippingstates').attr('disabled', 'disabled');
      $('#shippingzip').attr('disabled', 'disabled');
    } else {
   $('#shippingaddress1').removeAttr('disabled');
   $('#shippingaddress2').removeAttr('disabled');
   $('#shippingcity').removeAttr('disabled');
   $('#shippingstates').removeAttr('disabled');
   $('#shippingzip').removeAttr('disabled');
    }

  });

  $('#submit').click(function(event){
    console.log('working');
    $('#receipt-name').text($('#first-name').val() + ' ' + $('#last-name').val());
    $('#receipt-address').text($('#address1').val());
    $('#receipt-address2').text($('#address2').val());
    $('#receipt-city').text($('#city').val());
    $('#receipt-states').text($('#states').val());
    $('#receipt-zip').text($('#zip').val());
    $('#checkout-form').hide();
    $('#receipt').slideDown();
    event.preventDefault();

  });




});
