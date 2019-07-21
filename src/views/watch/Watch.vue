<template>
    <div>
        <p>FullName: {{fullName}}</p>
        <p>FirstName: <input type="text" v-model="firstName"></p>

        <p>总和: {{endNumber}}</p>
        <p>第二个值: <input type="text" v-model="secondNumber"></p>

        <hr/>

        <p>obj1.a: {{obj1.a}}</p>
        <p>obj1.a: <input type="text" v-model="obj1.a"></p>

        <hr/>

        <p>obj2.a: {{obj2.a}}</p>
        <p>obj2.a: <input type="text" v-model="obj2.a"></p>
        <button @click="obj2 = {name: 'zhangli'}">直接给对象赋新值(可以被监听)</button>
        <button @click="obj2 = {a: 123}">直接给对象赋旧值(可以被监听)</button>

        <hr/>

        <p>arr: {{arr}}</p>
        <p>arr.a: <input type="text" v-model="arr[0]"></p>
        <button @click="arr.push('push进的值')">array.push改变数组(可以被监听)</button>
        <button @click="arr[0]='修改下标改变值'">修改下标改变值改变数组(不能被监听)</button>
        <button @click="$set(arr, 0, '$set修改数组元素')">$set修改数组元素(可以被监听)</button>
        <button @click="arr = ['第一个元素']">给数组赋旧值(可以被监听)</button>
        <button @click="arr = ['直接给数组赋新值']">直接给数组赋新值(可以被监听)</button>
        <hr/>
        <p>arr1: {{arr1}}</p>
        <p>arr1.a: <input type="text" v-model="arr1[0]"></p>
        <button @click="arr1[0].value='修改下标改变值'">修改下标改变值改变数组(不能被监听)</button>
        <button @click="$set(arr1, 0, {name: 'dianli'})">$set修改数组元素(可以被监听)</button>
        <button @click="arr1 = [{name: 'zhangli'}]">给数组赋旧值(可以被监听)</button>
        <button @click="arr1 = ['直接给数组赋新值']">直接给数组赋新值(可以被监听)</button>
        <button @click="forChange">在循环中改变数组值,只会触发for循环结束后的那一次监听(可以被监听)</button>
        <hr/>
        
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

            arr: ['第一个元素'],

            arr1: [
                {name: 'zhangli'}
            ]
        }
    },
    methods: {
        forChange() {
            [1, 2, 3].forEach(
                (item) => {
                    this.arr1.push(item);
                }
            )
        }
    },
    watch: {
        /* eslint-disable */
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
            },
            deep: true,
        },
         arr1: {
            immediate: true,
            handler() {
                console.log('arr1被改变'); // 自动触发，可以检测数组的元素变化
            },
            deep: true,
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