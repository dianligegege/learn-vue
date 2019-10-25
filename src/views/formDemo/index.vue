<template>
    <div>
        <h1>{{ title }}</h1>
        <form>
            <div class="c-login-input">
                <input
                    autocomplete="username"
                    id="login-email"
                    type="email"
                    maxlength="64"
                    :placeholder="$t('login.newlogin.email')"
                    v-model="form.email"
                >
            </div>

            <div class="c-login-input">
                <input
                    autocomplete="current-password"
                    id="login-password"
                    type="password"
                    maxlength="20"
                    :placeholder="$t('login.newlogin.pwd')"
                    v-model="form.password"
                >
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '测试输入框',
            /**
             * 表单值
             *
             * @type {Object}
             */
            form: {
                email: '',
                password: '',
            },

            /**
             * 当前聚焦元素类型
             *
             * @type {string}
             */
            focus: '',
            /**
             * 错误消息
             *
             * @type {Object}
             */
            error: {
                email: null,
                password: null,
            },
        };
    },
};
</script>

<style>
    .c-login-input {
        margin-bottom: 20px;
    }

    .c-login-input input {
        width: 100%;
        height: 30px;
        margin-bottom: 50px;
    }
</style>