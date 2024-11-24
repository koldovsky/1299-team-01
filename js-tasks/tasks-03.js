// 1. Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript

function circleCircumference(circle) {
  return circle.radius * 2 * Math.PI
}

// 2. Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
