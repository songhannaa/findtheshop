import pandas as pd
import urllib.request
import urllib.parse
import json
import re
######################
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# ###################
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")
# linux 환경에서 필요한 option
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(options=chrome_options)
# ####################

# 네이버 openapi 사용해서 상품 리스트 출력
client_id = "=="
client_secret = "=="

query = input("search : ")
encoded_query = urllib.parse.quote(query)

# API 요청 URL 구성
url = f"https://openapi.naver.com/v1/search/shop?query={encoded_query}&display=20"
request = urllib.request.Request(url)

# 네이버 API에 요청 헤더 추가
request.add_header("X-Naver-Client-Id", client_id)
request.add_header("X-Naver-Client-Secret", client_secret)

# API 응답 받아오기
response = urllib.request.urlopen(request)
response_body = response.read().decode('utf-8')

# JSON 데이터 파싱
json_data = json.loads(response_body)

# 가격비교 상품군 productType = 1 필터링
filtered_items = [item for item in json_data["items"] if item["productType"] == "1"]

# HTML 태그 제거 함수
def remove_html_tags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

# HTML 태그 제거 및 필터링된 아이템을 새로운 JSON 데이터로 저장
for item in filtered_items:
    item['title'] = remove_html_tags(item['title'])

filtered_json_data = {"items": filtered_items}

# JSON 파일로 저장
with open('items.json', 'w', encoding='utf-8') as f:
    json.dump(filtered_json_data, f, ensure_ascii=False, indent=4)

print("Data saved to items.json")

# JSON 파일에서 데이터 읽어오기
with open('items.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)

# 최저가 링크 수집 함수
def get_lowest_price_link(url):
    try:
        driver.get(url)
        # 최저가 링크 기다리기 및 클릭
        lowest_price_link = WebDriverWait(driver, 30).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="content"]/div[1]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]/a'))
        )
        return lowest_price_link.get_attribute('href')
    except Exception as e:
        print(f"Failed to get lowest price link for URL {url}: {e}")
        return None

for item in json_data["items"]:
    product_id = item["productId"]
    url = f"https://search.shopping.naver.com/catalog/{product_id}?query={encoded_query}"
    print("Product ID:", product_id)
    print("Shopping Link:", url)
    link = get_lowest_price_link(url)
    print(link)

# WebDriver 종료
driver.quit()

