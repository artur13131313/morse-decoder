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
    let morArr = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        morArr.push(expr.slice(i, i + 10));
    }
    let finish = morArr.map((item) => {
        let bits = item.replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace('**', ' ')
        if (MORSE_TABLE.hasOwnProperty(bits)) {
            return MORSE_TABLE[bits];
        } else {
            return bits;
        }
    });
    return finish.join('')
}

module.exports = {
    decode
}