console.log('Task 6');

let input;
let total = 0;

while (true) {
    input = prompt("Введіть число:");

    if (input === null) {
        break;
    }

    input = Number(input);

    if (isNaN(input)) {
        alert("Було написано не число, спробуйте ще раз");
    } else {
        total += input;
    }
}

alert(`Загальна сума чисел дорівнює ${total}`);