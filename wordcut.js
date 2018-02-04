var wordcut = require("wordcut");

wordcut.init();
var text = 'ฉันกำลังกินข้าวอยู่ที่โต๊ะบนที่นอนมาปีกว่าแล้วasdasdsd';
console.log(wordcut.cut(text));