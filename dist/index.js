"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reader_1 = require("./file_reader/reader");
let fullList = (0, reader_1.readFile)("./inputs/input.txt");
fullList = fullList.trim();
let fullArray = fullList.split(/(\d+)\s{3}(\d+)/);
let pos1 = [];
let pos2 = [];
let whichPos = 0;
fullArray.forEach((element) => {
    if (element.match(/^\d+$/)) {
        if (whichPos === 0) {
            pos1.push(parseInt(element));
            whichPos = 1;
        }
        else if (whichPos === 1) {
            pos2.push(parseInt(element));
            whichPos = 0;
        }
    }
});
pos1.sort((a, b) => a - b);
pos2.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < pos1.length; i++) {
    sum += Math.abs(pos1[i] - pos2[i]);
}
console.log(sum);
let similarityScore = 0;
for (let i = 0; i < pos1.length; i++) {
    const rightNum = pos1[i];
    let leftAmt = 0;
    for (let j = 0; j < pos2.length; j++) {
        const leftNum = pos2[j];
        if (leftNum < rightNum) {
            continue;
        }
        else if (leftNum === rightNum) {
            leftAmt += 1;
        }
        else {
            break;
        }
    }
    similarityScore += rightNum * leftAmt;
}
console.log(similarityScore);
