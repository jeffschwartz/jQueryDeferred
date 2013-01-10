/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 12/24/12
 * Time: 12:02 PM
 *
 * My own article on $.Promises and deferred, "Promises, Promises!" which can be found at <url here> was partially
 * inspired by the following 2 articles:
 *
 * 1) The article by Jeremy Chone, at http://www.html5rocks.com/en/tutorials/async/deferred/
 * 2) The article by Julian Aubourg and Addy Osmani, at http://msdn.microsoft.com/en-us/magazine/gg723713.aspx
 *
 * and by the song of the same name, by Naked Eyes, which you can listen to at
 * http://www.youtube.com/watch?v=H8Q83DPZy6E.
 *
 * My article found at <url here> expands on the concepts presented in the above mentioned 2 articles by
 * showing by example (see the code below) how to use $.Deferred and promise in your own functions.
 */

/*
 * Require.js configuration
 *
 * Load jquery.js from Google's CDN
 */
requirejs.config( {
    paths:{
        jquery:'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min'
    }
} );

/*
 * Require that jquery loads prior to calling our main script which is passed $ as a parameter.
 */
requirejs( ["jquery"], function ( $ ) {

    "use strict"; // of course!

    /*
     * helper functions
     */

    // logging
    var logIt = function ( selector, val, err ) {
        if ( err ) {
            val = "<span style='color: rgba(255, 0, 0, .5)'>" + val + "</span> ";
        }
        $( selector ).append( "<div>" + val + "</div>" );
//        console.log( val );
    };

    // random number generator
    var getRandom = function ( max ) {

        return Math.floor( Math.random() * (max + 1) );

    };

    // a delay interval generator
    var getDelay = function () {

        return getRandom( 3 );

    };

    // an integer generator
    var getInteger = function () {

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
     * Returns a promise.
     */
    var getData1 = function () {

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
     * Returns a promise.
     */
    var getData2 = function () {

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
     * Returns a promise.
     */
    var getData3 = function () {

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
     * Returns a promise.
     */
    var getData4 = function () {

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
     * Returns a promise.
     */
    var getData5 = function () {

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
     * Returns a promise.
     */
    var getData6 = function () {

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
     * Sum a variable number of arguments asynchronously.
     *
     * Returns a promise.
     */
    var getSum = function ( val1, val2 ) {

        var deferred = $.Deferred();

        var delay = getDelay();
        console.log( "Example #4 - getSum.delay = " + delay );

        console.log( "Example #4 - getSum calling setTimeout" );
        setTimeout( function () {
            var sum = val1 + val2;

//            deferred.notify( "#example4", "getSum sum = " + sum );
            deferred.resolve( sum );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * Consider the code below client code.
     */


    /*
     * Example #1
     * Simplest use of Deferred.
     * Makes only 1 asynchronous api call.
     */

    var dataPromise1 = getData1();

    dataPromise1.progress( function ( selector, message, isError ) {
        logIt( selector, message, isError );
    } );

    dataPromise1.done( function ( data ) {
        logIt( "#example1", "getData1 returned " + data );
    } );

    dataPromise1.fail( function ( err ) {
        logIt( "#example1", "getData1 failed: " + err, true );
    } );

    logIt( "#example1", "getData1 called!" );

    /*
     * Example #2
     * Simplest use of Deferred.
     * Makes only 1 asynchronous api call.
     * Using $.when(...).then(...),
     * a more succinct and semantically expressive style.
     *
     * $.when provides a way to execute callback functions
     * based on one or more objects, usually Deferred
     * objects that represent asynchronous events.
     */
    $.when( getData2() ).then(

        function ( data ) {
            logIt( "#example2", "getData2 returned " + data );
        },
        function ( err ) {
            logIt( "#example2", "getData2 failed: " + err, true );
        },
        function ( selector, message, isError ) {
            logIt( selector, message, isError );
        }
    );

    logIt( "#example2", "getData2 called!" );

    /*
     * Example #3
     * A more contrived example of using Deferred.
     * Makes 2 asynchronous api calls in parallel
     * and then sum the 2 integer values that are returned.
     * Using $.when(...).done(...),
     * a more succinct and semantically expressive style.
     *
     * The summing, also done asynchronously,
     * is performed only after all integer values have
     * been returned.
     */
    var dataPromise3 = getData3();
    var dataPromise4 = getData4();
    dataPromise3.progress( function ( selector, message ) {
        logIt( selector, message );
    } );
    dataPromise4.progress( function ( selector, message ) {
        logIt( selector, message );
    } );
    $.when( dataPromise3, dataPromise4 ).done(

        /*
         * Note - in the 'real' world, we might not know how
         * many values to expect that need to be added for a total
         * and if that were the case we could loop through all the arguments
         * arguments.length times to generate the total.
         */
        function () {
            logIt( "#example3", "getData3, getData4 returned a total of " + (arguments[0] + arguments[1]) );
        }

    );

    logIt( "#example3", "getData3, getData4 called!" );

    /*
     * Example #4
     * A more contrived example of using Deferred.
     * Makes 3 asynchronous api calls, 2 in parallel and
     * 1 after the first 2 have run which sums the 2 integer
     * values that are returned.
     * Using $.when(...).pipe(...).then(...).done(...),
     * a more succinct and semantically expressive style.
     *
     * The summing, also done asynchronously,
     * is performed only after all integer values have
     * been returned.
     */
    var dataPromise5 = getData5();
    var dataPromise6 = getData6();
    var getSumPromise = null;

    dataPromise5.progress( function ( selector, message ) {
        logIt( selector, message );
    } );
    dataPromise6.progress( function ( selector, message ) {
        logIt( selector, message );
    } );


/*

    You might think that we can do this:

    chainedPromise = $.when( dataPromise5, dataPromise6 ).then( function ( val1, val2 ) {
        return getSum( val1, val2 );
    } );
    chainedPromise.progress( function ( selector, message ) {
        logIt( selector, message );
    } );
    chainedPromise.done( function ( sum ) {
        logIt( "#example4", "getData5, getData6 returned a total of " + sum );
    } );

    But we cannot. As per the docs for then:
     As of jQuery 1.8, the deferred.then() method returns a new promise that can
     filter the status and values of a deferred through a function, replacing the
     now-deprecated deferred.pipe() method.
    As the above documentation states, 'then' returns a _new_ promise, not the promise that
    getSum returns. This is unfortunate and I hope that in a future release 'then' will
    behave more like 'when' which returns a Promise from a new "master" Deferred object that
    tracks the aggregate state of all the Deferreds it has been passed. Until then, the
    solution I found to be the easiest is shown below.

*/

    $.when( dataPromise5, dataPromise6 ).then( function ( val1, val2 ) {
        getSumPromise = getSum( val1, val2 );
        getSumPromise.progress( function ( selector, message ) {
            logIt( selector, message );
        } );
        getSumPromise.done( function ( sum ) {
            logIt( "#example4", "getData5, getData6 returned a total of " + sum );
        } );
    } );

    logIt( "#example4", "getData5, getData6 called!" );

} );


