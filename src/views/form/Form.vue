<template>
    <div id="d1">
        <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="210">
            <FormItem prop="xiaoshu" label="小数">
                <i-input v-model="formValidate.xiaoshu" placeholder="限制小数前后位数"></i-input>
            </FormItem>
            <FormItem prop="zhengshu" label="整数">
                <i-input v-model="formValidate.zhengshu" placeholder="限制整数"></i-input>
            </FormItem>
            <FormItem prop="before" label="小数点前位数">
                <i-input v-model="formValidate.before" placeholder="小数点前位数"></i-input>
            </FormItem>
            <FormItem prop="after" label="限制小数点后位数">
                <i-input v-model="formValidate.after" placeholder="限制小数点后位数"></i-input>
            </FormItem>
            <FormItem prop="wb" label="限制总位数和小数点前位数">
                <i-input :maxlength=8 v-model="formValidate.wb" placeholder="限制总位数和小数点前位数"></i-input>
            </FormItem>
            <FormItem prop="wa" label="限制总位数和小数点后位数">
                <i-input :maxlength=8 v-model="formValidate.wa" placeholder="限制总位数和小数点后位数"></i-input>
            </FormItem>
        </i-form>
    </div>
</template>

<script>
export default {
    data() {
        const XiaoRegExp = this.getNumRegExp(2,3);
        const validateXioashu = (rule, value, callback) => {
            console.log(XiaoRegExp);
            if (!XiaoRegExp.test(value)) {
                callback(new Error('小数错误'));
            } else {
                callback()
            }
        };
        const ZhenRegExp = this.getNumRegExp(4,0);
        const validatezhengshu = (rule, value, callback) => {
            console.log(ZhenRegExp);
            if (!ZhenRegExp.test(value)) {
                callback(new Error('整数错误'));
            } else {
                callback()
            }
        };
        const BeforRegExp = this.getNumRegExp(4);
        const validateBefore = (rule, value, callback) => {
            console.log(BeforRegExp);
            if (!BeforRegExp.test(value)) {
                callback(new Error('小数点前数字错误'));
            } else {
                callback()
            }
        };
        const AfterRegExp = this.getNumRegExp(null,4);
        const validateAfter = (rule, value, callback) => {
            console.log(AfterRegExp);
            if (!AfterRegExp.test(value)) {
                callback(new Error('小数点后数字格式错误'));
            } else {
                callback()
            }
        };
        const WbRegExp = this.getNumRegExp(4,null,8);
        const validateWb = (rule, value, callback) => {
            console.log(WbRegExp);
            if (!WbRegExp.test(value)) {
                callback(new Error('限制总位数和小数点前位数错误'));
            } else {
                callback()
            }
        };
        const WaRegExp = this.getNumRegExp(null,4,8);
        const validateWa = (rule, value, callback) => {
            console.log(WaRegExp);
            if (!WaRegExp.test(value)) {
                callback(new Error('小数限制总位数和小数点后位数错误错误'));
            } else {
                callback()
            }
        };
        return {
            formValidate: {
                xiaoshu: '',
                zhengshu: '',
                before: '',
                after: '',
                wb: '',
                wa: '',
            },
            ruleValidate: {
                xiaoshu: [
                    {required: true, message: '小数为空', trigger: 'blur'},
                    {validator: validateXioashu, trigger: 'blur'}
                ],
                zhengshu: [
                    {required: true, message: '整数为空', trigger: 'blur'},
                    {validator: validatezhengshu, trigger: 'blur'}
                ],
                before: [
                    {required: true, message: '小数点前数字错误为空', trigger: 'blur'},
                    {validator: validateBefore, trigger: 'blur'}
                ],
                after: [
                    {required: true, message: '小数点数字格式错误为空', trigger: 'blur'},
                    {validator: validateAfter, trigger: 'blur'}
                ],
                wb: [
                    {required: true, message: '限制总位数和小数点前位数错误为空', trigger: 'blur'},
                    {validator: validateWb, trigger: 'blur'}
                ],
                wa: [
                    {required: true, message: '限制总位数和小数点后位数错误为空', trigger: 'blur'},
                    {validator: validateWa, trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        /**
         * @param {number} beforeLen 小数点钱位数
         * @param {number} afterLen 小数点后位数
         * @param {number} wholeLen 总位数，包括小数点
         * @return {Object} 相对应的正则表达式
         * @description 根据参数类型返回对应正则
         */
        getNumRegExp (beforeLen = null, afterLen = null, wholeLen = null) {
            const wl = wholeLen - 1;
            const bl = beforeLen - 1;
            const al = afterLen - 1;
            if (beforeLen && afterLen > 0) {
                // 小数，并限制小数点前/后位数
                return new RegExp(`^[1-9]\\d{0,${bl}}$|^[1-9]\\d{0,${bl}}\\.\\d{0,${al}}[1-9]$|^0\\.\\d{0,${al}}[1-9]$|^0$`);
            } else if (beforeLen && afterLen === 0) {
                // 整数 建议设置maxlength
                return new RegExp(`^[1-9]\\d{0,${bl}}$|^0$`);
            } else if (beforeLen && !afterLen && !wholeLen) {
                // 只限制小数点前位数，不限制小数点后位数
                return new RegExp(`^[1-9]\\d{0,${bl}}$|^[1-9]\\d{0,${bl}}\\.\\d*[1-9]$|^0$`);
            } else if (!beforeLen && afterLen && !wholeLen) {
                // 只限制小数点后位数，不限制小数点前位数
                return new RegExp(`^[1-9]\\d*\\.\\d{0,${al}}[1-9]$|^0\\.\\d{0,${al}}[1-9]$`);
            } else if (wholeLen) {
                // 必须给input设置maxlength
                if (beforeLen && !afterLen) {
                    // 限制总位数和小数点前位数
                    return new RegExp(`^[1-9]\\d{0,${bl}}$|^[1-9]\\d{0,${bl}}\\.\\d*[1-9]$|^0$\\.\\d{0,${wholeLen - 3}}[1-9]$|^0$`);
                } else if (!beforeLen && afterLen) {
                    // 限制总位数和小数点后位数
                    return new RegExp(`^[1-9]\\d{0,${wl}}$|^[1-9]\\d{0,${wholeLen - 2}}\\.\\d{0,${al}}[1-9]$|^0\\.\\d{0,${al}}[1-9]$|^0$`);
                }
            }
        },
    },
}
</script>

<style>
    #d1 {
        margin: 100px auto;
        width: 800px;
    }
</style>