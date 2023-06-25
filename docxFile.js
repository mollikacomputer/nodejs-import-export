const officegen = require('officegen');
const fs = require('fs');
const docx = officegen('docx');
const p = docx.createP();
const dynamicDocument = <h2> Dynamic data added</h2>

p.addText(dynamicDocument);
const out = fs.createWriteStream('result.docx');
docx.generate(out)