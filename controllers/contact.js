const path= require('path');


exports.contactPage = (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views', 'contact.html'));
}