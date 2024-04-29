const express = require('express')
const bodyParser = require('body-parser')
const XMLHttpRequest = require("xhr2");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// 검색 후 , 쿼리 받아서 리스트 띄우기
app.post('/itemlist', async (req, res) => {
    try {
        const xhr = new XMLHttpRequest();
        const encodedQuery = encodeURIComponent(req.body.query);
        xhr.open("POST", `http://192.168.1.72:3000/additemlist?query=${encodedQuery}`)
        xhr.setRequestHeader("content-type", "application/json; charset=UTF-8")
        const data = {query: req.body.query}
        xhr.send(JSON.stringify(data))
        xhr.onload = () => {
            if (xhr.status === 200){
                const res = JSON.parse(xhr.response);
                console.log(res);
            } else{
                console.log(xhr.status, xhr.statusText);
            }
            res.send(xhr.response)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app;