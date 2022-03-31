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
          result => fs.writeFile(`${result.title}.json`, JSON.stringify(result), (err) => {
              if (err) throw err;
              console.log('File written');
          })
          );
    }
  }
  
processLineByLine();


// should be able to add in custom extractors for websites that are causing troubles - for instance authors sometimes come back as null, but the mercury-parser has this lib to search through:
//https://github.com/postlight/mercury-parser/tree/master/src/extractors/custom
// which should allow me to take that content by narrowing down on the tags of certain websites
const BloggerExtractor = {
    domain: 'blogspot.com',
    content: {
      // Blogger is insane and does not load its content
      // initially in the page, but it's all there
      // in noscript
      selectors: ['.post-content noscript'],
  
      // Selectors to remove from the extracted content
      clean: [],
  
      // Convert the noscript tag to a div
      transforms: {
        noscript: 'div',
      },
    },
  
    author: {
      selectors: ['.post-author-name'],
    },
  
    title: {
      selectors: ['.post h2.title'],
    },
  
    date_published: {
      selectors: ['span.publishdate'],
    },
  };