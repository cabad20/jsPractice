console.log("hello world")
var input;
if (input === undefined) {
  console.log("it's not defined");
} else {
  console.log(input);
}
function my_function_statement(arg) {
  console.log("inside my function statement");
  console.log(arg);
}
my_function_statement("hello");


var my_function_expression = function(arg) {
  console.log("inside my function expression");
  console.log(arg);
}
my_function_expression("hello expression");

console.log(typeof my_function_expression);
var my_name = "Emmit Smith"
console.log(my_name);


journey = "We're going to October 21, 2015.. the FUTURE!!"
puts journey.gsub "FUTURE", "PAST"

console.log("I am ...");
var myName = 'Emmit Smith'
var myName = myName.toUpperCase();
console.log(myName);

var journey = "We're going to October 21, 2015.. the FUTURE!!"
var replaceString = journey.replace("FUTURE", 'PAST')
console.log(replaceString)

var numberOfHoverboards = '1'
console.log("there are at least # " + numberOfHoverboards + " hoverboard(s) in 2015");
numberOfHoverboards = parseFloat(numberOfHoverboards);
numberOfHoverboards -= 1;

console.log("there are at least # " + numberOfHoverboards + " hoverboard(s) in 2015");

hoverboards = 0
if (hoverboards >= 100) {
  console.log("The future rocks!");
} else if (hoverboards < 100 && hoverboards > 1) {
  console.log("The future is pretty cool");
} else if (hoverboards === 1) {
  console.log("Meh");
} else {
  console.log("The future is boring.");
}

console.log("Let's Go!");
speed = 0;
while (speed <= 89){
  console.log(speed + " mph!");
  speed ++;
  if (speed === 88){
    console.log("ZOOOOM!!");
  }
}

var actors = ["Michael Fox", "Christopher Lloyd", "Lea Thompson", "Claudia Wells"]

actors.forEach(function(actor){
  console.log(actor + " is so cool");
});


var functionExpression = function greetingFor(name){
  console.log("Hello, " + name);
}

functionExpression("Marty");
