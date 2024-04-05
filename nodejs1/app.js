// 경로를 생략하면 http 라는 글로벌 모듈을 찾게 된다
const http = require('http');

// 코어 모듈과 분리
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler); // 서버를 생성시 필요한 명령어이다

server.listen(3000);