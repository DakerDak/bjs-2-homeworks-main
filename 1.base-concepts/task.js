"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
   arr = [];
  }

  if (discriminant === 0) {
    arr = -b/(2*a);
    arr = [arr];
  }

  if (discriminant > 0) {
    let r1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let r2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [r1, r2];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
