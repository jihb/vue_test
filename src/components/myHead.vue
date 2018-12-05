<template>
  <div>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <h2>{{myMessage}}</h2>
    <button v-on:click="changeTitle">更新父组件元素</button>
  </div>
</template>

<script>
export default {
  props: {
    //类型检测
    myMessage: String
    //{validator: function (value) {
    //   if(value.length > 10) {
    //  return false;
    //  }
    //}}
  },
  methods: {
    changeTitle: function() {
      let params = 1;
      this.$emit("change-title", params);
    }
  }
};
</script>
