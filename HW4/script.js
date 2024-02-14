//task1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 === 0) {
        console.log(i + " - четное число");
    } else {
        console.log(i + " - нечетное число");
    }
}


//task2

const newArr = [1, 2, 3, 4, 5, 6, 7];
newArr.splice(3, 2);

console.log(newArr);

//task3

const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
const sum = randomArray.reduce((acc, curr) => acc + curr, 0);
const minNumber = Math.min(...randomArray);
const hasNumber = randomArray.includes(3);

console.log('Сгенерированный массив:', randomArray);
console.log('Сумма элементов массива:', sum);
console.log('Минимальное число в массиве:', minNumber);
console.log('Есть ли число 3 в массиве:', hasNumber);



//task4

for (let i = 1; i <= 20; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += 'x';
    }
    console.log(row);
}