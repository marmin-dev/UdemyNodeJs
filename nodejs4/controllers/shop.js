const Product = require("../models/product");

// 콜백에 맞추어 변경한다.
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

// 메인 페이지
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/index", {
          prods: products,
          pageTitle: "Shop",
          path: "/",
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true,
        });
      });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: "/cart",
        pageTitle:'Your Cart',
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout'
    })
}