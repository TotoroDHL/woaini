var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "生日蛋糕送给我",     //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最美的老婆",  // 同上...
        "这是我们在一起的",
        "第二个生日了哦",
        "去年的生日",
        "宝贝美丽的不像话！",
        "今年要继续美丽继续暴富！",
        "要照顾好小狗！",
        "我们都要出国顺利！",
        "这是第一个小惊喜！",
        "我爱你❤️",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"心爱的小可爱": "./imgs/WechatIMG199.jpg",
        "生日蛋糕送给我": "./imgs/WechatIMG199.jpg",    //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最美的老婆": "./imgs/WechatIMG200.jpg",
        "这是我们在一起的": "./imgs/WechatIMG201.jpg",
        "第二个生日了哦": "./imgs/WechatIMG202.jpg",
        "去年的生日": "./imgs/WechatIMG203.jpg",
        "宝贝美丽的不像话！": "./imgs/WechatIMG204.jpg",
        "今年要继续美丽继续暴富！": "./imgs/WechatIMG205.jpg",
        "要照顾好小狗！": "./imgs/WechatIMG206.jpg",
        "我们都要出国顺利！": "./imgs/WechatIMG207.jpg",
        "这是第一个小惊喜！": "./imgs/WechatIMG208.jpg",
        "我爱你❤️": "./imgs/WechatIMG209.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始!",
        play: "音乐!",
        bannar_coming: "横幅！",
        balloons_flying: "气球！",
        cake_fadein: "蛋糕！",
        light_candle: "蜡烛！",
        wish_message: "生日快乐！",
        story: "写了点话！",
    }
};
