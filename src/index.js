module.exports = function toReadable (number) {
  var num = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    var numLength = number.toString().length;
    var numArr = number.toString().split('');

    if (numLength === 1) {
        return num[number];
    }

    if (numLength === 2) {
        if (num[number]) {
            return num[number];
        } else return num[numArr[0] + 0] + ' ' + num[numArr[1]];
    }

    if (numLength === 3) {
        if (num[number]) { 
            return 'one ' + num[number]; 
        } else if (numArr[1] == 0 && numArr[2] == 0) { 
            return num[numArr[0]] + ' hundred';
        } else if (numArr[1] == 0){ 
            return num[numArr[0]] + ' hundred ' + num[numArr[2]];
        } else return num[numArr[0]] + ' hundred ' + (num[numArr[1] + numArr[2]] || num[numArr[1] + 0] + ' ' + num[numArr[2]]);
    }
}
