

$(document).ready(function () {
    "use strict";

    let circles = [];
    let timer;
    let initialWidth;
    let growthAmount;
    let interval;
    let numberCircles;
    let counter;

    $("#circle-start").on("click", setCircle);
    function setCircle(){

        initialWidth = parseInt($("input[name=width]").val());
        growthAmount = parseInt($("input[name=growth-amount]").val());
        interval = parseInt($("input[name=grow-rate]").val());
        counter = numberCircles = parseInt($("input[name=number-circles]").val());

        console.log("setCircle-w:"+initialWidth);
        console.log("setCircle-ga:"+growthAmount);
        console.log("setCircle-gr:"+interval);

        for (let i = 0; i < numberCircles; i++) {
            let circle = $("<div>");
            circle.addClass("circle");

            circle.css("width", initialWidth+"px");
            circle.css("height", initialWidth+"px");
            circle.css("border-radius", initialWidth+"px");

            circle.on("click", removeCircle);
            $("#circle-div").append(circle);
            circles.push(circle);
        }

        timer = window.setInterval(growCircle, interval);
    }

    function growCircle() {
        console.log("growCircle");
        let size = parseInt(circles[0].css("width"));
        let newsize = size + growthAmount + "px";

        for (let i = 0; i < numberCircles; i++) {
            let circle = circles[i];
            circle.css("width", newsize);
            circle.css("height", newsize);
            circle.css("border-radius", newsize);
        }

    }

    function removeCircle() {
        console.log("removeCircle");
        this.remove();
        if(--counter === 0){
            clearInterval(timer);
        }
    }

});