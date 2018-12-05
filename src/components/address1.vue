<template>
  <div>
    <h2>choose address</h2>
    <ul>
      <li v-for="item in address"><a @click="jumpUp(item)">{{item}}</a></li>
    </ul>
     
  <!--  <input type="text" v-model="newAddress" placeholder="please input your address">
    <br>
    <button @click="jumpUp">confirm</button>
    -->
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      address: [
        "北京市朝阳区望京sohoT2",
        "北京市朝阳区望京sohoT1",
        "北京市朝阳区望京sohoT3",
      ]
    }
  },
  methods: {
    jumpUp(item) {
      this.$router.push({
        name: 'empty',
        params: {
          newAddress: item
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
