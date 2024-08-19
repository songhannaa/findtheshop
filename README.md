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

## <span id="function-and-structure">5. 🔍프로젝트 기능</span>

### 기능


<br>

### 📁프로젝트 주요 기능


<br>

## <span id="cooperation">6. 👫협업 방식</span>

### 문화

---

- 매주 수요일 회의(회고 및 작업 계획)

**변수/함수명에 대한 Naming Convention**

- 변수, 함수, 인스턴스 : camelCase
- 함수명 작성 : 동사 + 명사 형태 ex ) getItems
- Class, Constructor : PascalCase
- Naming의 글자 길이 제한 : 20자 이내 / 20자 이상일 경우 팀원과 상의하기
- Flag로 사용되는 변수 : Boolean의 경우 조동사 + Flag변수 ex ) isNew, isNum …
- 약칭의 사용 : 약칭 사용을 지양하고 만약 사용할 경우 팀원과 상의하기
<br>

**주석 규칙**

- #(띄우기)내용으로 쓰기
- 여러 줄 주석일 경우도 #로 통일, 대신 
# # #
# 내용
# # #
으로 여러줄 주석 표시해주기
- **코드 첫머리에
# # #
# 기능설명(간단히) : 
# 작성자명 : 
# 작성일자 : 
# # #
적어주기**

---


<br>

### GitHub

---

**중앙 원격 저장소 및 Git Issues 활용**

- 중앙 원격 저장소를 통해 팀원들은 프로젝트 관련 이슈를 공유하고 조율합니다.
- Git Issues를 활용하여 작업 내용, 버그, 기능 요청 등을 효율적으로 관리합니다.

**Default Branch 설정**

- Develop 브랜치를 Default branch로 설정하여 팀원들은 PR을 제출할 때 전달 브랜치를 선택할 필요가 없습니다.
- 이를 통해 휴먼 에러를 방지하고 혼란을 줄입니다.

**작업 브랜치 관리**

- 각 팀원은 Develop 브랜치에서 작업할 개별 브랜치를 생성하여 코드 작성합니다.
- PR이 완료되면 해당 작업 브랜치를 즉시 삭제하여 저장소의 브랜치 관리를 깔끔하게 유지합니다.

**메인 브랜치 업데이트**

- 메인 브랜치(main)가 배포 branch로 사용되며, 팀장은 Develop 브랜치에서 메인 브랜치로 PR을 생성하고 승인합니다.

<br>


---



- commit, PR 등을 실시간으로 알림 받을 수 있도록 디스코드를 사용하였습니다.

<br>


### 컨벤션

---

- **커밋**

🌼 init: 초기 설정<br>
✨ feat: 기능 추가, 삭제, 변경<br>
🐛 fix: 버그, 오류 수정<br>
📃 docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)<br>
🎨 style: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬, 주석 등의 변경)<br>
🔨 refactor: 코드 리팩토링<br>
🧪 test: 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)<br>
⚙️ ci: npm 모듈 설치/ 패키지, 매니저 설정할 경우, etc 등<br>
✏️ Rename : 파일명 혹은 폴더명 수정, 위치 이동<br>
🗑️ Remove : 파일 삭제<br>


<br>

- **Pull requests**



<br>

- **Prettier**

<br>

```js
{
  "printWidth": 80, //  줄 바꿈 할 폭 길이
  "singleQuote": true, // single 쿼테이션 사용 여부
  "jsxSingleQuote": false, // JSX에 singe 쿼테이션 사용 여부
  "tabWidth": 2, // 탭 너비
  "semi": true, // 세미콜론 사용 여부
  "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "bracketSpacing": true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  "arrowParens": "always", // 화살표 함수 괄호 사용 방식
  "quoteProps": "preserve" // 객체 속성에 쿼테이션 적용 방식
}
```

---

<br>

## <span id="refactoring">7. ♻️리팩토링</span>

- **반응형 웹 개발**<br>
- **시멘틱 마크업 준수**<br>
- **새로운 기능 추가**<br>
- **팀원 코드 리팩토링**<br>
