export default defineAppConfig({
    pages: [
        'pages/Home/index',
        'pages/Order/index'
    ],

    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
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

})
