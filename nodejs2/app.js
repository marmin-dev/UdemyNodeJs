// core module
const http = require('http');
// third party
const express = require('express');
const bodyParser = require('body-parser')

// express 내의 많은 로직이 해당 상수에 들어있음 = app은 유효한 요청 핸들러이기도 하다
const app = express();

app.use('/', (req,res,next)=>{
    console.log("this always runs");
    next();
})

//form 을 통해 들어온 body는 파싱해준다
// req 를 파싱해서 우리의 미들웨어에 도달하도록 해준다 = 본문 분석기
app.use(bodyParser.urlencoded());

app.use("/add-product",(req, res, next) => {
    console.log('In the another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button>전송</button></form>');
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.use("/",(req, res, next) => {
    console.log('In the middleware');
    res.send(`<h1>Hello World</h1>`);
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);