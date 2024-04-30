from fastapi import FastAPI, status
from typing import Optional
from database import *
from models import *
from lowlink import *
from search_item import *
import requests

app = FastAPI()

# mysql 연결
db = Mysql_conn()
session = db.sessionmaker()

# jsonserver url
base_url = 'http://192.168.1.72:5000/items'

@app.get(
        path='/itemlist', description="jsonserver item 리스트",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "jsonserver 응답"}}
)
async def getItemList():
    reponse = requests.get(base_url)
    return reponse.json()

# 네이버 openapi로 item query 입력받아서 jsonserver에 업로드 후, 출력
@app.post(
        path='/additemlist', description="검색 후 , jsonserver item 리스트 업로드",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "jsonserver 응답"}}
)
async def addItemList(query: Optional[str] = None):
    client_id = get_secret("client_id")
    client_secret = get_secret("client_secret")
    get_search_item(client_id, client_secret, query)
    # jsonserver 재로딩 떄문에 sleep 추가함
    time.sleep(1)
    reponse = requests.get(base_url)
    return reponse.json()

# item 선택해서 mysql 저장 (중복 확인하고 존재하면 mysql 에서 꺼내오기 )
@app.post(
        path='/additem/{productId}', description="jsonserver item 선택해서 mysql 저장",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "mysql 저장 완료"}}
)
async def addItem(productId: Optional[str] = None):
    if productId is None:
        return "productId를 입력하세요."
    else:
        # 받아온 productId 로 중복값 먼저 확인해보고 , 없으면 저장함
        checkId = session.query(Item).filter(Item.productId == productId).first()
        # 만약 mysql에 없으면 새로 저장
        if checkId is None :   
            url = base_url + '?' + 'productId=' + productId
            response = requests.get(url)
            product_data = response.json()  
            selected_data = {
                'title': product_data[0]['title'],
                'link': product_data[0]['link'],
                'image': product_data[0]['image'],
                'lprice': product_data[0]['lprice'],
                'productId': product_data[0]['productId']
            }
            item = Item(productId=selected_data['productId'],title=selected_data['title'],link=selected_data['link'],image=selected_data['image'],lprice=selected_data['lprice'])
            session.add(item)
            session.commit()
            result = session.query(Item).filter(Item.productId == productId).first()
            return {"item": result}
        else:
            return {"item": checkId }
    
# 담은 item table 전체 조회 (최근 본 상품)
@app.get(
        path='/getitems', description="mysql item table 전체 조회",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "mysql 조회 완료"}}
)
async def getItems():
    result = session.query(Item).all()
    return {"item":result}

# 담은 item table 중 선택해서 출력 (확인용)
@app.get(
        path='/getitem/{productId}',description="mysql item table 선택 조회",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "mysql 선택 조회 완료"}}
)
async def getItem(productId: Optional[str] = None):
    if productId is None:
        return "productId를 입력하세요."
    else:
        result = session.query(Item).filter(Item.productId == productId).first()
        return {"item":result}

# 최근 본 상품에서 삭제 했을 때, productId값으로 mysql, mongodb에서 삭제
@app.post(
        path='/deleteitem/{productId}',description="mysql item table 선택 삭제",
        status_code=status.HTTP_200_OK,
        responses={200:{"description" : "mysql 선택 삭제 완료"}}
)
async def deleteItem(productId: Optional[str] = None):
    if productId is None:
        return "productId를 입력해주세요"
    else:
        # mysql delete
        session.query(Item).filter(Item.productId == productId).delete()
        session.commit()
        # mongodb delete
        mycol.delete_one({"productId":productId})

        result = session.query(Item).all()
        return {"item":result}

# 상품 선택했을 때, 크롤링 한 정보를 몽고에 저장 (중복 확인하고 존재하면 몽고 에서 꺼내오기 )
@app.post(
    path='/addlowlink/{productId}',description="상품 최저가 정보 mongoDB에 저장",
    status_code=status.HTTP_200_OK,
    responses={200:{"description" : "mongoDB 저장 완료"}}
)
async def addLowLink(productId: Optional[str] = None):
    # 몽고에 존재하는지 확인
    checkId = list(mycol.find({"productId":productId}, {"_id":0}))
    # 만약 몽고에 존재하지 않으면 새로 저장
    if not checkId:
        # mysql에 productId만 insert (나중에 select, drop을 위해)
        item = Lowlink(productID=productId)
        session.add(item)
        session.commit()
        # mongo 에 새로운 데이터 저장 
        url=f"https://search.shopping.naver.com/catalog/{productId}?&section=price"
        lowitem = get_lowest_price(url, productId)
        mycol.insert_many(lowitem)
        result = list(mycol.find({"productId":productId}, {"_id":0}))
        return {"lowlinklist":result}
    # 존재하면 저장 했던 값 출력하기
    else:
        return {"lowlinklist":checkId}

@app.get(
    path='/getlowlink/{productId}',description="상품 최저가 정보 mongoDB 조회",
    status_code=status.HTTP_200_OK,
    responses={200:{"description" : "mongoDB 조회 완료"}}
)
async def getLowlink(productId: Optional[str] = None):
    result = list(mycol.find({"productId":productId}, {"_id":0}))
    return {"lowlinklist":result}


