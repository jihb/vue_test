<template>
  <div>
    <div class="choose">子路由</div>
      <transition name="fade">
    <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      a:"默认地址"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.choose {
  color: blueviolet;
}
li {
  display: inline-block;
  margin: 0 10px
}
a {
  color: #42b983;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave{
  opacity: 0;
}
</style>
