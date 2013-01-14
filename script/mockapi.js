/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 1/14/13
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */

/*
 * helper functions
 */

// logging
var logIt = function ( selector, val, err ) {
    "use strict"; // of course!
    if ( err ) {
        val = "<span style='color: rgba(255, 0, 0, .5)'>" + val + "</span> ";
    }
    $( selector ).append( "<div>" + val + "</div>" );
};

// random number generator
var getRandom = function ( max ) {
    "use strict"; // of course!

    return Math.floor( Math.random() * (max + 1) );

};

// a delay interval generator
var getDelay = function () {
    "use strict"; // of course!

    return getRandom( 3 );

};

// an integer generator
var getInteger = function () {
    "use strict"; // of course!

    return getRandom( 10 );

};

/*
 * Consider the code below as remote api calls.
 */

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 * If it is <= 5 calls Deferred.resolve,
 * otherwise it calls Deferred.fail.
 *
 * Returns a promise to obtain the result
 */
var getData1 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #1 - getData1.delay = " + delay );

    console.log( "Example #1 - getData1 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        if ( number <= 5 ) {
            deferred.notify( "#example1", "getData1.number = " + number );
            deferred.resolve( number );
        } else {
            deferred.notify( "#example1", "getData1.number = " + number + " > 5" );
            deferred.reject( "getData1.number > 5" );
        }
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 * If it is <= 5 calls Deferred.resolve,
 * otherwise it calls Deferred.fail.
 *
 * Returns a promise to obtain the result.
 */
var getData2 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #2 - getData2.delay = " + delay );

    console.log( "Example #2 - getData2 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        if ( number <= 5 ) {
            deferred.notify( "#example2", "getData2.number = " + number );
            deferred.resolve( number );
        } else {
            deferred.notify( "#example2", "getData2.number = " + number + " > 5" );
            deferred.reject( "getData2.number > 5" );
        }
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 *
 * Returns a promise to obtain the result.
 */
var getData3 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #3 - getData3.delay = " + delay );

    console.log( "Example #3 - getData3 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        deferred.notify( "#example3", "getData3.number = " + number );
        deferred.resolve( number );
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 *
 * Returns a promise to obtain the result.
 */
var getData4 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #3 - getData4.delay = " + delay );

    console.log( "Example #3 - getData4 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        deferred.notify( "#example3", "getData4.number = " + number );
        deferred.resolve( number );
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 *
 * Returns a promise to obtain the result.
 */
var getData5 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #4 - getData5.delay = " + delay );

    console.log( "Example #4 - getData5 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        deferred.notify( "#example4", "getData5.number = " + number );
        deferred.resolve( number );
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Simulate doing some time consuming task,
 * like making a remote api call or something
 * of that nature.
 *
 * Simulates up to a 3 second delay,
 * then generates a random number between 0 and 10.
 *
 * Returns a promise to obtain the result.
 */
var getData6 = function () {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #4 - getData6.delay = " + delay );

    console.log( "Example #4 - getData6 calling setTimeout" );
    setTimeout( function () {
        var number = getInteger();

        deferred.notify( "#example4", "getData6.number = " + number );
        deferred.resolve( number );
    }, delay * 1000 );

    return deferred.promise();

};

/*
 * Sum 2 integers asynchronously and returns a promise to obtain the result
 */
var getSum = function ( val1, val2 ) {
    "use strict"; // of course!

    var deferred = $.Deferred();

    var delay = getDelay();
    console.log( "Example #4 - getSum.delay = " + delay );

    console.log( "Example #4 - getSum calling setTimeout" );
    setTimeout( function () {
        var sum = val1 + val2;

        deferred.notify( "#example4", "getSum.sum = " + sum );
        deferred.resolve( sum );
    }, delay * 1000 );

    return deferred.promise();

};
