export const createArray = () => {
    const simpleArray = []; //создали массив
    simpleArray.push('объект в конце массива'); //добавили объект в конец массива
    // 2. Конструктор Array (используется реже)
    // let numbers = new Array(1, 2, 3);
    simpleArray.push('еще объект в конце массива');
    simpleArray.unshift('объект в начале массива'); //добавили объект в начало массива

    console.log(simpleArray);
};