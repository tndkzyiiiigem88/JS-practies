console.log('Task-5');

let country = prompt("Введіть назву вашої країни для доставки товару:").toLowerCase();
let price;

switch (country) {
    case 'китай':
        price = 100;
        alert(`Доставка в Китай буде коштувати ${price} кредитів`);
        break;
    case 'чилі':
        price = 250;
        alert(`Доставка в Чилі буде коштувати ${price} кредитів`);
        break;
    case 'австралія':
        price = 170;
        alert(`Доставка в Австралія буде коштувати ${price} кредитів`);
        break;
    case 'індія':
        price = 80;
        alert(`Доставка в Індія буде коштувати ${price} кредитів`);
        break;
    case 'ямайка':
        price = 120;
        alert(`Доставка в Ямайка буде коштувати ${price} кредитів`);
        break;
    default:
        alert('У вашій країні доставка недоступна');
}