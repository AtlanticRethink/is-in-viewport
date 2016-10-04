// Checks whether particular element is in the viewport on scroll

var isElementInViewport = function(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    // Returns the size of an element and its position relative to the viewport.
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var elementInViewRunThisAction = function() {
    if (isElementInViewport( /* YOUR DOM ELEMENT HERE */ )) {

        /*
        

        ACTIONS TO RUN IF ELEMENT IS IN VIEW


        */

    } else {

        return;
    }
};

$(window).scroll(elementInViewRunThisAction);
