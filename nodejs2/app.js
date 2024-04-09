// core module
const http = require('http');
const path = require('path');
// third party
const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// express 내의 많은 로직이 해당 상수에 들어있음 = app은 유효한 요청 핸들러이기도 하다
const app = express();

app.use('/', (req,res,next)=>{
    console.log("this always runs");
    next();
})

//form 을 통해 들어온 body는 파싱해준다
// req 를 파싱해서 우리의 미들웨어에 도달하도록 해준다 = 본문 분석기
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/admin",adminRoutes);
app.use(shopRoutes);

// 404 페이지 추가 
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'))
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);