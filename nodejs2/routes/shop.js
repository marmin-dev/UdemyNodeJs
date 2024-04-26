const express = require("express");
// nodejs 코어 모듈 추가
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  // 기본으로 사용하기로 한 템플릿 엔진으로 렌더링
  const prouducts = adminData.products;
  // 매핑 하여 렌더링
  res.render("shop",{prods:prouducts , docTitle:"Shop"});
});

module.exports = router;
