const path= require('path')


const express = require('express');
const bodyparser = require('body-parser');


//body parser is used to parse the input text so that handling could be done

const adminRoutes= require('./Routes/admin');
const shopRoutes= require('./Routes/shop');
const productController = require('./controllers/error');
const productControllerContact = require('./controllers/contact');
const productControllerSuccess = require('./controllers/success');








const app = express();

app.use(bodyparser.urlencoded({ extended: true }));



app.use('/admin', adminRoutes);
app.use( shopRoutes);

app.use('/contactus', productControllerContact.contactPage);

app.use('/success', productControllerSuccess.successPage);

app.use(productController.productNotFound);


app.listen(3000);
