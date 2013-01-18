/**
 * Created with JetBrains WebStorm.
 * User: jeffrey
 * Date: 1/13/13
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */

module( "Testing getData1" );
asyncTest( "getData1", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData1();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 5, "getData1 has generated an integer: " + data );
        start();
    } );

    dataPromise.fail( function ( err ) {
        ok( true, "getData1 failed to generated an integer for us to use but this is expected :" + err );
        start();
    } );

} );

module( "Testing getData2" );
asyncTest( "getData2", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData2();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 5, "getData2 has generated an integer: " + data );
        start();
    } );

    dataPromise.fail( function ( err ) {
        ok( true, "getData2 failed to generated an integer for us to use but this is expected :" + err );
        start();
    } );

} );

module( "Testing getData3" );
asyncTest( "getData3", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData3();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 10, "getData3 has generated an integer: " + data );
        start();
    } );

} );

module( "Testing getData4" );
asyncTest( "getData4", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData4();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 10, "getData4 has generated an integer: " + data );
        start();
    } );

} );

module( "Testing getData5" );
asyncTest( "getData5", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData5();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 10, "getData5 has generated an integer: " + data );
        start();
    } );

} );

module( "Testing getData6" );
asyncTest( "getData6", 1, function () {

    "use strict"; // of course!

    var dataPromise = getData6();
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 10, "getData6 has generated an integer: " + data );
        start();
    } );

} );

module( "Testing getSum" );
asyncTest( "getSum", 1, function () {

    "use strict"; // of course!

    var dataPromise = getSum( 10, 5 );
    dataPromise.done( function ( data ) {
        ok( typeof data == "number" && data >= 0 && data <= 20, "getSum has returned the sum of 2 integers: " + data );
        start();
    } );

} );
