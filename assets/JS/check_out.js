$('#multiCollapse1, #multiCollapse2, #multiCollapse3, #choice_familyMart, #choice_seven').collapse('hide'); 
$('input[name="radios"], input[name="convenient_store"], input[name="payment"]').change( function() {
    if ($('#method1').is(":checked")){
        $('#multiCollapse1').collapse('show');
    } 
    else {
        $('#multiCollapse1').collapse('hide');
    } 

    if ($('#method2').is(":checked")){
        $('#multiCollapse2').collapse('show');
    } 

    else {
      $('#multiCollapse2').collapse('hide');
    } 

    if ($('#familyMart').is(":checked")){
        $('#choice_familyMart').collapse('show');
    } 
    else {
        $('#choice_familyMart').collapse('hide');
    } 

    if ($('#seven').is(":checked")){
        $('#choice_seven').collapse('show');
    }
    else {
        $('#choice_seven').collapse('hide');
    }

    if ($('#credit_card').is(":checked")){
        $('#multiCollapse3').collapse('show');
    }
    else {
        $('#multiCollapse3').collapse('hide');
    }
  });