// 경로를 생략하면 http 라는 글로벌 모듈을 찾게 된다
const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url == '/'){
         // process.exit();
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Enter Message</title>')
        res.write('<meta charset="utf-8"/></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method=="POST"){
        const body = [];
         // POST 시 데이터에 접근하는 법
        // POST 시 들어오는 요청이 데이터 스트림으로 보내지는데 
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); // 데이터 이벤트가 발생하는데 버퍼가 도움을 준다
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody); // message=ddddd
            fs.writeFile(`dodo.txt`,`${message}`, (err) => {
                console.log("error"); // 에러 핸들링
                res.statusCode = 302;
                // 헤더를 통해 /로 리디렉트
                res.setHeader('Location', "/")
                return res.end();
            });
        })
        // 경로 재지정과 파일 생성
        // res.writeHead(302,{});
        res.statusCode = 302;
        // 헤더를 통해 /로 리디렉트
        res.setHeader('Location', "/")
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Enter Message</title>')
    res.write('<meta charset="utf-8"/></head>')
    res.write('<body>내가 만든 쿠키</body>')
    res.write('</html>')
    res.end();

   
}); // 서버를 생성시 필요한 명령어이다

server.listen(3000);