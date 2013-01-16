/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 12/24/12
 * Time: 12:02 PM
 *
 * Code examples covering various use cases of jQuery's $.Deferred and Promise:
 *
 * 1. Example #1 - calling getData1 to obtain an integer using Promise.done & Promise.fail
 * 2. Example #2 - calling getData2 to obtain an integer using $.when and Promise.then
 * 3. Example #3 - calling getData3, getData4 in parallel to obtain 2 integers using $.when and then summing the 2
 * returned integer values using Promise.done
 * 4. Example #4 - calling getData5, getData6 in parallel to obtain 2 integers using $.when and then calling getSum
 * using Promise.then to sum the 2 returned integer values and obtaining the result using Promise.done*
 *
 * For background information on jQuery $.Deferred and Promise please read the following:
 *
 * 1. jQuery Deferred documentation, at http://api.jquery.com/category/deferred-object/
 * 2. The article by Jeremy Chone, at http://www.html5rocks.com/en/tutorials/async/deferred/
 * 3. The article by Julian Aubourg and Addy Osmani, at http://msdn.microsoft.com/en-us/magazine/gg723713.aspx
 *
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
 * Require that jquery & mockapi load prior to calling our main script which is passed $ as a parameter.
 */
requirejs( ["jquery", "mockapi"], function ( $ ) {

    "use strict"; // of course!

    /*
     * Consider the code below client code.
     */

    /*
     * Example #1 - calling getData1 to obtain an integer using Promise.done & Promise.fail
     *
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
     * Example #2 - calling getData2 to obtain an integer using $.when and Promise.then
     *
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
     * Example #3 - calling getData3, getData4 in parallel to obtain 2 integers using $.when and then summing the 2
     * returned integer values using Promise.done
     *
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
     * Example #4 - calling getData5, getData6 in parallel to obtain 2 integers using $.when and then calling getSum
     * using Promise.then to sum the 2 returned integer values and obtaining the result using Promise.done
     *
     * A more contrived example of using Deferred.
     * Makes 3 asynchronous api calls, 2 in parallel and
     * 1 after the first 2 have run which sums the 2 integer
     * values that are returned.
     * Using $.when(...).then(...),
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

     You might think that we can now do this:

     chainedPromise = $.when( dataPromise5, dataPromise6 ).then( function ( val1, val2 ) {
     return getSum1( val1, val2 ); // getSum1 returns a Promise object
     } );
     chainedPromise.progress( function ( selector, message ) {
     logIt( selector, message );
     } );
     chainedPromise.done( function ( sum ) {
     logIt( "#example4", "getData5, getData6 returned a total of " + sum );
     } );

     However we cannot because as per the docs for then() (http://api.jquery.com/deferred.then/):

     As of jQuery 1.8, the deferred.then()'s filter functions can return a new value to be
     passed along to the promise's .done() or .fail() callbacks, or they can return another
     observable object (Deferred, Promise, etc) which will pass its resolved / rejected
     status and values to the promise's callbacks.

     As the above documentation states, if then()'s filter functions return a Deferred or Promise
     it will pass its resolved and rejected status and values to the promise's callbacks, but not
     its progress in response to notify or notifyWith. This is unfortunate and I hope that in a
     future release then() will also pass a returned Deferred object's progress as well. Until
     then, you can use the solution below.

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
