const express = require('express')
var router = express.Router();

var fs = require('fs');//引入文件读取模块
//需要访问的文件的存放目录
var documentRoot = './files/';
router.post('/iotPost', function (req, res) {
    var url = req.body.file;
    var file = documentRoot + url + '.json';
    console.log(req.body,'pp');
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end()
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end()
        }
    });
});
// const url = 'https://mam.zeus2.top:10030/sharingresults/sharingresults'
// router.post('https://mam.zeus2.top:10030/sharingresults/sharingresults',function(req,res){

// })
module.exports = router

