const express = require('express')
const app = express()
const path = require('path')
const qs = require('qs');
app.use(express.static(path.join(__dirname, 'public/dist')))
// 引入跨域插件
const cors = require('cors');
//引入body-parser模块
const bodyParser = require('body-parser');
//配置body-parser模块
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const get = require('./server/get')
const post = require('./server/post')
const adminGet = require('./server/admin/get')
// const keys = require('./server/admin/keys')
const { default: axios } = require('axios');
app.use(cors());
app.use('/', get)
app.use('/post', post)
app.use('/admin', adminGet)
console.log('watch');
app.listen(3000)

console.log('web访问：http://127.0.0.1:3000/');
console.log('node访问：http://localhost:3000/');



