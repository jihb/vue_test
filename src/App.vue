<template>
  <div id="index">
    <myhead :my-message="data1" v-on:change-title="changeName"></myhead>
    <transition name="fade">
    <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import myhead from "@/components/myHead";
export default {
  components: {
    myhead
  },
  data() {
    return {
      data1: "父组件的数据传给子组件"
    };
  },
  methods: {
    changeName: function(str) {
      this.data1 += str;
    }
  }
};
</script>

<style>
#index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  color: white;
  background: #42b983;
  border-radius: 4px;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave{
  opacity: 0;
}

</style>
