# 🛒 파인더샵 | FindTheShop 🛒

ppt 이미지 첨부하기

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

- <FindTheShop>은 네이버 오픈 api를 활용한 **최저가 상품 찾기** 서비스 입니다.
- 온라인 쇼핑을 할 때 최저가 상품을 찾으면 리뷰가 없는 경우나 광고상품이었던 경험을 개선하고자 이 프로젝트를 기획하게 되었습니다.
- 주어진 개발 기간 내에 기본적인 CRUD를 구현하기 위해 노력했습니다.
- fastAPI에서 데이터 처리를 담당하고 nodejs로 백엔드 서버를 처리하게 하여 **분산처리 시스템**을 구현하였습니다.

<br>

## <span id="team">2. 👨‍👩‍👧‍👦팀 소개 및 역할</span>

**"농담곰 연구소"** 팀 입니다.<br/>
| **송한나** | **장다은** | 
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | 
| <img width="360" alt="한나" src=""> | <img width="360"  alt="다은" src=""> | 
| [ChangHoChoi92](https://github.com/ChangHoChoi92) | [nonelijah](https://github.com/nonelijah) | 
| <img src="https://img.shields.io/badge/Team Leader-7569db"/> | <img src="https://img.shields.io/badge/Team Member-118704"/> | 

<br>

### 역할 분담

ppt 2


<br>

## <span id="period">3. 🗓️개발 일정</span>

ppt 3

<br>


## <span id="technology-stack">4. ⛏️기술 스택 및 이유</span>

### 기술 스택

<table>
	<tr>
		<td align="center" width="100px">사용 기술</td>
		<td width="800px">
		<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp
		<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp
		<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">패키지</td>
		<td>
			<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">포맷터</td>
		<td>
			<img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">협업</td>
		<td>
			<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp
			<img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
			<img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp
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

### 사용 이유

- **React**
  - 가상 DOM을 사용함으로써 빠른 렌더링 속도를 보장하고 컴포넌트 단위로 모듈화 하여 코드 관리하기 용이 합니다. 또한 SPA 개발을 하며 사용자 경험을 위해 사용 했습니다.
- **Recoil**
  - 전역에서 데이터를 관리하므로 컴포넌트 간 데이터 전달을 간단하게 만들어 주어 복잡한 상태 관리 문제를 해결 하기 위해 사용했습니다.
- **React Router**
  - SPA에서 페이지 이동을 관리하고 사용자의 편의성을 높이기 위해 사용했습니다.
- **Styled-Components**
  - JavaScript 내에서 CSS 스타일을 작성할 수 있게 해줌으로써 컴포넌트 단위의 스타일링이 가능해져 코드의 재사용 성과 가독성을 높이며, 동적인 스타일링도 쉽게 할 수 있기에 사용했습니다.

<br>

## <span id="function-and-structure">5. 🔍기능 및 구조</span>

### 기능


<br>

### 📁폴더 구조

- src/api/ : API을 이용하기 위한 hook
- src/assets/ : 전역에서 사용하는 이미지, 폰트
- src/components/ : 공통 컴포넌트
- src/pages/: 서비스에 사용되는 각 페이지
- src/routes/: 페이지 라우팅
- src/recoil/: 전역에서 사용되는 Reocil
- src/utils/: API 외 사용될 기능

📦final-19-Talkhoogam<br>
┣ 📂public<br>
┃ ┣ 📜index.html<br>
┃ ┗ 📜Logo.ico<br>
┣ 📂src<br>
┃ ┣ 📂api<br>
┃ ┃ ┣ 📂comment<br>
┃ ┃ ┣ 📂post<br>
┃ ┃ ┣ 📂product<br>
┃ ┃ ┣ 📂profile<br>
┃ ┃ ┗ 📂upload<br>
┃ ┣ 📂assets<br>
┃ ┃ ┣ 📂chat<br>
┃ ┃ ┣ 📂fonts<br>
┃ ┃ ┃ ┗ 📂pretendard<br>
┃ ┃ ┣ 📂icons<br>
┃ ┃ ┗ 📂images<br>
┃ ┣ 📂components<br>
┃ ┃ ┣ 📂comment<br>
┃ ┃ ┣ 📂common<br>
┃ ┃ ┃ ┣ 📂button<br>
┃ ┃ ┃ ┗ 📂input<br>
┃ ┃ ┣ 📂empty<br>
┃ ┃ ┣ 📂footer<br>
┃ ┃ ┣ 📂Gathering<br>
┃ ┃ ┣ 📂header<br>
┃ ┃ ┣ 📂modal<br>
┃ ┃ ┗ 📂profile<br>
┃ ┣ 📂pages<br>
┃ ┃ ┣ 📂chat<br>
┃ ┃ ┣ 📂post<br>
┃ ┃ ┣ 📂product<br>
┃ ┃ ┗ 📂profile<br>
┃ ┣ 📂recoil<br>
┃ ┣ 📂router<br>
┃ ┣ 📂styles<br>
┃ ┣ 📂utils<br>
┃ ┣ 📜App.js<br>
┃ ┗ 📜index.js<br>
┣ 📜.gitignore<br>
┣ 📜.prettierrc<br>
┣ 📜package-lock.json<br>
┣ 📜package.json<br>
┗ 📜README.md<br>

<br>

## <span id="cooperation">6. 👫협업 방식</span>

### 문화

---

- 월/목 오전 9시 반 회의(회고 및 작업 계획)
- 실시간 쉐어 프로그래밍을 통한 문제 해결
- 개발 중에는 프로젝트 디스코드 채널에 접속하여 진행

<br>

### notion


[*노션 링크*]


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


### Discord

---

![image](https://github.com/FRONTENDSCHOOL7/final-19-Talkhoogam/assets/122965945/1255eb5f-1737-4567-9b08-97e0f1b79488)

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

![image](https://github.com/FRONTENDSCHOOL7/final-19-Talkhoogam/assets/122965945/2f8a884f-2a08-40f6-a736-2d9fd8568dc1)

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
