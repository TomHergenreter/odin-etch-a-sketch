
let hexLetterToNumber = {
    a:10,
    b:11,
    c:12,
    d:13,
    e:14,
    f:15    
}

//convert hex input to decimal values, and return split array containing r, g, and b decimal values
export function hexToDecimal(hexNumber) {
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
    decimalToRGB(splitHexArray); 
}

//convert decimal numbers to rgb values, and return array with rgb values
export function decimalToRGB(splitHexArray){
    const decimalArray = splitHexArray;
    let RGBArray = [];
    for(const RGBPair in decimalArray){
        for( let i = 0; i < decimalArray[RGBPair].length; i+=2){
            let value1 = decimalArray[RGBPair][i] * 16;
            let value2 = decimalArray[RGBPair][i + 1] + value1;
            RGBArray.push(value2);
        }
    }
    darkenRGB(RGBArray);
}

//darken rgb values, set to zero if number is negative, convert and return hex code
export function darkenRGB(RGBArray){
    let darkenedRGB = [];
    let darkenedHex = '#';
    for (const colorValue of RGBArray){
       let percentValue = colorValue / 255;
       let darkerValue = Math.round((percentValue - .1) * 255);
       if (darkerValue < 0){
        darkenedRGB.push(0);
       }else{
        darkenedRGB.push(darkerValue);
       }
    }
    for (const value of darkenedRGB){
        let hexValue2 = value % 16;
        let hexValue1 = (value - hexValue2) / 16;
        darkenedHex += `${hexValue1.toString(16)}${hexValue2.toString(16)}`; 
    }
    return darkenedHex;
}

//called from main js, check if RGB or hex value and call correct function
export function darkenHex(value){
    if (value.charAt(0) === 'r'){
        let parsedValue = value.replaceAll(/rgb|\(|\)| | /g, '');
        let RGBArray = parsedValue.split(',');
        return darkenRGB(RGBArray);
    }else{
        hexToDecimal(value);
    }
}










