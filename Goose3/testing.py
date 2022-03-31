import time
from goose3 import Goose

goose = Goose()

headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"} 

with open('../params.txt','r') as params:
    for index, line in enumerate(params):
        line = line.rstrip('\n')
        resp = goose.extract(line)
        
        with open('filename{}.txt'.format(index), 'w') as file:
            file.write(resp.cleaned_text)
            file.close()
            time.sleep(5)