var Immutable = require('immutable');

var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
var map3 = map1.set('a', 1);
map1.get('b'); // 2
map2.get('b'); // 50

map1 === map2 //false
map1 === map3 //true