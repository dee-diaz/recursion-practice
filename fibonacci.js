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
