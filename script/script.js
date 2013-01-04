/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 12/24/12
 * Time: 12:02 PM
 *
 * My own article on Promises and Deferred, "Promises, Promises!" which can be found at <url here> was partially
 * inspired by the following 2 articles:
 *
 * 1) The article by Jeremy Chone, at http://www.html5rocks.com/en/tutorials/async/deferred/
 * 2) The article by Julian Aubourg and Addy Osmani, at http://msdn.microsoft.com/en-us/magazine/gg723713.aspx
 *
 * and by the song of the same name, by Naked Eyes, which you can listen to at
 * http://www.youtube.com/watch?v=H8Q83DPZy6E.
 *
 * My article found at <url here> expands on the concepts presented in the above mentioned 2 articles by
 * showing by example how to use Deferred in your own functions.
 */

/*
 * require.js configuration
 *
 * load jquery.js from Google's CDN
 */
requirejs.config( {
    paths:{
        jquery:'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min'
    }
} );

/*
 * require that jquery be loaded prior to calling our main script which is passed $ as a parameter
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
        console.log( val );
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
     * consider the code below as calls to remote library routines
     */

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     * if it is <= 5 calls Deferred.resolve
     * otherwise it calls Deferred.fail
     *
     * returns a promise
     */
    var getData1 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example1", "getData1.delay = " + delay );

        var number = getInteger();
        logIt( "#example1", "getData1.number = " + number );

        logIt( "#example1", "getData1 calling setTimeout" );
        setTimeout( function () {
            if ( number <= 5 ) {
                logIt( "#example1", "getData1.number = " + number );
                deferred.resolve( number );
            } else {
                logIt( "#example1", "getData1.number > 5" );
                deferred.reject( "getData1.number > 5" );
            }
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     * if it is <= 5 calls Deferred.resolve
     * otherwise it calls Deferred.fail
     *
     * returns a promise
     */
    var getData2 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example2", "getData2.delay = " + delay );

        var number = getInteger();
        logIt( "#example2", "getData2.number = " + number );

        logIt( "#example2", "getData2 calling setTimeout" );
        setTimeout( function () {
            if ( number <= 5 ) {
                logIt( "#example2", "getData2.number = " + number );
                deferred.resolve( number );
            } else {
                logIt( "#example2", "getData2.number > 5" );
                deferred.reject( "getData2.number > 5" );
            }
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     *
     * returns a promise
     */
    var getData3 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example3", "getData3.delay = " + delay );

        var number = getInteger();
        logIt( "#example3", "getData3.number = " + number );

        logIt( "#example3", "getData3 calling setTimeout" );
        setTimeout( function () {
            logIt( "#example3", "getData3.number = " + number );
            deferred.resolve( number );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     *
     * returns a promise
     */
    var getData4 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example3", "getData4.delay = " + delay );

        var number = getInteger();
        logIt( "#example3", "getData4.number = " + number );

        logIt( "#example3", "getData4 calling setTimeout" );
        setTimeout( function () {
            logIt( "#example3", "getData4.number = " + number );
            deferred.resolve( number );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     *
     * returns a promise
     */
    var getData5 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example4", "getData5.delay = " + delay );

        var number = getInteger();
        logIt( "#example4", "getData5.number = " + number );

        logIt( "#example4", "getData5 calling setTimeout" );
        setTimeout( function () {
            logIt( "#example4", "getData5.number = " + number );
            deferred.resolve( number );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     * simulates up to a 3 second delay
     * then generates a random number between 0 and 10
     *
     * returns a promise
     */
    var getData6 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example4", "getData6.delay = " + delay );

        var number = getInteger();
        logIt( "#example4", "getData6.number = " + number );

        logIt( "#example4", "getData6 calling setTimeout" );
        setTimeout( function () {
            logIt( "#example4", "getData6.number = " + number );
            deferred.resolve( number );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * sum a variable number of arguments asynchronously
     *
     * returns a promise
     */
    var getSum = function () {

        var deferred = $.Deferred();

        var args = arguments, argsLen = arguments.length, x;
        for ( x = 0; x < argsLen; x += 1 ) {
            logIt( "#example4", "getSum arguments[" + x + "] = " + arguments[x] );
        }

        var delay = getDelay();
        logIt( "#example4", "getSum.delay = " + delay );

        logIt( "#example4", "getSum calling setTimeout" );
        setTimeout( function () {
            var sum = 0, x, argsLen = args.length;
            for ( x = 0; x < argsLen; x += 1 ) {
                sum += args[x];
            }
            logIt( "#example4", "getSum sum = " + sum );
            deferred.resolve( sum );
        }, delay * 1000 );

        return deferred.promise();

    };

    /*
     * consider the code below client code
     */


    /*
     * Example #1
     * simplest use of Deferred
     * only 1 callback
     */
//    logIt( "#example1", "Example1: calling getData1 using promise.done & promise.fail" );

    var dataPromise = getData1();

    dataPromise.done( function ( data ) {
        logIt( "#example1", "getData1 returned " + data );
    } );

    dataPromise.fail( function ( err ) {
        logIt( "#example1", "getData1 failed: " + err, true );
    } );

    logIt( "#example1", "getData1 called!" );

    /*
     * Example #2
     * simplest use of Deferred
     * only 1 callback
     * using $.when(...).then(...)
     * a more succinct and semantically expressive style
     *
     * when provides a way to execute callback functions
     * based on one or more objects, usually Deferred
     * objects that represent asynchronous events
     */
//    logIt( "#example2", "Example2: calling getData2 using when and then" );

    $.when( getData2() ).then(

        function ( data ) {
            logIt( "#example2", "getData2 returned " + data );
        },
        function ( err ) {
            logIt( "#example2", "getData1 failed: " + err, true );
        }
    );

    logIt( "#example2", "getData2 called!" );

    /*
     * Example #3
     * a more contrived example of using Deferred
     * to make multiple asynchronous calls in parallel
     * and then sum the 2 integer values that are returned
     * using $.when(...).done(...)
     * a more succinct and semantically expressive style
     *
     * the summing, also done asynchronously,
     * is performed only after all integer values have
     * been returned
     */
//    logIt( "#example3", "Example3 calling getData3, getData4 using when and summing their returned integer values using done" );

    $.when( getData3(), getData4() ).done(

        /*
         * note - in the 'real' world, we might not know how
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
     * a more contrived example of using Deferred
     * to make multiple asynchronous calls in parallel
     * and then sum the 2 integer values that are returned
     * using $.when(...).pipe(...)
     * a more succinct and semantically expressive style
     *
     * the summing, also done asynchronously,
     * is performed only after all integer values have
     * been returned
     */
//    logIt( "#example4", "Example4: calling getData5, getData6 using when and summing their returned integer values using pipe" );

    $.when( getData5(), getData6() ).pipe( getSum ).done( function ( sum ) {
        logIt( "#example4", "getData5, getData6 returned a total of " + sum );
    } );

    logIt( "#example4", "getData5, getData6 called!" );

} );

//$( function () {
//
//    "use strict"; // of course!
//
//    /*
//     * helper functions
//     */
//
//    // logging
//    var logIt = function ( selector, val, err ) {
//        if ( err ) {
//            val = "<span style='color: rgba(255, 0, 0, .5)'>" + val + "</span> ";
//        }
//        $( selector ).append( "<div>" + val + "</div>" );
//        console.log( val );
//    };
//
//    // random number generator
//    var getRandom = function ( max ) {
//
//        return Math.floor( Math.random() * (max + 1) );
//
//    };
//
//    // a delay interval generator
//    var getDelay = function () {
//
//        return getRandom( 3 );
//
//    };
//
//    // an integer generator
//    var getInteger = function () {
//
//        return getRandom( 10 );
//
//    };
//
//    /*
//     * consider the code below as calls to remote library routines
//     */
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     * if it is <= 5 calls Deferred.resolve
//     * otherwise it calls Deferred.fail
//     *
//     * returns a promise
//     */
//    var getData1 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example1", "getData1.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example1", "getData1.number = " + number );
//
//        logIt( "#example1", "getData1 calling setTimeout" );
//        setTimeout( function () {
//            if ( number <= 5 ) {
//                logIt( "#example1", "getData1.number = " + number );
//                deferred.resolve( number );
//            } else {
//                logIt( "#example1", "getData1.number > 5" );
//                deferred.reject( "getData1.number > 5" );
//            }
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     * if it is <= 5 calls Deferred.resolve
//     * otherwise it calls Deferred.fail
//     *
//     * returns a promise
//     */
//    var getData2 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example2", "getData2.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example2", "getData2.number = " + number );
//
//        logIt( "#example2", "getData2 calling setTimeout" );
//        setTimeout( function () {
//            if ( number <= 5 ) {
//                logIt( "#example2", "getData2.number = " + number );
//                deferred.resolve( number );
//            } else {
//                logIt( "#example2", "getData2.number > 5" );
//                deferred.reject( "getData2.number > 5" );
//            }
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     *
//     * returns a promise
//     */
//    var getData3 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example3", "getData3.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example3", "getData3.number = " + number );
//
//        logIt( "#example3", "getData3 calling setTimeout" );
//        setTimeout( function () {
//            logIt( "#example3", "getData3.number = " + number );
//            deferred.resolve( number );
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     *
//     * returns a promise
//     */
//    var getData4 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example3", "getData4.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example3", "getData4.number = " + number );
//
//        logIt( "#example3", "getData4 calling setTimeout" );
//        setTimeout( function () {
//            logIt( "#example3", "getData4.number = " + number );
//            deferred.resolve( number );
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     *
//     * returns a promise
//     */
//    var getData5 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example4", "getData5.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example4", "getData5.number = " + number );
//
//        logIt( "#example4", "getData5 calling setTimeout" );
//        setTimeout( function () {
//            logIt( "#example4", "getData5.number = " + number );
//            deferred.resolve( number );
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * simulate doing some time consuming task
//     * like making a remote api call or something
//     * of that nature
//     *
//     * simulates up to a 3 second delay
//     * then generates a random number between 0 and 10
//     *
//     * returns a promise
//     */
//    var getData6 = function () {
//
//        var deferred = $.Deferred();
//
//        var delay = getDelay();
//        logIt( "#example4", "getData6.delay = " + delay );
//
//        var number = getInteger();
//        logIt( "#example4", "getData6.number = " + number );
//
//        logIt( "#example4", "getData6 calling setTimeout" );
//        setTimeout( function () {
//            logIt( "#example4", "getData6.number = " + number );
//            deferred.resolve( number );
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * sum a variable number of arguments asynchronously
//     *
//     * returns a promise
//     */
//    var getSum = function () {
//
//        var deferred = $.Deferred();
//
//        var args = arguments, argsLen = arguments.length, x;
//        for ( x = 0; x < argsLen; x += 1 ) {
//            logIt( "#example4", "arguments[" + x + "] = " + arguments[x] );
//        }
//
//        var delay = getDelay();
//        logIt( "#example4", "getSum.delay = " + delay );
//
//        logIt( "#example4", "getSum calling setTimeout" );
//        setTimeout( function () {
//            var sum = 0, x, argsLen = args.length;
//            for ( x = 0; x < argsLen; x += 1 ) {
//                sum += args[x];
//            }
//            logIt( "#example4", "getSum sum = " + sum );
//            deferred.resolve( sum );
//        }, delay * 1000 );
//
//        return deferred.promise();
//
//    };
//
//    /*
//     * consider the code below client code
//     */
//
//
//    /*
//     * Example #1
//     * simplest use of Deferred
//     * only 1 callback
//     */
////    logIt( "#example1", "Example1: calling getData1 using promise.done & promise.fail" );
//
//    var dataPromise = getData1();
//
//    dataPromise.done( function ( data ) {
//        logIt( "#example1", "getData1 returned " + data );
//    } );
//
//    dataPromise.fail( function ( err ) {
//        logIt( "#example1", "getData1 failed: " + err, true );
//    } );
//
//    logIt( "#example1", "getData1 called!" );
//
//    /*
//     * Example #2
//     * simplest use of Deferred
//     * only 1 callback
//     * using $.when(...).then(...)
//     * a more succinct and semantically expressive style
//     *
//     * when provides a way to execute callback functions
//     * based on one or more objects, usually Deferred
//     * objects that represent asynchronous events
//     */
////    logIt( "#example2", "Example2: calling getData2 using when and then" );
//
//    $.when( getData2() ).then(
//
//        function ( data ) {
//            logIt( "#example2", "getData2 returned " + data );
//        },
//        function ( err ) {
//            logIt( "#example2", "getData1 failed: " + err, true );
//        }
//    );
//
//    logIt( "#example2", "getData2 called!" );
//
//    /*
//     * Example #3
//     * a more contrived example of using Deferred
//     * to make multiple asynchronous calls in parallel
//     * and then sum the 2 integer values that are returned
//     * using $.when(...).done(...)
//     * a more succinct and semantically expressive style
//     *
//     * the summing, also done asynchronously,
//     * is performed only after all integer values have
//     * been returned
//     */
////    logIt( "#example3", "Example3 calling getData3, getData4 using when and summing their returned integer values using done" );
//
//    $.when( getData3(), getData4() ).done(
//
//        /*
//         * note - in the 'real' world, we might not know how
//         * many values to expect that need to be added for a total
//         * and if that were the case we could loop through all the arguments
//         * arguments.length times to generate the total.
//         */
//        function () {
//            logIt( "#example3", "getData3, getData4 returned a total of " + (arguments[0] + arguments[1]) );
//        }
//
//    );
//
//    logIt( "#example3", "getData3, getData4 called!" );
//
//    /*
//     * Example #4
//     * a more contrived example of using Deferred
//     * to make multiple asynchronous calls in parallel
//     * and then sum the 2 integer values that are returned
//     * using $.when(...).pipe(...)
//     * a more succinct and semantically expressive style
//     *
//     * the summing, also done asynchronously,
//     * is performed only after all integer values have
//     * been returned
//     */
////    logIt( "#example4", "Example4: calling getData5, getData6 using when and summing their returned integer values using pipe" );
//
//    $.when( getData5(), getData6() ).pipe( getSum ).done( function ( sum ) {
//        logIt( "#example4", "getData5, getData6 returned a total of " + sum );
//    } );
//
//    logIt( "#example4", "getData5, getData6 called!" );
//
//} );
