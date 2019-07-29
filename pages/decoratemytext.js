/*jshint esversion: 6 */
window.onload = function () {
    "use strict";


    document.getElementById("buttonPL").onclick = convert2pl;
    document.getElementById('buttonMalkovitch').onclick = convertMalkovitch;
    document.getElementById("buttonBiggerDec").onclick = BDButtonClicked;
    document.getElementById('myCheckbox').onchange = checkboxChanged;

    function BDButtonClicked() {
        window.setInterval(buttonClickedTask, 500);
    }

    function buttonClickedTask() {
        var textArea = document.getElementById("myTextArea");
        textArea.style.fontSize = parseInt(textArea.style.fontSize) + 2 + "pt";
    }

    function checkboxChanged() {
        var cb = document.getElementById("myCheckbox");
        var textArea = document.getElementById("myTextArea");
        if (cb.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "inherit";
            textArea.style.textDecoration = "inherit";
            document.body.style.backgroundImage = null;

        }

    }

    function trans(word1) {
        var y = 0;
        var outword = '';
        while (++y <= word1.length) {
            var ch = word1.substring(y - 1, y);
            if (('AEIOU'.indexOf(ch.toUpperCase()) > -1) || ((ch.toUpperCase() == 'Y') && (y > 1))) {

                if (((word1.substring(y - 2, y - 1)).toUpperCase() == 'Q') && (ch.toUpperCase() == 'U')) {
                    outword = outword + ch;
                    y++;
                }


                outword = word1.substring(y - 1, word1.length) + '-' + outword + 'ay';


                y = word1.length;
            } else {
                outword = outword + ch;
            }
        }
        if ((word1.substring(0, 1)).toUpperCase() == word1.substring(0, 1)) {
            outword = ((outword.substring(0, 1)).toUpperCase()
                + (outword.substring(1, outword.length + 1)).toLowerCase());
        }
        return outword;
    }

    function transToPL(text) {
        var fulltrans = '';
        var word = '';
        var ch = '';
        var x = 0;
        text = text + ' ';
        for (x = 1; x <= text.length; x++) {
            ch = text.substring(x - 1, x);
            if (' ,.<>[]{}!@#$%^&*()-=+_\|`~/?";:'.indexOf(ch) > -1) {
                fulltrans = fulltrans + trans(word) + ch;
                word = '';
            } else {
                if ((ch == '\r') || (ch == '\n')) {
                    fulltrans = fulltrans + trans(word) + ch;
                    word = '';
                } else {
                    word = word + ch;
                }
            }
        }
        return fulltrans;
    }

    function convert2pl() {
        var textArea = document.getElementById("myTextArea");
        textArea.value = transToPL(textArea.value);
    }

    function convertMalkovitch() {
        var textArea = document.getElementById("myTextArea");
        textArea.value = filterLongWords(textArea.value.split(" "), 5, "Malkovich").join(' ');
    }

    function filterLongWords(words, l, val) {
        for (var i = 0; i < words.length; i++) {
            if (words[i].length >= l)
                words[i] = val;
        }
        return words;
    }
}