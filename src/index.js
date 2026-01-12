export {capitalize, reverseString, add, subtract, divide, multiply, caesarCipher, analyzeArray};

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

function caesarCipher(str, num){
    let output = "";
    for(let i = 0; i < str.length; i++){
        let currChar = str.charCodeAt(i);
        if(currChar > 64 && currChar < 91){
            currChar += num;
            if(currChar > 90) currChar -= 26;
            if(currChar < 65) currChar += 26;
            output += String.fromCharCode(currChar);
        }
        else if(currChar > 96 && currChar < 123){
            currChar += num;
            if(currChar > 122) currChar -= 26;
            if(currChar < 97) currChar += 26;
            output += String.fromCharCode(currChar);
        }
        else {
            output += String.fromCharCode(currChar);
        }
    }

    return output;
}

function analyzeArray(arr){
    obj = {
        average: null,
        min: arr[0],
        max: arr[0],
        length: arr.length
    }

    let total = 0;

    arr.forEach((num) => {
        if(num > obj.max) obj.max = num;
        if(num < obj.min) obj.min = num;
        total += num;
    })

    obj.average = total / arr.length;

    return obj;
}