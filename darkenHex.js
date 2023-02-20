//split hex value into groups of 2, convert letters to numbers
//for each pair, multtiply first number by 16 and add second number to get rgb value
//for each rgb value, subrtact from 255, and divide number by 255 to get darkness percentage
//subtract 10 from darkness percentage
//multiply by 255 to get rgb number
//modulo number by 16


let hexColor = 'ff1122';
let hexLetterToNumber = {
    a:10,
    b:11,
    c:12,
    d:13,
    e:14,
    f:15    
}
console.log(...hexColor);

function hexToDecimal(hexNumber) {
    hexNumberArray = [...hexNumber];
    for (const digit in hexNumberArray){
        let value = hexNumberArray[digit];
        if (!isFinite(value)){
            for (const key in hexLetterToNumber){
                if (value === key)
                hexNumberArray[digit] = hexLetterToNumber[key];
            }
        }else{
            hexNumberArray[digit] = parseInt(value);
        }
    }    
    console.log(hexNumberArray);
}

function convertToRGB(hexColor){
    let hexColorValues = [];
    for(let i = 0; i < 6; i += 2){
        hexColorValues.push(hexColor.slice(i, i + 2));
    }
    for(let colorValue of hexColorValues){
        let value1 = parseInt(colorValue[0]);
        let value2 = parseInt(colorValue[1]);
        console.log(value1, value2);
        // colorValue = (value * 16) + value2;
    }
}

// convertToRGB(hexColor);
hexToDecimal(hexColor);









