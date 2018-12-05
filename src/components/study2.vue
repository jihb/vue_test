<template>
  <div>
    {{param}}
    <button v-on:click="goHistory">back</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      param: "test go history",
    };
  },
  methods: {
    goHistory: function() {
       this.$router.go(-1);
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
