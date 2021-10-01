/* Задание 1

Получаем массив имен всех игроков */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// ============1 variant======

// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames); // ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Chelsy']

// ========2 variant=======

// let names = [];
// const playerNames = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//     names.push(array[i].name);
//   }
//   return names;
// };

// ========3 variant=======

// const playerNames = [];
// for (const player of players) {
//   console.log(player);
//   playerNames.push(player.name);
// }

// =================================================================================================

/* Задание 2 

Есть строка  "-webkit-transition", должно получиться WebkitTransition */

// function camelize(str) {
//   const newStr = str.split("");
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === "-") {
//       // console.log(newStr[i + 1]);
//       newStr[i] = "";
//       newStr[i + 1] = newStr[i + 1].toUpperCase();
//     }
//   }
//   const result = newStr.join("");
//   console.log(result);
// }
// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));

// =============================
// function camelize(str) {
//   const newStr = str
//     .split("")
//     .map((elem, i, newStr) => {
//       if (elem === "-") {
//         // console.log(i);
//         // console.log(elem);
//         // console.log(newStr[i + 1]);
//         newStr[i] = "";
//         newStr[i + 1] = newStr[i + 1].toUpperCase();
//     } else {
//         return elem;
//       }
//     })
//     .join("");
//   return newStr;
// }
// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));

// ====================с тернарным оператором=======================================

function camelize(str) {
  const newStr = str
    .split("")
    .map((elem, i, newStr) => {
      return elem === "-"
        ? (newStr[i + 1] = newStr[i + 1].toUpperCase()) && (newStr[i] = "")
        : elem;
    })
    .join("");
  return newStr;
}

console.log(camelize("-webkit-transition"));

// =======================================================================

/* Задание 3 

Создайте функцию, которая принимает строку и возвращает ее записанную "заборчиком" (ПрИвЕт) */

// const fn = function (string) {
//   let invertedString = "";
//   console.log(string.toLowerCase());
//   let str = string.split("");
//   str.map((element) => {
//     console.log(element);
//     return (invertedString +=
//       element === element.toLowerCase()
//         ? element.toUpperCase()
//         : element.toLowerCase());
//   });
//   return invertedString;
// };

// console.log(fn("Hello wonderful World!")); // hELLO WONDERFUL wORLD!
// console.log(fn("HellO wOnderful WOrld!")); // hELLo WoNDERFUL woRLD!

// // ======2 variant======

// const fn = function (string) {
//   return string
//     .split("")
//     .map((element) => {
//       return element === element.toLowerCase()
//         ? element.toUpperCase()
//         : element.toLowerCase();
//     })
//     .join("");
// };
// =======================================
const fn = function (string) {
  const array = [...string];
  const result = array.reduce((acc, letter) => {
    if (letter === letter.toUpperCase()) {
      acc += letter.toLowerCase();
    } else {
      acc += letter.toUpperCase();
    }
    return acc;
  }, "");
  return result;
};
console.log(fn("Hello wonderful World!")); // hELLO WONDERFUL wORLD!
console.log(fn("ПРиВет")); // прИвЕТ

// ===================================================

/* Задание 4

Напиши функцию, выводящую в консоль числа от 1 до n, где n - это целое число, которое функция принимает
в качестве параметра с такими условиями:
вывод fizz вместо чисел кратных 3, вывод buzz вместо чисел кратных 5, вывод fizzbuzz вместо чисел кратных
как 3 так и 5 */

// const fizzbuzzz = function (...n) {
//   for (const el of n) {
//     if (el % 3 === 0 && el % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (el % 3 === 0) {
//       console.log("fizz");
//     } else if (el % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log("el", el);
//     }
//   }
// };

// fizzbuzzz(1, 2, 3, 6, 7, 8, 9, 12, 15, 16, 17, 18, 20);

// =============2 variant: тернарный оператор============

const fizzbuzz = function (n) {
  for (let i = 0; i <= n; i += 1) {
    i % 3 === 0 && i % 5 === 0
      ? console.log("fizzbuzz")
      : i % 3 === 0
      ? console.log("fizz")
      : i % 5 === 0
      ? console.log("buzz")
      : console.log("i :", i);
  }
};

fizzbuzz(20);

// ==========================================================================

/* Задание 5

Напиши функцию, которая принимает аргументами два числа, задающих диапазон, который нужно вывести в консоль. 
Если в числе есть "3", в консоль вместо него выводить "three" (т.е. вместо 3, 13,23 выводить "three")*/

// const numbers = function (num1, num2) {
//   for (let i = num1; i < num2; i += 1) {
//     i.toString().includes(3) ? console.log("three") : console.log("i :", i);
//   }
// };

// numbers(1, 25);

// =============================================================================

/* Задание 6

При помощи цикла for введите четные числа от 2 до 10*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log("четное: ", i);
//   }
// }

// =============2 variant============

let number = 0;
while (number <= 10) {
  number++;
  number % 2 === 0 ? console.log(number) : "";
}

// =====================================================================

/* Задание 7

создать массив, в котором поочередно перечисляется длина элементов исходного массива */

var arr = ["есть", "жизнь", "на", "марсе"];

const arrElLength = arr.map((element) => {
  return element.length;
});
console.log(arrElLength); // [4, 5, 2, 5]

// =====================================================================

/* Задание 8
 посчитать все лайки пользователей*/

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const totalLikes = tweets.reduce((acc, element) => {
//   return (acc += element.likes);
// }, 0);
// console.log(totalLikes); //32

// =====2 variant=====

// let total = 0;

// const values = Object.values(tweets);
// for (const value of values) {
//   console.log(value.likes); // 5  2  17  8  0
//   total += value.likes;
// }
// console.log(total); // 32

/* Задание 9

найти все обьекты, у которых есть 'js' */

// const obj = tweets.filter((elem) => elem.tags.includes("js"));
// console.log(obj);

// ================================================

/* Задание 10 */

// class User {
//   constructor(name, surname, nickName = "default") {
//     this.name = name;
//     this.surname = surname;
//     this.nickName = nickName;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// let date = new Date();
// console.log(date.toString());

// let shortDate = date.toString().slice(10, 15);

// console.log(shortDate); //2021

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     let cours = shortDate - this.year;
//     return `Вы на ${cours} курсе`;
//   }
// }
// let student = new Student("Иван", "Иванов", 2017);
// console.log(student.name); // Иван
// console.log(student.surname); // Иванов
// console.log(student.nickName); // default
// console.log(student.getFullName()); // Иван Иванов
// console.log(student.year); // 2017
// console.log(student.getCourse()); // Вы на 4 курсе

// // =======2 variant======

const currentYear = new Date().getFullYear();
console.log(currentYear); // 2021

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  getFullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }
  get name() {
    return this._name;
  }

  get surname() {
    return this._surname;
  }
  get year() {
    return this._year;
  }
  getCourse() {
    return `Вы на ${currentYear - this._year} курсе`;
  }
}
let student = new Student("Иван", "Иванов", 2017);
console.log(student.name); // Иван
console.log(student.surname); // Иванов
console.log(student.getFullName()); // Иван Иванов
console.log(student.year); // 2017
console.log(student.getCourse()); // Вы на 4 курсе

// ==============================================================

/* Задание 11

Есть функция, которая принимает к-либо число, в данном случае - это ноль. Это базовое число идет в параметр
функции. В самой функции есть один setTimeout(), который повторяется несколько раз за счет рекурсивной
функции, которая вызывает саму себя, но с чем-то измененным и до определенного момента. */

// const x = function (time) {
//   setTimeout(() => {
//     time += 100;
//     time < 1000
//       ? console.log(time, "еще медленнее, пожалуйста!")
//       : console.log(time, "в самый раз!");
//     return time < 1500 ? x(time) : "";
//   }, time);
// };

// x(0);
// ===========2 variant===========

const x = function (time) {
  let timer = setTimeout(() => {
    time < 1000
      ? console.log(time, "еще медленнее, пожалуйста!")
      : console.log(time, "в самый раз!");
    return x(time + 100);
  }, time);
  time > 1500 ? clearInterval(timer) : "";
};
x(0);

// =================================================================

/* Задание 12
Promises */

const product1 = {
  id: 1,
  price: 100,
  quantity: 2,
};
const product2 = {
  id: 2,
  price: 50,
  quantity: 5,
};
const product3 = {
  id: 3,
  price: 300,
  quantity: 7,
};
const product4 = {
  id: 4,
  price: 180,
  quantity: 12,
};

const toGetSum = function (obj) {
  let num = Math.floor(Math.random() * (10 - 1) + 1);
  let ms = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
  console.log(num);
  console.log(ms);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (obj.quantity >= num) {
        obj.price * num;
        res({ sum: obj.price * num, delay: ms });
      } else {
        rej(obj);
      }
    }, ms);
  });
};
const errLog = function ({ id, quantity }) {
  console.log(`такой продукт ${id} остался в количестве ${quantity}`);
};
const esLog = function ({ sum, delay }) {
  console.log(`ваш заказ на сумму ${sum} будет выполнен через ${delay} ms`);
};

toGetSum(product1).then(esLog).catch(errLog);
// toGetSum(product3).then(esLog).catch(errLog);

// ====================================================================

/* Задание 13

Встроенаая функция setTimeout() использует колбэк - функции.Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдет в состояние "выполнен" через ms миллисекунд
так, чтобы мы могли добавить к нему then: */

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
delay(3000).then(() => alert(`выполнилось через 3 секунды`));

// ===================================================================

/* Задание 14

Что выведет? */

let promise1 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("ferrari");
  }, 1002);
});
let promise2 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("lamborghini");
  }, 1001);
});
let promise3 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("mini");
  }, 1000);
});
let promise4 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("UAZ");
  }, 5008);
});
// // let promise4 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     rej("UAZ");
//   }, 4008);
// });

// // возвращает единственный первый результат
// Promise.race([promise1, promise2, promise3, promise4]).then((car) =>
//   console.log("the winner is:", car)
// );

// // ожидает успешное выполнение всех промисов
Promise.all([promise1, promise2, promise3, promise4])
  .then((car) => console.log("the winners are:", car))
  .catch((err) => console.log(err, "is broken"));

// //возвращает массив всех промисов-как успешных, так и нет
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then((car) => console.log(car))
//   .catch((err) => console.log(err, "is broken"));
