var hiddenContent = $(".content-box");
var defaultButton =  $('.menu_container__button[name="education"]');
var defaultOn = false;
 
function setDefaultFocus(buttonName) {
    buttonName.trigger('focus');
     $('#' + buttonName.prop('name')).removeClass('content-box--hidden');
    var defaultOn = true;
    return false
}

window.onload = function() {
    hiddenContent.addClass("content-box--hidden");
    setDefaultFocus(defaultButton);
    $('.menu_container__button').focusin(
        
    
        function() {
                    $('.content-box').addClass('content-box--hidden');
                    let blockNameSelector = '#' + $(this).prop('name');
                    $( blockNameSelector ).removeClass('content-box--hidden')
                                          

        }
    )
    return false
}