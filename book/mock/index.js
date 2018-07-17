var home = require('./mock/home.json'); // 首页数据

var detail = require('./mock/352876.json');

var dataObj = {
    "/api/index": home,
    "/api/detail": detail
}

module.exports = function(url) {
    return dataObj['/api/index']
}