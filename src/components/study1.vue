<template>
 <div>
  {{ message }}
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  <p v-if="seen">现在你看到我了</p>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
  <button v-on:click="reverseMessage">逆转消息</button>
  <input v-model="message">
  {{ fullName }}
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
  <router-link to="/">back</router-link>
  </div>
</template>

<script>
import lodash from 'lodash'
import axios from 'axios'
export default {
  data: function() {
    return {
      message: "Hello World!",
      seen: true,
      a: 1,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" }
      ],
      firstName: "Foo",
      lastName: "Bar",
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  },
  created: function() {
    // `this` 指向 vm 实例
    console.log("a is: " + this.a);
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
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
