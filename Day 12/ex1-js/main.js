function calculator(a,b){
    this.a = a;
    this.b = b;
}

calculator.prototype.add = function () {
    return (this.a + this.b);
}

calculator.prototype.sub = function () {
    return (this.a - this.b);
}

calculator.prototype.mult = function () {
    return (this.a * this.b);
}

calculator.prototype.log = function () {
    console.log("The sum of " + this.a + " and " + this.b + " is " + this.add());
    console.log("The substruction of " + this.a + " and " + this.b + " is " + this.sub());
    console.log("The multiplication  of " + this.a + " and " + this.b + " is " + this.mult());
}

var c1 = new calculator(5,10);
var c2 = new calculator(4,3);

c1.log();

setTimeout(function(){ c1.log.call(c1) }, 2000);