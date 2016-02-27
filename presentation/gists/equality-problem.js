var state = {counter: 1};
var state2 = {counter: 1};
state === state2; //false

state3 = state2;
state3.counter = 2;
state2 === state3; //true


