const userWcColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '抽取次数',
        prop: 'type',
        width: 100,
    },
    {
        label: '时间',
        prop: 'time',
        width: 170,
    },
    {
        label: '盒子名称',
        prop: 'name',
        width: 140,
    },
    {
        label: '抽取内容',
        prop: 'json',
        slot: true,
    },
]
const handProbColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '年份-名称',
        prop: 'year-detail',
        width: 200,
        slot: true,
    },
    {
        label: '类型',
        prop: 'isH',
        width: 120,
        slot: true,
    },
    {
        label: '提示',
        prop: 'tips',
        width: 150,
        slot: true,
    },
    {
        label: '五十抽必中',
        prop: 'hitAtOnce',
        width: 180,
        slot: true,
    },
    {
        label: '折扣',
        prop: 'price',
        width: 70,
    },
    {
        label: '关键武将',
        prop: 'general',
        width: 130,
        slot: true,
    },
    {
        label: '关键道具',
        prop: 'keywords',
    },
    {
        label: '活动时间',
        prop: 'time',
        width: 190,
        slot: true,
    },
    {
        label: '操作',
        prop: 'op',
        width: 120,
        slot: true,
        noTooltip: true,
    }
]
const handCodeColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '激活码名称',
        prop: 'name',
    },
    {
        label: '展示时间',
        prop: 'time',
    }, {
        label: '创建时间',
        prop: 'createtime',
    },
    {
        label: '操作',
        prop: 'op',
        width: 120,
        slot: true,
        noTooltip: true,
    }
]
const guessControlColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '问题内容',
        prop: 'desc',
        slot: true,
    },
    {
        label: '问题答案',
        prop: 'name',
        width: 90,
        slot: true,
    },
    {
        label: '问题状态',
        prop: 'status',
        width: 90,
        slot: true,
    },
    {
        label: '创建时间',
        prop: 'time',
        width: 130,
        // slot: true,
    },
    {
        label: '关键人',
        prop: 'keywords',
        width: 180,
        slot: true,
    },
    // {
    //     label: '相关人',
    //     prop: 'createname',
    //     width: 120,
    //     slot: true,
    // },
    {
        label: '操作',
        prop: 'op',
        width: 160,
        slot: true,
        noTooltip: true,
    }
]
const guessUserControlColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '用户ID',
        prop: 'openid',
        width: 300
    },
    {
        label: '用户平台',
        prop: 'platform',
        slot: true,
    },
    {
        label: '加入时间',
        prop: 'time',
        width: 150
    },
    {
        label: '用户积分',
        prop: 'integral'
    },
    {
        label: '三国正确题数',
        prop: 'correctids1',
        slot: true,
    }
]
const accountControlColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '账号名字',
        prop: 'name',
        width: 80,
    },
    {
        label: '账号手机',
        prop: 'phone',
        width: 150,
    },
    {
        label: '账号状态',
        prop: 'status',
        width: 80,
        slot: true,
    },
    {
        label: '申请时间',
        prop: 'applytime',
    },
    {
        label: '同意时间',
        prop: 'agreetime',
    },
    {
        label: '同意人',
        prop: 'agreename',
        width: 80,
    },
    {

        label: '账号等级',
        prop: 'grade',
        width: 90,
        slot: true,
    }, {
        label: '操作',
        prop: 'op',
        width: 160,
        slot: true,
        noTooltip: true,
    }
]
const ssxzsControlColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '问题内容',
        prop: 'desc',
        slot: true,
    },
    {
        label: 'A',
        prop: 'a',
        width: 90,
    },
    {
        label: 'B',
        prop: 'b',
        width: 90,
    },
    {
        label: 'C',
        prop: 'c',
        width: 90,
    },
    {
        label: 'D',
        prop: 'd',
        width: 90,
    },
    {
        label: '答案',
        prop: 'answer',
        width: 90,
    },
    {
        label: '问题等级',
        prop: 'grade',
        width: 90,
        slot: true,
    }, {
        label: '问题状态',
        prop: 'status',
        width: 90,
        slot: true,
    },
    {
        label: '创建时间',
        prop: 'time',
        width: 130,
        // slot: true,
    }, {
        label: '操作',
        prop: 'op',
        width: 160,
        slot: true,
        noTooltip: true,
    }
]
const historyControlColumns = [
    {
        label: '序号',
        prop: 'index',
        width: 60,
    },
    {
        label: '问题内容',
        prop: 'desc',
        slot: true,
    },
    {
        label: 'A',
        prop: 'a',
        width: 90,
    },
    {
        label: 'B',
        prop: 'b',
        width: 90,
    },
    {
        label: 'C',
        prop: 'c',
        width: 90,
    },
    {
        label: 'D',
        prop: 'd',
        width: 90,
    },
    {
        label: '答案',
        prop: 'answer',
        width: 90,
    },
    {
        label: '问题状态',
        prop: 'status',
        width: 90,
        slot: true,
    },
    {
        label: '人物朝代',
        prop: 'dynasty',
        width: 90,
        slot: true,
    },
    {
        label: '问题类型',
        prop: 'type',
        width: 90,
        slot: true,
    },
    {
        label: '创建时间',
        prop: 'time',
        width: 130,
        // slot: true,
    },
    {
        label: '操作',
        prop: 'op',
        width: 160,
        slot: true,
        noTooltip: true,
    }
]

export {
    userWcColumns,
    handProbColumns,
    handCodeColumns,
    guessControlColumns,
    ssxzsControlColumns,
    historyControlColumns,
    accountControlColumns,
    guessUserControlColumns
}