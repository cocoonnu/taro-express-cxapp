export default defineAppConfig({

    // 按需注入和用时注入
    lazyCodeLoading: 'requiredComponents',

    pages: [
        'pages/Home/index',
        'pages/Order/index',
        'pages/Calendar/index',
        'pages/QueryTicket/index',
    ],

    window: {
        // 下拉 loading 样式
        backgroundTextStyle: 'dark',

        // 导航栏文字颜色
        navigationBarTextStyle: 'black',

        // 底部拉伸长度
        onReachBottomDistance: 50,

        // 是否开启下拉刷新
        enablePullDownRefresh: true,

        // 窗口和导航栏背景色
        navigationBarBackgroundColor: '#fff',

        backgroundColor: '#fff'
    },

    tabBar: {
        color: '#B4C2C2',
        selectedColor: '#14B2B5',
        borderStyle: 'white',
        backgroundColor: '#fff',
        list: [
            {
                pagePath: 'pages/Home/index',
                iconPath: 'assets/images/index.png',
                selectedIconPath: 'assets/images/indexS.png',
                text: '出行',
            },
            {
                pagePath: 'pages/Order/index',
                iconPath: 'assets/images/order.png',
                selectedIconPath: 'assets/images/orderS.png',
                text: '订单',
            },
        ]
    },

    "permission": {
        "scope.userLocation": {
            "desc": "为了更好的服务体验，我们希望获取你的位置"
        }
    },

    "requiredPrivateInfos": ["getLocation", "chooseLocation"]
})
