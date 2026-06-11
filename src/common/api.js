import http from './service'

// 组件内请求例子： this.$API.getDemo(params).then(res => {})
// 如果需要mock的话，可以使用使用 dev:mock 启动项目，并在main-index-web/src/mock/resData.js 中进行mock数据维护
// ps: 开发时，也可以在api.js末尾直接写mock代码，记得删除

const requestAddressList = [
    {
        describe: '登录',
        method: 'getLogin',
        url: '/api/mp/login',
        type: 'post',
    },
    {
        describe: '申请账号',
        method: 'getApply',
        url: '/api/mp/applyAccount',
        type: 'post',
    },
    {
        describe: '获取帐号信息',
        method: 'getGlobal',
        url: '/api/mp/global',
        type: 'post',
    },
    // get接口
    {
        describe: '获取三国杀热榜内容',
        method: 'getSgslist',
        url: '/api/topics',
        type: 'get',
    }, {
        describe: '搜索三国杀热榜内容',
        method: 'searchSgslist',
        url: '/api/searchV2/topics',
        type: 'get',
    }, {
        describe: '搜索三国杀咸话账号',
        method: 'getXhAccount',
        url: '/api/xh/getXhAccount',
        type: 'post',
    }, {
        describe: '新增修改三国杀咸话账号',
        method: 'addAccount',
        url: '/api/xh/addAccount',
        type: 'post',
    }, {
        describe: '获取微信公众号账号列表',
        method: 'getWxAccount',
        url: '/api/wx/getWxAccount',
        type: 'post',
    }, {
        describe: '新增修改咸话文章',
        method: 'addArticle',
        url: '/api/xh/addArticle',
        type: 'post',
    },
]

const API = {}

requestAddressList.forEach(item => {
    if (API[item.method]) console.log(`存在相同方法：${item.method}`)
    API[item.method] = (requestParams, requestOptions) => http[item.type](item.url, requestParams, requestOptions)
})

export default API
