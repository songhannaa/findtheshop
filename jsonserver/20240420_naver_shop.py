import urllib.request
import urllib.parse
import json
import subprocess

client_id = ""
client_secret = ""

query = input("search : ")
encoded_query = urllib.parse.quote(query)

url = f"https://openapi.naver.com/v1/search/shop?query={encoded_query}&display=20"
request = urllib.request.Request(url)

request.add_header("X-Naver-Client-Id", client_id)
request.add_header("X-Naver-Client-Secret", client_secret)

response = urllib.request.urlopen(request)
response_body = response.read().decode('utf-8')

json_data = json.loads(response_body)

with open('db.json', 'w', encoding='utf-8') as f:
    json.dump(json_data, f, ensure_ascii=False, indent=4)

print("Data saved to db.json")

# 터미널에 입력해서 jsonserver 킨 후, 실행 / 이 부분 자동화 연구 필요..
# nodemon --watch db.json --exec json-server --port 5000 db.json
