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
    let result = expr.match(/.{1,10}/g).map((letter) => {
        return letter.match(/10|11|\*\*\*\*\*\*\*\*\*\*/g);
    }).map((arr) => {
        return arr.reduce((acc, cur) => {
            acc += cur.replace(/10/g, ".").replace(/11/g, "-").replace(/\*\*\*\*\*\*\*\*\*\*/gi, " ");

            //acc += cur.replace(/\**********/g, " ");
            return acc;
        }, '')
    }).map((el) => {
        if (el == " ") return " ";
        return MORSE_TABLE[el];
    }).join('');
    return result;
}

module.exports = {
    decode
}