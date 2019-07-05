<template>
    <div>
        <p>FullName: {{fullName}}</p>
        <p>FirstName: <input type="text" v-model="firstName"></p>

        <p>总和: {{endNumber}}</p>
        <p>第二个值: <input type="text" v-model="secondNumber"></p>

        <p>obj1.a: {{obj1.a}}</p>
        <p>obj1.a: <input type="text" v-model="obj1.a"></p>

        <p>arr.a: {{arr[0]}}</p>
        <p>arr.a: <input type="text" v-model="arr[0]"></p>

        <p>obj2.a: {{obj1.a}}</p>
        <p>obj2.a: <input type="text" v-model="obj2.a"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Dawei',
            lastName: 'Lou',
            fullName: '',

            secondNumber: 1,
            firstNumber:1,
            endNumber: '',

            obj1: {
                a: 123
            },

            obj2: {
                a: 123
            },

            arr: ['第一个元素']
        }
    },
    watch: {
        firstName: function(newName) {
            this.fullName = newName + ' ' + this.lastName;
        },
        secondNumber: {
            // immediate: true表示页面加载后自动执行该handler函数。
            immediate: true,
            handler(newNumber) {
                this.endNumber = newNumber + this.firstNumber;
            }
        },
        /**
         * 对象obj1
         * @type Object
         */
        obj1: {
            immediate: true,
            handler() {
                console.log('obj1.a被改变'); // 不会被触发，即使immediate: true,因为watch监测不到对象深层元素变化
            }
        },
        arr: {
            immediate: true,
            handler() {
                console.log('arr[0]被改变'); // 自动触发，可以检测数组的元素变化
            }
        },
        obj2: {
            immediate: true,
            // deep会true时会监视对象的元素变化
            deep: true,
            handler() {
                console.log('obj2.a被改变');
            }
        },
        // 也可以这样写,直接写对象元素的字符串
        'obj2.a': {
            immediate: true,
            handler() {
                console.log('字符串方法obj2.a被改变');
            }
        },
    } 
}
</script>