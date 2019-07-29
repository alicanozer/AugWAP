

/*jshint esversion: 6 */
window.onload = function () {
    "use strict";

    let textArea = document.getElementById("text-area");
        textArea.value = this.BLANK;
    let startButton = document.getElementById("start");
        startButton.onclick = startButtonClicked;
    let stopButton = document.getElementById("stop");
        stopButton.onclick = stopButtonClicked;
    let animationSelector = document.getElementById("animation");
        animationSelector.onchange = animationChanged;
    let fontSizeSelector = document.getElementById("fontsize");
        fontSizeSelector.onchange = fontsizeChanged;
    let speedSelector = document.getElementById("turbo");
        speedSelector.onchange = speedChanged;

    let ANIMATIONS = [this.BLANK, this.EXERCISE, this.JUGGLER, this.BIKE, this.DIVE];
    let SPEEDS = [50, 250];
    let FONTSIZE = ["7pt", "10pt", "12pt", "16pt", "24pt", "32pt"];
    let animationSet = [];
    let animationIndex=0;
    let animationInterval;
    let timer;

    textArea.value = ANIMATIONS[animationSelector.selectedIndex];
    textArea.style.fontSize = FONTSIZE[fontSizeSelector.selectedIndex];
    animationInterval = SPEEDS[1];

    function startButtonClicked() {
        startButton.disabled = true;
        stopButton.disabled = false;
        animationSelector.disabled = true;
        animationSet = ANIMATIONS[animationSelector.selectedIndex].split("=====\n");
        timer = setInterval(animate, animationInterval);
    }

    function stopButtonClicked() {
        startButton.disabled = false;
        stopButton.disabled = true;
        animationSelector.disabled = false;
        clearInterval(timer);
        textArea.value = ANIMATIONS[animationSelector.selectedIndex];
        animationIndex=0;
    }

    function animationChanged() {
        textArea.value = ANIMATIONS[animationSelector.selectedIndex];
        animationSet = ANIMATIONS[animationSelector.selectedIndex].split("=====\n");
    }

    function fontsizeChanged() {
        textArea.style.fontSize = FONTSIZE[fontSizeSelector.selectedIndex];
    }

    function speedChanged() {
        if (speedSelector.checked){
            animationInterval = SPEEDS[0];
        } else{
            animationInterval = SPEEDS[1];
        }

        if(startButton.disabled) {
            clearInterval(timer);
            timer = setInterval(animate, animationInterval);
        }
    }


    function animate(){
        textArea.value = animationSet[animationIndex%animationSet.length];
        animationIndex++;
    }
};

