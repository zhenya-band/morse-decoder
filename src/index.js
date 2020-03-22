const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const arr = expr.split('');
    const resultArr = [];
    let str = '';
    for (let i = 0; i < arr.length; i += 2) {
        switch(arr[i] + arr[i + 1]) {
            case '00':
                continue;
            case '10':
                str += '.';
                break;
            case '11':
                str += '-';
                break;
            case '**':
                str += '*';
                i += 8;
                break;
        }
        if (i % 10 === 8) {
            resultArr.push(str === '*' ? ' ' : MORSE_TABLE[str]);
            str = '';
        }
    }
    return resultArr.join('');
}

module.exports = {
    decode
}
