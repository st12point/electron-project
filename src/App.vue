<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button id="invoke">invoke</button>
    <button id="send">send</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    const invoke = document.getElementById("invoke");
    invoke.addEventListener(
      "click",
      () => {
        window.api.invoke();
        console.log("click:invoke in Vue");
      },
      false
    );
    const send = document.getElementById("send");
    send.addEventListener(
      "click",
      () => {
        window.api.send();
        console.log("click:send in Vue");
      },
      false
    );
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
