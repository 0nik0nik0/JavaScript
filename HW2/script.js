// task 1
/* let num1 = prompt ("Введите число  num1 равное или меньше 1"); 
let num2 = prompt ("Введите число  num2 больше или равна 3");

if (num1 <= 1 && num2 >= 3) {
    console.log("Корректный ввод");
} else {
    console.log("Некорректный ввод");
} */




//task 2

/* let test = true; 
console.log(test?'+++':'---')
 */




//task 3

/* let day = Number(prompt ("Введите число  day из интервала от 1 до 31"));
let decade = Math.ceil(day / 10); // функция округляет до ближайшего большего числа

console.log("Число " + day + " попадает в " + decade + " декаду месяца.");

 */



//task 4

let number = Number(prompt('Введите число:'));
let hundreds = Math.floor((number % 1000) / 100); //функция округления в меньшую сторону
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;

console.log("В числе " + number + " количество сотен:" + hundreds + ", десятков:" + tens + ", единиц:" + ones);
