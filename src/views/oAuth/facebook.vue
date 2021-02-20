<template>
    <div>
        <Button
            @click="login"
        >
            登录facebook
        </Button>
        <Button
            @click="logout"
        >
            退出facebook
        </Button>
    </div>
</template>

<script>
export default {
  methods: {
    login() {
        FB.login();
    //   const vm = this;
    //   // 檢查登入狀態
    //   FB.getLoginStatus(function(response) {
    //     // 登入狀態 - 已登入
    //     if (response.status === "connected") {
    //       // 獲取用戶個人資料
    //       vm.getProfile();
    //     } else {
    //       // 登入狀態 - 未登入
    //       // 用戶登入(確認授權)
    //       FB.login(
    //         function(res) {
    //           // 獲取用戶個人資料
    //           vm.getProfile();
    //         },
    //         // 授權 - 個人資料&Email
    //         { scope: "public_profile,email" }
    //       );
    //     }
    //   });
    },
    logout() {
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
          });
        } else {
          // do something
        }
      });
    },
    getProfile() {
      FB.api("/me?fields=name,id,email", function(res) {
        // do something
      });
    }
  },
  created() {
    // 防止重複載入
    if (!window.FB) {
      window.fbAsyncInit = function() {
        FB.init({
            appId: '750863599069864',
            cookie: true,
            xfbml: true,
            version: 'v8.0'
        });
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }
};
</script>