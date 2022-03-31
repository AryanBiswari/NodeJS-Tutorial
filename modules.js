const fs = require('fs');
// const fr = require('fs').writeFileSync;
console.log('Hello modules');
// fr("modulesV.js","console.log('Hello modules')");
fs.writeFileSync("moduleFile.txt","Hello modules");