$(document).ready(function () {
    "use strict";
    let start = false;

    $("#start").click(function () {
        start = true;
        $("div#maze .boundary").each(function (idx, el) {
            $(el).removeClass("youlose");
        });
        $("#status").html("Started, go on...");
    });

    $("#end").mouseover(function () {
        if (start === true) {
            $("#status").html("You win :)");
            alert("You win");
            start = false;
        }
    });

    $("div#maze .boundary").each(function (idx, e) {
        $(e).mouseover(function () {
            if (start === true) {
                $("div#maze .boundary").each(function (idx, el) {
                    $(el).addClass("youlose");
                });
                $("#status").html("You lost :(");
                alert("You lost");
                start = false;
            }
        });
    });
});
