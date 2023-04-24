// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     console.log(`${i} - это ноль`);
//   } else if (i % 2 === 0) {
//     console.log(`${i} - четное число`);
//   } else {
//     console.log(`${i} - нечетное число`);
//   }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArray() {
  const a = [];
  for (let i = 1; i <= 5; i++) {
    a.push(getRandomNumber(0, 9));
  }
  return a;
}

const array = getArray();

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += arr[i];
  }
  return sum;
}

const sum = sumArray(array);

function minNamber(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const min = minNamber(array);

function findNumberThree(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      return true;
    }
  }
  return false;
}

const result = findNumberThree(array);

console.log(array);
console.log(`Сумма эллементов массива = ${sum}`);
console.log(`Минимальный эллемент массива ${min}`);
console.log(
  result === true ? "В массиве есть число 3" : "В массиве нет числа 3"
);
