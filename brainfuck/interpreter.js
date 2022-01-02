let array = new Uint8Array(30000);
let ptr = 0;
let output = "";

const startInterpreter = (id) => {
    interpret(document.getElementById(id).value);

    array = new Uint8Array(30000);
    ptr = 0;
    output = "";
}

/**
 * Interprets a brainfuck code
 * @param {string} code 
 */
const interpret = (code) => {
    code = code.replace(/[^><+\-.,[\]]/g, "");

    for (let i = 0; i < code.length; ++i) {
        switch (code[i]) {
            case '>':
                if (ptr === 30000) {
                    ptr = 0;
                } else {
                    ptr++;
                }

                break;
            case '<':
                if (ptr === 0) {
                    ptr = 30000;
                } else {
                    ptr--;
                }

                break;
            case '+':
                array[ptr]++;
                break;
            case '-':
                array[ptr]--;
                break;
            case '.':
                output += String.fromCharCode(array[ptr]);
                break;
            case ',':
                array[ptr] = prompt("Enter a character:").charCodeAt(0);
                break;
            case '[':
                let index = code.indexOf(']', i + 1);
                if (index < 1) {
                    alert(`The loop at the index ${i} doesn't have a closing bracket!`);
                    return location.reload();
                }
            
                let loopCode = code.slice(i + 1, index);

                while (array[ptr] - 1) {
                    interpret(loopCode);
                }

                break;
            default:
                break;
        }
    }

    document.getElementById("output").innerHTML = output;
}