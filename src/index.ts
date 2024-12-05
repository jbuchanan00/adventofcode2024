import {readFile} from './file_parser/reader'

let fullList: string = readFile('./inputs/input.txt')
fullList = fullList.trim()

let fullArray = fullList.split(/(\d+)\s{3}(\d+)/)

let pos1: Array<number> = []
let pos2: Array<number> = []

let whichPos = 0;

fullArray.forEach(element => {
    if(element.match(/^\d+$/)){
        if(whichPos === 0){
            pos1.push(parseInt(element))
            whichPos = 1
        }else if(whichPos === 1){
            pos2.push(parseInt(element))
            whichPos = 0
        }
    }
})

pos1.sort((a,b)=> a-b)
pos2.sort((a,b)=> a-b)

let sum = 0;

for(let i = 0; i < pos1.length; i++){
    sum += Math.abs(pos1[i] - pos2[i])
}
console.log(sum)