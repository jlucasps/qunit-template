test( "Math class", function( ) {
  ok( Calc, 'Math class exists' );
});

test( "Math is function", function( ) {
  ok( typeof Calc === 'function', 'Math is an function' );
});

var calc;

module(" Math sum",{
    setup: function() {
        calc = new Calc();
    },
    teardown: function() {
        calc = undefined;
    }
})

test( "two positive values", function( ) {
    equal( calc.sum( 2, 4 ), 6, "passing 2 and 4 return 6" );
    deepEqual( calc.sum( 2, 4 ), 6, "passing 2 and 4 return 6" );

    equal( calc.sum( 2, 4 ), "6", "passing 2 and 4 return 6" );
    notDeepEqual( calc.sum( 2, 4 ), "6", "passing 2 and 4 return 6" );
})

test( "two negative values", function( ) {
    equal( calc.sum( 2, -4 ), -2, "passing 2 and -4 return -2" );
    deepEqual( calc.sum( 2, -4 ), -2, "passing 2 and -4 return -2" );

    equal( calc.sum( 2, -4 ), "-2", "passing 2 and -4 return -2" );
    notDeepEqual( calc.sum( 2, -4 ), "-2", "passing 2 and -4 return -2" );
})


module(" Math div",{
    setup: function() {
        calc = new Calc();
    },
    teardown: function() {
        calc = undefined;
    }
})

test( "integer division", function() {
    equal( calc.div( 5, 2), '2.5', "divides two positive integer values" );
    deepEqual( calc.div( 7, 2), 3.5, "divides two positive integer values" );
} );
