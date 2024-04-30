const express = require('express')
const bodyParser = require('body-parser')
const XMLHttpRequest = require("xhr2");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/view', async (req, res) => {
    try {
        const response = await fetch('http://192.168.1.72:3000/getitems');
        const data = await response.json();
        const recentItems = data.item

        const sortedItems = recentItems.sort((a, b) => b.id - a.id).slice(0, 4);
        let output = '<link rel="stylesheet" href="/main.css"><link rel="stylesheet" href="/reset.css">';
        output += `
                <h2 style="margin:30px 0">최근 본 상품</h2>
                    <ul class="item-list">
        `;

        sortedItems.forEach((item) => {
            output += `
                <li class="item">
                    <a href="/iteminfo?productId=${item.productId}" target="_blank">
                        <img src="${item.image}" alt="${item.title}">
                    </a>
                    <h4>${item.title}</h4>
                    <p>현재 최저가 <strong style="color:#f56565">${item.lprice}</strong> 원</p>
                </li>
            `;
        });
        output += `
                    </ul>
        `;
        res.send(output);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 최근 본 상품 전체 목록
app.get('/views', async (req, res) => { // req 매개변수 추가
    try {
        const response = await fetch('http://192.168.1.72:3000/getitems');
        const data = await response.json();
        const recentItems = data.item
        let output = `  
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>FINDTHESHOP-최근 본 상품</title>
                            <link rel="stylesheet" href="/main.css">
                            <link rel="stylesheet" href="/reset.css">
                        </head>
                        <body>
                        <div id="wrap">
                            <nav>
                                <div class="logo"><a href="/">#FINDTHESHOP</a></div>
                                <div class="navbar">
                                    <ul>
                                        <li><a href="/">HOME</a></li>
                                        <li><a href="views" target="_self">Product</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <h2 style="text-align:center; margin:30px 0">최근 본 상품 전체 리스트</h2>
                        </div>
                        <div id="wrap">
                        <ul class="item-list">
                    `;
        recentItems.forEach((item) => {
            output += `
                <li class="item">
                    <a href="/iteminfo?productId=${item.productId}" target="_blank">
                        <img src="${item.image}" alt="Product Image">
                    </a>
                    <h4>${item.title}</h4>
                    <p>현재 최저가 <strong style="color:#f56565">${item.lprice}</strong> 원</p>
                    <div class="delete-btn" data-product-id="${item.productId}">삭제</div>
                </li>
            `;
        });
        output += `
                </ul>
                </div>
                <script>
                    // 삭제 버튼 클릭 시 처리
                    document.querySelectorAll('.delete-btn').forEach(btn => {
                        btn.addEventListener('click', async () => {
                            const productId = btn.dataset.productId;
                            try {
                                const response = await fetch('http://192.168.1.72:3000/deleteitem/' + productId, {
                                    method: 'POST'
                                });
                                if (response.ok) {
                                    const listItem = document.getElementById('productId');
                                    listItem.parentNode.removeChild(listItem);
                                } else {
                                    console.error('삭제 실패');
                                }
                            } catch (error) {
                                console.error(error);
                            }
                        });
                    });
                </script>
            </body>
            </html>
        `;
        res.send(output);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// 검색 후 , 쿼리 받아서 리스트 띄우기
app.post('/itemlist', async (req, res) => {
    try {
        const xhr = new XMLHttpRequest();
        const encodedQuery = encodeURIComponent(req.body.query);
        const url = `http://192.168.1.72:3000/additemlist?query=${encodedQuery}`;
        xhr.open("POST", url);
        xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
        const data = { query: req.body.query};
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                setTimeout(() => {
                    let output = `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>FINDTHESHOP-상품 조회 결과</title>
                            <link rel="stylesheet" href="/main.css">
                            <link rel="stylesheet" href="/reset.css">
                        </head>
                        <body>
                        <div id="wrap">
                            <nav>
                                <div class="logo"><a href="">#FINDTHESHOP</a></div>
                                <div class="navbar">
                                    <ul>
                                        <li><a href="/">HOME</a></li>
                                        <li><a href="views" target="_self">Product</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <h2 style="text-align:center; margin:30px 0">" ${req.body.query} " 검색 결과입니다</h2>
                        </div>
                        <div id="wrap">
                        <ul class="item-list">
                            
                    `;
                    response.forEach((item) => {
                        output += `
                            <li class="item">
                                <a href="/iteminfo?productId=${item.productId}" target="_self">
                                    <img src="${item.image}" alt="Product Image">
                                </a>
                                <h4>${item.title}</h4>
                                <p>현재 최저가 <strong style="color:#f56565">${item.lprice}</strong> 원</p>
                            </li>
                        `;
                    });
                    output += `
                                </ul>
                                </div>
                                </body>
                                </html>
                    `;
                    res.send(output);
                }, 1000); 
            } else {
                console.log(xhr.status, xhr.statusText);
                res.status(500).send('Internal Server Error');
            }
        };
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 상품 상세 정보 눌렀을 때, mysql mongodb 담기
app.get('/iteminfo', async (req, res) => {
    try {
        const productId = req.query.productId;
        const data = { productId: productId }; 

        const itemResponse = await fetch(`http://192.168.1.72:3000/additem/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseItemData = await itemResponse.json();
        const itemList = responseItemData.item;

        const linkResponse = await fetch(`http://192.168.1.72:3000/addlowlink/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseLinkData = await linkResponse.json();
        const lowlinklist = responseLinkData.lowlinklist;

        // 상품 정보와 최저가 정보를 HTML에 추가
        let output = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <title>FINDTHESHOP-상품 상세 페이지</title>
                <link rel="stylesheet" href="/main.css">
                <link rel="stylesheet" href="/reset.css">
            </head>
            <body>
                <div id="wrap">
                    <nav>
                        <div class="logo"><a href="/">#FINDTHESHOP</a></div>
                        <div class="navbar">
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><a href="views" target="_self">Product</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div id="wrap">
                    <div class="iteminfo">
                        <div class="img">
                            <img src="${itemList.image}" alt="${itemList.title}">
                        </div>
                        <div class="info">
                            <h3>${itemList.title}</h3>
                            <p>판매처 별 최저가</p>
                            <hr>
                            <ul>
        `;
        
        lowlinklist.forEach(item => {
            output += `
                <li>
                    <a href="${item.link}" alt="최저가링크" target="_blank">
                        <div class="bestlowlink"></div>
                        <div class="shop">${item.shop}</div>
                        <div class="price">${item.price}원</div>
                        <div class="delivery">배송비 ${item.deliveryfee}</div>
                    </a>
                </li>
            `;
        });
        output += `
                            </ul>
                        </div>
                    </div>
                </div>

                

            </body>
            </html>
        `;
        //<iframe class="iframe-preview center" width="100%" height="2000" style="border: none;" src="/reviews?productId=${itemList.productId}" frameborder='0' scrolling="no"></iframe>
        res.send(output);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 리뷰
app.get('/reviews', async (req, res) => {
    try {
        const productId = req.query.productId;
        const reviewResponse = await fetch(`http://192.168.1.162:3500/reviews/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseReviewData = await reviewResponse.json();
        const reviewList = responseReviewData.reviews;
        let output = `
                <link rel="stylesheet" href="/main.css">
                <link rel="stylesheet" href="/reset.css">
                `
        reviewList.forEach(item => {
            output += `
                <li>
                    <p>${item.productId}</p>
                    <p>${item.contents}</p>
                    <p>${item.date}</p>
                    <p>${item.rank}</p>
                </li>
            `;
        });
        res.send(output);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = app;
