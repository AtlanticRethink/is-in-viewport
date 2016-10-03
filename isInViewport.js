// Checks whether particular element is in middle of viewport

var isElementInViewport = function(el) {

    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    // Returns the size of an element and its position relative to the viewport.
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= ((window.innerHeight - rect.top) * 0.3 || (document.documentElement.clientHeight - rect.top) * 0.3) &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight + rect.bottom) * 0.4 || (document.documentElement.clientHeight + rect.bottom) * 0.4) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/*

// Use the above like so:

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange(el, function() {
    // ADD THE CODE YOU'D LIKE TO EXECUTE HERE
});


// Execute the function using jQuery: 
$(window).on('DOMContentLoaded load resize scroll', handler);

*/
