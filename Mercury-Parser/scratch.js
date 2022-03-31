// ran from node
const Mercury = require('@postlight/mercury-parser')

let url = 'https://engineroom.teamwork.com/vue-js-advanced-reactivity-api-and-caching-method-style-getters-a80979b6660';

Mercury.parse(url).then(result => console.log(result))