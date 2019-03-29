import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const SOME_MUTATION = 'SOME_MUTATION';

export default new Vuex.Store({

    state: {
        count: 0,
        countn: 0,
        countobj: 0,
        countes: 1,
        countAsync: 0,
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

    // mutations都是用来处理同步事务，action来解决这一问题
    mutations: {
        increment (state) {
            state.count++
        },
        // 传入一个载荷
        incrementn (state, n) {
            state.countn += n;
        },
        // 载荷是一个对象
        incrementobj (state, payload) {
            state.countobj += payload.amount
        },
        // 使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION] (state) {
            state.countes += 1;
        },

        // mutations可以实现异步传输数据，但只是devtools追踪不到？？？
        incrementAsync(state) {
            setTimeout(() => {
                state.countAsync++;
            }, 1000);
        }
    },

    actions: {
        increment0 (context) {
            context.commit('increment');
        },
        increment ({commit}) { // 相当于{commit}=context
            commit('increment')
        },
        // action实现异步
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000);
        },
        // 传参
        incrementobj({commit}, payload) {
            commit('incrementobj', payload);
        },

        // 使用promise
        actionA({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 执行这个promise会直接执行commit,这个是同步操作，而关键是resolve,他只负责在then调用的时候传值！
                    // 关键在于then,then里面的代码一定会在上面的同步代码执行完后再执行，这也就是他的作用吧。
                    commit('increment');
                    resolve('我是resolve');
                }, 1000);
            });
        },
        // 组合使用Action
        // 先分发actionA，会返回一个promise,然后运行.then。
        // !!! then就是字面意义的接着执行？？？
        actionB({ dispatch,commit }) {
            return dispatch('actionA').then(() => {
                setTimeout(() => {
                    commit('incrementn', 100)
                }, 1000);
            })
        },

        // 使用async/await更实用
        async actionC({ dispatch,commit }) {
            await dispatch('actionB');
            commit('increment'); // 这一步不是在await之后才运行
        }
    }
})