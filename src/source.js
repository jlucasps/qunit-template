var Calc = function() {
    this.sum = function(a, b) {
        return a + b;
    }
};

Calc.prototype.sum = function( a, b ) {
    return a + b;
};

Calc.prototype.div = function( a, b ) {
    if ( b == 0 ) {
        throw new Error("can't divide by zero");
    }
    return a / b;
};