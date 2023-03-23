"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b**2 - 4 * a * c;
  console.log(d);
  
  if (d < 0) {
    return arr;
    
  } else if (d === 0) {
      x1 = - b / (2 * a);
      arr.push(x1);
      return arr;
     
  } else if (d > 0) {
      x1 = (- b + Math.sqrt(d)) / (2 * a);
      x2 = (- b - Math.sqrt(d)) / (2 * a);
      arr.push(x1,x2);
      return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  let s = amount - contribution;
  let p = (percent / 100) / 12;
  let n = countMonths;
  let monthsMortgage = s * (p + (p / (((1 + p)**n) - 1)))
  let totalMortgage = (monthsMortgage * n).toFixed(2);
  let Mortgage = Number(totalMortgage);
  
  return Mortgage;

}