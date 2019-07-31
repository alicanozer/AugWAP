/*jshint esversion: 6 */
window.onload = function () {
    "use strict";

    console.log("This house is not nice!".filter('not'));
    
    
    
    String.prototype.filter = function (w) {
        return this.split(' ').filter(function (elem) {
            if (elem !== w)
                return elem;
        }).join(' ');
    }


}