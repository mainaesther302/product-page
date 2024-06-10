"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.addProduct = exports.getProducts = void 0;
var products = [];
function getProducts(req, res) {
    res.status(200).json(products);
}
exports.getProducts = getProducts;
var addProduct = function (req, res) {
    var _a = req.body, name = _a.name, price = _a.price, description = _a.description, image = _a.image, added = _a.added;
    var newProduct = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        price: price,
        description: description,
        image: image,
        added: false
    };
    products.push(newProduct);
    res.status(201).json({ message: "Product added successfully" });
};
exports.addProduct = addProduct;
function getProduct(req, res) {
    var id = +req.params.id;
    var product = products.find(function (p) { return p.id === id; });
    if (product != undefined) {
        return res.status(200).json(product);
    }
    return res.status(404).json({ message: "Product not found" });
}
exports.getProduct = getProduct;
function updateProduct(req, res) {
    var id = +req.params.id;
    var product = products.find(function (p) { return p.id === id; });
    var _a = req.body, name = _a.name, price = _a.price, description = _a.description, image = _a.image, added = _a.added;
    if (product != undefined) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.added = added;
        return res.status(200).json({ message: "".concat(description, " updated") });
    }
    return res.status(404).json({ message: "Product not found" });
}
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) {
    var id = +req.params.id;
    var index = products.findIndex(function (p) { return p.id === id; });
    if (index >= 0) {
        products.splice(index, 1);
        return res.status(200).json({ message: "Product ".concat(id, "deleted successfully") });
    }
    return res.status(404).json({ message: "Product not found" });
};
exports.deleteProduct = deleteProduct;
