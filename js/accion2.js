$(function(){
    $("section").mouseover("hover", function (e) {
        $("h1").text($(this).data("texto"));
    })
});