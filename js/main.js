var hiddenContent = $(".content-box");
var defaultButton =  $('.menu_container__button[name="education"]');
 var defaultOn = false;
 
function setDefaultFocus(buttonName) {
    buttonName.trigger('focus');
     $('#' + buttonName.prop('name')).removeClass('content-box--hidden');
    var defaultOn = true;
}

window.onload = function() {
    hiddenContent.addClass("content-box--hidden");
    setDefaultFocus(defaultButton);
    $('.menu_container__button').focusin(
        
    
        function() {
                    $('#' + defaultButton.prop('name')).addClass('content-box--hidden');
                    let blockNameSelector = '#' + $(this).prop('name');
            console.log(blockNameSelector);
                    $( blockNameSelector ).removeClass('content-box--hidden')
                                          
    $('.menu_container__button').focusout(
         function() {
                    $( blockNameSelector ).addClass('content-box--hidden')
                                          })
        }
    )
}