$(document).ready(function() {
    $("#stock-ideas").on("click", function(e) {
        $("#stock-ideas-dropdown").toggle();
        e.stopPropagation();
    });

    $("html").on("click", function() {
        $("#stock-ideas-dropdown").css("display", "none");
    });

    $("#stock-ideas-dropdown").on("click", function(e) {
        e.stopPropagation();
    });
});