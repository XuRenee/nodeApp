const express = require('express')
var router = express.Router();
var fs = require('fs');//引入文件读取模块
//需要访问的文件的存放目录
var documentRoot = './files/';

router.get('/iotGet', function (req, res) {
    var url = req.query.file;
    var file = documentRoot + url + '.json';
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            // res.type('html');
            // res.render('index');
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
router.get('/keys', function (req, res) {
    var url = req.query.file;
    var file = documentRoot + url + '.json';
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            // res.type('html');
            // res.render('index');
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
module.exports = router