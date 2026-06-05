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
    {
        describe: '获取微信小知识答题列表',
        method: 'getssxzsData',
        url: '/api/ssxzs/data',
        type: 'post',
    }, {
        describe: '提交微信小知识答题',
        method: 'addssxzsData',
        url: '/api/ssxzs/addData',
        type: 'post',
    }, {
        describe: '微信小知识答题修改状态',
        method: 'editssxzsDataStatus',
        url: '/api/ssxzs/editStatus',
        type: 'post',
    },
]

const API = {}

requestAddressList.forEach(item => {
    if (API[item.method]) console.log(`存在相同方法：${item.method}`)

    // requestOptions => { requestHeaders: {}, loading: {}, ... }
    API[item.method] = (requestParams, requestOptions) => http[item.type](item.url, requestParams, requestOptions)
})

// mock例子
// API.getDemo = Promise.resolve({
//   errCode: 0,
//   data: {},
// })

export default API
