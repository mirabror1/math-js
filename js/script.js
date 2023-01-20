let first = +prompt('1-sonni kiriting')
let operator = prompt('Matematik amalni kiriting (+ - * /)')
let second = +prompt('2-sonni kiriting')

    if (operator === '+') {
        alert(first + second);
    } else if (operator === '-') {
        alert(first - second);
    } else if (operator === '*') {
        alert(first * second);
    } else if (operator === '/') {
        alert(first / second);
    } else {
        alert("Amal noto'ri")
    }