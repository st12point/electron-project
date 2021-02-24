<template>
  <div id="app">
    <button id="invoke" @click="invokeApi()">invoke</button>
    <button id="send">send</button>
    <p v-for="user in users" :key="user.id">{{ user.dataValues }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      users: {}
    };
  },
  mounted() {
    const send = document.getElementById("send");
    send.addEventListener(
      "click",
      () => {
        window.api.send();
        console.log("click:send in Vue");
      },
      false
    );
  },
  methods: {
    invokeApi() {
      window.api.invoke().then(v => {
        this.users = v;
      });
    }
  }
};
</script>
