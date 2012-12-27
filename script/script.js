/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 12/24/12
 * Time: 12:02 PM
 *
 * My own article on Promises and Deferred, "Promises, Promises!" which can be found at <url here> was partially
 * inspired by the following 2 articles:
 * 1) The article by Jeremy Chone, at http://www.html5rocks.com/en/tutorials/async/deferred/
 * 2) The article by Julian Aubourg and Addy Osmani, at http://msdn.microsoft.com/en-us/magazine/gg723713.aspx
 * and by the song of the same name, by Naked Eyes, which you can listen to at
 * http://www.youtube.com/watch?v=H8Q83DPZy6E
 */
$( function () {

    "use strict"; // of course!

    /*
     * helper functions
     */

    var logIt = function ( selector, val, err ) {
        if ( err ) {
            val = "<span style='color: rgba(255, 0, 0, .5)'>" + val + "</span> ";
        }
        $( selector ).append( "<div>" + val + "</div>" );
        console.log( val );
    };

    var getRandom = function ( max ) {

        return Math.floor( Math.random() * (max + 1) );

    };

    var getDelay = function () {

        return getRandom( 3 );

    };

    var getInteger = function () {

        return getRandom( 10 );

    };

    /*
     * consider the code below calls to remote library routines
     */

    /*
     * simulate doing some time consuming task
     * like making a remote api call or something
     * of that nature
     *
     *  simulates up to a 3 second delay
     *  then generates a random number between 0 and 10
     *  if it is <= 5 calls Deferred.resolve
     *  otherwise it calls Deferred.fail
     */
    var getData1 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example1", "getData1.delay = " + delay );

        var number = getInteger();
        logIt( "#example1", "getData1.number = " + number );

        logIt( "#example1", "getData1 calling timeout" );
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
     *  simulates up to a 3 second delay
     *  then generates a random number between 0 and 10
     *  if it is <= 5 calls Deferred.resolve
     *  otherwise it calls Deferred.fail
     */
    var getData2 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example2", "getData2.delay = " + delay );

        var number = getInteger();
        logIt( "#example2", "getData2.number = " + number );

        logIt( "#example2", "getData2 calling timeout" );
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
     *  simulates up to a 3 second delay
     *  then generates a random number between 0 and 10
     */
    var getData3 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example3", "getData3.delay = " + delay );

        var number = getInteger();
        logIt( "#example3", "getData3.number = " + number );

        logIt( "#example3", "getData3 calling timeout" );
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
     *  simulates up to a 3 second delay
     *  then generates a random number between 0 and 10
     */
    var getData4 = function () {

        var deferred = $.Deferred();

        var delay = getDelay();
        logIt( "#example3", "getData4.delay = " + delay );

        var number = getInteger();
        logIt( "#example3", "getData4.number = " + number );

        logIt( "#example3", "getData4 calling timeout" );
        setTimeout( function () {
            logIt( "#example3", "getData4.number = " + number );
            deferred.resolve( number );
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
    logIt( "#example1", "calling getData1 using promise.done & promise.fail" );
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
    logIt( "#example2", "calling getData2 again using when and then" );
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
     * and sum the 2 integer values that are returned
     * using $.when(...).done(...)
     * a more succinct and semantically expressive style
     *
     * the summing, also done asynchronously,
     * is performed only after all integer values have
     * been returned
     */
    logIt( "#example3", "calling getData3, getData4 using when and done and summing their returned integer values" );
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

} );
