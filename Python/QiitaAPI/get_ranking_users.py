import urllib3
from bs4 import BeautifulSoup
import urllib.request

url = 'https://qiita.com/'

response = urllib.request.urlopen(url)
html = response.read().decode('utf-8')

soup = BeautifulSoup(html, "html.parser")

title_tag = soup.find_all('div', attrs={'data-hyperapp-app':'UserRanking'})[0].get('data-hyperapp-props')
data_list = title_tag.replace('"', '').replace('{', '').split(',')
print(data_list)
for index, data in enumerate(data_list):
    if 'urlName' in data:
        print(data.replace('}', '').split(':')[1])
