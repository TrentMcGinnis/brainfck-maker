const lookup = [
    { token: " ", number: 32, code: "space" },
    { token: "!", number: 33, code: "exclamation mark" },
    { token: "\"", number: 34, code: "quotation mark" },
    { token: "#", number: 35, code: "number sign" },
    { token: "$", number: 36, code: "dollar sign" },
    { token: "%", number: 37, code: "percent sign" },
    { token: "&", number: 38, code: "ampersand" },
    { token: "'", number: 39, code: "apostrophe" },
    { token: "(", number: 40, code: "left parenthesis" },
    { token: ")", number: 41, code: "right parenthesis" },
    { token: "*", number: 42, code: "asterisk" },
    { token: "+", number: 43, code: "plus sign" },
    { token: ",", number: 44, code: "comma" },
    { token: "-", number: 45, code: "hyphen" },
    { token: ".", number: 46, code: "period" },
    { token: "/", number: 47, code: "slash" },
    { token: "0", number: 48, code: "digit 0" },
    { token: "1", number: 49, code: "digit 1" },
    { token: "2", number: 50, code: "digit 2" },
    { token: "3", number: 51, code: "digit 3" },
    { token: "4", number: 52, code: "digit 4" },
    { token: "5", number: 53, code: "digit 5" },
    { token: "6", number: 54, code: "digit 6" },
    { token: "7", number: 55, code: "digit 7" },
    { token: "8", number: 56, code: "digit 8" },
    { token: "9", number: 57, code: "digit 9" },
    { token: ":", number: 58, code: "colon" },
    { token: ";", number: 59, code: "semicolon" },
    { token: "<", number: 60, code: "less-than" },
    { token: "=", number: 61, code: "equals-to" },
    { token: ">", number: 62, code: "greater-than" },
    { token: "?", number: 63, code: "question mark" },
    { token: "@", number: 64, code: "at sign" },
    { token: "A", number: 65, code: "uppercase A" },
    { token: "B", number: 66, code: "uppercase B" },
    { token: "C", number: 67, code: "uppercase C" },
    { token: "D", number: 68, code: "uppercase D" },
    { token: "E", number: 69, code: "uppercase E" },
    { token: "F", number: 70, code: "uppercase F" },
    { token: "G", number: 71, code: "uppercase G" },
    { token: "H", number: 72, code: "uppercase H" },
    { token: "I", number: 73, code: "uppercase I" },
    { token: "J", number: 74, code: "uppercase J" },
    { token: "K", number: 75, code: "uppercase K" },
    { token: "L", number: 76, code: "uppercase L" },
    { token: "M", number: 77, code: "uppercase M" },
    { token: "N", number: 78, code: "uppercase N" },
    { token: "O", number: 79, code: "uppercase O" },
    { token: "P", number: 80, code: "uppercase P" },
    { token: "Q", number: 81, code: "uppercase Q" },
    { token: "R", number: 82, code: "uppercase R" },
    { token: "S", number: 83, code: "uppercase S" },
    { token: "T", number: 84, code: "uppercase T" },
    { token: "U", number: 85, code: "uppercase U" },
    { token: "V", number: 86, code: "uppercase V" },
    { token: "W", number: 87, code: "uppercase W" },
    { token: "X", number: 88, code: "uppercase X" },
    { token: "Y", number: 89, code: "uppercase Y" },
    { token: "Z", number: 90, code: "uppercase Z" },
    { token: "[", number: 91, code: "left square bracket" },
    { token: "\\", number: 92, code: "backslash" },
    { token: "]", number: 93, code: "right square bracket" },
    { token: "^", number: 94, code: "caret" },
    { token: "_", number: 95, code: "underscore" },
    { token: "`", number: 96, code: "grave accent" },
    { token: "a", number: 97, code: "lowercase a" },
    { token: "b", number: 98, code: "lowercase b" },
    { token: "c", number: 99, code: "lowercase c" },
    { token: "d", number: 100, code: "lowercase d" },
    { token: "e", number: 101, code: "lowercase e" },
    { token: "f", number: 102, code: "lowercase f" },
    { token: "g", number: 103, code: "lowercase g" },
    { token: "h", number: 104, code: "lowercase h" },
    { token: "i", number: 105, code: "lowercase i" },
    { token: "j", number: 106, code: "lowercase j" },
    { token: "k", number: 107, code: "lowercase k" },
    { token: "l", number: 108, code: "lowercase l" },
    { token: "m", number: 109, code: "lowercase m" },
    { token: "n", number: 110, code: "lowercase n" },
    { token: "o", number: 111, code: "lowercase o" },
    { token: "p", number: 112, code: "lowercase p" },
    { token: "q", number: 113, code: "lowercase q" },
    { token: "r", number: 114, code: "lowercase r" },
    { token: "s", number: 115, code: "lowercase s" },
    { token: "t", number: 116, code: "lowercase t" },
    { token: "u", number: 117, code: "lowercase u" },
    { token: "v", number: 118, code: "lowercase v" },
    { token: "w", number: 119, code: "lowercase w" },
    { token: "x", number: 120, code: "lowercase x" },
    { token: "y", number: 121, code: "lowercase y" },
    { token: "z", number: 122, code: "lowercase z" },
    { token: "{", number: 123, code: "left curly brace" },
    { token: "|", number: 124, code: "vertical bar" },
    { token: "}", number: 125, code: "right curly brace" },
    { token: "~", number: 126, code: "tilde" },
];

const MOVE_RIGHT = ">";
const MOVE_LEFT = "<";
const INCREMENT = "+";
const DECREMENT = "-";
const OPEN_LOOP = "[";
const CLOSE_LOOP = "]";
const OUTPUT = ".";

const desired_output = "Example Output";

const convert_to_numbers = () => [0,...desired_output.split("").map(letter => lookup.filter(f => f.token === letter)[0].number)];

const get_factors = (number) => {
    const is_negative = number < 0;
    const calc_number = Math.abs(number);
    let counter = 1;
    const pairs = [];
    const stop = calc_number % 2 === 0 ? calc_number / 2 : (calc_number - 1) / 2;
    let run = true;
    while(run && counter <= 126){
        const pair = {negative: is_negative, counter, number: calc_number / counter};
        if(pair.number % 1 === 0){
            if(pairs.filter(p => p.counter === pair.number || counter === p.number).length > 0){
                run = false;
            } else {
                pairs.push(pair);
            }
        }
        counter++;
    }
    return pairs[pairs.length - 1];
}

const diff_map = (number_map) => {
    const differences = [];
    for (let i = 0; i < number_map.length - 1; i++) {
        const num_one = number_map[i];
        const num_two = number_map[i + 1];
        const diff = num_two - num_one;
        differences.push(diff);
    }
    return differences;
}

const command_map = (command) => {
    let mapped = ">";
    for (let i = 0; i < command.number; i++) {
        mapped += command.negative ? DECREMENT : INCREMENT;
    }
    mapped += OPEN_LOOP;
    mapped += MOVE_LEFT;
    for (let i = 0; i < command.counter; i++) {
        mapped += INCREMENT;
    }
    mapped += MOVE_RIGHT + DECREMENT;
    mapped += CLOSE_LOOP;
    mapped += MOVE_LEFT;
    mapped += OUTPUT;
    return mapped;
}

const actions = diff_map(convert_to_numbers()).map(n => get_factors(n));
console.log(actions.map(action => command_map(action)).join(""));


