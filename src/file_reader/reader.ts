import * as fs from 'fs';

export function readFile(fileName : string) {
    return fs.readFileSync(fileName,'utf8');
}
