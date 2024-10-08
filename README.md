# 🛒 파인더샵 | FindTheShop 🛒

![Group 2](https://github.com/songhannaa/findtheshop/blob/139b3e49bb4dc9a47fd40814aba6c8d18e3aca3e/ppt/001.jpg)

<div align="center">

<b>FindTheShop</b> <br>

</div>

<br>

## \*️⃣목차

1. [📄프로젝트 소개](#project)
2. [👨‍👩‍👧‍👦팀 소개 및 역할](#team)
3. [🗓️개발 일정](#period)
4. [🔨기술 스택 ](#technology-stack)
5. [🔍기능 및 구조](#function-and-structure)
6. [♻️리팩토링](#refactoring)

<br>

## <span id="project">1. 📄프로젝트 소개</span>

- FindTheShop 은 네이버 오픈 api를 활용한 **최저가 상품 찾기** 서비스 입니다.
- 온라인 쇼핑을 할 때 최저가 상품을 찾으면 리뷰가 없는 경우나 광고상품이었던 경험을 개선하고자 이 프로젝트를 기획하게 되었습니다.
- 주어진 개발 기간 내에 기본적인 CRUD를 구현하기 위해 노력했습니다.
- fastAPI에서 데이터 처리를 담당하고 nodejs로 백엔드 서버를 처리하게 하여 **분산처리 시스템**을 구현하였습니다.

![Group 2](https://github.com/songhannaa/findtheshop/blob/62c459f58b9b5213d1c640274164f2f1b0b26dcf/ppt/003.jpg)

<br>

## <span id="team">2. 👨‍👩‍👧‍👦팀 소개 및 역할</span>

**"농담곰 연구소"** 팀 입니다.<br/>

### 역할 분담
| **송한나** | **장다은** | 
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | 
| <img width="360" alt="한나" src="https://avatars.githubusercontent.com/u/131218435?v=4"> | <img width="360"  alt="다은" src="https://avatars.githubusercontent.com/u/128432201?v=4"> | 
| [songhannaa](https://github.com/songhannaa) | [absolutelydawn](https://github.com/absolutelydawn) | 
| <img src="https://img.shields.io/badge/Team Leader-7569db"/><br> - 프로젝트 기획/개발 <br> - 백엔드 / 프론트엔드 총괄 <br> - 크롤링 및 스크래핑 <br>- 상품 정보 데이터 관리| <img src="https://img.shields.io/badge/Team Member-118704"/><br> - 프로젝트 기획/개발 <br> - 크롤링 및 스크래핑 <br> - 리뷰 데이터 관리 | 


<br>

## <span id="period">3. 🗓️개발 일정</span>

![Group 2](https://github.com/songhannaa/findtheshop/blob/365f75ad4a95dfbca44b91419f32c53107570eec/ppt/005.jpg)

<br>


## <span id="technology-stack">4. ⛏️기술 스택 </span>

### 기술 스택

<table>
	<tr>
		<td align="center" width="100px">사용 기술</td>
		<td width="800px">
		<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">&nbsp
		<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">&nbsp
		<img src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white">&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">패키지</td>
		<td>
			<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">언어</td>
		<td>
		<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">&nbsp
		<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
		</td>
	</tr>
	<tr>
		<td align="center">협업</td>
		<td>
			<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp
			<img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
		</td>
	<tr> 
		<td align="center">디자인</td>
		<td>
			<img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp
		</td> 
	</tr> 
	<tr>
		<td align="center">IDE</td>
		<td>
		<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
	</tr>
</table>

<br>

## <span id="function-and-structure">5. 🔍프로젝트 구조 및 기능</span>

### 📁프로젝트 구조
![Group 2](https://github.com/songhannaa/findtheshop/blob/cf88235544bdfeb41aa24682885ff107884803e4/ppt/008.jpg)


### 📁프로젝트 주요 기능

1. **메인 페이지** <br>
    - 사용자가 검색어를 입력하면 검색 페이지로 리디렉션됩니다.<br>
2. **검색 페이지**:<br>
    - 검색어가 네이버 API로 전송됩니다.<br>
    - 네이버 API는 항목 목록(최대 100개)을 반환하고, 이 항목들이 검색 페이지에 표시됩니다.<br>
3. **제품 선택**:<br>
    - 사용자가 검색 페이지에서 항목을 클릭하면, 아파치 서버가 **`productId`**를 검색합니다.<br>
    - 그런 다음 **`productId`**가 Node.js 서비스로 전달되어 FastAPI 서비스에 요청됩니다.<br>
4. **데이터베이스 조회**:<br>
    - FastAPI는 MySQL 데이터베이스에서 **`productId`**를 조회합니다.<br>
    - 찾을 경우, FastAPI는 MongoDB에서 **`productId`**에 대한 리뷰 데이터를 검색하여 Node.js로 반환하고, 이는 다시 아파치 서버로 전달되어 표시됩니다.<br>
    - 찾지 못할 경우, FastAPI는 **`scraping_reviews.py`**를 트리거하여 리뷰를 수집하고 MongoDB에 저장합니다. 그 후 리뷰 데이터가 검색되어 표시되고, 해당 제품이 "최근 검색 상품" 탭에 추가됩니다.<br>
5. **최근 검색 탭**:<br>
    - "최근 검색 상품" 탭의 제품은 메인 페이지에서 접근할 수 있습니다.<br>
6. **제품 삭제**:<br>
    - 삭제 작업이 시작되면, **`productId`**가 MySQL에서 삭제되고 관련 리뷰 데이터는 MongoDB에서 제거됩니다.<br>

<br>

## <span id="cooperation">6. 👫협업 방식</span>

### 문화

- 매주 수요일 회의(회고 및 작업 계획)
- 팀 규칙을 정하여 꼭 지키도록..


**주석 규칙**

- 여러 줄 주석일 경우도 #로 통일, 대신 <br>
@@@<br>
@ 내용<br>
@@@<br>
으로 여러줄 주석 표시해주기
- 코드 첫머리에 작성<br>
@@@<br>
@ 기능설명(간단히) : <br>
@ 작성자명 : <br>
@ 작성일자 : <br>
@@@<br>


### GitHub


**중앙 원격 저장소 활용**

- 중앙 원격 저장소를 통해 프로젝트 관련 이슈를 공유

**작업 브랜치 관리**

- 각 팀원은 각자의 저장소에서 작업할 개별 브랜치를 생성하여 코드를 작성
- 완성된 코드는 main 브랜치에서 merge 후, 사용

<br>


### 컨벤션

**변수/함수명에 대한 Naming Convention**

- 변수, 함수, 인스턴스 : camelCase
- 함수명 작성 : 동사 + 명사 형태 ex ) getItems
- Class, Constructor : PascalCase
- Naming의 글자 길이 제한 : 20자 이내 / 20자 이상일 경우 팀원과 상의하기
- Flag로 사용되는 변수 : Boolean의 경우 조동사 + Flag변수 ex ) isNew, isNum …
- 약칭의 사용 : 약칭 사용을 지양하고 만약 사용할 경우 팀원과 상의하기

<br>

## <span id="refactoring">7. ♻️리팩토링</span>

- **반응형 웹 개발**<br>
- **React 를 이용한 컴포넌트 관리**<br>
- **새로운 기능 추가**<br>
- **회원 추가 및 데이터 베이스 확장**<br>
