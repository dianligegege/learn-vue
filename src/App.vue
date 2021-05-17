<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/props">props</router-link> |
      <router-link to="/refs">refs</router-link> |
      <router-link to="/emit">emit</router-link> |
      <router-link to="/attrs">$attrs</router-link> |
      <router-link to="/renderjsx">Render&JSX</router-link> |
      <router-link to="/life">生命周期</router-link> |
      <router-link to="/slot">slot</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/modules/index">module</router-link> |
      <router-link to="/watch">watch</router-link> |
      <router-link to="/animate">animate</router-link> |
      <router-link to="/form/form">form</router-link> |
      <router-link to="/responsive">responsive</router-link> |
      <router-link to="/directives">directives</router-link> |
      <router-link to="/form/plugins">plugins</router-link> |
      <router-link to="/form-demo">formDemo</router-link> |
      <router-link to="/font-auto">FontAuto</router-link> |
      <router-link to="/icon-font">IconFont</router-link> |
      <router-link to="/require">require.context</router-link> |
      <router-link to="/International">国际化</router-link> |
      <router-link to="/swiper">轮播图</router-link> |
      <router-link to="/input">输入框换行</router-link> |
      <router-link to="/wallet">WalletConnect</router-link> |
      <router-link to="/canvas">Canvas</router-link> |


      <button @click="$router.push('./plugins?name=zhangli')">路由跳转</button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
}
</style>
