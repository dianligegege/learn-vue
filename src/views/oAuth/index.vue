<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="facebook" name="first">
        <Facebook/>
    </el-tab-pane>
    <el-tab-pane label="apple" name="second">
        <Apple />
    </el-tab-pane>
    <el-tab-pane label="google" name="third">google</el-tab-pane>
  </el-tabs>
</template>
<script>
import Facebook from './facebook';
import Apple from './apple';
  export default {
    components: {
        Facebook,
        Apple,
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>