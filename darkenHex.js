//split hex value into groups of 2, convert letters to numbers
//for each pair, multtiply first number by 16 and add second number to get rgb value
//for each rgb value, subrtact from 255, and divide number by 255 to get darkness percentage
//subtract 10 from darkness percentage
//multiply by 255 to get rgb number
//modulo number by 16


let hexColor = 'a9a9a9';
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
    let hexNumberArray = [...hexNumber];
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
    let splitHexArray = [];
    (hexNumberArray.length > 0)
    for (let i = 0; i < hexNumberArray.length; i += 2){
       splitHexArray.push(hexNumberArray.slice(i, i+2));
    }
    console.log(splitHexArray);
    return splitHexArray;
    
}


// colorValue = (value * 16) + value2;
hexToDecimal(hexColor);









