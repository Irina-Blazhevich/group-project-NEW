$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menuh").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


jQuery(document).ready(function($){
    $("#btn").on("click",function(event){
    event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},500)});
    });