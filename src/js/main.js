function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $("#right-side-bar").stick_in_parent({
        inner_scrolling: false,
        offset_top: $('nav').height() + 30
    }).on("sticky_kit:stick", function(e) {
        console.log($('#right-side-bar').width());
        $('#right-side-bar').parent().width($('#right-side-bar').parent().width() -1);
    });

    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
});

$(document).on("scroll",debounce(function(){
    console.log($(document).scrollTop());
    if($(document).scrollTop()>100){
        $("nav").addClass('scroll-down');
    } else {
        $("nav").removeClass('scroll-down');
    }
},250));

