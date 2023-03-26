function getArrayParams(...arr) {

  let min = Math.min.apply(null,arr);
  let max = Math.max.apply(null,arr);
  let sum = arr.reduce(function(a,b) {
    return a + b;
  });
  let avg= Number((sum / arr.length).toFixed(2));

  return {min: min, max: max, avg: avg};
}



function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let summ = arr.reduce(function(a,b) {
  return a + b;
  });
  return summ;  
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }  
  let min = Math.min.apply(null,arr);
  let max = Math.max.apply(null,arr);
  return max-min; 
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i=0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
