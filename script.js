const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Do not change code below this line
window.student = student;
window.getKeys = getKeys;