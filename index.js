import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

export default function firstName(options) {
    options = options || {};
    const filePath = `./locales/${options.locale || 'en_US'}/firstnames.json`;
    let firstnames = [];
    firstnames = fs.existsSync(path.resolve(filePath)) ? loadJsonFileSync(filePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/firstname/', filePath));
    return firstnames[Math.floor(Math.random() * firstnames.length)];
}
