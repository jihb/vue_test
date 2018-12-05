<template>
  <div>
    <div class="address">{{newAddress}}</div>
    <button @click="jumpAddress1">选择地址</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newAddress: ""
    };
  },
  methods: {
    jumpAddress1() {
      this.$router.push({
        name: "address1"
        /*
        params: {
          newAddress: this.newAddress
        }
        */
      });
    }
  },
  beforeMount: function() {
    let routerParams = this.$route.params.newAddress;
    if (routerParams) {
      this.newAddress = routerParams;
    }
  }
};
</script>


