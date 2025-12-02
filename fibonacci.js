// Iteration
function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  let arr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    const nextNum = arr[i] + arr[i + 1];
    arr.push(nextNum);
  }

  return arr;
}

console.log(fibs(8));

// Recursion
function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let prevArray = fibsRec(num - 1);
  let lastNum = prevArray[prevArray.length - 1];
  let secondLastNum = prevArray[prevArray.length - 2];

  return [...prevArray, lastNum + secondLastNum];
}
