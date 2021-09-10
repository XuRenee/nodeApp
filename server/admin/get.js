const express = require('express')
var router = express.Router();
//需要访问的文件的存放目录

router.get('/projectList', function (req, res) {
    let data = {
        code: 200,
        list: [
            {
                name: "项目管理",
                children: [
                    {
                        name: 'iot',
                        path:'/iot',
                        interface: {
                            get: '/iotGet',
                            post: "/post/iotPost"
                        }
                    }
                ],

            }
        ]
    }
    res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"'
    });
    res.write(JSON.stringify(data));//将index.html显示在客户端
    res.end()
    // if (err) {
    //     res.writeHeader(404, {
    //         'content-type': 'text/html;charset="utf-8"'
    //     });
    //     // res.type('html');
    //     // res.render('index');
    //     res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
    //     res.end()
    // } else {

    // }
});

module.exports = router