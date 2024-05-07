const mysql = require("mysql2");

// 단일 연결이 아니라면 커넥션 풀을 생성한다.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_complete",
  password: "thpo4327",
});

module.exports = pool.promise();
