// ran from node

import Mercury from '@postlight/mercury-parser';

let url = 'http://example.com';

Mercury.parse(url).then(result => console.log(result))