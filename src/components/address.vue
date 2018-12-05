<template>
  <div>
    <h1>choose address</h1>
    <input type="text" v-model="newAddress" placeholder="please input your adsdress">
    <br>
    <button @click="jumpIndex">confirm</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newAddress:""
    }
  },
  methods: {
    jumpIndex() {
      this.$router.push({
        name: 'index',
        params: {
          newAddress: this.newAddress
        }
     })
    }
  }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
