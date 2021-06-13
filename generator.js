// .load generator.js

function * getRandom(arr) {
  arr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  while (arr.length) {
    yield arr.pop();
  }
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const random of getRandom(myArr)) {
  console.log(random)
}

console.log(myArr)

