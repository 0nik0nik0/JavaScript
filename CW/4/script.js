// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.

const arr1 = [1, 2, 3];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);


// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
console.log(" ");
const arr2 = [1, 2, 3, 4, 5, 5, 6];
console.log(arr2.length);


// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.
console.log(" ");
const arr3 = ['a', 'b', 'c'];
arr3[0] = 1;
arr3[1] = -2;
arr3[2] = -3;
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);


// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.
console.log("task4");
const arr4 = [1, 2, 3];
for (let i = 0; i < arr4.length; i++) {
    arr4[i]++;
}
console.log(arr4);

// 2. Узнайте длину следующего массива:
console.log("\ntask5");
const arr5 = [];
arr5[3] = 'a';
arr5[8] = 'b';
console.log(arr5.length);
console.log(arr5);

// 1. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
console.log("\ntask6");
const arr6 = [1, 2, 3];
arr6.push(4, 5);
console.log(arr6);

// 1. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после
// этого.
console.log("\ntask7");
const arr7 = [1, 2, 3, 4, 5, 6, 7];
arr7.pop();
arr7.pop();
console.log(arr7.length);



// ---------------------------------------------------

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
console.log("\ntask8");
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// 2. С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.
console.log("\ntask9");
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
console.log("\ntask10");
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.
console.log("\ntask11");
let num = 4;
let count = 0;
while (num < 1000) {
    console.log(num); 
    num *= 3;
    count++;
}
console.log("count = ", count);
console.log("num = ", num);


// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.
// const arr = [2, 5, 9, 15, 1, 4]

// for(let i = 0; i < arr.length; i ++) {
//     arr[i]>3 && arr[i] < 10 ? console.log(arr[i]) : null;
// }

// 1. Найдите сумму четных чисел от 2 до 100.
// let sum = 0
// for(let i = 2; i <= 100; i+=2) {
//     sum += i;
// }
// console.log(sum)
// 2. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
// const arr = [2, 5, 9, 3, 1, 4]
// console.log(arr.reduce((acc,cur) => {
//     acc + cur

// }, 5))
// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'
// let str = '-'
// for(let i = 1; i <= 9; i++) {
//     str += `${i}-`
// }
// console.log(str)

// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою раб
// const arr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;
// while (arr[i] !== 0 && i < arr.length) {
//   i++;
// }
// console.log(i);
// 1. Пусть у нас дан массив состоящий из 10 элементов с
// произвольными числами. Давайте переберем его циклом и числа,
// которые делятся на 2, возведем в квадрат и выведем в консоль, а
// числа, которые делятся на 3, возведем в куб и выведем в консоль.
console.log("\ntask12");
const arr9 = [];
for (let i = 0; i < 10; i++) {
    arr9[i] = Math.floor(Math.random() * 10);
    if (arr9[i] % 2 === 0) {
        console.log(`${arr9[i]}^2 = `, Math.pow(arr9[i], 2));
    } else if (arr9[i] % 3 === 0) {
        console.log(`${arr9[i]}^3 = `, Math.pow(arr9[i], 3));
    } else {
        console.log(`${arr9[i]} = `, arr9[i]);
    }
}
console.log(arr9);


// 2. С помощью двух вложенных циклов выведите на экран следующую
// строку:
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
console.log("\ntask13");
const arr10 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count2 = 0;
let result = arr10.filter(x => x === 3);
console.log(result.length);


// 1. Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
console.log("\ntask14");
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 2);
console.log(arr11);