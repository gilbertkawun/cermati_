(function () {
    'use strict';

    var btnScrollDown = document.querySelector('#notification-button');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();



let isClicked = false;

window.addEventListener("scroll", function () {
    if (!isClicked && window.pageYOffset >= 800) {
        document.getElementById('letter-panel').style.display = "block";
    }
}, false);

function hide() {
    document.getElementById('letter-panel').style.display = 'none';

    isClicked = true;
    setTimeout(() => {
        isClicked = false;
    }, 10 * 60 * 1000);
};