export {capitalize, reverseString, add, subtract, divide, multiply};

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
    let output = "";
    for(let i = str.length - 1; i >= 0; i--){
        output += str.charAt(i);
    }
    return output;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}