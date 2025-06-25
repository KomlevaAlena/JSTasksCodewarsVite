export const createArray = () => {
    const simpleArray = []; //создали массив
    simpleArray.push(25); //добавили объект в конец массива
    // 2. Конструктор Array (используется реже)
    let twoArray = new Array(1, 2, 3);

    simpleArray.push(15);
    simpleArray.unshift(31); //добавили объект в начало массива
    simpleArray.push(6, 5, 4, 3, 2, 1, 0);//добавили объект в конец массива
    simpleArray.pop();//удалили последний элемент
    simpleArray.shift();//удалили первый элемент

    simpleArray.forEach(item => console.log(item));// forEach (проход без возврата, не возвращает новый массив) 
     
    const doubled = simpleArray.map(num => num * 2); // map (трансформация, возвращает новый массив)

    const evens = simpleArray.filter(num => num % 2 === 0); // filter (фильтрация, вернет массив из четных элементов)

    const sum = simpleArray.reduce((acc, num) => acc + num, 0); // reduce (сумма всех элементов массива, acc (accumulator)который хранит промежуточный результат, num (currentValue) — текущий элемент массива)

    
    const found = simpleArray.find(num => num > 1); // find (первый подходящий)

    const includesNumber = simpleArray.includes(2); // includes (проверка наличия элемента с таким значением true-falce)

    const someNumber = simpleArray.some(num => num > 2); // some (хотя бы один подходящий элемент)

    const everyNumber = simpleArray.every(num => num < 5); // every (подходят ли все элементы)

    const copy = [...simpleArray]; //(копирование массива)
    const sliceCopy = simpleArray.slice();//(копирование массива)

    const merged = [...simpleArray, ...twoArray]; // (объединение массивов)


    // console.log(doubled);
    // console.log(evens);
    console.log(simpleArray);
    console.log(twoArray);
    console.log(merged);
};