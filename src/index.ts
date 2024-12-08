import { readFile } from "./file_reader/reader";
import { getReports } from "./parsers/report_parser";

let fullList: string = readFile("./inputs/input.txt");
let reportFullList: string = readFile("./inputs/reports.txt");
fullList = fullList.trim();
reportFullList = reportFullList.trim();

let fullArray = fullList.split(/(\d+)\s{3}(\d+)/);

let pos1: Array<number> = [];
let pos2: Array<number> = [];

let whichPos = 0;

fullArray.forEach((element) => {
  if (element.match(/^\d+$/)) {
    if (whichPos === 0) {
      pos1.push(parseInt(element));
      whichPos = 1;
    } else if (whichPos === 1) {
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
    } else if (leftNum === rightNum) {
      leftAmt += 1;
    } else {
      break;
    }
  }
  similarityScore += rightNum * leftAmt;
}

console.log(similarityScore);

let reports: Array<string> = getReports(reportFullList);
