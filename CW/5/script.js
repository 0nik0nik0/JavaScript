const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
console.log(week[2]);

const user = {
  name: 'Vasysa',
  age: 23,
  surname: 'Morev'
};

user.fatherName = prompt('Enter Father name');

console.log(user.name, user.surname, user.fatherName, user.age);








const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj = {}
for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i]
}

console.log(obj);

const obj = {x: 1, y: 2, z: 3};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        obj[key] = obj[key] ** 2;
    }
}
console.log(obj);







const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let sum = 0
for(const key in obj) {
    for(const value in obj[key]){
        sum += obj[key][value]
    }
}

console.log(sum);

