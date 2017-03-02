/*
* fluid-scroll.js 0.1
* ===================
*
* (c) 2017 Divyanshu Maithani
* Fluid scroll may be freely distributed under the MIT license.
* -------------------------------------------------------------
*/

// Creating execution context
(function (global, factory) {

    // exposing to global
    if(typeof(global.fscroll === 'undefined'))  {
        global.fscroll = factory();
    }
    else {
        console.error('fscroll already defined');
        console.info('exposing fluid-scroll as _fscroll');
        global._fscroll = factory();
    }

}(window, function () {

    var fscroll = {};   // fscroll public API object

    var getDistance = function (target) {
        target = '#' + target;
        return document.querySelector(target).getBoundingClientRect().top;
    }

    var current;   // current viewport position
    var duration = 1000;
    var timeStart = null, timeElapsed, distance;

    // Thanks to Mr. Robert Penner :) (https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)
    function easeInOutQuad(t, b, c, d)  {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    var scrollNow = function (target) {
        current = window.pageYOffset;
        distance = getDistance(target);
        window.requestAnimationFrame(function (time) {
            // this time is a DOMHighResTimeStamp (passed by browser browser to callback) indicating the current time when callbacks queued by requestAnimationFrame begin to fire.
            timeStart = time;
            motion(time);
        });
    }

    // fscroll public APIs

    fscroll.flow = function (target) {
        if(typeof(target) === 'string')   {
            scrollNow(target);
        }
        else {
            console.error('target not a string');
        }
    }

    fscroll.focus = function (target) {
        if(typeof(target) === 'string')   {
            scrollNow(target);
        }
        else {
            console.error('target not a string');
        }
    }

    fscroll.crisp = function (target) {
        if(typeof(target) === 'string')   {
            scrollNow(target);
        }
        else {
            console.error('target not a string');
        }
    }

    var motion = function (time) {

        timeElapsed = time - timeStart;

        window.scroll(0, easeInOutQuad(timeElapsed, current, distance, duration));

        if(timeElapsed < duration)  {
            // requestAnimationFrame will be called unless time duration is reached
            window.requestAnimationFrame(motion);
        }

    }

    return fscroll;
}));
