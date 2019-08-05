<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/props">props</router-link> |
      <router-link to="/refs">refs</router-link> |
      <router-link to="/emit">emit</router-link> |
      <router-link to="/renderjsx">Render&JSX</router-link> |
      <router-link to="/life">生命周期</router-link> |
      <router-link to="/slot">slot</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/modules/index">module</router-link> |
      <router-link to="/watch">watch</router-link> |
      <router-link to="/animate">animate</router-link> |

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
