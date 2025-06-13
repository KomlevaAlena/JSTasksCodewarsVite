function sortByValueAndIndex(array) {
  return array
    .map((value, index) => [value * (index + 1), value]) // Шаг 1
    .sort((a, b) => a[0] - b[0])                        // Шаг 2
    .map((pair) => pair[1]);                             // Шаг 3
}

export {sortByValueAndIndex};

// шаг1 map: Преобразуем массив в пары [произведение, число]
// шаг1 sort: Сортируем пары по первому элементу (произведению)
// шаг3 map: Извлекаем только исходные числа (второй элемент пары)
