const express = require('express');
// nodejs 코어 모듈 추가
const path = require('path');
const rootDir = require('../util/path')

const router = express.Router();


router.get("/",(req, res, next) => {
    res.sendFile(path.join(rootDir ,'views','shop.html'));
})

module.exports = router;