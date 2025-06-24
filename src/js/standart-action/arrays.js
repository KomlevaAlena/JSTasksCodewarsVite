export const createArray = () => {
    const simpleArray = []; //создали массив
    simpleArray.push('объект в конце массива'); //добавили объект в конец массива
    // 2. Конструктор Array (используется реже)
    // let numbers = new Array(1, 2, 3);
    simpleArray.push('еще объект в конце массива');
    simpleArray.unshift('объект в начале массива'); //добавили объект в начало массива
    simpleArray.push(6, 5, 4, 3, 2, 1, 0);//добавили объект в конец массива
    simpleArray.pop();//удалили последний элемент
    simpleArray.shift();//удалили первый элемент

    simpleArray.forEach(item => console.log(item));// forEach (проход без возврата)
     
    const doubled = simpleArray.map(num => num * 2); // map (трансформация)
    console.log(doubled);
    console.log(simpleArray);
};