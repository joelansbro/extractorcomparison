import time
import requests
from boilerpy3 import extractors
extractor = extractors.ArticleExtractor()

headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"} 

with open('../params.txt','r') as params:
    for index, line in enumerate(params):
        line = line.rstrip('\n')
        resp = requests.get(line, headers=headers)
        content = extractor.get_content(resp.text)
    
        with open('filename{}.txt'.format(index), 'w') as file:
            file.write(content)
            file.close()
            time.sleep(5)
