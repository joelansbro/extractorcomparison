const Mercury = require('@postlight/mercury-parser')
const fs = require('fs')
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('../params.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {

      console.log(`URL from file: ${line}`);
      Mercury.parse(`${line}`).then(
          result => fs.writeFile(`${result.title}.txt`, result.content, (err) => {
              if (err) throw err;
              console.log('File written');
          })
          );
    }
  }
  
processLineByLine();