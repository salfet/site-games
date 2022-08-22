// var arr = [1, 5, 4, 10, 0, 3];

// for (var i = 0; i < arr.length; i++) {

// if (arr[i] === 10) {

// break; 

// } else {

// alert(arr[i]);
// }

// }

// const arr = [1, 5, 4, 10, 0, 3];
// arr.indexOf(4);

// let arr = [1, 3, 5, 10, 20];
// let result = arr.join();
// console.log(result);

// let arr = [];
// let arrN = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 10));
// };
// for (const j of arr) {
//     if (j % 2 === 0) {
//         arrN.push(j);
//         continue;
//     }
// };
// console.log(arr);
// console.log(arrN);


// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k); 
// 	}
// }
// console.log(arr);


// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);


// let arr = [9, 8, 7, 'a', 6, 5];
// console.log(arr.sort().pop());
// console.log(arr);


// let arr = [9, 8, 7, 6, 5]; 
// let search = Number(prompt('Введите число от 1 до 10'));
// if (arr.includes(search)) {
//     alert('Да, данное число есть в массиве');
// } else {
//     alert('Этого числа нет');
// };

// function string(str) {
// console.log(str.split('').reverse().join(''));
// }
// string('abcdef');


// let arr = [];
// let sum = 0;
// let numberOfVariables = 6;
// for (let i = 0; i < numberOfVariables; i++) {
//   arr.push(Math.ceil(Math.random() * 10));
// };
// console.log(arr);
// let arrSum = (a, b, c, d, e, f) => {
//     const sum = (a + b + c + d + e + f);
//     let result = sum / numberOfVariables;
//     return result;
// }
// arrSum(arr);
// console.log(Math.floor(arrSum(...arr) * 10) / 10);


// let arr = [[1, 2, 3,],[4, 5, 6]];
// let result = [].concat(...arr);
// console.log(result);

// let arr = [5, 4, 3, 2, 1, 0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     if (i < arr.length - 1) {
//         sum += arr[i + 1];
//     }
//     console.log(sum);
// }




// 1 задание
// let answerSquareLength = prompt('Введите длину и ширину квартиры, начиная с длины');
// let answerSquareWidth = prompt('Теперь ширину');
// let Square = answerSquareLength * answerSquareWidth;
// let choiceOfRepair = Number(prompt(`Какой ремонт вы хотите сделать?
// 1. минимальный 7 000 за метр квадратный.
// 2. средний 10 000 за метр квадратный.
// 3. максимальный 15 000 за метр квадратный.`));
// let result = 0;
// if (choiceOfRepair === 1) {
//     result = Square * 7000;
//     alert('Ваш ремонт составит ' + result + ' рублей');
// } else if (choiceOfRepair === 2) {
//     result = Square * 10000;
//     alert('Ваш ремонт составит ' + result + ' рублей');
// } else if (choiceOfRepair === 3) {
//     result = Square * 15000;
//     alert('Ваш ремонт составит ' + result + ' рублей');
// } else {
//     alert('Такого варианта нет, выберите вариант и напишите цифру');
// };

// 2 задание
// let arr = [];
// let arrN = [];
// let mul = 1;
// for (let i = 0; i < 4; i++) {
//   arr.push(Math.ceil(Math.random() * 10));
// };
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     mul = arr[i];
//     if (i < arr.length - 1) {
//         arrN.push(mul *= arr[i + 1]);
//     }
// }
// console.log(arrN);

// 3 задание
// let i = prompt('Введите четырехзначное число');
// if (i >= 1000 && i <= 9999) {
//     alert('Сумма цифр равна ' + (Number(i[0]) + Number(i[1]) + Number(i[2]) + Number(i[3])));
// } else  if (i >= 10000 || i <= 999) {
//     alert('Это число не из четырех цифр, попробуйте еще раз')
// } else {
//     alert('Таких чисел не существует, увы и ах')};

// 4 задание
// let arr = [];
// let arrN = [];
// let cub = 0;
// for (let i = 0; i < 4; i++) {
//   arr.push(Math.ceil(Math.random() * 10));
// };
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     cub = arr[i];
//     if (i < arr.length) {
//         arrN.push(cub **3);
//     }
// }
// console.log(arrN);

// 5 задание
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// 6 задание
// let i = 'hello';
// console.log(i[0].toUpperCase() + i[1].toUpperCase() + i.slice(2));

// 7 задание
// let arr = [];
// let answer = Number(prompt('Введите число от 1 до 20'));
// for (let i = 1; i <= answer; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// 8 задание
// let data ="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let passwordLength = 8;
// let password = "";
// for (let i = 1; i <= passwordLength; i++) {
//     let randomNumber = Math.floor(Math.random() * data.length);
//     password += data.substring(randomNumber, randomNumber +1);
// }
// alert(password);

// 9 задание
// function areaOfTriangle(){
//     let a = Number(prompt('Введите сторону A'));
//     let b = Number(prompt('Введите сторону B'));
//     let c = Number(prompt('Введите сторону C'));
//     let p = (a + b + c) / 2;  
//     let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     alert(s.toFixed(3));
// }
// areaOfTriangle();

// 10 задание
// function puzzle() {
//     let answer = 'лампочка';
//     let answerUser = prompt('Висит груша, нельзя скушать. Что это? У вас 3 попытки');
//     for (let i = 1; i < 4; i++) {
//         if (answerUser.toUpperCase() === answer.toUpperCase()) {
//             alert('Поздравляем, это правильный ответ!');
//             break;
//         } else if (i === 1){
//             answerUser = prompt('У вас еще есть 2 попытки');
//             continue;
//         } else if (i === 2){
//             answerUser = prompt('У вас еще есть 1 попытка');
//             continue;
//         } else {
//             alert('Вы проиграли');
//             break;
//         }
//     }
// }
// puzzle();


// 1 задача
// const numbers = {
// 	keyin1: 1,
// 	keyin2: 2,
// 	keyin3: 3,
// 	keyin4: 4,
// 	keyin5: 5,
// 	keyin6: 6,
// 	keyin7: 7,
// };
// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// };

// 2 задание
// const date = {
//     день: 18,
//     месяц: 08,
//     год: 2022,
// }
// console.log(Object.values(date));

// 3 задание
// const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const object = {};
// for (let i = 0; i < 7; i++) {
//     object[en[i]] = [ru[i]];
// }
// console.log(object);

// 4 задание
// const week = {
//     1:"понедельник",
//     2:"вторник",
//     3:"среда",
//     4:"четверг",
//     5:"пятница",
//     6:"суббота",
//     7:"воскресенье",
// };
// const answer = prompt('Введите день недели или цифру').toLowerCase();
// for (const day of Object.values(week)) {
//     if (answer === day) {
//         alert('Будний день');
//         continue;
//     } else if (answer === week[6] || answer === week[7]) {
//         alert('Выходной день');
//         break;
//     }
// }
// for (const numberDay of Object.keys(week)) {
//     if (answer == numberDay) {
//         alert(week[answer]);
//         continue;
//     } else if (answer <= 0 || answer >= 8) {
//         alert('Я не знаю, что это за день недели');
//         break;
//     }
// }

// 5 задание
// const numbers = {
// 	key1: {
// 		keyin1: 1,
// 		keyin2: 2,
// 		keyin3: 3,
// 	},
// 	key2: {
// 		keyin1: 4,
// 		keyin2: 5,
// 		keyin3: 6,
// 	},
// }
// const number1 = Object.values(numbers.key1);
// const number2 = Object.values(numbers.key2);
// const number3 = [].concat(number1, number2);
// const sum = number3 => number3.reduce((a, b) => a + b, 0);
// let sum1 = sum(number3);
// console.log(sum1)

// 6 задание
// const objMonth = {
//     ru: {
//         1: 'январь',
//         2: 'февраль',
//         3: 'март',
//         4: 'апрель',
//         5: 'май',
//         6: 'июнь',
//         7: 'июль',
//         8: 'август',
//         9: 'сентябрь',
//         10: 'октябрь',
//         11: 'ноябрь',
//         12: 'декабрь',
//     },
//     en: {
//         1: 'january',
//         2: 'february',
//         3: 'march',
//         4: 'april',
//         5: 'may',
//         6: 'june',
//         7: 'july',
//         8: 'august',
//         9: 'september',
//         10: 'october',
//         11: 'november',
//         12: 'december',
//     },
// }
// let language = prompt('Введите ru или en');
// let month = prompt('Введите номер месяца, который вы хотите вывести');
// for (const obj of Object.keys(objMonth)) {
//     if (language === obj) {
//         for (const objRu of Object.keys(objMonth.ru)) {
//             if (month === objRu) {
//                 alert(objMonth.ru[month]);
                
//             };
//         };
//         break;
//     } else {
//         for (const objEn of Object.keys(objMonth.en)) {
//             if (month === objEn) {
//                 alert(objMonth.en[month]);
                
//             };
//         };
//         break;
//     }
// };




