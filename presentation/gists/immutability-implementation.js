function immutableSet(obj, key, value) {
  var newObject = clone(obj);
  newObject[key] = value;
  return newObject;
}

const state = {counter: 1};
const newState = immutableSet(obj, "counter", 2);

state === newState //false