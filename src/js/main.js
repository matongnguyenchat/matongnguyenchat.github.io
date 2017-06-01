

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

