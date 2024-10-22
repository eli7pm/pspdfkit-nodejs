const { load } = require('@pspdfkit/nodejs');
const fs = require('node:fs');
const { randomBytes } = require('node:crypto');

async function convertToPDF() {
  const docx = fs.readFileSync('sample.docx');
  const instance = await load({
    document: docx,
  });
  const buffer = await instance.exportPDF();
  fs.writeFileSync(`converted-${randomBytes(8).toString('hex')}.pdf`, Buffer.from(buffer));
  await instance.close();
};

convertToPDF();
