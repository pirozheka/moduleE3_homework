// Задание 1 
function numberOfEvenAndOdd(arr) {
    let odds = 0;
    let evens = 0;
    let nulls = 0;

    arr.forEach(element => {
        if (element == 0) {
            nulls += 1;
        } else if (element % 2 == 0) {
            evens += 1;
        } else {
            odds += 1;
        }
    });
    console.log(`Количество четных элементов: ${evens}, количество нечетных - ${odds}, нулей - ${nulls}`);
}

const myArr = [2, 5, 7, 0, 0, 4, 4, -3, 1, 9, 6, -6, 4];
numberOfEvenAndOdd(myArr);

// Задание 2
function isSimple(num) {
    if (num == 0 || num == 1) {
        console.log('Число не подходит под вычисления, так как является 0 или 1');
        return;
    } else if (num > 1 && num <= 1000) {
        // Простое число - число больше единицы, которое делится  на 1 и на само себя
        // Нужно убедиться, что оно не делится ни на одно число, от 2 до квадратного корня из числа (после квадратного корня проверки бессмысленны, что оптимизирует алгоритм)
        for (let i = 2; i <= Math.sqrt(num); i++) {
            //если делится на какое-либо из перебранных чисел...
            if (num % i === 0) {
                console.log('Число не является простым');
                return;
            }
        }
        console.log('Число простое!');
        return;
    } else {
        console.log('Данные неверны');
    }
}

numb = 2;
isSimple(numb);


// Задание 3 
function createNumb(x) {
    return function(y) {
        return x+y;
    };
}

const addTen = createNumb(10);
const result = addTen(4);
console.log(result);

// Задание 4
function printNumbers(from, to) {
    let i = from;
    //Выводим текущее число (i). Как только достигли to - останавливаем интервал
    const timer = setInterval(() => {
        console.log(i);
        if (i === to) {
            clearInterval(timer);
        }
        i++;
    }, 1000);
}

printNumbers(5, 15);

// Задание 5
const power = (x, n) => {
    let result = 1;
    // Выполняем цикл n раз, умножая result на x (степень)
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    console.log(result);
    return result;
};

power(2, 3);
power(4, 4);