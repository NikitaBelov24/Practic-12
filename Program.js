// Функция для считывания числа с клавиатуры
function readNumber() {
    var userInput = prompt("Введите число:"); // Запрашиваем у пользователя ввод числа
    var number = parseFloat(userInput); // Преобразуем строку в число
    return number; // Возвращаем введенное число
}

// Функция для вычисления Sin(x) + Cos(x)
function sinCosSum(x) {
    var sinValue = Math.sin(x); // Вычисляем Sin(x)
    var cosValue = Math.cos(x); // Вычисляем Cos(x)
    var result = sinValue + cosValue; // Суммируем Sin(x) и Cos(x)
    return result; // Возвращаем результат
}

// Главная функция
function main() {
    var number = readNumber(); // Считываем число с клавиатуры
    if (isNaN(number)) { // Проверяем, является ли введенное значение числом
        console.log("Ошибка: Введите корректное число!");
        return;
    }
    var result = sinCosSum(number); // Вычисляем функцию Sin(x) + Cos(x)
    console.log("Результат вычисления Sin(x) + Cos(x) при x =", number, "равен", result);
}

// Вызываем главную функцию
main();