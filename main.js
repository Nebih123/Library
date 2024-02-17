let result = 0

function sum(x, y) {
    return x + y
}

function substract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    if (y !== 0) {
        return x / y
    } else {
        console.log("Write another num")
        return null
    }
}

console.log("Calculator menu");
console.log("1. Addition");
console.log("2. Substraction");
console.log("3. Multiply");
console.log("4. Divide");

let choice = prompt("Write calculator choice", "1, 2, 3, 4")

if (['1', '2', '3', '4'].includes(choice)) {
    let num1 = parseFloat(prompt("Write num 1"));
    let num2 = parseFloat(prompt("Write num 2"));

    let result 
    if (choice === '1') {
        result = sum(num1, num2)
    } else if (choice === '2') {
        result = substract(num1, num2)
    } else if (choice === '3') {
        result = multiply(num1, num2)
    } else if (choice === '4') {
        result = divide(num1, num2)
    } 

    if (result !== null) {
        alert(`Result: ${result}`)
    } else {
        alert('Invalid Choice. Please enter a number between 1 - 4')
    }
}