// ran from node
const Mercury = require('@postlight/mercury-parser')

let url = 'https://www.serverless.com/blog/making-a-discord-playlist-bot-with-serverless-cloud';

Mercury.parse(url).then(result => console.log(result))