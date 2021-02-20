<template>
    <div>123</div>
</template>

<script>
export default {
    mounted() {
        (() => {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://res.wx.qq.com/open/js/jweixin-1.3.1.js";
            document.getElementsByTagName("body")[0].appendChild(script);
        })();

        this.configWx();
    },
    methods: {
        configWx() {
            console.log(window.wx);
            wx.config({
                debug: false,
                appId: "公众号的appid",
                timestamp: "时间戳",
                nonceStr: "随机字符串",
                signature: "签名",
                jsApiList: [
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareWeibo",
                    "onMenuShareQZone",
                    "showOptionMenu",
                    "hideAllNonBaseMenuItem",
                    "showAllNonBaseMenuItem",
                ],
            });

            wx.ready(function () {
                const share = {
                    title: "分享标题（朋友圈只显示标题）",
                    desc: "分享内容",
                    imgUrl: "图片URL",
                    link: "分享链接（最好是后台JS安全域名）",
                    success: function () {
                        hideMaskLayer(); // 分享成功，隐藏引导用户分享的浮层
                    },
                    cancel: function () {},
                };
                wx.onMenuShareAppMessage(share); // 微信好友
                wx.onMenuShareTimeline(share); // 朋友圈
                wx.onMenuShareQQ(share); // QQ
                wx.onMenuShareQZone(share); // QQ空间
                wx.onMenuShareWeibo(share); // 腾讯微博
            });
        },
    },
};
</script>