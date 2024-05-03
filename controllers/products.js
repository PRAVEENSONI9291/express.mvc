const path= require('path');



exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getAddProduct= (req, res, next) => {
    
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}


exports.getProducts= (req, res, next) => {
    
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html' ));

}

exports.productNotFound = (req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
}