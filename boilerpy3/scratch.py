import requests
from boilerpy3 import extractors

extractor = extractors.ArticleExtractor()

# recommended to load content via common requests library, then parse

resp = requests.get('http://example.com/')

content = extractor.get_content(resp.text)

print(content)