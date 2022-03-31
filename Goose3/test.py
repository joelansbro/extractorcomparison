# original goose-extractor was imported from java to python 2 - dled goose3 which is python 3 port

from goose3 import Goose

url = 'http://example.com/'
goose = Goose()

article = goose.extract(url)

print(article.title)
print(article.cleaned_text)

