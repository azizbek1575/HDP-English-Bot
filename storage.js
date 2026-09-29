// storage.js — natijalarni faylga saqlaydi (bot qayta ishga tushsa ham yo'qolmaydi)
const fs = require('fs');
const path = require('path');

const DIR = process.env.DATA_DIR || __dirname;
const FILE = path.join(DIR, 'data.json');

function load() {
    try {
        return JSON.parse(fs.readFileSync(FILE, 'utf8'));
    } catch {
        return {};
    }
}

function saveNow(data) {
    try {
        fs.mkdirSync(DIR, { recursive: true });
        fs.writeFileSync(FILE + '.tmp', JSON.stringify(data));
        fs.renameSync(FILE + '.tmp', FILE);
    } catch (e) {
        console.error('Saqlashda xato:', e.message);
    }
}

let timer = null;
function save(data) {
    clearTimeout(timer);
    timer = setTimeout(() => saveNow(data), 500);
}

module.exports = { load, save, saveNow };
