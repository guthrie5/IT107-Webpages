

function add(number1, number2) {
    var addingnumbers = number1 + number2
    var addingsentence = `${number1} + ${number2} = ${addingnumbers}`
    return addingsentence;
}

function subtract(number1, number2) {
    var subtractingnumbers = number1 - number2
    var subtractingsentence = `${number1} - ${number2} = ${subtractingnumbers}`
    return subtractingsentence;
}

function multiply(number1, number2) {
    var multiplyingnumbers = number1 * number2
    var multiplyingsentence = `${number1} * ${number2} = ${multiplyingnumbers}`
    return multiplyingsentence;
}

function divide(number1, number2) {
    var dividingnumbers = number1 / number2
    var dividingsentence = `${number1} / ${number2} = ${dividingnumbers}`
    return dividingsentence;
}

var addnumbers = add(1, 2)
var subtractnumbers = subtract(3, 1)
var multiplynumbers = multiply(5, 2)
var dividenumbers = divide(6, 2)

console.log(addnumbers);
console.log(subtractnumbers);
console.log(multiplynumbers);
console.log(dividenumbers);