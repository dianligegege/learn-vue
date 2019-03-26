import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        count: 1,
        countn: 0,
        countobj: 0,
        todos: [
            {id: 1, text: '我的done是true', done: true},
            {id: 2, text: '我的done是false', done: false},
        ]
    },

    // 设置过滤
    getters: {
        // getter接收第一个参数为state
        doneTodos: state => {
            return state.todos.filter(item => item.done)
        },
        // 也可以接收getters为第二个参数
        getterlength: (state, getters) => {
            // getters.doneTodos直接就运行了函数，而不是getters.doneTodos()
            // 即你调用他时，是在调用该函数运行后的结果
            return [getters.doneTodos.length, getters];

        },

        // 所以要想通过方法访问，就要再嵌入一个函数
        getterById: (state) => {
            return function(id) {
                return state.todos.find(item => item.id === id)
            }
        },
        // 还可以使用箭头函数实现 柯里化
        // getterById: state => id => {
        //     return state.todos.find(item => item.id === id)
        // }

    },

    mutations: {
        increment (state) {
            state.count++
        },
        // 传入一个载荷
        incrementn (state) {
            state.countn += state.count;
        },
        // 载荷是一个对象
        incrementobj (state, payload) {
            state.countobj += payload.amount
        }
    }
})