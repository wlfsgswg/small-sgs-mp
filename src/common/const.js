const selectList = [
    {
        name: 'A',
        value: 'A'
    }, {
        name: 'B',
        value: 'B'
    }, {
        name: 'C',
        value: 'C'
    }, {
        name: 'D',
        value: 'D'
    }
]

const prefixSrc = 'https://cdn.qifumoni.com/sgs/mobile/props/xxx.png'

const fromValueGetName = (value, list) => {
    let name = '--'
    list.map(it => {
        if (it.value === value) name = it.name
    })
    return name
}
// 快捷时间选项
const pickerOptions = {
    shortcuts: [{
        text: '最近一周',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近一个月',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近三个月',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
        }
    }]
}

// 等级
const grades = [
    // {
    //     name: '超级管理员',
    //     value: 1
    // },
    {
        name: '管理员',
        value: 2
    }, {
        name: '普通用户',
        value: 3
    }
]

// 问题类型
const questionTypes = [
    {
        name: '选择',
        value: '1'
    },
    {
        name: '填空',
        value: '2'
    },
]
// 盒子福袋等类型
const probTypes = [
    {
        name: '盒子',
        value: '1'
    },
    {
        name: '福袋',
        value: '2'
    },
    {
        name: '皮肤',
        value: '3'
    },
    {
        name: '梦之回廊',
        value: '5'
    },
    {
        name: '天工宝库',
        value: '4'
    },
]
// 模板
const templates = [
    {
        from: "手杀",
        isH: '1',
        title: "2025（谋关羽等）",
        detail: "同心礼盒",
        time: ["xxxx.xx.xx", "xxxx.xx.xx"],
        keywords:
            "谋关羽、谋诸葛亮、花鬘、胡班、明良千古*关羽动态包、史诗宝珠*66、将魂*1000",
        src: "https://www.sanguosha.cn/pc/news-detail-1781.html",
        tips: '',
        hitAtOnce: [],
        year: 2025,
        orther: {},
        json: [
            { title: "史诗体验卡*1", pr: 0.05 },
            { title: "欢乐豆*50", pr: 0.05 },
            { title: "菜篮子*2", pr: 0.06775 },
            { title: "换将卡*2", pr: 0.25 },
            { title: "手气卡*2", pr: 0.25 },
            { title: "点将卡*2", pr: 0.15 },
            { title: "进阶丹*2", pr: 0.05 },
            { title: "雁翎甲*1", pr: 0.05 },
            { title: "招募令*1", pr: 0.05 },
            { title: "史诗宝珠碎片*1", pr: 0.01 },
            { title: "菜篮子*99", pr: 0.01 },
            { title: "胡班", pr: 0.005 },
            { title: "史诗宝珠*1", pr: 0.005 },
            { title: "将魂*1000", pr: 0.00075 },
            { title: "明良千古*关羽动态包", pr: 0.00075 },
            { title: "花鬘", pr: 0.0005 },
            { title: "谋诸葛亮", pr: 0.00015 },
            { title: "史诗宝珠*66", pr: 0.00005 },
            { title: "谋关羽", pr: 0.00005 },
        ],
        imgUrl:
            "https://cdn.qifumoni.com/sgs/mobile/props/300.png",
    },
    {
        from: "手杀",
        isH: '2',
        title: "2025（郑玄等）",
        detail: "同心福袋",
        time: ["xxxx.xx.xx", "xxxx.xx.xx"],
        keywords:
            "郑玄、卢植、桃李天下*郑玄、雁翎*1000、雁翎甲*1、进阶丹*1",
        src: "https://www.sanguosha.cn/pc/news-detail-1781.html",
        tips: '',
        hitAtOnce: [],
        year: 2025,
        orther: {},
        json: [
            { title: "菜篮子*2", pr: 0.1524 },
            { title: "欢乐豆*10", pr: 0.1 },
            { title: "史诗体验卡*1", pr: 0.1 },
            { title: "手气卡*1", pr: 0.3 },
            { title: "换将卡*1", pr: 0.3 },
            { title: "进阶丹*1", pr: 0.03 },
            { title: "雁翎甲*1", pr: 0.01 },
            { title: "雁翎*1000", pr: 0.005 },
            { title: "卢植", pr: 0.002 },
            { title: "桃李天下*郑玄", pr: 0.0004 },
            { title: "郑玄", pr: 0.0002 },
        ],
        imgUrl:
            "https://cdn.qifumoni.com/sgs/mobile/props/300.png",
    },
    {
        from: "手杀",
        isH: '3',
        title: "2025（绝世之姿*大乔等）",
        detail: "绝世之姿*大乔",
        time: ["xxxx.xx.xx", "xxxx.xx.xx"],
        keywords:
            "绝世之姿*大乔、史诗宝珠*1、雁翎*300、招募令*1、雁翎甲*1",
        src: "https://www.sanguosha.cn/pc/news-detail-1772.html",
        price: 0.5,
        tips: '',
        hitAtOnce: [],
        year: 2025,
        orther: {},
        json: [
            { title: "菜篮子*2", pr: 0.1472 },
            { title: "欢乐豆*30", pr: 0.1 },
            { title: "手气卡*2", pr: 0.2 },
            { title: "换将卡*2", pr: 0.2 },
            { title: "点将卡*2", pr: 0.2 },
            { title: "进阶丹*1", pr: 0.05 },
            { title: "雁翎甲*1", pr: 0.05 },
            { title: "招募令*1", pr: 0.025 },
            { title: "雁翎*300", pr: 0.023 },
            { title: "史诗宝珠*1", pr: 0.003 },
            { title: "绝世之姿*大乔", pr: 0.0018 },
        ],
        imgUrl: "https://cdn.qifumoni.com/sgs/mobile/props/300.png",
    },
    {
        from: "手杀",
        isH: "4",
        title: "2025（木鹿大王等）",
        detail: "天工宝库-阎象",
        time: ["xxxx.xx.xx", "xxxx.xx.xx"],
        keywords: "木鹿大王、谋甘宁、阎象、建制九品*陈群、命世之才*荀彧、超尘逐电*夏侯霸",
        src: "https://www.sanguosha.cn/pc/news-detail-1801.html",
        tips: '',
        hitAtOnce: [],
        year: 2025,
        orther: {},
        json: [
            { title: "建制九品*陈群", pr: 0.0005 },
            { title: "命世之才*荀彧", pr: 0.0005 },
            { title: "超尘逐电*夏侯霸", pr: 0.0005 },
            { title: "木鹿大王", pr: 0.0005 },
            { title: "谋甘宁", pr: 0.0005 },
            { title: "阎象", pr: 0.0005 },
            { title: "雁翎*888", pr: 0.015 },
            { title: "招募令*1", pr: 0.02 },
            { title: "将魂*88", pr: 0.022 },
            { title: "雁翎甲*1", pr: 0.04 },
            { title: "进阶丹*1", pr: 0.05 },
            { title: "欢乐豆*88", pr: 0.1 },
            { title: "换将卡*2", pr: 0.15 },
            { title: "手气卡*2", pr: 0.155 },
            { title: "银币*188", pr: 0.19 },
            { title: "菜篮子*2", pr: 0.255 }
        ],
        imgUrl: "https://cdn.qifumoni.com/sgs/mobile/props/300.png",
    },
    {
        from: "手杀",
        isH: "5",
        title: "以身正道*蔡文姬",
        detail: "以身正道",
        tips: '',
        hitAtOnce: [],
        year: 2025,
        price: 1,
        time: [
            "xxxx.xx.xx",
            "xxxx.xx.xx"
        ],
        keywords: "以身正道*蔡文姬、史诗宝珠*66、史诗宝珠*1、史诗宝珠碎片*1",
        src: "https://www.sanguosha.cn/pc/news-detail-1967.html",
        json: [
            {
                title: "史诗宝珠*66",
                pr: 0.00005
            },
            {
                title: "史诗宝珠*1",
                pr: 0.005
            },
            {
                title: "史诗宝珠碎片*1",
                pr: 0.04
            },
            {
                title: "招募令*1",
                pr: 0.06
            },
            {
                title: "雁翎甲*1",
                pr: 0.1
            },
            {
                title: "进阶丹*1",
                pr: 0.1
            },
            {
                title: "手气卡*2",
                pr: 0.2
            },
            {
                title: "换将卡*2",
                pr: 0.2
            }, {
                title: "点将卡*2",
                pr: 0.15
            },
            {
                title: "欢乐豆*50",
                pr: 0.05
            },
            {
                title: "菜篮子*2",
                pr: 0.09495
            }
        ],
        orther: {
            bigName: "以身正道*蔡文姬",
            bigSrc: "https://cdn.qifumoni.com/sgs/mobile/props/359.png",
            probability: [
                {
                    "start": 1,
                    "bound": 5,
                    "min": 0.84,
                    "max": 1
                },
                {
                    "start": 6,
                    "bound": 10,
                    "min": 0.64,
                    "max": 0.8
                },
                {
                    "start": 11,
                    "bound": 15,
                    "min": 0.44,
                    "max": 0.6
                },
                {
                    "start": 16,
                    "bound": 20,
                    "min": 0.24,
                    "max": 0.4
                },
                {
                    "start": 21,
                    "bound": 25,
                    "min": 0.04,
                    "max": 0.2
                }
            ],
            imgs: [
                {
                    "title": "欢乐豆*666",
                },
                {
                    "title": "双倍经验卡*1",
                },
                {
                    "title": "进阶丹*4",
                },
                {
                    "title": "史诗宝珠碎片*1",
                },
                {
                    "title": "雁翎甲*1",
                },
                {
                    "title": "祈福佑子*蔡贞姬",
                },
                {
                    "title": "将魂*100",
                },
                {
                    "title": "雁翎*1000",
                },
                {
                    "title": "手气卡*25",
                },
                {
                    "title": "一堆银币*1",
                },
                {
                    "title": "招募令*1",
                },
                {
                    "title": "史诗宝珠*1",
                }
            ]
        },
        imgUrl: "https://cdn.qifumoni.com/sgs/mobile/props/359.png",
    }
]
export {
    grades,
    prefixSrc,
    templates,
    probTypes,
    selectList,
    pickerOptions,
    questionTypes,
    fromValueGetName
}