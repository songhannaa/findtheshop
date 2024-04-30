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

        // 최근 순으로 정렬 후 처음 4개의 항목만 선택
        const recentItems = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 4);

        let output = '<link rel="stylesheet" href="/main.css"><link rel="stylesheet" href="/reset.css">';
        output += `
                <h2 style="margin:30px 0">최근 본 상품</h2>
                    <ul class="item-list">
        `;
        recentItems.forEach((item) => {
            output += `
                <li class="item">
                    <a href="/iteminfo?productId=${item.productId}" target="_blank">
                        <img src="${item.image}" alt="${item.title}">
                    </a>
                    <h4>${item.title}</h4>
                    <p>${item.lprice}원</p>
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
                            <h2 style="text-align:center; margin:30px 0">최근 본 상품 리스트</h2>
                        </div>
                        <ul class="item-list">
                    `;
        data.forEach((item) => {
            output += `
                <li class="item">
                    <a href="/iteminfo?productId=${item.productId}" target="_blank">
                        <img src="${item.image}" alt="Product Image">
                    </a>
                    <h4>${item.title}</h4>
                    <p>${item.lprice}원</p>
                </li>
            `;
        });
        output += `
                    </ul>
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
                            <h2 style="text-align:center; margin:30px 0">" ${req.body.query} "검색 결과입니다</h2>
                        </div>
                        
                        <ul class="item-list">
                            
                    `;
                    response.forEach((item) => {
                        output += `
                            <li class="item">
                                <a href="/iteminfo?productId=${item.productId}" target="_self">
                                    <img src="${item.image}" alt="Product Image">
                                </a>
                                <h4>${item.title}</h4>
                                <p>${item.lprice}원</p>
                            </li>
                        `;
                    });
                    output += `
                                </ul>
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
        const itemData = await itemResponse.json();

        const linkResponse = await fetch(`http://192.168.1.72:3000/addlowlink/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const linkData = await linkResponse.json();

        // 상품 정보 추가
        let output = `
                        <!DOCTYPE html>
                        <html>
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
                        </div>`
        
        output += `<h1>${itemData.title}</h1>`;
        output += `<img src="${itemData.image}" alt="Product Image">`;

        // 최저가 정보 추가
        linkData.forEach((item) => {
            output += `<div><a href="${item.link}" target="_blank">최저가 링크 : ${item.link} </a>`; 
            output += `<p>판매처: ${item.shop || "N/A"}</p>`;
            output += `<p>최저가: ${item.price || "N/A"}</p>`;
            output += '</div>';
        });
        output += `
                    </body>
                    </html>
        `;
        res.send(output);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app;
