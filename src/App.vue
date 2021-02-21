<template>
  <div id="app">
    <button id="invoke">invoke</button>
    <button id="send">send</button>
    <p v-for="user in database" :key="user.id">{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      database: {}
    };
  },
  mounted() {
    const invoke = document.getElementById("invoke");
    invoke.addEventListener(
      "click",
      () => {
        console.log("Clicked in Vue");
        window.api.invoke().then(v => {
          this.database = JSON.parse(v);
        });
        // this.database = result;
        console.log("in Vue:", this.database);
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
