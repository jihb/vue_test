<template>
  <div class="index">
    <router-link to="/address">choose address</router-link>
    <div> {{msg}} </div>
    <router-link to="/study1">study step1</router-link>
    <br>
    <router-link to="/study2">study step2</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  beforeMount: function() {
    let routerParams = this.$route.params.newAddress;
    if (routerParams) {
      this.msg = routerParams;
    }
  }
};
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
