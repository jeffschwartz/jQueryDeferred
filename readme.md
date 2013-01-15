jQuery $.Deferred and Promise
=============================

Code examples covering various use cases of jQuery's $.Deferred and Promise:

1. Example #1 - calling getData1 to obtain an integer using Promise.done & Promise.fail

2. Example #2 - calling getData2 to obtain an integer using $.when and Promise.then

3. Example #3 - calling getData3, getData4 in parallel to obtain 2 integers using $.when and then summing the 2 returned integer values using Promise.done

4. Example #4 - calling getData5, getData6 in parallel to obtain 2 integers using $.when and then calling getSum using Promise.then to sum the 2 returned integer values and obtaining the result using Promise.done

For background information on jQuery's $.Deferred and Promise please read the following:

1. jQuery Deferred documentation, at http://api.jquery.com/category/deferred-object/

2. The article by Jeremy Chone, at http://www.html5rocks.com/en/tutorials/async/deferred/

3. The article by Julian Aubourg and Addy Osmani, at http://msdn.microsoft.com/en-us/magazine/gg723713.aspx

Includes a full test suite using QUnit
